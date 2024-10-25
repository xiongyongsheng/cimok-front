import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'

export const columns: BasicColumn[] = [

  {
    title: '设备号',
    dataIndex: 'eqptCode',
    width: 130,
  },
  // {
  //   title: '设备类型',
  //   dataIndex: '',
  //   width: 160,
  // },
  {
    title: '事件编码',
    dataIndex: 'eventCode',
    width: 130,
  },
  {
    title: '类型',
    dataIndex: 'eventType',
    width: 130,
  },
  {
    title: '事件详情',
    dataIndex: 'eventDesc',
    width: 160,
  },
  {
    title: '作业批次',
    dataIndex: 'lotId	',
    width: 160,
  },
  {
    title: '数据',
    dataIndex: 'eventData',
    width: 160,
  },
  {
    title: '发生时间',
    dataIndex: 'occrTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    },
  },
]

export const searchFormSchema: FormSchema[] = [
  {
    label: '',
    labelWidth: 15,
    field: 'eventCode',
    component: 'Input',
    componentProps: {
      placeholder: '事件代码'
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'eqptCode',
    component: 'Input',
    componentProps: {
      placeholder: '设备号'
    },
    colProps: { span: 5 },
  },
  // {
  //   label: ' ',
  //   labelWidth: 15,
  //   field: '',
  //   component: 'Select',
  //   componentProps: {
  //     placeholder: '设备类型',
  //     options: [],
  //   },
  //   colProps: { span: 5 },
  // },
  // {
  //   label: ' ',
  //   labelWidth: 15,
  //   field: '',
  //   component: 'Select',
  //   componentProps: {
  //     placeholder: '选择类型',
  //     options: [],
  //   },
  //   colProps: { span: 5 },
  // },
]

export const createFormSchema: FormSchema[] = [
  {
    label: '设备号',
    field: 'eqptCode',
    show: true,
    component: 'Input',
  },
  {
    label: '事件详情',
    field: 'eventDesc',
    component: 'Input',
  },
  {
    label: '事件代码',
    field: 'eventCode',
    component: 'Input',
  },
  {
    label: '时间',
    field: 'occrTime',
    component: 'Input',
  },
  // {
  //   label: '全局事件代码',
  //   field: 'eventGlobaleCode',
  //   component: 'Input',
  // },
  // {
  //   label: '事件类型',
  //   field: 'eventType',
  //   component: 'Select',
  //   componentProps: {
  //     options: [],
  //   },
  // },
  // {
  //   label: '发生时间',
  //   field: 'occrTime',
  //   component: 'DatePicker',
  //   componentProps: {
  //     showTime: true,
  //     format: 'YYYY-MM-DD HH:mm:ss',
  //     valueFormat: 'x',
  //   },
  // },
  // {
  //   label: '部门id',
  //   field: 'deptId',
  //   component: 'Input',
  // },
]

export const updateFormSchema: FormSchema[] = [
  {
    label: '设备号',
    field: 'eqptCode',
    show: true,
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '事件详情',
    field: 'eventDesc',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '事件代码',
    field: 'eventCode',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '时间',
    field: 'occrTime',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  // {
  //   label: '全局事件代码',
  //   field: 'eventGlobaleCode',
  //   component: 'Input',
  // },
  // {
  //   label: '事件类型',
  //   field: 'eventType',
  //   component: 'Select',
  //   componentProps: {
  //     options: [],
  //   },
  // },
  // {
  //   label: '发生时间',
  //   field: 'occrTime',
  //   component: 'DatePicker',
  //   componentProps: {
  //     showTime: true,
  //     format: 'YYYY-MM-DD HH:mm:ss',
  //     valueFormat: 'x',
  //   },
  // },
  // {
  //   label: '部门id',
  //   field: 'deptId',
  //   component: 'Input',
  // },
]
