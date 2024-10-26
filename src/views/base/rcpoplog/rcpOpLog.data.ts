import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: '22111',
          dataIndex: 'rcpName',
          width: 160,
        },
        {
          title: 'Recipe类型',
          dataIndex: 'rcpVerType',
          width: 160,
        },
        {
          title: 'Recipe版本号',
          dataIndex: 'rcpVerCode',
          width: 160,
        },
        {
          title: 'Recipe文件的标识',
          dataIndex: 'rcpIdentId',
          width: 160,
        },
        {
          title: 'Recipe操作类型',
          dataIndex: 'rcpOpType',
          width: 160,
        },
        {
          title: '操作的唯一标识ID',
          dataIndex: 'opIdentId',
          width: 160,
        },
        {
          title: '原始点;在此场景下，可以是RCP原始版本，也可以是系统，',
          dataIndex: 'source',
          width: 160,
        },
        {
          title: '目标;在此场景下，可以是RCP升级版本，也可以是设备号，',
          dataIndex: 'target',
          width: 160,
        },
        {
          title: '结果;结果，如下载成本，解析成功，审批通过，审批退回',
          dataIndex: 'opResult',
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
        label: 'Recipe类型',
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
        label: 'Recipe文件的标识',
        field: 'rcpIdentId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe操作类型',
        field: 'rcpOpType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '操作的唯一标识ID',
        field: 'opIdentId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '原始点;在此场景下，可以是RCP原始版本，也可以是系统，',
        field: 'source',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '目标;在此场景下，可以是RCP升级版本，也可以是设备号，',
        field: 'target',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '结果;结果，如下载成本，解析成功，审批通过，审批退回',
        field: 'opResult',
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
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe类型',
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
          label: 'Recipe文件的标识',
          field: 'rcpIdentId',
            component: 'Input',
        },
        {
          label: 'Recipe操作类型',
          field: 'rcpOpType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '操作的唯一标识ID',
          field: 'opIdentId',
            component: 'Input',
        },
        {
          label: '原始点;在此场景下，可以是RCP原始版本，也可以是系统，',
          field: 'source',
            component: 'Input',
        },
        {
          label: '目标;在此场景下，可以是RCP升级版本，也可以是设备号，',
          field: 'target',
            component: 'Input',
        },
        {
          label: '结果;结果，如下载成本，解析成功，审批通过，审批退回',
          field: 'opResult',
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
          label: 'Recipe名称',
          field: 'rcpName',
            component: 'Input',
        },
        {
          label: 'Recipe类型',
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
          label: 'Recipe文件的标识',
          field: 'rcpIdentId',
            component: 'Input',
        },
        {
          label: 'Recipe操作类型',
          field: 'rcpOpType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '操作的唯一标识ID',
          field: 'opIdentId',
            component: 'Input',
        },
        {
          label: '原始点;在此场景下，可以是RCP原始版本，也可以是系统，',
          field: 'source',
            component: 'Input',
        },
        {
          label: '目标;在此场景下，可以是RCP升级版本，也可以是设备号，',
          field: 'target',
            component: 'Input',
        },
        {
          label: '结果;结果，如下载成本，解析成功，审批通过，审批退回',
          field: 'opResult',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
