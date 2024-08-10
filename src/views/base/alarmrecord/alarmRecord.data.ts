import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: '报警ID',
          dataIndex: 'alid',
          width: 160,
        },
        {
          title: '报警代码',
          dataIndex: 'alcd',
          width: 160,
        },
        {
          title: '报警信息',
          dataIndex: 'altx',
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
          title: '清除时间',
          dataIndex: 'clearTime',
          width: 180,
          customRender: ({ text }) => {
            return useRender.renderDate(text)
          },
        },
        {
          title: '持续时长',
          dataIndex: 'duration',
          width: 160,
        },
        {
          title: '管控措施ID',
          dataIndex: 'actiongSn',
          width: 160,
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
        label: '报警ID',
        field: 'alid',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '报警代码',
        field: 'alcd',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '报警信息',
        field: 'altx',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '发生时间',
        field: 'occrTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
      {
        label: '清除时间',
        field: 'clearTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
      {
        label: '持续时长',
        field: 'duration',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '管控措施ID',
        field: 'actiongSn',
          component: 'Input',
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
          label: '报警ID',
          field: 'alid',
            component: 'Input',
        },
        {
          label: '报警代码',
          field: 'alcd',
            component: 'Input',
        },
        {
          label: '报警信息',
          field: 'altx',
            component: 'Input',
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
          label: '清除时间',
          field: 'clearTime',
            component: 'DatePicker',
            componentProps: {
              showTime: true,
              format: 'YYYY-MM-DD HH:mm:ss',
              valueFormat: 'x',
            },
        },
        {
          label: '持续时长',
          field: 'duration',
            component: 'Input',
        },
        {
          label: '管控措施ID',
          field: 'actiongSn',
            component: 'Input',
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
          label: '报警ID',
          field: 'alid',
            component: 'Input',
        },
        {
          label: '报警代码',
          field: 'alcd',
            component: 'Input',
        },
        {
          label: '报警信息',
          field: 'altx',
            component: 'Input',
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
          label: '清除时间',
          field: 'clearTime',
            component: 'DatePicker',
            componentProps: {
              showTime: true,
              format: 'YYYY-MM-DD HH:mm:ss',
              valueFormat: 'x',
            },
        },
        {
          label: '持续时长',
          field: 'duration',
            component: 'Input',
        },
        {
          label: '管控措施ID',
          field: 'actiongSn',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
