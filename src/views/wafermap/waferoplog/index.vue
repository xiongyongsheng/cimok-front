<!--
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-25 12:44:13
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { columns, searchFormSchema } from "./waferOpLog.data";
import { BasicTable, useTable } from "@/components/Table";
import { getWaferOpLogPage } from "@/api/wafermap/waferoplog";

defineOptions({ name: "WaferOpLog" });

const [registerTable] = useTable({
  title: "记录追溯",
  api: getWaferOpLogPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
});
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'waferId'">
          <router-link :to="`/wafermap/search/wafer-op-log/detail?id=${record.id}`">
            {{ record.waferId }}
          </router-link>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
