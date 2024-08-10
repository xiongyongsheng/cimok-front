import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: 'Recipe名称',
          dataIndex: 'rcpName',
          width: 160,
        },
        {
          title: 'Recipe版本标识',
          dataIndex: 'rcpHisId',
          width: 160,
        },
        {
          title: '设备类型编码',
          dataIndex: 'eqpTypeCode',
          width: 160,
        },
        {
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: '产品类型',
          dataIndex: 'productCode',
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
        label: 'Recipe名称',
        field: 'rcpName',
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
        label: '设备类型编码',
        field: 'eqpTypeCode',
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
        label: '产品类型',
        field: 'productCode',
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
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe版本标识',
          field: 'rcpHisId',
            component: 'Input',
        },
        {
          label: '设备类型编码',
          field: 'eqpTypeCode',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '产品类型',
          field: 'productCode',
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
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe版本标识',
          field: 'rcpHisId',
            component: 'Input',
        },
        {
          label: '设备类型编码',
          field: 'eqpTypeCode',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '产品类型',
          field: 'productCode',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
