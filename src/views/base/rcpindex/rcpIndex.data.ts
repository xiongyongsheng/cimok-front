import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: '设备类型编码',
          dataIndex: 'eqpTypeCode',
          width: 160,
        },
        {
          title: '设备类型名称',
          dataIndex: 'eqpTypeName',
          width: 160,
        },
        {
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: 'Recipe名称',
          dataIndex: 'rcpName',
          width: 160,
        },
        {
          title: 'Recipe版本类型',
          dataIndex: 'rcpVerType',
          width: 160,
        },
        {
          title: 'Recipe版本号',
          dataIndex: 'rcpVerCode',
          width: 160,
        },
        {
          title: 'Recipe版本标识',
          dataIndex: 'rcpHisId',
          width: 160,
        },
        {
          title: 'Recipe参数范围管控版本',
          dataIndex: 'rcpLimitRuleId',
          width: 160,
        },
        {
          title: '部门id',
          dataIndex: 'deptId',
          width: 160,
        },
        {
          title: '工作流结果',
          dataIndex: 'status',
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
        label: '设备类型编码',
        field: 'eqpTypeCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设备类型名称',
        field: 'eqpTypeName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设备编码',
        field: 'eqptCode',
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
        label: 'Recipe版本类型',
        field: 'rcpVerType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: 'Recipe版本号',
        field: 'rcpVerCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe版本标识',
        field: 'rcpHisId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe参数范围管控版本',
        field: 'rcpLimitRuleId',
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
        label: '工作流结果',
        field: 'status',
          component: 'Radio',
          componentProps: {
              options: [],
          },
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
          label: '设备类型编码',
          field: 'eqpTypeCode',
            component: 'Input',
        },
        {
          label: '设备类型名称',
          field: 'eqpTypeName',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe版本类型',
          field: 'rcpVerType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'Recipe版本号',
          field: 'rcpVerCode',
            component: 'Input',
        },
        {
          label: 'Recipe版本标识',
          field: 'rcpHisId',
            component: 'Input',
        },
        {
          label: 'Recipe参数范围管控版本',
          field: 'rcpLimitRuleId',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
        {
          label: '流程实例ID',
          field: 'processInstanceId',
            component: 'Input',
        },
        {
          label: '工作流结果',
          field: 'status',
            component: 'RadioButtonGroup',
            componentProps: {
                options:[],
            },
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
          label: '设备类型编码',
          field: 'eqpTypeCode',
            component: 'Input',
        },
        {
          label: '设备类型名称',
          field: 'eqpTypeName',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe版本类型',
          field: 'rcpVerType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'Recipe版本号',
          field: 'rcpVerCode',
            component: 'Input',
        },
        {
          label: 'Recipe版本标识',
          field: 'rcpHisId',
            component: 'Input',
        },
        {
          label: 'Recipe参数范围管控版本',
          field: 'rcpLimitRuleId',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
        {
          label: '工作流结果',
          field: 'status',
            component: 'RadioButtonGroup',
            componentProps: {
                options:[],
            },
        },
]
