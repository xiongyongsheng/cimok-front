import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
          defaultHidden:true
        },
        {
          title: '片号',
          dataIndex: 'waferId',
          width: 160,
        },
        {
          title: '数据版本',
          dataIndex: 'mapdataVer',
          width: 160,
        },
        {
          title: '总数',
          dataIndex: 'unitCnt',
          width: 160,
        },
        {
          title: '良品数量',
          dataIndex: 'goodCnt',
          width: 160,
        },
        {
          title: '不良数量',
          dataIndex: 'ngCnt',
          width: 160,
        },
        {
          title: '数据类型(原始/转换后)',
          dataIndex: 'dataType',
          width: 160,
        },
        {
          title: '图档数据',
          dataIndex: 'mapData',
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
        label: '晶圆ID',
        field: 'waferId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据版本',
        field: 'mapdataVer',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '总数',
        field: 'unitCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '良品数量',
        field: 'goodCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '不良数量',
        field: 'ngCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据类型(原始/转换后)',
        field: 'dataType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '图档数据',
        field: 'mapData',
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
          label: '晶圆ID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapdataVer',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
            component: 'Input',
        },
        {
          label: '良品数量',
          field: 'goodCnt',
            component: 'Input',
        },
        {
          label: '不良数量',
          field: 'ngCnt',
            component: 'Input',
        },
        {
          label: '数据类型(原始/转换后)',
          field: 'dataType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '图档数据',
          field: 'mapData',
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
          label: '晶圆ID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapdataVer',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
            component: 'Input',
        },
        {
          label: '良品数量',
          field: 'goodCnt',
            component: 'Input',
        },
        {
          label: '不良数量',
          field: 'ngCnt',
            component: 'Input',
        },
        {
          label: '数据类型(原始/转换后)',
          field: 'dataType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '图档数据',
          field: 'mapData',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
