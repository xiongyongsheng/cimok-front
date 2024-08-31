<!--
 * @Author: 卢靖康
 * @Date: 2024-08-28 00:38:59
 * @LastEditTime: 2024-08-28 00:45:04
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { DescItem, useDescription, Description } from "@/components/Description";
import { useRender } from "@/components/Table";
import { BinCodeMap } from "@/components/BinCode";
import { onMounted, ref } from "vue";
import { Card } from "ant-design-vue";
import { useRoute } from "vue-router";
import { getStripOpLog } from "@/api/stripmap/stripoplog";
import pageData from './data.json';
import { getDictDatas, DICT_TYPE } from "@/utils/dict";

defineOptions({ name: 'StripOpLogDetail' })
const detailData = ref();
const mapdataList = ref<MapItem[]>([]);

interface MapItem {
  id: string;
  dataType: string;
  mapData: string;
  binColorColl: any;
  binCodeLen: number;
  colQty: number;
  rowQty: number;
}
const schema: DescItem[] = [

  {
    field: "opType",
    label: "操作类型",
  },
  {
    field: "createTime",
    label: "操作时间",
    render: ({ text }) => {
      return useRender.renderDate(text);
    },
  },
  {
    field: "creator",
    label: "创建人",
  },
  {
    field: "",
    label: "作业站点",
  },
  {
    field: "",
    label: "设备号",
  },
];

const [register] = useDescription({
  data: detailData,
  schema: schema,
  bordered: false,
  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 },
  size: "middle",
});

const dataReady = ref(false);
const { query } = useRoute();
onMounted(() => {
  detailData.value = pageData.data;
  mapdataList.value = pageData.data.mapdataList as any;
  // getStripOpLog(query.id as string)
  //   .then((res) => {

  //   })
  //   .finally(() => {
  //     dataReady.value = true;
  // });
  dataReady.value = true;
});

const getDictLabel = (dictType: string, value: string) => {
  const dictData = getDictDatas(dictType);
  const dictItem = dictData.find((item: any) => item.value === value);
  return dictItem ? dictItem.label : value;
};

</script>

<template>
  <div class="flex flex-col h-full p-10px">
    <div v-if="dataReady">
      <Card>
        <Description @register="register" />
      </Card>
      <Card class="mt-10px" v-for="item in mapdataList" :key="item.id"
        :title="getDictLabel(DICT_TYPE.STRIP_MAPDATA_TYPE, item.dataType)">
        <BinCodeMap :binWidth="60" :binHeight="30" :mapData="item.mapData" :waferBinCodeList="Object.keys(item.binColorColl).map(key => {
          return {
            binCode: key,
            binColor: item.binColorColl[key],
          }
        })" height="400px" :binCodeLength='item.binCodeLen' :colCnt='detailData.colQty' :rowCnt='detailData.rowQty' />
      </Card>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
