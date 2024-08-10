import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '规则标识码',
          dataIndex: 'limitRuleId',
          width: 160,
        },
        {
          title: 'Recipe名称',
          dataIndex: 'rcpName',
          width: 160,
        },
        {
          title: '设备类型编码',
          dataIndex: 'eqptTypeCode',
          width: 160,
        },
        {
          title: '规则版本',
          dataIndex: 'ruleVerCode',
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
        label: '规则标识码',
        field: 'limitRuleId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe名称',
        field: 'rcpName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设备类型编码',
        field: 'eqptTypeCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '规则版本',
        field: 'ruleVerCode',
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
          label: '规则标识码',
          field: 'limitRuleId',
            component: 'Input',
        },
        {
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: '设备类型编码',
          field: 'eqptTypeCode',
            component: 'Input',
        },
        {
          label: '规则版本',
          field: 'ruleVerCode',
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
          label: '规则标识码',
          field: 'limitRuleId',
            component: 'Input',
        },
        {
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: '设备类型编码',
          field: 'eqptTypeCode',
            component: 'Input',
        },
        {
          label: '规则版本',
          field: 'ruleVerCode',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]