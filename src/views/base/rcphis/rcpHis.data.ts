import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: 'Recipe名称',
          dataIndex: 'rcpName',
          width: 160,
        },
        {
          title: 'Recipe版本标识',
          dataIndex: 'rcpHisId',
          width: 160,
        },
        {
          title: 'Recipe来源',
          dataIndex: 'rcpImportSource',
          width: 160,
        },
        {
          title: 'Recipe版本类型',
          dataIndex: 'rcpVerType',
          width: 160,
        },
        {
          title: 'Recipe版本号',
          dataIndex: 'rcpVerCode',
          width: 160,
        },
        {
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: 'Recipe文件标识ID',
          dataIndex: 'rcpFileIdentId',
          width: 160,
        },
        {
          title: '描述',
          dataIndex: 'desc',
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
        label: 'Recipe名称',
        field: 'rcpName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe版本标识',
        field: 'rcpHisId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe来源',
        field: 'rcpImportSource',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe版本类型',
        field: 'rcpVerType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: 'Recipe版本号',
        field: 'rcpVerCode',
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
        label: 'Recipe文件标识ID',
        field: 'rcpFileIdentId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '描述',
        field: 'desc',
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
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe版本标识',
          field: 'rcpHisId',
            component: 'Input',
        },
        {
          label: 'Recipe来源',
          field: 'rcpImportSource',
            component: 'Input',
        },
        {
          label: 'Recipe版本类型',
          field: 'rcpVerType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'Recipe版本号',
          field: 'rcpVerCode',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: 'Recipe文件标识ID',
          field: 'rcpFileIdentId',
            component: 'Input',
        },
        {
          label: '描述',
          field: 'desc',
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
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe版本标识',
          field: 'rcpHisId',
            component: 'Input',
        },
        {
          label: 'Recipe来源',
          field: 'rcpImportSource',
            component: 'Input',
        },
        {
          label: 'Recipe版本类型',
          field: 'rcpVerType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'Recipe版本号',
          field: 'rcpVerCode',
            component: 'Input',
        },
        {
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: 'Recipe文件标识ID',
          field: 'rcpFileIdentId',
            component: 'Input',
        },
        {
          label: '描述',
          field: 'desc',
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
