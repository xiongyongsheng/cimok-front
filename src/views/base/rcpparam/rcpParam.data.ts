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
          title: '参数名称',
          dataIndex: 'paramName',
          width: 160,
        },
        {
          title: '参数代码',
          dataIndex: 'paramCode',
          width: 160,
        },
        {
          title: '参数别名',
          dataIndex: 'paramNick',
          width: 160,
        },
        {
          title: '参数值',
          dataIndex: 'realVal',
          width: 160,
        },
        {
          title: '排序',
          dataIndex: 'sortCode',
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
        label: '参数名称',
        field: 'paramName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数代码',
        field: 'paramCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数别名',
        field: 'paramNick',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数值',
        field: 'realVal',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '排序',
        field: 'sortCode',
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
          label: '参数名称',
          field: 'paramName',
            component: 'Input',
        },
        {
          label: '参数代码',
          field: 'paramCode',
            component: 'Input',
        },
        {
          label: '参数别名',
          field: 'paramNick',
            component: 'Input',
        },
        {
          label: '参数值',
          field: 'realVal',
            component: 'Input',
        },
        {
          label: '排序',
          field: 'sortCode',
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
          label: '参数名称',
          field: 'paramName',
            component: 'Input',
        },
        {
          label: '参数代码',
          field: 'paramCode',
            component: 'Input',
        },
        {
          label: '参数别名',
          field: 'paramNick',
            component: 'Input',
        },
        {
          label: '参数值',
          field: 'realVal',
            component: 'Input',
        },
        {
          label: '排序',
          field: 'sortCode',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
