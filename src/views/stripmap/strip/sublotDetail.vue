<script lang="ts" setup>
import { BinCodeBlock } from "@/components/BinCode";
import { useDescription } from "@/components/Description";
import { Card } from "ant-design-vue";
import { h, ref } from "vue";
defineOptions({ name: "SublotDetail" });

const detailData = ref();

const schema = [
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
];
const [register] = useDescription({
  data: detailData.value,
  schema: schema,
  bordered: false,
  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 },
  size: "middle",
});


</script>

<template>
   <div class="flex flex-col h-full p-10px">
    <div>
      <Card>
        <Description @register="register" />
      </Card>
    
    </div>
  </div>
</template>
