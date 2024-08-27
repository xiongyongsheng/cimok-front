<!--
 * @Author: 卢靖康
 * @Date: 2024-08-24 18:18:10
 * @LastEditTime: 2024-08-26 22:22:14
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { DescItem } from "@/components/Description/src/typing";
import { Description, useDescription } from "@/components/Description";
import { onMounted, ref } from "vue";
import { BinTable, BinCodeMap } from "@/components/BinCode";
import { Card } from "ant-design-vue";
import { WaferMapLogDetailInfo } from "@/types/wafer/waferMap";
import { getWaferOpLog } from "@/api/wafermap/waferoplog";
import { useRoute } from "vue-router";
import { Loading, useLoading } from "@/components/Loading";

const wrapEl = ref(null);
const loadingRef = ref(false);
const [openFullLoading, closeFullLoading] = useLoading({
  tip: "加载中...",
});

const [openWrapLoading, closeWrapLoading] = useLoading({
  target: wrapEl,
  props: {
    tip: "加载中...",
    absolute: true,
  },
});

defineOptions({ name: "WaferMapOpLog" });
let mapInfoData = ref<WaferMapLogDetailInfo>();

const schema: DescItem[] = [
  {
    field: "opType",
    label: "操作类型",
  },
  {
    field: "createTime",
    label: "操作时间",
  },
  {
    field: "creator",
    label: "创建人",
  },
  {
    field: "processStep",
    label: "作业站点",
  },
  {
    field: "eqptCode",
    label: "设备号",
  },
];

const [register] = useDescription({
  data: mapInfoData.value,
  schema: schema,
  bordered: false,
  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 },
  size: "middle",
});
const { query } = useRoute();
const dataReady = ref(false);
onMounted(() => {
  dataReady.value = false;
  openWrapLoading();
  const id = query.id! as string;
  getWaferOpLog(id)
    .then((res) => {
      mapInfoData.value = res;
    })
    .finally(() => {
      dataReady.value = true;
      closeWrapLoading();
    });
});
</script>

<template>
  <div
    class="flex flex-col h-full p-10px"
    ref="wrapEl"
    v-loading="loadingRef"
    loading-tip="加载中..."
  >
    <div v-if="dataReady && mapInfoData">
      <Card :title="mapInfoData.waferId">
        <Description @register="register" />
      </Card>
      <Card
        class="mt-10px"
        :headStyle="{
          paddingTop: '10px',
          paddingBottom: '10px',
        }"
      >
        <template #title>
          <div>{{ mapInfoData.waferId }}</div>
          <div class="mt-10px flex font-400 font-size-14px">
            <div class="mr-30px">
              <span class="color-#71b605">Goods：</span>
              <span>{{ mapInfoData.goodCnt }}</span>
            </div>
            <div class="mr-30px">
              <span class="color-#b74248">NG：</span>
              <span>{{ mapInfoData.ngCnt }}</span>
            </div>
            <div class="">方向：{{ mapInfoData.orientation }}</div>
          </div>
        </template>

        <div class="h-700px">
          <BinTable :waferBinCodeList="mapInfoData.waferBinCodeList" />
          <BinCodeMap
            :colCnt="mapInfoData.colCnt"
            :rowCnt="mapInfoData.rowCnt"
            :waferBinCodeList="mapInfoData.waferBinCodeList"
            :binCodeLength="mapInfoData.binCodeLength"
            :width="'100%'"
            :height="'700px'"
            :mapData="mapInfoData.mapData"
          />
        </div>
      </Card>
    </div>
  </div>
</template>
