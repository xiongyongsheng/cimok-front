<script lang="ts" setup>
import {
  BasicColumn,
  BasicTable,
  FormSchema,
  useTable,
} from '@/components/Table';

import { rcpOpLogPage } from '@/api/base/recipe';
import { useRoute } from 'vue-router';
import { handleSearchFormSchema } from '../utils';

defineOptions({ name: 'RecipeActionLog' });

const route = useRoute();

const actionLogColumns: BasicColumn[] = [
  {
    title: 'Recipe名称',
    dataIndex: 'rcpName',
    width: 160,
  },
  {
    title: 'Recipe类型',
    dataIndex: 'rcpHisId',
    width: 160,
  },
  {
    title: '文件标识',
    dataIndex: 'paramName',
    width: 160,
  },
  {
    title: '操作类型',
    dataIndex: 'paramCode',
    width: 160,
  },
  {
    title: '时间',
    dataIndex: 'paramNick',
    width: 160,
  },
  {
    title: 'Source',
    dataIndex: 'realVal',
    width: 160,
  },
  {
    title: 'Target',
    dataIndex: 'sortCode',
    width: 160,
  },
  {
    title: '结果',
    dataIndex: 'deptId',
    width: 160,
  },
];
const actionLogSearchFormSchema: FormSchema[] = [
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '操作类型',
    field: 'rcpHisId',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '设备号',
    field: 'paramName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '操作时间',
    field: 'paramCode',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
  //@ts-ignore
].map(handleSearchFormSchema);

const [registerTable] = useTable({
  title: 'Recipe操作记录',
  api: () => {
    return rcpOpLogPage(route.query);
  },
  columns: actionLogColumns,
  formConfig: { labelWidth: 120, schemas: actionLogSearchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
});
</script>
<template>
  <div>
    <BasicTable @register="registerTable"> </BasicTable>
  </div>
</template>
