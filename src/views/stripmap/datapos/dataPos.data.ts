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
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: '数据类型',
          dataIndex: 'dataType',
          width: 160,
        },
        {
          title: '数据项代码',
          dataIndex: 'dataCode',
          width: 160,
        },
        {
          title: '数据项名称',
          dataIndex: 'dataName',
          width: 160,
        },
        {
          title: '数据项数值',
          dataIndex: 'dataVal',
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
        label: '设备编码',
        field: 'eqptCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据类型',
        field: 'dataType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '数据项代码',
        field: 'dataCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据项名称',
        field: 'dataName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据项数值',
        field: 'dataVal',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '数据类型',
          field: 'dataType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '数据项代码',
          field: 'dataCode',
            component: 'Input',
        },
        {
          label: '数据项名称',
          field: 'dataName',
            component: 'Input',
        },
        {
          label: '数据项数值',
          field: 'dataVal',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '数据类型',
          field: 'dataType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '数据项代码',
          field: 'dataCode',
            component: 'Input',
        },
        {
          label: '数据项名称',
          field: 'dataName',
            component: 'Input',
        },
        {
          label: '数据项数值',
          field: 'dataVal',
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
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]