<script lang="ts" setup>
import { BinCodeBlock } from "@/components/BinCode";
import { useDescription, Description, DescItem } from "@/components/Description";
import { Card } from "ant-design-vue";
import { h, onMounted, ref } from "vue";
import { getAllStripWithCon } from "@/api/stripmap/strip";
import { useRoute } from "vue-router";
defineOptions({ name: "SublotDetail" });

const detailData = ref();

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
        backgroundColor: "#f58402",
        text: curVal,
        style: {
          marginRight: "10px",
        },
      });
    },
  },
  {
    field: "X-OUT",
    label: "NG",
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
    field: "空",
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
];
const [register] = useDescription({
  data: detailData.value,
  schema: schema,
  bordered: false,
  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 },
  size: "middle",
});

const dataReady = ref(false);
const { query } = useRoute();

onMounted(() => {
  getAllStripWithCon({ subLot: query.subLot }).then((res) => {
    debugger
  });
  // detailData.value = res.data;
  // dataReady.value = true;
});


</script>

<template>
  <div class="flex flex-col h-full p-10px">
    <div>
      <Card title="Sublot Detail">
        <Description @register="register" />
      </Card>

    </div>
  </div>
</template>
