<script lang="ts" setup>
import { rcpOpLogPage } from '@/api/base/recipe';
import { columns, searchFormSchema } from './data';
import { BasicTable, TableAction, useTable } from '@/components/Table';

defineOptions({ name: 'RecipeApproval' });

const [registerTable] = useTable({
  title: '报警统计',
  api: rcpOpLogPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
});
</script>
<template>
  <div>
    <BasicTable @register="registerTable"> </BasicTable>
  </div>
</template>
