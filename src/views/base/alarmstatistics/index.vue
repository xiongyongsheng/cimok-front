<script lang="ts" setup>
import { getAlarmTotalPage } from '@/api/base/alarm';
import { columns, searchFormSchema } from './data';
import { BasicTable, TableAction, useTable } from '@/components/Table';

defineOptions({ name: 'RecipeApproval' });

const [registerTable] = useTable({
  title: '报警统计',
  api: getAlarmTotalPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
  immediate:false
});
</script>
<template>
  <div>
    <BasicTable @register="registerTable"> </BasicTable>
  </div>
</template>
