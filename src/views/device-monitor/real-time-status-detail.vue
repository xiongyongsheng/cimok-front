<template>
  <div class="c-page">
    <BoardDetail :eqptInfo="eqptInfo"/>
    <CardGroupDetail :eqptCode="route.params.id"/>
  </div>
</template>
<script lang="ts" setup name="DeviceRealTimeStatusDetail">
import { nextTick, onMounted, provide, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import BoardDetail from './components/board-detail.vue';
import CardGroupDetail from './components/card-group-detail.vue';
const route = useRoute();
const eqptInfo = ref({});
const boardData = ref({});


onMounted(() => {
  nextTick(() => {
    eqptInfo.value = JSON.parse(route.query.info)
    console.log(eqptInfo.value)
    // getEqptAllInfo()
  })
});

</script>

<style lang="less">
@import './style/index.less';
</style>
