<template>
  <div class="c-page" ref="pageRef">
    <Sider v-model:model-value="activeSider" :sider-list="siderList" />
    <Board v-if="showComponent" />
    <CardGroup v-if="showComponent" />
  </div>
</template>
<script lang="ts" setup name="DeviceRealTimeStatus">
import { nextTick, provide, reactive, ref, watch } from 'vue';
import {
  AlertOutlined,
  BookOutlined,
  BorderlessTableOutlined,
  ScheduleOutlined,
} from '@ant-design/icons-vue';

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
provide('fullScreen', fullScreen);

import Sider from './components/sider.vue';
const siderList = ref([
  {
    id: 1,
    label: '设备监控',
    icon: AlertOutlined,
  },
  {
    id: 2,
    label: '设备管理',
    icon: BookOutlined,
  },
  {
    id: 3,
    label: '设备报警',
    icon: BorderlessTableOutlined,
  },
  {
    id: 4,
    label: '设备日志',
    icon: ScheduleOutlined,
  },
]);
const activeSider = ref(1);
const showComponent = ref(true);
watch(
  () => activeSider.value,
  () => {
    reloadComponent();
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
