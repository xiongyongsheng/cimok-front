import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '晶圆ID',
          dataIndex: 'waferId',
          width: 160,
        },
        {
          title: '源',
          dataIndex: 'source',
          width: 160,
        },
        {
          title: '目标',
          dataIndex: 'target',
          width: 160,
        },
        {
          title: '数据版本',
          dataIndex: 'mapDataVer',
          width: 160,
        },
        {
          title: '操作类型',
          dataIndex: 'opType',
          width: 160,
        },
        {
          title: '设备号',
          dataIndex: 'eqptCode',
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
        label: '晶圆ID',
        field: 'waferId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '源',
        field: 'source',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '目标',
        field: 'target',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据版本',
        field: 'mapDataVer',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '操作类型',
        field: 'opType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '设备号',
        field: 'eqptCode',
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
          label: '晶圆ID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '目标',
          field: 'target',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapDataVer',
            component: 'Input',
        },
        {
          label: '操作类型',
          field: 'opType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '设备号',
          field: 'eqptCode',
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
          label: '晶圆ID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '目标',
          field: 'target',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapDataVer',
            component: 'Input',
        },
        {
          label: '操作类型',
          field: 'opType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '设备号',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]