import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '产品编码',
          dataIndex: 'deviceCode',
          width: 160,
        },
        {
          title: '批次号',
          dataIndex: 'lotId',
          width: 160,
        },
        {
          title: '行数',
          dataIndex: 'rows',
          width: 160,
        },
        {
          title: '列数',
          dataIndex: 'cols',
          width: 160,
        },
        {
          title: '块数',
          dataIndex: 'blocks',
          width: 160,
        },
        {
          title: '总数',
          dataIndex: 'unitCnt',
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
        label: '产品编码',
        field: 'deviceCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '批次号',
        field: 'lotId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '行数',
        field: 'rows',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '列数',
        field: 'cols',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '块数',
        field: 'blocks',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '总数',
        field: 'unitCnt',
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
          label: '产品编码',
          field: 'deviceCode',
            component: 'Input',
        },
        {
          label: '批次号',
          field: 'lotId',
            component: 'Input',
        },
        {
          label: '行数',
          field: 'rows',
            component: 'Input',
        },
        {
          label: '列数',
          field: 'cols',
            component: 'Input',
        },
        {
          label: '块数',
          field: 'blocks',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
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
          label: '产品编码',
          field: 'deviceCode',
            component: 'Input',
        },
        {
          label: '批次号',
          field: 'lotId',
            component: 'Input',
        },
        {
          label: '行数',
          field: 'rows',
            component: 'Input',
        },
        {
          label: '列数',
          field: 'cols',
            component: 'Input',
        },
        {
          label: '块数',
          field: 'blocks',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]