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
                id: item.eqptCode,
              },
  query: { info: JSON.stringify(item) }
            }"
            v-c-transition-delay="20"
            v-for="(item,i) in eqptAllList"
            :key="i"
          >
            <div
              class="flex flex-col w-60 gap-2 bg-card-normal-outer rounded-1.5 p-1.5 cursor-pointer shadow-cyan hover:shadow-lg transition-all duration-300"
              :class="{
                'bg-card-normal-outer':item.status !== 'RUN',
                'bg-card-warning-outer': item.statue === 'RUN',
                
              }"
              :style="'background-color:'+statusColor[item.status?.toLowerCase()]"
            >
            <div class="flex justify-between">
              <h6 class="text-center font-size-3 m-0 line-height-3">
                {{ item.eqptCode }}
              </h6>
              <h6 class="text-right font-size-3 m-0 line-height-3" @click.prevent="openLink(item)">
              远程控制
              </h6>
            </div>
              
              <div class="flex justify-between items-stretch gap-10">
                <Image class="flex-shrink-0" :width="80" :src="item.eqptImgPath??productImage" />
                <div class="flex-1">
                  <h7 class="font-size-3 m-0"> {{item.status}} </h7>
                  <div
                    class="flex flex-col gap-1 font-size-2 bg-card-normal-inner px-1 py-1 rounded-1.2 shadow-inner shadow-dark"
                    :class="{
                      'bg-card-normal-inner': item.status === 'RUN',
                      'bg-card-warning-inner': item.status !== 'RUN',
                    }"
                  >
                    <span
                      v-for="keyString in Object.keys(item.produceMap)"
                      >{{ keyString }}：{{ item.produceMap[keyString] }}</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="flex flex-wrap gap-1 font-size-2.5 bg-card-normal-inner px-1.5 py-3 rounded-1.2 shadow-inner shadow-dark"
                :class="{
                  'bg-card-normal-inner': item.status !== 'RUN',
                  'bg-card-warning-inner': item.status !== 'RUN',
                }"
              >
              <span  class="w-45%"
                      v-for="keyString in Object.keys(item.ownMap)"
                      >{{ keyString }}：{{ item.ownMap[keyString] }}</span
                    >
              </div>
              <p class="font-size-2.5 mb-1" v-for="keyString in Object.keys(item.tipMap)">
                {{keyString}}：{{item.tipMap[keyString]}}
              </p>
            </div>
          </RouterLink>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<!-- {
  "eqptCode": "S200-090",
  "eqptImgPath": "http://localhost:8080/eqpt/img/S200-090.png",
  "status": "RUN",
  "produceMap": {
      "Lot": "TH02",
      "Buyoff": "开班点检",
      "Tooling Expire Time": "2022-9-16 10:20",
      "MTBA": "TH02",
      "Recipe": "TH02-01",
      "Pre-Lot": "TH02-01",
      "锁机": "Repeat ALARM",
      "UPH": "TH02",
      "OEE": "TH02",
      "MTBF": "TH02"
  },
  "ownMap": {},
  "tipMap": {}
} -->
<script setup lang="ts">
import { Button, Image } from 'ant-design-vue';
import DayJs from 'dayjs';
import { inject, nextTick, onMounted, onUnmounted, ref,reactive,watch } from 'vue';

import productImage from '@/assets/images/u557.png';
const props = defineProps({
  eqptAllList: {
    type: Array,
    defualt:()=>[]
  },
  eqptUpdateItem:{
    type: Object,
    defualt:()=>{}
  }
});
const fullScreen = inject('fullScreen');
const statusColor = reactive({
  initial:'#04b69b',
  ready:'#70b604',
  run:'#70b604',
  idle:'#f8ce65',
  alarm:'#ed4e53',
  pausing:'#ed4e4e',
  paused:'#ed4e4e',
  down:'#b3c9da'
})
let nowDate = ref(DayJs().format('YYYY-MM-DD HH:mm:ss'));
let timer;
watch(
    () => props.eqptUpdateItem,
    () => {
      changeItem(JSON.parse(props.eqptUpdateItem.content))
    },
    // { immediate: true },
  )
onMounted(() => {
  timer = setInterval(() => {
    nowDate.value = DayJs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);
  nextTick(() => {});
});
onUnmounted(() => {
  timer && clearInterval(timer);
});
async function changeItem(item){
  
  props.eqptAllList?.forEach((e:Object,index)=>{
    if(e.eqptCode == item.eqptCode){
      let newE  = {...e,...item}
      props.eqptAllList[index] = newE
    }
  })
}
const openLink = (item) =>{
  if(item.vncUrl){
    window.open(item.vncUrl,'_blank')
  }
}
</script>
<style></style>
