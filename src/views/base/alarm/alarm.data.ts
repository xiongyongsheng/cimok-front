import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const columns: BasicColumn[] = [
  {
    title: 'Alarm代码',
    dataIndex: 'alid',
    width: 160,
    customRender: ({ record }) => {
      return h(RouterLink, {
        to: '/emm/alarm-rule',
      }, record.alid)
    }
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
    title: '设备类型',
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
    defaultHidden: true
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
    label: ' ',
    labelWidth: 15,
    field: 'alid',
    component: 'Input',
    componentProps: {
      placeholder: 'Alarm代码',
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'isControlled',
    component: 'Select',
    componentProps: {
      placeholder: '是否管控',
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'eqptTypeCode',
    component: 'Select',
    componentProps: {
      placeholder: '设备类型',
    },
    colProps: { span: 5 },
  },
]

export const createFormSchema: FormSchema[] = [
  {
    label: '设备型号',
    field: 'eqpTypeId',
    component: 'Select',
    required: true,
    componentProps: {
      placeholder: '请选择设备型号',
    },
  },
  {
    label: 'AlarmID',
    field: 'alid',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入AlarmID',
    },
  },
  {
    label: 'AlarmCode',
    field: 'alcd',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入AlarmCode',
    },
  },
  {
    label: 'AlarmName',
    field: 'altx',
    component: 'InputTextArea',
    required: true,
    componentProps: {
      maxLength: 200,
      rows: 5,
      placeholder: '请输入AlarmName',
    },
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
    label: '设备型号',
    field: 'eqpTypeId',
    component: 'Select',
    required: true,
    componentProps: {
      placeholder: '请选择设备型号',
    },
  },
  {
    label: 'AlarmID',
    field: 'alid',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入AlarmID',
    },
  },
  {
    label: 'AlarmCode',
    field: 'alcd',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入AlarmCode',
    },
  },
  {
    label: 'AlarmName',
    field: 'altx',
    component: 'InputTextArea',
    required: true,
    componentProps: {
      maxLength: 200,
      rows: 5,
      placeholder: '请输入AlarmName',
    },
  },
]
