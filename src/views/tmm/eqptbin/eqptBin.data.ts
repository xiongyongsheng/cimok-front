import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '测试机编码',
          dataIndex: 'testerCode',
          width: 160,
        },
        {
          title: 'SoftBin',
          dataIndex: 'binId',
          width: 160,
        },
        {
          title: 'BIN类型;SB/HB',
          dataIndex: 'binType',
          width: 160,
        },
        {
          title: 'Bin组',
          dataIndex: 'binGroup',
          width: 160,
        },
        {
          title: 'P/F',
          dataIndex: 'pF',
          width: 160,
        },
        {
          title: 'SiteID;如果是总记录，则用T代替',
          dataIndex: 'siteId',
          width: 160,
        },
        {
          title: '数量',
          dataIndex: 'cnt',
          width: 160,
        },
        {
          title: '良率',
          dataIndex: 'yield',
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
        label: '测试机编码',
        field: 'testerCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'SoftBin',
        field: 'binId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'BIN类型;SB/HB',
        field: 'binType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: 'Bin组',
        field: 'binGroup',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'P/F',
        field: 'pF',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'SiteID;如果是总记录，则用T代替',
        field: 'siteId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数量',
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
          label: '测试机编码',
          field: 'testerCode',
            component: 'Input',
        },
        {
          label: 'SoftBin',
          field: 'binId',
            component: 'Input',
        },
        {
          label: 'BIN类型;SB/HB',
          field: 'binType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'Bin组',
          field: 'binGroup',
            component: 'Input',
        },
        {
          label: 'P/F',
          field: 'pF',
            component: 'Input',
        },
        {
          label: 'SiteID;如果是总记录，则用T代替',
          field: 'siteId',
            component: 'Input',
        },
        {
          label: '数量',
          field: 'cnt',
            component: 'Input',
        },
        {
          label: '良率',
          field: 'yield',
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
          label: '测试机编码',
          field: 'testerCode',
            component: 'Input',
        },
        {
          label: 'SoftBin',
          field: 'binId',
            component: 'Input',
        },
        {
          label: 'BIN类型;SB/HB',
          field: 'binType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: 'Bin组',
          field: 'binGroup',
            component: 'Input',
        },
        {
          label: 'P/F',
          field: 'pF',
            component: 'Input',
        },
        {
          label: 'SiteID;如果是总记录，则用T代替',
          field: 'siteId',
            component: 'Input',
        },
        {
          label: '数量',
          field: 'cnt',
            component: 'Input',
        },
        {
          label: '良率',
          field: 'yield',
            component: 'Input',
        },
]