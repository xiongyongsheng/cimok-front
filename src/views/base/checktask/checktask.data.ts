import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '单据号',
          dataIndex: 'checktaskCode',
          width: 160,
        },
        {
          title: '单据类型',
          dataIndex: 'checktaskTypeCode',
          width: 160,
        },
        {
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: '批次号',
          dataIndex: 'lotId',
          width: 160,
        },
        {
          title: '执行角色',
          dataIndex: 'executorRole',
          width: 160,
        },
        {
          title: '完成人',
          dataIndex: 'finishUser',
          width: 160,
        },
        {
          title: '单据来源',
          dataIndex: 'source',
          width: 160,
        },
        {
          title: '任务状态(通过/不通过)',
          dataIndex: 'checktaskState',
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
        label: '单据号',
        field: 'checktaskCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '单据类型',
        field: 'checktaskTypeCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设备编码',
        field: 'eqptCode',
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
        label: '执行角色',
        field: 'executorRole',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '完成人',
        field: 'finishUser',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '单据来源',
        field: 'source',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '任务状态(通过/不通过)',
        field: 'checktaskState',
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
          label: '单据号',
          field: 'checktaskCode',
            component: 'Input',
        },
        {
          label: '单据类型',
          field: 'checktaskTypeCode',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '批次号',
          field: 'lotId',
            component: 'Input',
        },
        {
          label: '执行角色',
          field: 'executorRole',
            component: 'Input',
        },
        {
          label: '完成人',
          field: 'finishUser',
            component: 'Input',
        },
        {
          label: '单据来源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '任务状态(通过/不通过)',
          field: 'checktaskState',
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
          label: '单据号',
          field: 'checktaskCode',
            component: 'Input',
        },
        {
          label: '单据类型',
          field: 'checktaskTypeCode',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '批次号',
          field: 'lotId',
            component: 'Input',
        },
        {
          label: '执行角色',
          field: 'executorRole',
            component: 'Input',
        },
        {
          label: '完成人',
          field: 'finishUser',
            component: 'Input',
        },
        {
          label: '单据来源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '任务状态(通过/不通过)',
          field: 'checktaskState',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]