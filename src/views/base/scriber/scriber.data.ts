import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'

export const columns: BasicColumn[] = [

  {
    title: '设备号',
    dataIndex: 'eqptCode',
    width: 160,
  },
  {
    title: '设备类型',
    dataIndex: '',
    width: 160,
  },
  {
    title: '切割参数',
    dataIndex: 'rcpName',
    width: 160,
  },
  {
    title: '刀片ID',
    dataIndex: 'bladeId',
    width: 160,
  },
  {
    title: '刀片类型',
    dataIndex: 'bladeType',
    width: 160,
  },
  {
    title: '使用主轴',
    dataIndex: 'spinder',
    width: 160,
  },
  {
    title: '时间',
    dataIndex: 'occrTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    },
  },
  {
    title: '刀刃暴露量',
    dataIndex: 'bladeExp',
    width: 160,
  },
  {
    title: '切割片数',
    dataIndex: 'waferCut',
    width: 160,
  },
  {
    title: '切割距离',
    dataIndex: 'cutDistance',
    width: 160,
  },
]

export const searchFormSchema: FormSchema[] = [
  {
    label: ' ',
    labelWidth: 15,
    field: 'eqptCode',
    component: 'Input',
    componentProps: {
      placeholder: '设备编码'
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'rcpName',
    component: 'Input',
    componentProps: {
      placeholder: '切割参数'
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'bladeType',
    component: 'Input',
    componentProps: {
      placeholder: '刀片型号'
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: '',
    component: 'Input',
    componentProps: {
      placeholder: '时间范围'
    },
    colProps: { span: 5 },
  },
]

export const createFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: '设备编码',
    field: 'eqptCode',
    component: 'Input',
  },
  {
    label: '事件ID',
    field: 'eventId',
    component: 'Input',
  },
  {
    label: '事件代码',
    field: 'eventCode',
    component: 'Input',
  },
  {
    label: '全局事件代码',
    field: 'eventGlobaleCode',
    component: 'Input',
  },
  {
    label: '事件类型',
    field: 'eventType',
    component: 'Select',
    componentProps: {
      options: [],
    },
  },
  {
    label: '发生时间',
    field: 'occrTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'x',
    },
  },
  {
    label: '部门id',
    field: 'deptId',
    component: 'Input',
  },
]

export const updateFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: '设备编码',
    field: 'eqptCode',
    component: 'Input',
  },
  {
    label: '事件ID',
    field: 'eventId',
    component: 'Input',
  },
  {
    label: '事件代码',
    field: 'eventCode',
    component: 'Input',
  },
  {
    label: '全局事件代码',
    field: 'eventGlobaleCode',
    component: 'Input',
  },
  {
    label: '事件类型',
    field: 'eventType',
    component: 'Select',
    componentProps: {
      options: [],
    },
  },
  {
    label: '发生时间',
    field: 'occrTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'x',
    },
  },
  {
    label: '部门id',
    field: 'deptId',
    component: 'Input',
  },
]
