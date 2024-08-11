import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '客户代码',
          dataIndex: 'custCode',
          width: 160,
        },
        {
          title: '芯片型号',
          dataIndex: 'deviceCode',
          width: 160,
        },
        {
          title: '晶圆批号',
          dataIndex: 'waferLot',
          width: 160,
        },
        {
          title: '原始代码',
          dataIndex: 'sourceCode',
          width: 160,
        },
        {
          title: '目标代码',
          dataIndex: 'targetCode',
          width: 160,
        },
        {
          title: '代码类型',
          dataIndex: 'codeType',
          width: 160,
        },
        {
          title: '颜色',
          dataIndex: 'binColor',
          width: 160,
        },
        {
          title: '部门id',
          dataIndex: 'deptId',
          width: 160,
        },
        {
          title: '创建人',
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
        {
          title: '更新人',
          dataIndex: 'updater',
          width: 160,
        },
        {
          title: '更新时间',
          dataIndex: 'updateTime',
          width: 180,
          customRender: ({ text }) => {
            return useRender.renderDate(text)
          },
        },
]

export const searchFormSchema: FormSchema[] = [
      {
        label: '客户代码',
        field: 'custCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '芯片型号',
        field: 'deviceCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '晶圆批号',
        field: 'waferLot',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '原始代码',
        field: 'sourceCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '目标代码',
        field: 'targetCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '代码类型',
        field: 'codeType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '颜色',
        field: 'binColor',
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
          label: '客户代码',
          field: 'custCode',
            component: 'Input',
        },
        {
          label: '芯片型号',
          field: 'deviceCode',
            component: 'Input',
        },
        {
          label: '晶圆批号',
          field: 'waferLot',
            component: 'Input',
        },
        {
          label: '原始代码',
          field: 'sourceCode',
            component: 'Input',
        },
        {
          label: '目标代码',
          field: 'targetCode',
            component: 'Input',
        },
        {
          label: '代码类型',
          field: 'codeType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '颜色',
          field: 'binColor',
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
          label: '客户代码',
          field: 'custCode',
            component: 'Input',
        },
        {
          label: '芯片型号',
          field: 'deviceCode',
            component: 'Input',
        },
        {
          label: '晶圆批号',
          field: 'waferLot',
            component: 'Input',
        },
        {
          label: '原始代码',
          field: 'sourceCode',
            component: 'Input',
        },
        {
          label: '目标代码',
          field: 'targetCode',
            component: 'Input',
        },
        {
          label: '代码类型',
          field: 'codeType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '颜色',
          field: 'binColor',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]