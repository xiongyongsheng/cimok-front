/*
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-24 18:20:10
 * @LastEditors: 卢靖康
 */
import type { AppRouteModule } from '@/router/types'

import { LAYOUT } from '@/router/constant'
import { t } from '@/hooks/web/useI18n'

const about: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ant-design:pushpin-filled',
    title: t('routes.dashboard.about'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/base/about/index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'ant-design:pushpin-filled',
        hideMenu: true,
      },
    },
  ],
}

export default about
