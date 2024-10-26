<script lang="ts" setup>
import {
  BasicColumn,
  BasicTable,
  FormSchema, useRender,
  useTable,
} from '@/components/Table';

import { rcpOpLogPage } from '@/api/base/recipe';
import { useRoute } from 'vue-router';
import { handleSearchFormSchema } from '../utils';
import { DICT_TYPE } from '@/utils/dict';

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
    dataIndex: 'rcpVerType',
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.RECIPE_TYPE_ENUM)
    },
    width: 160,
  },
  {
    title: '文件标识',
    dataIndex: 'rcpIdentId',
    width: 160,
  },
  {
    title: '操作类型',
    dataIndex: 'rcpOpType',
    width: 160,
  },
  {
    title: '时间',
    dataIndex: 'createTime',
    width: 160,
  },
  {
    title: 'Source',
    dataIndex: 'source',
    width: 160,
  },
  {
    title: 'Target',
    dataIndex: 'target',
    width: 160,
  },
  {
    title: '结果',
    dataIndex: 'opResult',
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.RECIPE_ESCUTE_RES)
    },
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
