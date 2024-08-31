import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'
import { DICT_TYPE, getDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   width: 160,
  // },
  {
    title: '条号',
    dataIndex: 'stripId',
    width: 160,
  },
  {
    title: '条号明码',
    dataIndex: '',
    width: 160,
  },
  {
    title: '工单号',
    dataIndex: '',
    width: 160,
  },
  {
    title: '批次号',
    dataIndex: '',
    width: 160,
  },
  {
    title: '设备号',
    dataIndex: '',
    width: 160,
  },
  {
    title: '操作类型',
    dataIndex: '',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_OPERATE_TYPE)
    },
  },
  {
    title: '作业站点',
    dataIndex: '',
    width: 160,
  },
  {
    title: '总数',
    dataIndex: 'unitCnt',
    width: 160,
  },
  {
    title: 'Good',
    dataIndex: 'goodCnt',
    width: 160,
  },
  {
    title: 'NG',
    dataIndex: 'ngCnt',
    width: 160,
  },
  {
    title: 'X-OUT',
    dataIndex: 'xcnt',
    width: 160,
  },
  {
    title: '空',
    dataIndex: 'nullCnt',
    width: 160,
  },
  {
    title: '操作人',
    dataIndex: 'creator',
    width: 160,
  },
]

export const searchFormSchema: FormSchema[] = [
  {
    label: ' ',
    labelWidth: 15,
    field: 'stripId',
    component: 'Input',
    componentProps: {
      placeholder: '设备号',
    },
    colProps: { span: 3 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'mapDataVer',
    component: 'Input',
    componentProps: {
      placeholder: '条号',
    },
    colProps: { span: 3 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: '',
    component: 'Input',
    componentProps: {
      placeholder: '批次号',
    },
    colProps: { span: 3 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: '',
    component: 'Input',
    componentProps: {
      placeholder: '工单号',
    },
    colProps: { span: 3 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'opType',
    component: 'Select',
    componentProps: {
      placeholder: '操作类型',
      // TODO: 操作类型字典
      options: getDictOptions(DICT_TYPE.WAFER_ORIENTATION),
    },
    colProps: { span: 3 },
  },

]
