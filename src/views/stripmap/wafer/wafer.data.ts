import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '条号',
          dataIndex: 'stripId',
          width: 160,
        },
        {
          title: '作业工步',
          dataIndex: 'processStep',
          width: 160,
        },
        {
          title: '作业设备号',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: 'WaferID',
          dataIndex: 'waferId',
          width: 160,
        },
        {
          title: '基板X坐标',
          dataIndex: 'stripX',
          width: 160,
        },
        {
          title: '基板Y坐标',
          dataIndex: 'stripY',
          width: 160,
        },
        {
          title: '基板层数',
          dataIndex: 'stripZ',
          width: 160,
        },
        {
          title: '晶圆X坐标',
          dataIndex: 'waferX',
          width: 160,
        },
        {
          title: '晶圆Y坐标',
          dataIndex: 'waferY',
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
        label: '条号',
        field: 'stripId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '作业工步',
        field: 'processStep',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '作业设备号',
        field: 'eqptCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'WaferID',
        field: 'waferId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '基板X坐标',
        field: 'stripX',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '基板Y坐标',
        field: 'stripY',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '基板层数',
        field: 'stripZ',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '晶圆X坐标',
        field: 'waferX',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '晶圆Y坐标',
        field: 'waferY',
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
          label: '条号',
          field: 'stripId',
            component: 'Input',
        },
        {
          label: '作业工步',
          field: 'processStep',
            component: 'Input',
        },
        {
          label: '作业设备号',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: 'WaferID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '基板X坐标',
          field: 'stripX',
            component: 'Input',
        },
        {
          label: '基板Y坐标',
          field: 'stripY',
            component: 'Input',
        },
        {
          label: '基板层数',
          field: 'stripZ',
            component: 'Input',
        },
        {
          label: '晶圆X坐标',
          field: 'waferX',
            component: 'Input',
        },
        {
          label: '晶圆Y坐标',
          field: 'waferY',
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
          label: '条号',
          field: 'stripId',
            component: 'Input',
        },
        {
          label: '作业工步',
          field: 'processStep',
            component: 'Input',
        },
        {
          label: '作业设备号',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: 'WaferID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '基板X坐标',
          field: 'stripX',
            component: 'Input',
        },
        {
          label: '基板Y坐标',
          field: 'stripY',
            component: 'Input',
        },
        {
          label: '基板层数',
          field: 'stripZ',
            component: 'Input',
        },
        {
          label: '晶圆X坐标',
          field: 'waferX',
            component: 'Input',
        },
        {
          label: '晶圆Y坐标',
          field: 'waferY',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]