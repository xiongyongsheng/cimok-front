import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: '规则ID',
          dataIndex: 'limitRuleId',
          width: 160,
        },
        {
          title: '参数编码',
          dataIndex: 'paramCode',
          width: 160,
        },
        {
          title: '参数名称',
          dataIndex: 'paramName',
          width: 160,
        },
        {
          title: '最大值',
          dataIndex: 'maxVal',
          width: 160,
        },
        {
          title: '最小值',
          dataIndex: 'minVal',
          width: 160,
        },
        {
          title: '异常措施',
          dataIndex: 'ocMethod',
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
        label: '规则ID',
        field: 'limitRuleId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数编码',
        field: 'paramCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数名称',
        field: 'paramName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '最大值',
        field: 'maxVal',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '最小值',
        field: 'minVal',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '异常措施',
        field: 'ocMethod',
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
          label: '规则ID',
          field: 'limitRuleId',
            component: 'Input',
        },
        {
          label: '参数编码',
          field: 'paramCode',
            component: 'Input',
        },
        {
          label: '参数名称',
          field: 'paramName',
            component: 'Input',
        },
        {
          label: '最大值',
          field: 'maxVal',
            component: 'Input',
        },
        {
          label: '最小值',
          field: 'minVal',
            component: 'Input',
        },
        {
          label: '异常措施',
          field: 'ocMethod',
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
          label: '规则ID',
          field: 'limitRuleId',
            component: 'Input',
        },
        {
          label: '参数编码',
          field: 'paramCode',
            component: 'Input',
        },
        {
          label: '参数名称',
          field: 'paramName',
            component: 'Input',
        },
        {
          label: '最大值',
          field: 'maxVal',
            component: 'Input',
        },
        {
          label: '最小值',
          field: 'minVal',
            component: 'Input',
        },
        {
          label: '异常措施',
          field: 'ocMethod',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]