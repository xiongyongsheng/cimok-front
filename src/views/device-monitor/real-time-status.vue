<template>
  <div class="c-page" ref="pageRef">
    <Sider v-model:model-value="activeSider" :sider-list="siderList" />
    <Board v-if="showComponent" :boardData="boardData" :eqptTypeListData="eqptTypeListData"/>
    <CardGroup v-if="showComponent" />
  </div>
</template>
<script lang="ts" setup name="DeviceRealTimeStatus">
import { nextTick, onMounted, provide, reactive, ref, watch } from 'vue';
import {
  AlertOutlined,
  BookOutlined,
  BorderlessTableOutlined,
  ScheduleOutlined,
} from '@ant-design/icons-vue';
import { getEqptStatusTotal,getEqptStatusReal } from '@/api/base/eqpt/index'
// 全屏控制
const pageRef = ref();
const fullScreen = reactive({
  isFull: false,
  request: () => {
    pageRef.value.onfullscreenchange = ({ target }) => {
      fullScreen.isFull = target === document.fullscreenElement;
    };
    return pageRef.value.requestFullscreen();
  },
  exit: () => {
    return document.exitFullscreen();
  },
  switch: () => {
    fullScreen.isFull ? fullScreen.exit() : fullScreen.request();
  },
});
const boardData = ref({});
const eqptTypeListData = ref([]);
const getEqptStatus = ()=>{ 
  getEqptStatusTotal({ deptId: activeSider.value }).then((res) => {
    if (res) {
      let boardEqptNumList = []
      let totalNum = parseInt(res.idleCount ?? 0) + parseInt(res.runCount ?? 0) + parseInt(res.alarmCount ?? 0)
      console.log(totalNum)
      boardEqptNumList.push({ name: 'Idle', number: res.idleCount ?? 0 ,totalNum: totalNum})
      boardEqptNumList.push({ name: 'Run', number: res.runCount ?? 0 ,totalNum: totalNum})
      boardEqptNumList.push({ name: '警报', number: res.alarmCount ?? 0 ,totalNum: totalNum})
      boardData.value['boardEqptNumList'] = boardEqptNumList
      eqptTypeListData.value = res.eqptTypeTotalRespVOList??[]
    }
    console.log(boardData.value)
  })
  getEqptStatusReal({deptId:activeSider.value})
}
onMounted(() => {
  getEqptStatus()
});
provide('fullScreen', fullScreen);

import Sider from './components/sider.vue';
const siderList = ref([
  // {
  //   id: 1,
  //   label: '设备监控',
  //   icon: AlertOutlined,
  // },
  // {
  //   id: 2,
  //   label: '设备管理',
  //   icon: BookOutlined,
  // },
  // {
  //   id: 3,
  //   label: '设备报警',
  //   icon: BorderlessTableOutlined,
  // },
  // {
  //   id: 4,
  //   label: '设备日志',
  //   icon: ScheduleOutlined,
  // },
  {
    id: 1,
    label: '磨片',
    icon: AlertOutlined,
  },
  {
    id: 2,
    label: '划片',
    icon: BookOutlined,
  },
  {
    id: 3,
    label: '装片',
    icon: BorderlessTableOutlined,
  },
  {
    id: 4,
    label: '测试',
    icon: ScheduleOutlined,
  },
]);
const activeSider = ref(1);
const showComponent = ref(true);
watch(
  () => activeSider.value,
  () => {
    reloadComponent();
    getEqptStatus();
  }
);
const reloadComponent = () => {
  showComponent.value = false;
  nextTick(() => {
    showComponent.value = true;
  });
};

import Board from './components/board.vue';
import CardGroup from './components/card-group.vue';
</script>
<style lang="less">
@import './style/index.less';
</style>
<style></style>
