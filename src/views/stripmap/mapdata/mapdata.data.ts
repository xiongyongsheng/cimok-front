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
          title: '版本号',
          dataIndex: 'dataVer',
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
          title: '空BIN数量',
          dataIndex: 'nullCnt',
          width: 160,
        },
        {
          title: '来料不良数量',
          dataIndex: 'xCnt',
          width: 160,
        },
        {
          title: 'MAP数据',
          dataIndex: 'mapData',
          width: 160,
        },
        {
          title: '数据类型(原始/转换后)',
          dataIndex: 'dataType',
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
        label: '版本号',
        field: 'dataVer',
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
        label: '空BIN数量',
        field: 'nullCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '来料不良数量',
        field: 'xCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'MAP数据',
        field: 'mapData',
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
          label: '版本号',
          field: 'dataVer',
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
          label: '空BIN数量',
          field: 'nullCnt',
            component: 'Input',
        },
        {
          label: '来料不良数量',
          field: 'xCnt',
            component: 'Input',
        },
        {
          label: 'MAP数据',
          field: 'mapData',
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
          label: '版本号',
          field: 'dataVer',
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
          label: '空BIN数量',
          field: 'nullCnt',
            component: 'Input',
        },
        {
          label: '来料不良数量',
          field: 'xCnt',
            component: 'Input',
        },
        {
          label: 'MAP数据',
          field: 'mapData',
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
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]