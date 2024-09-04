<script lang="ts" setup>
import { columns, searchFormSchema } from './data';
import { BasicTable, TableAction, useTable } from '@/components/Table';

import { list } from '@/views/recipe/mock/api/query';

defineOptions({ name: 'RecipeApproval' });

const [registerTable] = useTable({
  title: 'Recipe操作记录',
  api: list,
  // api: getPage,
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
