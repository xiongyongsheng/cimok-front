import type {BasicColumn, FormSchema} from '@/components/Table'
// import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   width: 160,
  // },
  // {
  //   title: '测试记录ID;批次号+T代表合并记录',
  //   dataIndex: 'testRecordId',
  //   width: 160,
  // },
  {
    title: '批次号',
    dataIndex: 'subLotId',
    width: 300,
  },
  {
    title: '测试步骤',
    dataIndex: 'testStep',
    width: 160,
    customRender: ({text}) => {
      return text==='T'?'':text
    },
  },
  {
    title: '设备号',
    dataIndex: 'testerCode',
    width: 160,
  },
  {
    title: '站点',
    dataIndex: 'processStep',
    width: 160,
  },
  {
    title: '客户批号',
    dataIndex: 'custLot',
    width: 160,
  },
  {
    title: '测试程序',
    dataIndex: 'testProgram',
    width: 200,
  },
  {
    title: '总数',
    dataIndex: 'totalCnt',
    width: 160,
  },
  {
    title: 'Pass',
    dataIndex: 'passCnt',
    width: 160,
  },
  {
    title: 'Fail',
    dataIndex: 'failCnt',
    width: 160,
  },
  {
    title: 'YieId',
    dataIndex: 'yield',
    width: 160,
  },

  {
    title: '开始时间',
    dataIndex: 'startTime',
    width: 160,
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    width: 160,
  },
  //
  // {
  //   title: '通过数量',
  //   dataIndex: 'passCnt',
  //   width: 160,
  // },
  // {
  //   title: '失效数量',
  //   dataIndex: 'failCnt',
  //   width: 160,
  // },
  // {
  //   title: '良率',
  //   dataIndex: 'yield',
  //   width: 160,
  // },
  // {
  //   title: '最高Site良率',
  //   dataIndex: 'highestSiteYield',
  //   width: 160,
  // },
  // {
  //   title: '最低Site良率',
  //   dataIndex: 'lowestSiteYield',
  //   width: 160,
  // },
  // {
  //   title: 'SiteGAP',
  //   dataIndex: 'siteGap',
  //   width: 160,
  // },
  // {
  //   title: '开始时间',
  //   dataIndex: 'startTime',
  //   width: 160,
  // },
  // {
  //   title: '结束时间',
  //   dataIndex: 'endTime',
  //   width: 160,
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   width: 180,
  //   customRender: ({text}) => {
  //     return useRender.renderDate(text)
  //   },
  // },
]

export const searchFormSchema: FormSchema[] = [
  {
    label: '设备号',
    field: 'testerCode',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '批次号',
    field: 'subLotId',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '测试程序员名',
    field: 'testProgram',
    component: 'Input',
    colProps: {span: 8},
  },
  {
    label: '客户批号',
    field: 'custLot',
    component: 'Input',
    colProps: {span: 8},
  }
  // {
  //   label: '测试步骤',
  //   field: 'testStep',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '测试机编码',
  //   field: 'testerCode',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: 'HANDLER编码',
  //   field: 'handlerCode',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '站点',
  //   field: 'processStep',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '测试程序',
  //   field: 'testProgram',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '总数',
  //   field: 'totalCnt',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '通过数量',
  //   field: 'passCnt',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '失效数量',
  //   field: 'failCnt',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '良率',
  //   field: 'yield',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '最高Site良率',
  //   field: 'highestSiteYield',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '最低Site良率',
  //   field: 'lowestSiteYield',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: 'SiteGAP',
  //   field: 'siteGap',
  //   component: 'Input',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '开始时间',
  //   field: 'startTime',
  //   component: 'RangePicker',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '结束时间',
  //   field: 'endTime',
  //   component: 'RangePicker',
  //   colProps: {span: 8},
  // },
  // {
  //   label: '创建时间',
  //   field: 'createTime',
  //   component: 'RangePicker',
  //   colProps: {span: 8},
  // },
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
    label: '批次号',
    field: 'subLotId',
    component: 'Input',
  },
  {
    label: '客户批号',
    field: 'custLot',
    component: 'Input',
  },
  {
    label: '产品名称',
    field: 'productCode',
    component: 'Input',
  },
  {
    label: '测试步骤',
    field: 'testStep',
    component: 'Input',
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
  {
    label: '最高Site良率',
    field: 'highestSiteYield',
    component: 'Input',
  },
  {
    label: '最低Site良率',
    field: 'lowestSiteYield',
    component: 'Input',
  },
  {
    label: 'SiteGAP',
    field: 'siteGap',
    component: 'Input',
  },
  {
    label: '开始时间',
    field: 'startTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'x',
    },
  },
  {
    label: '结束时间',
    field: 'endTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'x',
    },
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
    label: '批次号',
    field: 'subLotId',
    component: 'Input',
  },
  {
    label: '客户批号',
    field: 'custLot',
    component: 'Input',
  },
  {
    label: '产品名称',
    field: 'productCode',
    component: 'Input',
  },
  {
    label: '测试步骤',
    field: 'testStep',
    component: 'Input',
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
  {
    label: '最高Site良率',
    field: 'highestSiteYield',
    component: 'Input',
  },
  {
    label: '最低Site良率',
    field: 'lowestSiteYield',
    component: 'Input',
  },
  {
    label: 'SiteGAP',
    field: 'siteGap',
    component: 'Input',
  },
  {
    label: '开始时间',
    field: 'startTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'x',
    },
  },
  {
    label: '结束时间',
    field: 'endTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'x',
    },
  },
]
