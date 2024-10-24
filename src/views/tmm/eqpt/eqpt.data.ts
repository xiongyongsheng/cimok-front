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
          title: 'HANDLER编码',
          dataIndex: 'handlerCode',
          width: 160,
        },
        {
          title: '站点',
          dataIndex: 'processStep',
          width: 160,
        },
        {
          title: '测试程序',
          dataIndex: 'testProgram',
          width: 160,
        },
        {
          title: '总数',
          dataIndex: 'totalCnt',
          width: 160,
        },
        {
          title: '通过数量',
          dataIndex: 'passCnt',
          width: 160,
        },
        {
          title: '失效数量',
          dataIndex: 'failCnt',
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
        label: 'HANDLER编码',
        field: 'handlerCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '站点',
        field: 'processStep',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '测试程序',
        field: 'testProgram',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '总数',
        field: 'totalCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '通过数量',
        field: 'passCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '失效数量',
        field: 'failCnt',
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
          label: 'HANDLER编码',
          field: 'handlerCode',
            component: 'Input',
        },
        {
          label: '站点',
          field: 'processStep',
            component: 'Input',
        },
        {
          label: '测试程序',
          field: 'testProgram',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'totalCnt',
            component: 'Input',
        },
        {
          label: '通过数量',
          field: 'passCnt',
            component: 'Input',
        },
        {
          label: '失效数量',
          field: 'failCnt',
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
          label: 'HANDLER编码',
          field: 'handlerCode',
            component: 'Input',
        },
        {
          label: '站点',
          field: 'processStep',
            component: 'Input',
        },
        {
          label: '测试程序',
          field: 'testProgram',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'totalCnt',
            component: 'Input',
        },
        {
          label: '通过数量',
          field: 'passCnt',
            component: 'Input',
        },
        {
          label: '失效数量',
          field: 'failCnt',
            component: 'Input',
        },
        {
          label: '良率',
          field: 'yield',
            component: 'Input',
        },
]