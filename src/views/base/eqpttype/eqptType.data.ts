import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: '设备类型代码',
          dataIndex: 'eqptTypeCode',
          width: 160,
        },
        {
          title: '设备类型名称',
          dataIndex: 'eqptTypeName',
          width: 160,
        },
        {
          title: '制造商',
          dataIndex: 'manufactureName',
          width: 160,
        },
        {
          title: '连接类型',
          dataIndex: 'linkType',
          width: 160,
        },
        {
          title: '通信类型',
          dataIndex: 'comType',
          width: 160,
        },
        {
          title: '通信模型',
          dataIndex: 'comModelCode',
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
        label: '设备类型代码',
        field: 'eqptTypeCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设备类型名称',
        field: 'eqptTypeName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '制造商',
        field: 'manufactureName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '连接类型',
        field: 'linkType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '通信类型',
        field: 'comType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '通信模型',
        field: 'comModelCode',
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
          label: '制造商',
          field: 'manufactureName',
            component: 'Input',
        },
        {
          label: '连接类型',
          field: 'linkType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '通信类型',
          field: 'comType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '通信模型',
          field: 'comModelCode',
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
          label: '制造商',
          field: 'manufactureName',
            component: 'Input',
        },
        {
          label: '连接类型',
          field: 'linkType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '通信类型',
          field: 'comType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '通信模型',
          field: 'comModelCode',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
