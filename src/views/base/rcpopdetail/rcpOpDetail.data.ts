import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: '操作的唯一标识ID',
          dataIndex: 'opIdentId',
          width: 160,
        },
        {
          title: '文件名称',
          dataIndex: 'fildName',
          width: 160,
        },
        {
          title: '文件路径',
          dataIndex: 'filePath',
          width: 160,
        },
        {
          title: '文件标识',
          dataIndex: 'fileId',
          width: 160,
        },
        {
          title: '事件详情',
          dataIndex: 'description',
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
        label: '操作的唯一标识ID',
        field: 'opIdentId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '文件名称',
        field: 'fildName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '文件路径',
        field: 'filePath',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '文件标识',
        field: 'fileId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '事件详情',
        field: 'description',
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
          label: '操作的唯一标识ID',
          field: 'opIdentId',
            component: 'Input',
        },
        {
          label: '文件名称',
          field: 'fildName',
            component: 'Input',
        },
        {
          label: '文件路径',
          field: 'filePath',
            component: 'Input',
        },
        {
          label: '文件标识',
          field: 'fileId',
            component: 'Input',
        },
        {
          label: '事件详情',
          field: 'description',
            component: 'Editor',
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
          label: '操作的唯一标识ID',
          field: 'opIdentId',
            component: 'Input',
        },
        {
          label: '文件名称',
          field: 'fildName',
            component: 'Input',
        },
        {
          label: '文件路径',
          field: 'filePath',
            component: 'Input',
        },
        {
          label: '文件标识',
          field: 'fileId',
            component: 'Input',
        },
        {
          label: '事件详情',
          field: 'description',
            component: 'Editor',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
