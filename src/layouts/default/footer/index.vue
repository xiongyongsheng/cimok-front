<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import { Layout } from 'ant-design-vue'

import { GithubFilled } from '@ant-design/icons-vue'

import { useRouter } from 'vue-router'
import { useLayoutHeight } from '../content/useContentViewHeight'
import { DOC_URL, GITHUB_URL, SITE_URL } from '@/settings/siteSetting'
import { openWindow } from '@/utils'

import { useI18n } from '@/hooks/web/useI18n'
import { useRootSetting } from '@/hooks/setting/useRootSetting'

defineOptions({ name: 'LayoutFooter' })

const SITE_TITLE = ref(import.meta.env.VITE_GLOB_APP_TITLE)

const Footer = Layout.Footer

const { t } = useI18n()
const { getShowFooter } = useRootSetting()
const { currentRoute } = useRouter()

const footerRef = ref<ComponentRef>(null)
const { setFooterHeight } = useLayoutHeight()

const getShowLayoutFooter = computed(() => {
  if (unref(getShowFooter)) {
    const footerEl = unref(footerRef)?.$el
    setFooterHeight(footerEl?.offsetHeight || 0)
  }
  else {
    setFooterHeight(0)
  }
  return unref(getShowFooter) && !unref(currentRoute).meta?.hiddenFooter
})
</script>

