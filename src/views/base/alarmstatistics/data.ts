import type { BasicColumn, FormSchema } from '@/components/Table';
import { handleSearchFormSchema } from '@/views/recipe/utils/index';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';

export const columns: BasicColumn[] = [
  {
    title: '部门',
    dataIndex: 'deptName',
    width: 160,
    key: 'deptName',
  },
  {
    title: '工艺',
    dataIndex: 'rcpVerType',
    width: 160,
  },
  {
    title: '设备类型',
    dataIndex: 'rcpIdentId',
    width: 160,
  },
  {
    title: '设备编码',
    dataIndex: 'rcpOpType',
    width: 160,
  },
  {
    title: '统计时长(小时)',
    dataIndex: 'createTime',
    width: 160,
  },
  {
    title: '报警次数',
    dataIndex: 'source',
    width: 160,
  },
  {
    title: '报警时长(分钟)',
    dataIndex: 'target',
    width: 160,
  },
  {
    title: 'MTBA(小时)',
    dataIndex: 'opResult',
    width: 160,
  },
  {
    title: 'MTBA(分钟)',
    dataIndex: 'opResult',
    width: 160,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '选择部门',
    field: 'rcpName',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_ACTION_TYPE),
    },
    colProps: { span: 8 },
  },
  {
    label: '作业站点',
    field: 'rcpHisId',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_SITE),
    },
    colProps: { span: 8 },
  },
  {
    label: '设备类型',
    field: 'paramName',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_DEVICE_TYPE),
    },
    colProps: { span: 8 },
  },
  {
    label: '选择日期',
    field: 'paramName',
    component: 'DatePicker',
    colProps: { span: 8 },
  },
  {
    label: '班次',
    field: 'paramName',
    component: 'Input',
    colProps: { span: 8 },
  },
  //@ts-ignore
].map(handleSearchFormSchema);
