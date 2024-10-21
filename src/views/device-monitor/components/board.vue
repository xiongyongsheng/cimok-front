<template>
  <div
    class="h-full overflow-y-auto flex-shrink-0 w-md text-white device-monitor-bg-color py-7 px-4"
  >
    <div>
      <h3 class="text-white font-size-5 m-0">磨片工艺设备联网情况</h3>
      <p class="text-white m-0 opacity-80">
        设备总数
        <span
          id="c-total-number"
          class="font-size-7 font-500 sider-active-color"
          ><CountTo :start-val="0" :end-val="1000"
        /></span>
        台
      </p>
    </div>
    <Divider class="divider-color my-4" />
    <div class="flex justify-between items-center">
      <div
        class="w-33%"
        style="height: 140px"
        v-for="(item, index) in gaugeGroup.list"
        :id="`${gaugeGroup.id}${index}`"
      ></div>
    </div>
    <Divider class="divider-color my-4" />
    <div class="flex justify-between items-center">
      <div
        class="c-box w-30 h-30 my-3 text-center flex justify-center items-center flex-col"
        v-for="item in 3"
      >
        <h3 class="board-text-color font-700 font-size-12 m-0 line-height-none">
          <CountTo :start-val="0" :end-val="32" />
        </h3>
        <span class="text-white font-size-5">TSK</span>
        <div :id="`c-u148-${i}`" v-for="i in 4"></div>
      </div>
    </div>
    <Divider class="divider-color my-4" />
    <div>
      <p class="text-white m-0 opacity-80">设备通信流量 txn/Min</p>
      <div :id="deviceWatch.id" style="height: 300px"></div>
    </div>
    <Divider class="divider-color my-4" />
    <div>
      <p class="text-white m-0 opacity-80 mt-5">设备实时状况</p>
      <swiper
        :slides-per-view="5"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :speed="1000"
        loop
        :modules="swiperModules"
        direction="vertical"
        class="h-50"
      >
        <swiper-slide v-for="i in 10">
          <div class="flex justify-between items-stretch p-2">
            <span class="w-10">{{ i }}</span>
            <span class="flex-1 text-blueGray">DB-01</span>
            <span class="flex-1 board-text-color">10:10:21</span>
            <span class="flex-1 text-light">暂无异常</span>
            <Tag color="#108ee9">运行</Tag>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const swiperModules = [Autoplay];
import { ref, onMounted, nextTick } from 'vue';
import { Divider, Tag } from 'ant-design-vue';
import { CountTo } from '@/components/CountTo';
const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: () => null,
  },
  boardData: {
    type: Object,
    default: () => {},
  }
});
const emit = defineEmits(['update:modelValue']);

const data = ref({});

import * as echarts from 'echarts';

class Gauge {
  option = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '50%'],
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 100,
        splitNumber: 10,
        itemStyle: {
          color: '#FFAB91',
        },
        progress: {
          show: true,
          width: 10,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: '#FFAB91',
          },
        },
        axisTick: {
          show: false,
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999',
          },
        },
        splitLine: {
          show: false,
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#999',
          },
        },
        axisLabel: {
          show: false,
          distance: -20,
          color: '#999',
          fontSize: 20,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 25,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 25,
          fontWeight: 'bolder',
          formatter: '{value}%',
          color: '#fff',
        },
        data: [
          {
            value: 20,
          },
        ],
      },
      {
        type: 'gauge',
        center: ['50%', '50%'],
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 100,
        itemStyle: {
          color: '#FD7347',
        },
        progress: {
          show: true,
          width: 2,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          width: '60%',
          lineHeight: 25,
          borderRadius: 8,
          offsetCenter: [0, '38%'],
          fontSize: 13,
          fontWeight: 'bolder',
          formatter: '111',
          color: '#ddd',
        },
        data: [
          {
            value: 75,
          },
        ],
      },
      {
        type: 'gauge',
        center: ['50%', '50%'],
        radius: '65%',
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 100,
        itemStyle: {
          color: '#000',
        },
        progress: {
          show: true,
          width: 1,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 99,
          },
        ],
      },
    ],
  };
  constructor({ el, theme , data}) {
    const random = +(Math.random() * 60).toFixed(0);
    this.option.series[0].itemStyle.color = theme.color[0];
    this.option.series[1].itemStyle.color = theme.color[0];
    this.option.series[2].itemStyle.color = theme.color[1];
    this.option.series[0].data[0].value = (data.number*100 / data.totalNum).toFixed(0);
    this.option.series[1].detail.formatter = data.name;
  }
}

const gaugeGroup = ref({
  id: 'gauge',
  list: [
    {
      theme: {
        color: ['#65b8f8', '#175378'],
      },
    },
    {
      theme: {
        color: ['#70b604', '#20626d'],
      },
    },
    {
      theme: {
        color: ['#eda44e', '#3a4e53'],
      },
    },
  ],
});

const deviceWatch = ref({
  id: 'device-watch',
});
class DeviceWatch {
  constructor() {
    let base = +new Date(1988, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let data = [[base, Math.random() * 300]];
    for (let i = 1; i < 5000; i++) {
      let now = new Date((base += oneDay));
      data.push([+now, Math.round((Math.random() - 0.5) * 5 + data[i - 1][1])]);
    }
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
    console.log('----------------------------------------------------------------')
    console.log(props.boardData)
    gaugeGroup.value.list.forEach((item, index) => {
      const chartDom = document.getElementById(
        `${gaugeGroup.value.id}${index}`
      );
      const myChart = echarts.init(chartDom);
      const gauge = new Gauge({ el: chartDom, theme: item.theme ,data:props.boardData.boardEqptNumList[index]});
      gauge.option && myChart.setOption(gauge.option);
    });

    const chartDom = document.getElementById(deviceWatch.value.id);
    const myChart = echarts.init(chartDom);
    const deviceWatchClass = new DeviceWatch();
    deviceWatchClass.option && myChart.setOption(deviceWatchClass.option);
    countUp = new CountUp('c-total-number', 1000);
    countUp.start();
  });
});

import { CountUp } from 'countup.js';
let countUp;
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
