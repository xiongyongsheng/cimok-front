import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '检验任务代码',
          dataIndex: 'checktaskTypeCode',
          width: 160,
        },
        {
          title: '检验任务名称',
          dataIndex: 'checktaskTypeName',
          width: 160,
        },
        {
          title: '项目代码',
          dataIndex: 'itemCode',
          width: 160,
        },
        {
          title: '是否必填',
          dataIndex: 'itemIsNessary',
          width: 160,
        },
        {
          title: '排序码',
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
        label: '检验任务代码',
        field: 'checktaskTypeCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '检验任务名称',
        field: 'checktaskTypeName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '项目代码',
        field: 'itemCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '是否必填',
        field: 'itemIsNessary',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '排序码',
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
          label: '检验任务代码',
          field: 'checktaskTypeCode',
            component: 'Input',
        },
        {
          label: '检验任务名称',
          field: 'checktaskTypeName',
            component: 'Input',
        },
        {
          label: '项目代码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '是否必填',
          field: 'itemIsNessary',
            component: 'Input',
        },
        {
          label: '排序码',
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
          label: '检验任务代码',
          field: 'checktaskTypeCode',
            component: 'Input',
        },
        {
          label: '检验任务名称',
          field: 'checktaskTypeName',
            component: 'Input',
        },
        {
          label: '项目代码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '是否必填',
          field: 'itemIsNessary',
            component: 'Input',
        },
        {
          label: '排序码',
          field: 'sortCode',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]