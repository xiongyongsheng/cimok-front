import type { BasicColumn, FormSchema } from '@/components/Table';
import { handleSearchFormSchema } from '@/views/recipe/utils/index';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import dayjs from 'dayjs'

export const columns: BasicColumn[] = [
  {
    title: '部门',
    dataIndex: 'deptCode',
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
    dataIndex: 'eqptTypeCode',
    width: 160,
  },
  {
    title: '设备编码',
    dataIndex: 'eqptCode',
    width: 160,
  },
  {
    title: '统计时长(小时)',
    dataIndex: 'statisticalDuration',
    width: 160,
  },
  {
    title: '报警次数',
    dataIndex: 'alarmCnt',
    width: 160,
  },
  {
    title: '报警时长(分钟)',
    dataIndex: 'alarmDuration',
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
    field: 'deptId',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_ACTION_TYPE, 'string'),
    },
    colProps: { span: 8 },
  },
  {
    label: '作业站点',
    field: 'stepCode',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_SITE, 'string'),
    },
    colProps: { span: 8 },
  },
  {
    label: '设备类型',
    field: 'eqpTypeCode',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_DEVICE_TYPE, 'string'),
    },
    colProps: { span: 8 },
  },
  {
    label: '选择日期',
    field: 'selectDate',
    component: 'DatePicker',
    componentProps: {
      // value: new Date(),
      format: 'YYYY-MM-DD',
      valueFormat: 'x',
      showToday:true
    },
    colProps: { span: 8 },
  },
  {
    label: '班组',
    field: 'shiftType',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.ALARM_SHIFT_TYPE, 'string'),
    },
    colProps: { span: 8 },
  },
  //@ts-ignore
].map(handleSearchFormSchema);
