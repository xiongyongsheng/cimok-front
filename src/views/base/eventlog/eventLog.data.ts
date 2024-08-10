import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: '事件ID',
          dataIndex: 'eventId',
          width: 160,
        },
        {
          title: '事件代码',
          dataIndex: 'eventCode',
          width: 160,
        },
        {
          title: '全局事件代码',
          dataIndex: 'eventGlobaleCode',
          width: 160,
        },
        {
          title: '事件类型',
          dataIndex: 'eventType',
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
        {
          title: '部门id',
          dataIndex: 'deptId',
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
        label: '设备编码',
        field: 'eqptCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '事件ID',
        field: 'eventId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '事件代码',
        field: 'eventCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '全局事件代码',
        field: 'eventGlobaleCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '事件类型',
        field: 'eventType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '发生时间',
        field: 'occrTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
      {
        label: '部门id',
        field: 'deptId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '创建时间',
        field: 'createTime',
          component: 'RangePicker',
        colProps: { span: 8 },
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
                options:[],
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
                options:[],
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
