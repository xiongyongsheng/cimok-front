<template>
  <div class="c-page" ref="pageRef">
    <Sider v-model:model-value="activeSider" :sider-list="siderList" />
    <Board v-if="showComponent" :eqptTotalNumber="eqptTotalNumber" :activeMenu="siderList[parseInt(activeSider)-1]" :boardData="boardData" :eqptTypeListData="eqptTypeListData" :eqptRealListData="eqptRealListData" :eqptCommListData="eqptCommListData"/>
    <CardGroup v-if="showComponent"  :eqptAllList="eqptAllList" :eqptUpdateItem="eqptUpdateItem"/>
  </div>
</template>
<script lang="ts" setup name="DeviceRealTimeStatus">
import { nextTick, onMounted, computed,provide, reactive, ref, watch,watchEffect ,onUnmounted} from 'vue';
import {
  AlertOutlined,
  BookOutlined,
  BorderlessTableOutlined,
  ScheduleOutlined,
} from '@ant-design/icons-vue';
import { getAccessToken } from '@/utils/auth'
import { useWebSocket } from '@vueuse/core'
import { getEqptStatusTotal,getEqptStatusReal,getEqptTraffic,getEqptAllList } from '@/api/base/eqpt/index'


const state = reactive({
  sendValue: '',
})
const wsserver = ref(
  `${(`${import.meta.env.VITE_WS_URL}/base/ws/eqpt?token=Bearer `)}${getAccessToken()}`,
)
const { status, data, send, close, open } = useWebSocket(wsserver.value, {
  autoReconnect: false,
  heartbeat: true,
})
const eqptUpdateItem = ref({})
watchEffect(() => {
  if (data.value) {
    try {
      
      const res = JSON.parse(data.value)
      // if(res.content.indexOf('WS006')!== -1){
      //   console.log(Math.ceil(Math.random() * 1000))
      //   if(Math.ceil(Math.random() * 1000)%2 == 1){
      //     res.content = res.content.replace('RUN','ALARM')
      //     console.log(res.content)
      //   }
      // }
      eqptUpdateItem.value = res
    }
    catch (error) {
      
    }
  }
})
const getIsOpen = computed(() => status.value === 'OPEN')
const getTagColor = computed(() => (getIsOpen.value ? 'success' : 'red'))

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
const eqptRealListData = ref([]);
const eqptTotalNumber = ref(0);
const eqptCommListData = ref([]);
const eqptAllList = ref([]);
function handlerSendEquipList() {
  console.log('socket send ')
  // open()
  // {"type":"eqpt-status-msg","content":{"eqptCodes":["DA-040","DA-041"]}}
  let eqptCodeList = []
  eqptAllList.value.forEach(e=>{
    eqptCodeList.push(e.eqptCode)
  })
  let obj = {type:"eqpt-status-msg",content:{eqptCodes:eqptCodeList}}
  // send(state.sendValue)
  send(JSON.stringify(obj))
  state.sendValue = ''
}
const getEqptStatus = ()=>{ 
  getEqptStatusTotal({ deptId: siderList.value[parseInt(activeSider.value)-1].id }).then((res) => {
    if (res) {
      let boardEqptNumList = []
      let totalNum = parseInt(res.idleCount ?? 0) + parseInt(res.runCount ?? 0) + parseInt(res.alarmCount ?? 0)
      eqptTotalNumber.value = totalNum
      console.log(eqptTotalNumber.value)
      boardEqptNumList.push({ name: 'Idle', number: res.idleCount ?? 0 ,totalNum: totalNum})
      boardEqptNumList.push({ name: 'Run', number: res.runCount ?? 0 ,totalNum: totalNum})
      boardEqptNumList.push({ name: '警报', number: res.alarmCount ?? 0 ,totalNum: totalNum})
      boardData.value['boardEqptNumList'] = boardEqptNumList
      eqptTypeListData.value = res.eqptTypeTotalRespVOList ?? []
      reloadComponent();
    }
    console.log(boardData.value)
  })
  getEqptStatusReal({ deptId: siderList.value[parseInt(activeSider.value)-1].id }).then(res => { 
    eqptRealListData.value = res
  })
  getEqptTraffic({ deptId: siderList.value[parseInt(activeSider.value)-1].id }).then(res => { 
    eqptCommListData.value = res
  })
  getEqptAllList({ deptId: siderList.value[parseInt(activeSider.value) - 1].id }).then(res => {
    eqptAllList.value = res
    handlerSendEquipList()
  })
}
onMounted(() => {
  nextTick(() => {
    activeSider.value = 2
  })
  // getEqptStatus()
});
onUnmounted(()=>{stop()})
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
    console.log('------')
    console.log(activeSider.value)
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
import { random } from 'lodash-es';
</script>
<style lang="less">
@import './style/index.less';
</style>
<style></style>
