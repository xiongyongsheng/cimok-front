<script lang="ts" setup>
import { Avatar, Dropdown, Menu, MenuDivider } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface'
import { computed } from 'vue'
import { DOC_URL } from '@/settings/siteSetting'
import { useUserStore } from '@/store/modules/user'
import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting'
import { useI18n } from '@/hooks/web/useI18n'
import { useDesign } from '@/hooks/web/useDesign'
import { useModal } from '@/components/Modal'
import headerImg from '@/assets/images/header.jpg'
import { propTypes } from '@/utils/propTypes'
import { openWindow } from '@/utils'
import { useGo } from '@/hooks/web/usePage'
import { createAsyncComponent } from '@/utils/factory/createAsyncComponent'

defineOptions({ name: 'UserDropdown' })

defineProps({
  theme: propTypes.oneOf(['dark', 'light']),
})

const go = useGo()

type MenuEvent = 'profile' | 'logout' | 'doc' | 'lock'

const MenuItem = createAsyncComponent(() => import('./DropMenuItem.vue'))
const LockAction = createAsyncComponent(() => import('../lock/LockModal.vue'))

const { prefixCls } = useDesign('header-user-dropdown')
const { t } = useI18n()
const { getShowDoc, getUseLockPage } = useHeaderSetting()
const userStore = useUserStore()

const getUserInfo = computed(() => {
  const { nickname = '', avatar } = userStore.getUserInfo.user || {}
  return { nickname, avatar: avatar || headerImg }
})

const [register, { openModal }] = useModal()

function handleLock() {
  openModal(true)
}

//  login out
function handleLoginOut() {
  userStore.confirmLoginOut()
}

// open doc
function openDoc() {
  openWindow(DOC_URL)
}

function openProfile() {
  go('/profile/index')
}

function handleMenuClick(e: MenuInfo) {
  switch (e.key as MenuEvent) {
    case 'profile':
      openProfile()
      break
    case 'logout':
      handleLoginOut()
      break
    case 'doc':
      openDoc()
      break
    case 'lock':
      handleLock()
      break
  }
}
</script>

<template>
  <Dropdown placement="bottomLeft" :overlay-class-name="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls, `${prefixCls}--${theme}`]" class="flex">
      <Avatar size="small" :class="`${prefixCls}__avatar`" :src="getUserInfo.avatar">
        <template #icon>
          <UserOutlined />
        </template>
      </Avatar>
      <span :class="`${prefixCls}__info hidden md:block`">
        <span :class="`${prefixCls}__name`" class="truncate">
          {{ getUserInfo.nickname }}
        </span>
      </span>
    </span>

    <template #overlay>
      <Menu @click="handleMenuClick">
        <MenuItem key="profile" :text="t('layout.header.accountCenter')" icon="ion:person-outline" />

        <MenuDivider v-if="getShowDoc" />
        <MenuItem
          v-if="getUseLockPage" key="lock" :text="t('layout.header.tooltipLock')"
          icon="ion:lock-closed-outline"
        />
        <MenuItem key="logout" :text="t('layout.header.dropdownItemLoginOut')" icon="ion:power-outline" />
      </Menu>
    </template>
  </Dropdown>
  <LockAction @register="register" />
</template>

<style lang="less">
@prefix-cls: ~'@{namespace}-header-user-dropdown';

.@{prefix-cls} {
  align-items: center;
  height: @header-height;
  padding: 0 0 0 10px;
  padding-right: 10px;
  overflow: hidden;
  font-size: 12px;
  cursor: pointer;

  &__avatar {
    margin-right: 5px;
    border-radius: 50%;
  }

  &__name {
    font-size: 14px;
  }

  &--dark {
    &:hover {
      background-color: @header-dark-bg-hover-color;
    }
  }

  &--light {
    &:hover {
      background-color: @header-light-bg-hover-color;
    }

    .@{prefix-cls}__desc {
      color: @header-light-desc-color;
    }
  }

  &-dropdown-overlay {
    .ant-dropdown-menu-item {
      min-width: 160px;
    }
  }
}
</style>
