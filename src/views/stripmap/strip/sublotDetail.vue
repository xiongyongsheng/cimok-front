<script lang="ts" setup>
import { BinCodeBlock } from "@/components/BinCode";
import { useDescription, Description, DescItem } from "@/components/Description";
import { Card } from "ant-design-vue";
import { h, onMounted, ref } from "vue";
import { getAllStripWithCon } from "@/api/stripmap/strip";
import { useRoute } from "vue-router";
import { BasicTable, useRender } from "@/components/Table";
import { BinCodeMap } from "@/components/BinCode";
defineOptions({ name: "SublotDetail" });

const detailData = ref();

const schema: DescItem[] = [
  {
    field: "goodNum",
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
    field: "badNum",
    label: "NG",
    render: (curVal) => {
      return h(BinCodeBlock, {
        backgroundColor: "#f58402",
        text: curVal,
        style: {
          marginRight: "10px",
        },
      });
    },
  },
  {
    field: "xoutNum",
    label: "X-OUT",
    render: (curVal) => {
      return h(BinCodeBlock, {
        backgroundColor: "#0f01f5",
        text: curVal,
        style: {
          marginRight: "10px",
        },
      });
    },
  },
  {
    field: "noDieNum",
    label: "NG",
    render: (curVal) => {
      return h(BinCodeBlock, {
        backgroundColor: "#aaaaaa",
        text: curVal,
        style: {
          marginRight: "10px",
        },
      });
    },
  },
  {
    field: "creator",
    label: "创建人",
  },
  {
    field: "createTime",
    label: "创建时间",
    render: (text) => {
      return useRender.renderDate(text);
    },
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

const defectCacuColumns = [
  {
    title: '站点',
    dataIndex: 'deptId',
    key: 'deptId',
  },
  {
    title: '作业设备',
    dataIndex: 'eqptCode',
    key: 'eqptCode',
  },
  {
    title: '原因',
    dataIndex: 'defectReason',
    key: 'defectReason',
  },
  {
    title: '数量',
    dataIndex: 'badNum',
    key: 'badNum',
  },
];

onMounted(() => {
  getAllStripWithCon(query.subLot as string).then((res) => {
    detailData.value = res;
  }).finally(() => {
    dataReady.value = true;
  });

});


</script>

<template>
  <div class="flex flex-col h-full p-10px">
    <div v-if="dataReady">
      <Card :title="detailData.aoLot">
        <Description @register="register">
        </Description>
        <div class="flex justify-start mt-10px mb-10px">
          <div class="text-md font-bold">不良数量统计</div>
        </div>
        <BasicTable :bordered="true" :columns="defectCacuColumns" :dataSource="detailData.defectCacuList"
          :canResize='false' :maxHeight="300" />
      </Card>
      <Card class="mt-10px" v-for="item in detailData.mappingDetailList" :key="item.id">
        <template #title>
          <div>
            <div class="text-md font-bold">{{ item.stripId }}</div>
            <div class="mt-10px flex font-400 font-size-14px">
              <div class="mr-30px">
                <span class="color-#71b605">Goods：</span>
                <span>{{ item.goodCnt }}</span>
              </div>
              <div class="mr-30px">
                <span class="color-#f58402">NG：</span>
                <span>{{ item.ngCnt }}</span>
              </div>
              <div class="mr-30px">
                <span class="color-#0f01f5">X-OUT：</span>
                <span>{{ item.xoutCnt }}</span>
              </div>
              <div class="mr-30px">
                <span class="color-#aaaaaa">空：</span>
                <span>{{ item.nullCnt }}</span>
              </div>
            </div>
          </div>
        </template>
        <BinCodeMap :binWidth="60" :binHeight="30" :mapData="item.mapData" :waferBinCodeList="Object.keys(item.binColorColl).map(key => {
          return {
            binCode: key,
            binColor: item.binColorColl[key],
          }
        })" height="300px" :binCodeLength='item.binCodeLen' :colCnt='item.colQty' :rowCnt='item.rowQty' />
      </Card>
    </div>
  </div>
</template>
