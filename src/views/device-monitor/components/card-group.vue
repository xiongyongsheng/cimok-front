<template>
  <div
    class="h-full flex-auto pos-relative overflow-y-auto text-white flex flex-col"
  >
    <div
      class="px-6 py-3 radial-bg-img shadow-md shadow bg-transparent backdrop-blur-sm pos-sticky z-1 top-0 flex items-center gap-3"
    >
      <Button type="primary">MoveIn</Button>
      <Button type="primary">OpenLot</Button>
      <Button type="primary">DownRecipe</Button>
      <i class="flex-auto"></i>
      <div class="flex items-center">
        <div class="w-45 flex items-center gap-1">
          <img class="w-5" src="@/assets/svg/dashboard/u6.svg" alt="" />
          <span>{{ nowDate }}</span>
        </div>
        <div
          class="px-3 flex items-center gap-2 cursor-pointer py-1 rounded-1 hover:bg-gray-600"
          @click="fullScreen.switch()"
        >
          <template v-if="!fullScreen.isFull">
            <img class="w-3" src="@/assets/svg/dashboard/u21.svg" alt="" />
            全屏预览
          </template>
          <template v-else>
            <img class="w-3" src="@/assets/svg/dashboard/u23.svg" alt="" />
            退出全屏预览
          </template>
        </div>
      </div>
    </div>
    <div class="p-3 pt-0">
      <div
        class="flex justify-start items-start flex-wrap gap-5 flex-1 device-monitor-bg-color py-4 px-7"
      >
        <TransitionGroup appear name="c-transition-group-card">
          <RouterLink
            class="text-white hover:text-white"
            :to="{
              name: 'DeviceRealTimeStatusDetail',
              params: {
                id: i,
              },
            }"
            v-c-transition-delay="20"
            v-for="i in 10"
            :key="i"
          >
            <div
              class="flex flex-col w-60 gap-2 bg-card-normal-outer rounded-1.5 p-1.5 cursor-pointer shadow-cyan hover:shadow-lg transition-all duration-300"
              :class="{
                'bg-card-normal-outer': i % 2 === 0,
                'bg-card-warning-outer': i % 2 !== 0,
              }"
            >
              <h6 class="text-center font-size-3 m-0 line-height-3">
                TH01-01 (WB-C-6)
              </h6>
              <div class="flex justify-between items-stretch gap-10">
                <Image class="flex-shrink-0" :width="80" :src="productImage" />
                <div class="flex-1">
                  <h7 class="font-size-3 m-0"> Online Remote </h7>
                  <div
                    class="flex flex-col gap-1 font-size-2 bg-card-normal-inner px-1 py-1 rounded-1.2 shadow-inner shadow-dark"
                    :class="{
                      'bg-card-normal-inner': i % 2 === 0,
                      'bg-card-warning-inner': i % 2 !== 0,
                    }"
                  >
                    <span
                      v-for="item in [
                        'Lot：TH02',
                        'Pre-Lot：TH01',
                        'Recipe：TX-12312',
                      ]"
                      >{{ item }}</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="flex flex-wrap gap-1 font-size-2.5 bg-card-normal-inner px-1.5 py-3 rounded-1.2 shadow-inner shadow-dark"
                :class="{
                  'bg-card-normal-inner': i % 2 === 0,
                  'bg-card-warning-inner': i % 2 !== 0,
                }"
              >
                <span
                  class="w-45%"
                  v-for="item in [
                    'Lot：TH02',
                    'Pre-Lot：TH01',
                    'Recipe：TX-12312',
                    '锁机：RepeatAlarm',
                    'Buyoff：开班点检',
                  ]"
                  >{{ item }}</span
                >
              </div>
              <p class="font-size-2.5 mb-1">
                Tooling Expire Time：2022-9-16 10:20
              </p>
            </div>
          </RouterLink>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button, Image } from 'ant-design-vue';
import DayJs from 'dayjs';
import { inject, nextTick, onMounted, onUnmounted, ref } from 'vue';

import productImage from '@/assets/images/u557.png';

const fullScreen = inject('fullScreen');

let nowDate = ref(DayJs().format('YYYY-MM-DD HH:mm:ss'));
let timer;
onMounted(() => {
  timer = setInterval(() => {
    nowDate.value = DayJs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);
  nextTick(() => {});
});
onUnmounted(() => {
  timer && clearInterval(timer);
});
</script>
<style></style>
