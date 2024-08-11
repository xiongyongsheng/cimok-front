import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: '作业工步',
          dataIndex: 'stepCode',
          width: 160,
        },
        {
          title: '装片数量',
          dataIndex: 'bondChipCnt',
          width: 160,
        },
        {
          title: '是否开启收集报警',
          dataIndex: 'alarmCollect',
          width: 160,
        },
        {
          title: '是否开启收集偏移量',
          dataIndex: 'correlationCollect',
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
        label: '设备编码',
        field: 'eqptCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '作业工步',
        field: 'stepCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '装片数量',
        field: 'bondChipCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '是否开启收集报警',
        field: 'alarmCollect',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '是否开启收集偏移量',
        field: 'correlationCollect',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '作业工步',
          field: 'stepCode',
            component: 'Input',
        },
        {
          label: '装片数量',
          field: 'bondChipCnt',
            component: 'Input',
        },
        {
          label: '是否开启收集报警',
          field: 'alarmCollect',
            component: 'Input',
        },
        {
          label: '是否开启收集偏移量',
          field: 'correlationCollect',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '作业工步',
          field: 'stepCode',
            component: 'Input',
        },
        {
          label: '装片数量',
          field: 'bondChipCnt',
            component: 'Input',
        },
        {
          label: '是否开启收集报警',
          field: 'alarmCollect',
            component: 'Input',
        },
        {
          label: '是否开启收集偏移量',
          field: 'correlationCollect',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]