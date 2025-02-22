/*
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-24 23:51:05
 * @LastEditors: 卢靖康
 */
import { getCurrentInstance, ref, unref } from 'vue'
import type { DescInstance, DescriptionProps, UseDescReturnType } from './typing'
import { isProdMode } from '@/utils/env'

export function useDescription(props?: Partial<DescriptionProps>): UseDescReturnType {
  if (!getCurrentInstance())
    throw new Error('useDescription() can only be used inside setup() or functional components!')

  const desc = ref<Nullable<DescInstance>>(null)
  const loaded = ref(false)

  function register(instance: DescInstance) {
    if (unref(loaded) && isProdMode() && instance == unref(desc))
      return

    desc.value = instance
    props && instance.setDescProps(props)
    loaded.value = true
  }

  const methods: DescInstance = {
    setDescProps: (descProps: Partial<DescriptionProps>): void => {
      unref(desc)?.setDescProps(descProps)
    },
  }

  return [register, methods]
}
