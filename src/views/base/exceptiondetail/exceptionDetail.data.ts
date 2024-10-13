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
          title: '异常代码',
          dataIndex: 'excCode',
          width: 160,
        },
        {
          title: '异常类型',
          dataIndex: 'excType',
          width: 160,
        },
        {
          title: '异常描述',
          dataIndex: 'excDesc',
          width: 160,
        },
        {
          title: '来源',
          dataIndex: 'source',
          width: 160,
        },
        {
          title: '异常管控行动',
          dataIndex: 'excRuleAction',
          width: 160,
        },
        {
          title: '异常管控行动目标;如果是点检单，或者其他可关联系统，放在此字段',
          dataIndex: 'excRuleActionTarget',
          width: 160,
        },
        {
          title: '处理状态',
          dataIndex: 'handleState',
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
        label: '设备编码',
        field: 'eqptCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '异常代码',
        field: 'excCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '异常类型',
        field: 'excType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '异常描述',
        field: 'excDesc',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '来源',
        field: 'source',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '异常管控行动',
        field: 'excRuleAction',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '异常管控行动目标;如果是点检单，或者其他可关联系统，放在此字段',
        field: 'excRuleActionTarget',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '处理状态',
        field: 'handleState',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '异常代码',
          field: 'excCode',
            component: 'Input',
        },
        {
          label: '异常类型',
          field: 'excType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '异常描述',
          field: 'excDesc',
            component: 'Input',
        },
        {
          label: '来源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '异常管控行动',
          field: 'excRuleAction',
            component: 'Input',
        },
        {
          label: '异常管控行动目标;如果是点检单，或者其他可关联系统，放在此字段',
          field: 'excRuleActionTarget',
            component: 'Input',
        },
        {
          label: '处理状态',
          field: 'handleState',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '异常代码',
          field: 'excCode',
            component: 'Input',
        },
        {
          label: '异常类型',
          field: 'excType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '异常描述',
          field: 'excDesc',
            component: 'Input',
        },
        {
          label: '来源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '异常管控行动',
          field: 'excRuleAction',
            component: 'Input',
        },
        {
          label: '异常管控行动目标;如果是点检单，或者其他可关联系统，放在此字段',
          field: 'excRuleActionTarget',
            component: 'Input',
        },
        {
          label: '处理状态',
          field: 'handleState',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]