<!--
 * @Author: 卢靖康
 * @Date: 2024-08-28 00:38:59
 * @LastEditTime: 2024-08-28 00:45:04
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { DescItem, useDescription } from "@/components/Description";
import { useRender } from "@/components/Table";
import { ref } from "vue";

const data = ref();
const schema: DescItem[] = [
  {
    field: "yield",
    label: "操作类型",
  },
  {
    field: "updateTime",
    label: "操作时间",
    render: (text) => {
      return useRender.renderDate(text);
    },
  },
  {
    field: "yield",
    label: "创建人",
  },
  {
    field: "rowCnt",
    label: "作业站点",
  },
  {
    field: "waferLotId",
    label: "设备号",
  },
];

const [register] = useDescription({
  data: data,
  schema: schema,
  bordered: false,
  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 },
  size: "middle",
});
</script>

<template>
  <div></div>
</template>

<style lang="less" scoped></style>
