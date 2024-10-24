import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '客户编码',
          dataIndex: 'custCode',
          width: 160,
        },
        {
          title: '产品编码',
          dataIndex: 'productCode',
          width: 160,
        },
        {
          title: 'siteid',
          dataIndex: 'siteId',
          width: 160,
        },
        {
          title: 'bin类型',
          dataIndex: 'binType',
          width: 160,
        },
        {
          title: 'binid',
          dataIndex: 'binId',
          width: 160,
        },
        {
          title: '最小良率',
          dataIndex: 'minYield',
          width: 160,
        },
        {
          title: '最大良率',
          dataIndex: 'maxYield',
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
        label: '客户编码',
        field: 'custCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '产品编码',
        field: 'productCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'siteid',
        field: 'siteId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'bin类型',
        field: 'binType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: 'binid',
        field: 'binId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '最小良率',
        field: 'minYield',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '最大良率',
        field: 'maxYield',
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
          label: '客户编码',
          field: 'custCode',
            component: 'Input',
        },
        {
          label: '产品编码',
          field: 'productCode',
            component: 'Input',
        },
        {
          label: 'siteid',
          field: 'siteId',
            component: 'Input',
        },
        {
          label: 'bin类型',
          field: 'binType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'binid',
          field: 'binId',
            component: 'Input',
        },
        {
          label: '最小良率',
          field: 'minYield',
            component: 'Input',
        },
        {
          label: '最大良率',
          field: 'maxYield',
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
          label: '客户编码',
          field: 'custCode',
            component: 'Input',
        },
        {
          label: '产品编码',
          field: 'productCode',
            component: 'Input',
        },
        {
          label: 'siteid',
          field: 'siteId',
            component: 'Input',
        },
        {
          label: 'bin类型',
          field: 'binType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'binid',
          field: 'binId',
            component: 'Input',
        },
        {
          label: '最小良率',
          field: 'minYield',
            component: 'Input',
        },
        {
          label: '最大良率',
          field: 'maxYield',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]