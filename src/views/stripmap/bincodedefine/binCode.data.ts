import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'
import { DICT_TYPE, getDictOptions } from '@/utils/dict'

const options = getDictOptions(DICT_TYPE.STRIP_BIN_CODE_COLOR, 'string')


function previewOptions() {
  return options.map((option) => {
    const { value, label } = option
    if (value === '')
      return option

    return {
      label: useRender.renderTag(label, value as string),
      value,
    }
  })
}

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    defaultHidden: true,
    width: 140,
  },
  {
    title: '设备厂商',
    dataIndex: 'eqptTypeId',
    width: 140,
  },
  {
    title: '设备类型',
    dataIndex: '',
    width: 140,
  },
  {
    title: 'BinCode',
    dataIndex: 'binCode',
    width: 160,
  },
  {
    title: '场景',
    dataIndex: 'usingScene',
    width: 160,
  },
  {
    title: 'Code类型',
    dataIndex: 'binType',
    width: 140,
  },
  {
    title: '展示颜色',
    dataIndex: 'binColor',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderTag(text, text)
    },
  },
  {
    title: '生效',
    dataIndex: 'status',
    width: 160,
    fixed:'right',
  },
  
]

export const searchFormSchema: FormSchema[] = [
  {
    label: ' ',
    labelWidth: 15,
    field: 'custCode',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "客户代码"
    },
    colProps: { span: 4 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'diePart',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "芯片型号"
    },
    colProps: { span: 4 },
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
    colProps: { span: 4 },
  }
]

// 根据列表字段创建
export const createFormSchema: FormSchema[] = [
  {
  label: '设备厂商',
  field: 'eqptTypeId',
  component: 'Input',
  componentProps: {
    "type": "text",
    "placeholder": "请输入设备厂商"
  },
  colProps: { span: 12 },
  },
  {
    label: '设备类型',
    field: 'eqptType',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "请输入设备类型"
    },
    colProps: { span: 12 },
  },
  {
    label: 'BinCode',
    field: 'binCode',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "请输入binCode"
    },  
    colProps: { span: 12 },
  },
  {
    label: '场景',
    field: 'usingScene',
    component: 'Input',
    componentProps: { 
      "type": "text",
      "placeholder": "请输入场景"
    },
    colProps: { span: 12 },
  },
  {
    label: 'Code类型',
    field: 'binType',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "请输入Code类型"
    },
    colProps: { span: 12 },
  },  
  {
    label: '展示颜色',
    field: 'binColor',
    component: 'Select',
    componentProps: {
      "placeholder": "请选择展示颜色",
      options: previewOptions(),
    },
    colProps: { span: 12 },
  },
  {
    label: '是否生效',
    field: 'status',
    component: 'Switch',
    componentProps: {
    },
    colProps: { span: 12 },
  },

]