import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'

export const columns: BasicColumn[] = [

  {
    title: '控制号',
    dataIndex: 'eventId',
    width: 160,
  },
  {
    title: '异常措施',
    dataIndex: '',
    width: 160,
  },
  {
    title: '触发类型',
    dataIndex: 'eventType',
    width: 160,
  },
  {
    title: '来源',
    dataIndex: '',
    width: 160,
  },
  {
    title: '执行结果',
    dataIndex: '',
    width: 160,
  },
  {
    title: '创建人员',
    dataIndex: 'creator',
    width: 160,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    },
  },
]

export const searchFormSchema: FormSchema[] = [
  {
    label: ' ',
    labelWidth: 15,
    field: '',
    component: 'Input',
    componentProps: {
      placeholder: '项目名称'
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: '',
    component: 'Input',
    componentProps: {
      placeholder: '项目代码'
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
