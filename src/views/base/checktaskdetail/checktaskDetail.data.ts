import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '表单ID',
          dataIndex: 'checktaskCode',
          width: 160,
        },
        {
          title: '项目代码',
          dataIndex: 'itemCode',
          width: 160,
        },
        {
          title: '项目参数',
          dataIndex: 'itemValue',
          width: 160,
        },
        {
          title: '状态(通过/不通过)',
          dataIndex: 'itemState',
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
        label: '表单ID',
        field: 'checktaskCode',
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
        label: '项目参数',
        field: 'itemValue',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '状态(通过/不通过)',
        field: 'itemState',
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
          label: '表单ID',
          field: 'checktaskCode',
            component: 'Input',
        },
        {
          label: '项目代码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '项目参数',
          field: 'itemValue',
            component: 'Input',
        },
        {
          label: '状态(通过/不通过)',
          field: 'itemState',
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
          label: '表单ID',
          field: 'checktaskCode',
            component: 'Input',
        },
        {
          label: '项目代码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '项目参数',
          field: 'itemValue',
            component: 'Input',
        },
        {
          label: '状态(通过/不通过)',
          field: 'itemState',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]