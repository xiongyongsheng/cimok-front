<template>
  <div
    class="h-full flex-auto pos-relative overflow-y-auto text-white flex flex-col"
  >
    <div class="h-full">
      <div class="c-card-group-detail h-full gap-7 py-7 px-7 text-white">
        <TransitionGroup appear name="c-transition-group-card">
          <div
            class="c-card-group-detail-card w-full"
            style="grid-area: status"
            v-c-transition-delay="20"
            key="status"
          >
            <h4 class="c-card-group-detail-card-title w-full">设备状态</h4>
            <div class="flex flex-wrap w-full">
              <div class="w-50%" v-for="item in eqptStatusList">
                <h6 class="font-size-4 m-0 text-center">{{item.cavityId}}</h6>
                <div class="w-full">
                  <div
                    v-for="item in [
                      {
                        label: '是否开启',
                        value: item.openFlag=='true'?'是':'否',
                      },
                      {
                        label: '温度(℃)',
                        value: item.temperature,
                      },
                      {
                        label: '压力(T)',
                        value: item.pressure,
                      },
                      {
                        label: '速度(m/s)',
                        value: item.speed,
                      },
                    ]"
                    class="w-full flex justify-center items-center gap-5 font-size-3"
                  >
                    <span class="w-50% flex-shrink-0 text-right"
                      >{{ item.label }}:</span
                    ><span class="w-50% flex-shrink-0">{{ item.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="c-card-group-detail-card"
            style="grid-area: project"
            key="project"
            v-c-transition-delay="20"
          >
            <h4 class="c-card-group-detail-card-title">Buyoff项目</h4>
            <div class="w-full py-5">
              <div
                v-for="item in eqptBuyoffInfo"
                class="w-full flex justify-center items-center gap-5 font-size-3"
              >
                <span class="w-50% flex-shrink-0 text-right"
                  >{{ item.buyoffName }}:</span
                ><span class="w-50% flex-shrink-0">{{ item.buyoffTime.slice(0,16) }}</span>
              </div>
            </div>
          </div>
          <div
            class="c-card-group-detail-card"
            style="grid-area: batch"
            key="batch"
            v-c-transition-delay="20"
          >
            <h4 class="c-card-group-detail-card-title">生产批次</h4>
            <div class="w-full py-5">
              <div
                v-for="item in [
                  {
                    label: '工单',
                    value: 'P-12',
                  },
                  {
                    label: '批次',
                    value: 'TEL',
                  },
                  {
                    label: '产品类型',
                    value: '2022-9-20',
                  },
                  {
                    label: '数量',
                    value: 'P-12',
                  },
                  {
                    label: '入站时间',
                    value: 'P-12',
                  },
                  {
                    label: '预计出站时间',
                    value: 'P-12',
                  },
                ]"
                class="w-full flex justify-center items-center gap-5 font-size-4.5"
              >
                <span class="w-50% flex-shrink-0 text-right"
                  >{{ item.label }}:</span
                ><span class="w-50% flex-shrink-0">{{ item.value }}</span>
              </div>
            </div>
          </div>
          <div
            class="c-card-group-detail-card"
            style="grid-area: vitae"
            key="vitae"
            v-c-transition-delay="20"
          >
            <h4 class="c-card-group-detail-card-title">生产履历</h4>
            <div class="w-full py-5">
              <div
                v-for="item in eqptStatusResume"
                class="w-full flex justify-center items-center gap-5 font-size-3"
              >
                <span class="w-50% flex-shrink-0 text-right"
                  >{{ item.opTime }}:</span
                ><span class="w-50% flex-shrink-0">{{ item.lotId }} &nbsp; {{ item.opType }}</span>
              </div>
            </div>
          </div>
          <div
            class="c-card-group-detail-card"
            style="grid-area: raw"
            key="raw"
            v-c-transition-delay="20"
          >
            <h4 class="c-card-group-detail-card-title">原材料</h4>
            <div class="c-table py-4">
              <Table
                size="small"
                :bordered="false"
                :pagination="false"
                :columns="columns"
                :data-source="eqptMaterialInfo"
              >
              </Table>
            </div>
          </div>
          <div
            class="c-card-group-detail-card"
            style="grid-area: tool"
            key="tool"
            v-c-transition-delay="20"
          >
            <h4 class="c-card-group-detail-card-title">工治具</h4>
            <div class="c-table py-4">
              <Table
                size="small"
                :bordered="false"
                :pagination="false"
                :columns="columnsFixture"
                :data-source="eqptFixture"
              >
              </Table>
            </div>
          </div>
          <div
            class="c-card-group-detail-card"
            style="grid-area: log"
            key="log"
            v-c-transition-delay="20"
          >
            <h4 class="c-card-group-detail-card-title">通信日志</h4>
            <div class="w-full py-5">
              <div
                v-for="item in eqptCommInfo"
                class="w-full flex justify-center items-center gap-5 font-size-3"
              >
                <span class="w-50% flex-shrink-0 text-right"
                  >{{ item.commTime }}:</span
                ><span class="w-50% flex-shrink-0">{{ item.commInfo }}</span>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button, Image, Table } from 'ant-design-vue';
