import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'
import { DICT_TYPE, getDictOptions } from '@/utils/dict'



export const columns: BasicColumn[] = [
  {
    title: '片号',
    dataIndex: 'waferId',
    width: 160,
  },
  {
    title: '批次',
    dataIndex: 'waferLotId',
    width: 160,
  },
  {
    title: '客户代码',
    dataIndex: 'custCode',
    width: 160,
  },
  {
    title: '芯片型号',
    dataIndex: 'diePart',
    width: 160,
  },
  // {
  //   title: '产品类型',
  //   dataIndex: 'deviceCode',
  //   width: 160,
  // },
  // {
  //   title: '文件编号',
  //   dataIndex: 'fileIdentId',
  //   width: 160,
  // },
  // {
  //   title: '文件名称',
  //   dataIndex: 'fileName',
  //   width: 160,
  // },
  {
    title: '行数',
    dataIndex: 'rowCnt',
    width: 160,
  },
  {
    title: '列数',
    dataIndex: 'colCnt',
    width: 160,
  },
  {
    title: 'Good',
    dataIndex: 'goodCnt',
    width: 160,
  },
  {
    title: 'NG',
    dataIndex: 'ngCnt',
    width: 160,
  },
  {
    title: '总数',
    dataIndex: 'unitCnt',
    width: 160,
  },
  // 图档方向
  // 原始方向
  // 类型
  
  {
    title: '图档方向',
    dataIndex: 'fnloc',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.WAFER_ORIENTATION)
    },
  },
  {
    title: '原始方向',
    dataIndex: 'orloc',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.WAFER_ORIENTATION)
    },
  },
  {
    title: '类型',
    dataIndex: 'processType',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.PROCESS_TYPE)
    },
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
    label: ' ',
    labelWidth: 15,
    field: 'waferId',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "片号"
    },
    colProps: { span: 3 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'waferLotId',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "批次号"
    },
    colProps: { span: 3 },
  },

  {
    label: ' ',
    labelWidth: 15,
    field: 'custCode',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "客户代码"
    },
    colProps: { span: 3 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'deviceCode',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "芯片型号"
    },
    colProps: { span: 3 },    
  },
  // {
  //   label: ' ',
  //   labelWidth: 15,
  //   field: 'deviceCode',
  //   component: 'Input',
  //   componentProps: {
  //     "type": "text",
  //     "placeholder": "物料类型"
  //   },
  //   colProps: { span: 3 },    
  // }
]


