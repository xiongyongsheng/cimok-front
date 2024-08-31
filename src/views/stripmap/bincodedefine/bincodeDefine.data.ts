import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '设备型号ID',
          dataIndex: 'eqptTypeId',
          width: 160,
        },
        {
          title: 'binCode',
          dataIndex: 'binCode',
          width: 160,
        },
        {
          title: '使用场景',
          dataIndex: 'usingScene',
          width: 160,
        },
        {
          title: 'bin类型',
          dataIndex: 'binType',
          width: 160,
        },
        {
          title: 'bin颜色',
          dataIndex: 'binColor',
          width: 160,
        },
        {
          title: '状态',
          dataIndex: 'status',
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
        label: '设备型号ID',
        field: 'eqptTypeId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'binCode',
        field: 'binCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '使用场景',
        field: 'usingScene',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'bin类型',
        field: 'binType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: 'bin颜色',
        field: 'binColor',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '状态',
        field: 'status',
          component: 'Radio',
          componentProps: {
              options: [],
          },
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
          label: '设备型号ID',
          field: 'eqptTypeId',
            component: 'Input',
        },
        {
          label: 'binCode',
          field: 'binCode',
            component: 'Input',
        },
        {
          label: '使用场景',
          field: 'usingScene',
            component: 'Input',
        },
        {
          label: 'bin类型',
          field: 'binType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'bin颜色',
          field: 'binColor',
            component: 'Input',
        },
        {
          label: '状态',
          field: 'status',
            component: 'RadioButtonGroup',
            componentProps: {
                options:[],
            },
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
          label: '设备型号ID',
          field: 'eqptTypeId',
            component: 'Input',
        },
        {
          label: 'binCode',
          field: 'binCode',
            component: 'Input',
        },
        {
          label: '使用场景',
          field: 'usingScene',
            component: 'Input',
        },
        {
          label: 'bin类型',
          field: 'binType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'bin颜色',
          field: 'binColor',
            component: 'Input',
        },
        {
          label: '状态',
          field: 'status',
            component: 'RadioButtonGroup',
            componentProps: {
                options:[],
            },
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]