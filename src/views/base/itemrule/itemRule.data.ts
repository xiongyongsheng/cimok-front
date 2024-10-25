import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
          ifShow: false,
        },
        {
          title: '项目编码',
          dataIndex: 'itemCode',
          ifShow: false,

        },
        {
          title: '客户代码',
          dataIndex: 'custCode',
          editRow: true,
          editRule: true,
          editComponent: 'Input',
          width: 60,
        },
        {
          title: '产品名称',
          dataIndex: 'productCode',
          editRow: true,
          editComponent: 'Input',
          width: 60,
        },
        {
          title: '设备型号',
          dataIndex: 'eqptType',
          editRow: true,
          editComponent: 'Input',
          width: 160,
        },
        {
          title: '理论上限',
          dataIndex: 'upperLimit',
          editRow: true,
          editComponent: 'Input',
          width: 60,
        },
        {
          title: '理论下限',
          dataIndex: 'lowerLimit',
          editRow: true,
          editComponent: 'Input',
          width: 60,
        }
]

export const searchFormSchema: FormSchema[] = [
      {
        label: '项目编码',
        field: 'itemCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '客户代码',
        field: 'custCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '产品名称',
        field: 'productCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设备型号',
        field: 'eqptType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '理论上限',
        field: 'upperLimit',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '理论下限',
        field: 'lowerLimit',
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
          label: '项目编码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '客户代码',
          field: 'custCode',
            component: 'Input',
        },
        {
          label: '产品名称',
          field: 'productCode',
            component: 'Input',
        },
        {
          label: '设备型号',
          field: 'eqptType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '理论上限',
          field: 'upperLimit',
            component: 'Input',
        },
        {
          label: '理论下限',
          field: 'lowerLimit',
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
          label: '项目编码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '客户代码',
          field: 'custCode',
            component: 'Input',
        },
        {
          label: '产品名称',
          field: 'productCode',
            component: 'Input',
        },
        {
          label: '设备型号',
          field: 'eqptType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '理论上限',
          field: 'upperLimit',
            component: 'Input',
        },
        {
          label: '理论下限',
          field: 'lowerLimit',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]

export const ruleListFormSchema: FormSchema[] = [
  {
    label: '项目名称',
    field: 'itemName',
    dynamicDisabled: true,
    component: 'Input',
  },
  {
    label: '项目编码',
    field: 'itemCode',
    dynamicDisabled: true,
    component: 'Input',
  },
]
