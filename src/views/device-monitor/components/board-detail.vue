<template>
  <div
    class="h-full overflow-y-auto flex-shrink-0 w-md text-white device-monitor-bg-color py-3 px-4"
  >
    <div class="flex flex-col items-center">
      <h4 class="board-text-color font-size-10 m-0">{{eqptInfo.eqptCode}}</h4>
      <Image :width="170" :src="productImage" />
    </div>
    <Divider class="divider-color my-4" />
    <ul>
      <li
        v-for="item in [
          {
            label: '作业状态',
            value: 'Processing',
          },
          {
            label: '通信状态',
            value: 'Communicating',
          },
          {
            label: '控制状态',
            value: 'Online-Remote',
          },
          {
            label: '设备型号',
            value: eqptInfo.eqptCode,
          },
          {
            label: '生产厂商',
            value: 'TEL',
          },
          {
            label: '下次维保时间',
            value: eqptInfo.eqptCodes
          },
        ]"
        class="flex justify-center items-center gap-5 font-size-5"
      >
        <span class="w-40 flex-shrink-0 text-right">{{ item.label }}:</span
        ><span class="w-40 flex-shrink-0">{{ item.value }}</span>
      </li>
    </ul>
    <Divider class="divider-color my-4" />
    <div>
      <p class="text-white m-0 opacity-80">设备OEE（小时）</p>
      <div :id="deviceWatch.OEE.id" style="height: 300px"></div>
    </div>
    <Divider class="divider-color my-4" />
    <div>
      <p class="text-white m-0 opacity-80">设备UPH（小时）</p>
      <div :id="deviceWatch.UPH.id" style="height: 300px"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { Divider, Tag, Image } from 'ant-design-vue';
import productImage from '@/assets/images/u557.png';
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  eqptInfo: {
    type: Object,
    default: () => {},
  },
  eqptTypeListData: {
    type: Array,
    defualt:()=>[]
  },
  eqptRealListData: {
    type: Array,
    defualt:()=>[]
  },
  eqptTotalNumber: {
    type: Number,
    default: 0,
  },
  activeMenu: {
    type: Object,
    default: () => {label:''},
  },
  eqptAllList: {
    type: Array,
    defualt:()=>[]
  },
});
import * as echarts from 'echarts';

const deviceWatch = ref({
  OEE: {
    id: 'device-watch-OEE',
  },
  UPH: {
    id: 'device-watch-UPH',
  },
});
class DeviceWatch {
  option: any;
  constructor() {
    let base = +new Date(2024, 10, 20);
    let oneDay = 24 * 3600 * 1000;
    let data = [[base, Math.random() * 300]];
    for (let i = 1; i < 10; i++) {
      let now = new Date((base += oneDay));
      data.push([+now, Math.round((Math.random() - 0.5) * 5 + data[i - 1][1])]);
    }
    console.log(data)
    this.option = {
      grid: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '30%',
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 20,
        },
        {
          start: 0,
          end: 20,
        },
      ],
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          smooth: true,
          symbol: 'none',
          itemStyle: {
            color: 'rgb(73 211 142)',
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(30 116 108)',
              },
              {
                offset: 1,
                color: 'rgb(11 72 95)',
              },
            ]),
          },
          data: data,
        },
      ],
    };
  }
}
onMounted(() => {
  nextTick(() => {
    for (let key in deviceWatch.value) {
      let target = deviceWatch.value[key];
      const chartDom = document.getElementById(target.id);
      const myChart = echarts.init(chartDom);
      const deviceWatchClass = new DeviceWatch();
      deviceWatchClass.option && myChart.setOption(deviceWatchClass.option);
    }
  });
});
</script>
<style lang="less" scoped>
.c-box {
  position: relative;
  background-image: url(@/assets/svg/dashboard/背景_u141.svg);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#c-u148-1 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(1, 142, 211, 1);
  border-right: 0px;
  border-bottom: 0px;
  border-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#c-u148-2 {
  border-width: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(1, 142, 211, 1);
  border-left: 0px;
  border-bottom: 0px;
  border-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  line-height: 36px;
}
#c-u148-3 {
  border-width: 0px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(1, 142, 211, 1);
  border-left: 0px;
  border-top: 0px;
  border-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  line-height: 36px;
}
#c-u148-4 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 8px;
  height: 8px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(1, 142, 211, 1);
  border-top: 0px;
  border-right: 0px;
  border-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  line-height: 36px;
}
</style>