import DayJs from 'dayjs';
import { inject, nextTick, onMounted, onUnmounted, ref } from 'vue';
import { getEqptEqptfixture,getEqptEqptBuyoffInfo,getEqptEqptCommInfo,getEqptEqptMaterialInfo,getEqptStatusResume,getEqptStatusList } from '@/api/base/eqpt/index'

import productImage from '@/assets/images/u557.png';
const props = defineProps({
  eqptCode: {
    type: String,
    default: () => '',
  }
});
const eqptFixture = ref([]);
const eqptBuyoffInfo = ref([]);
const eqptCommInfo = ref([]);
const eqptMaterialInfo = ref([]);
const eqptStatusResume = ref([]);
const eqptStatusList = ref([]);
const columns = [
  {
    title: '物料类型',
    dataIndex: 'materialType',
    align: 'center',
  },
  {
    title: '批号',
    dataIndex: 'lotId',
    align: 'center',
  },
  {
    title: '位置',
    dataIndex: 'location',
    align: 'center',
  },
  {
    title: '上机时间',
    dataIndex: 'setupTime',
    align: 'center',
  },
  {
    title: '时效时间',
    dataIndex: 'expireTime',
    align: 'center',
  },
];
const columnsFixture = [
  {
    title: '治具类型',
    dataIndex: 'type',
    align: 'center',
  },
  {
    title: '治具编码',
    dataIndex: 'code',
    align: 'center',
  },
  {
    title: '位置',
    dataIndex: 'location',
    align: 'center',
  },
  {
    title: '上机时间',
    dataIndex: 'setUptime',
    align: 'center',
  },
  {
    title: '寿命',
    dataIndex: 'life',
    align: 'center',
  },
];
onMounted(() => {
  nextTick(() => {
    getEqptAllInfo()
  })
});
const getEqptAllInfo = () => {
  getEqptEqptfixture({ eqptCode: props.eqptCode }).then(res => { 
    eqptFixture.value = res
  })
  getEqptEqptBuyoffInfo({ eqptCode: props.eqptCode }).then(res => { 
    eqptBuyoffInfo.value = res
  })
  getEqptEqptCommInfo({ eqptCode: props.eqptCode }).then(res => { 
    eqptCommInfo.value = res
  })
  getEqptEqptMaterialInfo({ eqptCode: props.eqptCode }).then(res => { 
    eqptMaterialInfo.value = res
  })
  getEqptStatusResume({ eqptCode: props.eqptCode }).then(res => { 
    eqptStatusResume.value = res
  })
  getEqptStatusList({eqptCode:props.eqptCode}).then(res => { 
    eqptStatusList.value = res.cavityRespVOList??[]
  })
}
</script>
<style lang="less" scoped>
.c-card-group-detail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(3, 1fr);

  grid-template-areas:
    'status status project'
    'batch vitae log'
    'raw tool log';
  > div {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      box-shadow: 0 0 6px 2px var(--un-shadow-color) inset;
      pointer-events: none;
    }
    > h4 {
      position: relative;
      background-image: linear-gradient(
        to right,
        #081d3700 0%,
        #0c5c8f 30%,
        #0c5c8f 70%,
        #081d3700 100%
      );
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-image: linear-gradient(
          to right,
          #081d3700 0%,
          #1495e2 30%,
          #1495e2 70%,
          #081d3700 100%
        );
      }
      &::after {
        bottom: initial;
        top: 0;
        z-index: 11;
      }
    }
  }
}
.c-table {
  * {
    background-color: transparent !important;
    color: #fff !important;
    border: none !important;
    font-size: 10px;
    &::before {
      display: none;
    }
  }
}
</style>
