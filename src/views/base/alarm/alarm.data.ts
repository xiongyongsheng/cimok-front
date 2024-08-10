import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 160,
    defaultHidden: true
  },
  {
    title: 'Alarm代码',
    dataIndex: 'alid',
    width: 160,
  },
  {
    title: '报警CODE',
    dataIndex: 'alcd',
    width: 160,
    defaultHidden: true
  },
  {
    title: 'Alarm名称',
    dataIndex: 'altx',
    width: 160,
  },
  {
    title: '设备类型ID',
    dataIndex: 'eqpTypeId',
    width: 160,
    defaultHidden: true
  },
  {
    title: '设备类型 ',
    dataIndex: 'eqptTypeCode',
    width: 160,
  },
  {
    title: '设备类型名称',
    dataIndex: 'eqptTypeName',
    width: 160,
    defaultHidden: true
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    width: 160,
    defaultHidden: true
  },
  {
    title: '启用状态',
    dataIndex: 'enable',
    width: 160,
  },
  {
    title: '是否管控',
    dataIndex: 'isControlled',
    width: 160,
  },
  {
    title: '部门id',
    dataIndex: 'deptId',
    width: 160,
    defaultHidden: true
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
    customRender: ({text}) => {
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
    customRender: ({text}) => {
      return useRender.renderDate(text)
    },
  },

]

export const searchFormSchema: FormSchema[] = [
  {
    label: '报警ID',
    field: 'alid',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '报警CODE',
    field: 'alcd',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '报警信息',
    field: 'altx',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '设备类型ID',
    field: 'eqpTypeId',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '设备类型代码',
    field: 'eqptTypeCode',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '设备类型名称',
    field: 'eqptTypeName',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '是否启用',
    field: 'enable',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '部门id',
    field: 'deptId',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '创建时间',
    field: 'createTime',
    component: 'RangePicker',
    colProps: {span: 8},
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
    label: '报警ID',
    field: 'alid',
    component: 'Input',
  },
  {
    label: '报警CODE',
    field: 'alcd',
    component: 'Input',
  },
  {
    label: '报警信息',
    field: 'altx',
    component: 'Input',
  },
  {
    label: '设备类型ID',
    field: 'eqpTypeId',
    component: 'Input',
  },
  {
    label: '设备类型代码',
    field: 'eqptTypeCode',
    component: 'Input',
  },
  {
    label: '设备类型名称',
    field: 'eqptTypeName',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'Input',
  },
  {
    label: '是否启用',
    field: 'enable',
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
    label: '报警ID',
    field: 'alid',
    component: 'Input',
  },
  {
    label: '报警CODE',
    field: 'alcd',
    component: 'Input',
  },
  {
    label: '报警信息',
    field: 'altx',
    component: 'Input',
  },
  {
    label: '设备类型ID',
    field: 'eqpTypeId',
    component: 'Input',
  },
  {
    label: '设备类型代码',
    field: 'eqptTypeCode',
    component: 'Input',
  },
  {
    label: '设备类型名称',
    field: 'eqptTypeName',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'Input',
  },
  {
    label: '是否启用',
    field: 'enable',
    component: 'Input',
  },
  {
    label: '部门id',
    field: 'deptId',
    component: 'Input',
  },
]
