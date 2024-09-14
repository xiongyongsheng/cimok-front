import type { BasicColumn, FormSchema } from '@/components/Table';
import { handleSearchFormSchema } from '@/views/recipe/utils/index';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';

export const columns: BasicColumn[] = [
  {
    title: 'Recipe名称',
    dataIndex: 'rcpName',
    width: 160,
    key: 'name',
  },
  {
    title: 'Recipe类型',
    dataIndex: 'rcpVerType',
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
    width: 160,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '操作类型',
    field: 'rcpHisId',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_ACTION_TYPE),
    },
    colProps: { span: 8 },
  },
  {
    label: '设备号',
    field: 'paramName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '选择时间',
    field: 'paramName',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
  //@ts-ignore
].map(handleSearchFormSchema);
