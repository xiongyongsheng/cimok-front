import type { RouteRecordRaw, Router } from 'vue-router'

import { usePermissionStoreWithOut } from '@/store/modules/permission'

import { PageEnum } from '@/enums/pageEnum'
import { useDictStoreWithOut } from '@/store/modules/dict'
import { useUserStoreWithOut } from '@/store/modules/user'

import { PAGE_NOT_FOUND_ROUTE } from '@/router/routes/basic'

// import { RootRoute } from '@/router/routes'

const LOGIN_PATH = PageEnum.BASE_LOGIN
const RecipeDownloadManuallyMobile = PageEnum.RecipeDownloadManuallyMobile

// const ROOT_PATH = RootRoute.path

const whitePathList = [LOGIN_PATH,RecipeDownloadManuallyMobile]

export function createPermissionGuard(router: Router) {
  const dictStore = useDictStoreWithOut()
  const userStore = useUserStoreWithOut()
  const permissionStore = usePermissionStoreWithOut()
  router.beforeEach(async (to, from, next) => {
    // if (
    //   from.path === ROOT_PATH &&
    //   to.path === PageEnum.BASE_HOME &&
    //   userStore.getUserInfo.homePath &&
    //   userStore.getUserInfo.homePath !== PageEnum.BASE_HOME
    // ) {
    //   next(userStore.getUserInfo.homePath)
    //   return
    // }

    const token = userStore.getAccessToken

    // Whitelist can be directly entered
    if (whitePathList.includes(to.path as PageEnum)) {
      if (to.path === LOGIN_PATH && token) {
        const isSessionTimeout = userStore.getSessionTimeout
        try {
          await userStore.afterLoginAction()
          if (!isSessionTimeout) {
            next((to.query?.redirect as string) || '/')
            return
          }
        }
        catch {}
      }
      next()
      return
    }

    // token does not exist
    if (!token) {
      // You can access without permission. You need to set the routing meta.ignoreAuth to true
      if (to.meta.ignoreAuth) {
        next()
        return
      }

      // redirect login page
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: LOGIN_PATH,
        replace: true,
      }
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        }
      }
      next(redirectData)
      return
    }

    // Jump to the 404 page after processing the login
    if (from.path === LOGIN_PATH && to.name === PAGE_NOT_FOUND_ROUTE.name && to.fullPath !== PageEnum.BASE_HOME) {
      next(PageEnum.BASE_HOME)
      return
    }

    if (!dictStore.getIsSetDict)
      await dictStore.setDictMap()

    // get userinfo while last fetch time is empty
    if (userStore.getLastUpdateTime === 0) {
      try {
        await userStore.getUserInfoAction()
      }
      catch (err) {
        next()
        return
      }
    }

    if (permissionStore.getIsDynamicAddedRoute) {
      next()
      return
    }

    const routes = await permissionStore.buildRoutesAction()

    routes.forEach((route) => {
      try {
        router.addRoute(route as unknown as RouteRecordRaw)
      }
      catch (e) {}
    })

    router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw)

    permissionStore.setDynamicAddedRoute(true)

    if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      next({ path: to.fullPath, replace: true, query: to.query })
    }
    else {
      const redirectPath = (from.query.redirect || to.path) as string
      const redirect = decodeURIComponent(redirectPath)
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
      next(nextData)
    }
  })
}
