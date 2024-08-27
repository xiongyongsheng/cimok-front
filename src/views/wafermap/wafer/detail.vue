<!--
 * @Author: 卢靖康
 * @Date: 2024-08-21 16:50:22
 * @LastEditTime: 2024-08-26 22:22:50
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { DescItem } from "@/components/Description/src/typing";
import { Description, useDescription } from "@/components/Description";
import { h, onMounted, reactive, ref } from "vue";
import { BinCodeBlock, BinTable, BinCodeMap } from "@/components/BinCode";
import { Card, Select } from "ant-design-vue";
import { WaferMapDetailInfo } from "@/types/wafer/waferMap";
import { DICT_TYPE, getDictOptions } from "@/utils/dict";
import { useRoute } from "vue-router";
import { getWafer } from "@/api/stripmap/wafer";

defineOptions({ name: "WaferMapDetail" });
let mapInfoData = ref<WaferMapDetailInfo>();

const schema: DescItem[] = [
  {
    field: "goodCnt",
    label: "Good",
    render: (curVal) => {
      return h(BinCodeBlock, {
        backgroundColor: "#71b605",
        text: curVal,
        style: {
          marginRight: "10px",
        },
      });
    },
  },
  {
    field: "ngCnt",
    label: "NG",
    render: (curVal) => {
      return h(BinCodeBlock, {
        backgroundColor: "#b74248",
        text: curVal,
        style: {
          marginRight: "10px",
        },
      });
    },
  },
  {
    field: "yield",
    label: "Yield",
  },
  {
    field: "rowCnt",
    label: "行/列",
    render: (curVal, data) => {
      return `${curVal}/${data.colCnt}`;
    },
  },
  {
    field: "waferLotId",
    label: "批次",
    render: (curVal) => {
      return h(
        "a",
        {
          href: `/wafer/map/log/detail?waferLotId=${curVal}`,
        },
        curVal,
      );
    },
  },
  {
    field: "custCode",
    label: "客户代码",
  },
  {
    field: "diePart",
    label: "产品型号",
  },
  {
    field: "updateTime",
    label: "更新时间",
  },
  {
    span: 1,
    field: "orientation",
    label: "方向",
    render: (curVal) => {
      return h(Select, {
        options: getDictOptions(DICT_TYPE.WAFER_ORIENTATION, "string") as [],
        style: {
          width: "100%",
        },
        value: curVal,
      });
    },
  },
];

const [register] = useDescription({
  data: mapInfoData,
  schema: schema,
  bordered: false,
  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 },
  size: "middle",
});

const { query } = useRoute();
const dataReady = ref(false);
onMounted(() => {
  dataReady.value = false;
  const id = query.id! as string;
  getWafer(id)
    .then((res) => {
      mapInfoData.value = res;
    })
    .finally(() => {
      dataReady.value = true;
    });
});
</script>

<template>
  <div class="flex flex-col h-full p-10px">
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
