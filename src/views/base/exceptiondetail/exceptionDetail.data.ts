import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: '控制号',
          dataIndex: 'excCode',
          width: 160,
        },
        {
          title: '异常措施',
          dataIndex: 'excRuleAction',
          width: 160,
        },
        {
          title: '触发类型',
          dataIndex: 'excType',
          width: 160,
        },
        {
          title: '来源',
          dataIndex: 'source',
          width: 160,
        },
        {
          title: '执行结果',
          dataIndex: 'handleState',
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
        label: '',
        labelWidth: 15,
        field: 'excType',
        component: 'Input',
        componentProps: {
          placeholder: '触发类型'
        },
        colProps: { span: 5 },
      },
      {
        label: ' ',
        labelWidth: 15,
        field: 'source',
        component: 'Input',
        componentProps: {
          placeholder: '来源'
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
    label: '管控号',
    field: 'excCode',
    
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '触发来源',
    field: 'source',
      component: 'Input',
      componentProps: {
        disabled: true,
      },
  },
  {
    label: '触发场景',
    field: 'excType',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  
]