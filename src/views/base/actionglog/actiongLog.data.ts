import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: 'SN号',
          dataIndex: 'actionSn',
          width: 160,
        },
        {
          title: '措施类型',
          dataIndex: 'actionType',
          width: 160,
        },
        {
          title: '目标',
          dataIndex: 'actionTarget',
          width: 160,
        },
        {
          title: '执行结果',
          dataIndex: 'actionResult',
          width: 160,
        },
        {
          title: '备注信息',
          dataIndex: 'remarks',
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
        label: 'SN号',
        field: 'actionSn',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '措施类型',
        field: 'actionType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '目标',
        field: 'actionTarget',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '执行结果',
        field: 'actionResult',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '备注信息',
        field: 'remarks',
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
          label: 'SN号',
          field: 'actionSn',
            component: 'Input',
        },
        {
          label: '措施类型',
          field: 'actionType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '目标',
          field: 'actionTarget',
            component: 'Input',
        },
        {
          label: '执行结果',
          field: 'actionResult',
            component: 'Input',
        },
        {
          label: '备注信息',
          field: 'remarks',
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
          label: 'SN号',
          field: 'actionSn',
            component: 'Input',
        },
        {
          label: '措施类型',
          field: 'actionType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '目标',
          field: 'actionTarget',
            component: 'Input',
        },
        {
          label: '执行结果',
          field: 'actionResult',
            component: 'Input',
        },
        {
          label: '备注信息',
          field: 'remarks',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]