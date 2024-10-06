<template>
  <div class="c-sider flex-shrink-0">
    <div
      class="p-y-10 text-white h-full w-75% flex flex-col justify-start items-center gap-8"
    >
      <div
        class="flex flex-col items-center gap-2 cursor-pointer opacity-100 hover:opacity-80"
        :class="modelValue === item.id ? 'sider-active-color' : 'text-white'"
        v-for="item in siderList"
        :key="item.id"
        @click="emit('update:modelValue', item.id)"
      >
        <!-- <img :src="item.icon" alt="" /> -->
        <component style="font-size: 30px" :is="item.icon" />
        <span class="font-size-3">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  siderList: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: [Number, String],
    default: () => null,
  },
});
const emit = defineEmits(['update:modelValue']);
</script>
<style lang="less" scoped>
.c-sider {
  width: 100px;
  height: 100%;
  position: relative;
  background-color: #030407;
  &::after {
    content: '';
    display: block;
    width: 25%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(32, 79, 93, 0.5) 0%,
      rgba(26, 55, 70, 0.3) 20%,
      rgba(26, 55, 70, 0) 100%
    );
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
