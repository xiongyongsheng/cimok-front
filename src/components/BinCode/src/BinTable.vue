<!--
 * @Author: 卢靖康
 * @Date: 2024-08-22 14:11:07
 * @LastEditTime: 2024-08-27 22:02:36
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { Table } from "ant-design-vue";
import BinCodeBlock from "./BinCodeBlock.vue";

defineOptions({ name: "BinTable" });
const props = defineProps({
  waferBinCodeList: { type: Array, default: () => [] },
});
</script>

<template>
  <Table
    class="table absolute w-180px"
    bordered
    :pagination="false"
    :dataSource="props.waferBinCodeList"
    :columns="[
      {
        title: 'BinCode',
        key: 'binCode',
        dataIndex: 'binCode',
        align: 'center',
      },
      {
        title: '数量',
        key: 'binNum',
        dataIndex: 'binNum',
        align: 'center',
      },
    ]"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'binCode'">
        <div class="flex justify-center">
          <BinCodeBlock
            :backgroundColor="record.binColor"
            fontColor="#000"
            :text="record.binCode"
            width="30px"
            height="30px"
            lineHeight="30px"
          />
        </div>
      </template>
    </template>
  </Table>
</template>

<style lang="less" scoped>
.table {
  z-index: 1;
}
</style>
