import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: 'SN号',
          dataIndex: 'actiongSn',
          width: 160,
        },
        {
          title: '规则编码',
          dataIndex: 'ruleId',
          width: 160,
        },
        {
          title: '结果',
          dataIndex: 'result',
          width: 160,
        },
        {
          title: '触发类型(手动/自动)',
          dataIndex: 'sourceType',
          width: 160,
        },
        {
          title: '来源',
          dataIndex: 'source',
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
        label: 'SN号',
        field: 'actiongSn',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '规则编码',
        field: 'ruleId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '结果',
        field: 'result',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '触发类型(手动/自动)',
        field: 'sourceType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '来源',
        field: 'source',
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
        label: '创建人',
        field: 'creator',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '创建时间',
        field: 'createTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
      {
        label: '更新人',
        field: 'updater',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '更新时间',
        field: 'updateTime',
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
          label: 'SN号',
          field: 'actiongSn',
            component: 'Input',
        },
        {
          label: '规则编码',
          field: 'ruleId',
            component: 'Input',
        },
        {
          label: '结果',
          field: 'result',
            component: 'Input',
        },
        {
          label: '触发类型(手动/自动)',
          field: 'sourceType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '来源',
          field: 'source',
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
          label: 'SN号',
          field: 'actiongSn',
            component: 'Input',
        },
        {
          label: '规则编码',
          field: 'ruleId',
            component: 'Input',
        },
        {
          label: '结果',
          field: 'result',
            component: 'Input',
        },
        {
          label: '触发类型(手动/自动)',
          field: 'sourceType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '来源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]