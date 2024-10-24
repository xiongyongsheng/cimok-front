import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '测试记录ID;批次号+T代表合并记录',
          dataIndex: 'testRecordId',
          width: 160,
        },
        {
          title: '项目名称',
          dataIndex: 'itemName',
          width: 160,
        },
        {
          title: 'SiteID;如果是合并记录，则用T标识',
          dataIndex: 'site',
          width: 160,
        },
        {
          title: '总数',
          dataIndex: 'cnt',
          width: 160,
        },
        {
          title: '良率',
          dataIndex: 'yield',
          width: 160,
        },
        {
          title: '排序号',
          dataIndex: 'sortCode',
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
        label: '测试记录ID;批次号+T代表合并记录',
        field: 'testRecordId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '项目名称',
        field: 'itemName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'SiteID;如果是合并记录，则用T标识',
        field: 'site',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '总数',
        field: 'cnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '良率',
        field: 'yield',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '排序号',
        field: 'sortCode',
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
          label: '测试记录ID;批次号+T代表合并记录',
          field: 'testRecordId',
            component: 'Input',
        },
        {
          label: '项目名称',
          field: 'itemName',
            component: 'Input',
        },
        {
          label: 'SiteID;如果是合并记录，则用T标识',
          field: 'site',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'cnt',
            component: 'Input',
        },
        {
          label: '良率',
          field: 'yield',
            component: 'Input',
        },
        {
          label: '排序号',
          field: 'sortCode',
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
          label: '测试记录ID;批次号+T代表合并记录',
          field: 'testRecordId',
            component: 'Input',
        },
        {
          label: '项目名称',
          field: 'itemName',
            component: 'Input',
        },
        {
          label: 'SiteID;如果是合并记录，则用T标识',
          field: 'site',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'cnt',
            component: 'Input',
        },
        {
          label: '良率',
          field: 'yield',
            component: 'Input',
        },
        {
          label: '排序号',
          field: 'sortCode',
            component: 'Input',
        },
]