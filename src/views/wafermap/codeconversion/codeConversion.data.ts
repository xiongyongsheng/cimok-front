import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'
import { DICT_TYPE, getDictOptions } from '@/utils/dict'
import { Switch } from 'ant-design-vue'
import { h } from 'vue'

const options = getDictOptions(DICT_TYPE.WAFER_BIN_CODE_COLOR, 'string')


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
    title: '客户代码',
    dataIndex: 'custCode',
    width: 140,
  },
  {
    title: '芯片型号',
    dataIndex: 'diePart',
    width: 140,
  },
  {
    title: '批次号',
    dataIndex: 'waferLotId',
    width: 160,
  },
  {
    title: '源Code',
    dataIndex: 'sourceCode',
    width: 160,
  },
  {
    title: '目标Code',
    dataIndex: 'targetCode',
    width: 160,
  },
  {
    title: 'Code类型',
    dataIndex: 'codeType',
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
    title: '范围',
    dataIndex: '',
    width: 160,
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
    field: 'deviceCode',
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
    field: 'waferLot',
    component: 'Input',
    componentProps: {
      "type": "text",
      "placeholder": "批次号"
    },
    colProps: { span: 4 },
  }
]

export const createFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: '客户代码',
    field: 'custCode',
    component: 'Input',
  },
  {
    label: '芯片型号',
    field: 'diePart',
    component: 'Input',
  },
  {
    label: '批次号',
    field: 'waferLotId',
    component: 'Input',
  },
  {
    label: '原始代码',
    field: 'sourceCode',
    component: 'Input',
  },
  {
    label: '目标代码',
    field: 'targetCode',
    component: 'Input',
  },
  {
    label: '代码类型',
    field: 'codeType',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.WAFER_BIN_CODE_TYPE, 'string'),
    },
  },
  {
    label: '颜色',
    field: 'binColor',
    component: 'Select',
    componentProps: {
      options: previewOptions(),
    }
  },
  {
    label: '部门id',
    field: 'deptId',
    show: false,
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
    label: '客户代码',
    field: 'custCode',
    component: 'Input',
  },
  {
    label: '芯片型号',
    field: 'diePart',
    component: 'Input',
  },
  {
    label: '批次号',
    field: 'waferLotId',
    component: 'Input',
  },
  {
    label: '原始代码',
    field: 'sourceCode',
    component: 'Input',
  },
  {
    label: '目标代码',
    field: 'targetCode',
    component: 'Input',
  },
  {
    label: '代码类型',
    field: 'codeType',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.WAFER_BIN_CODE_TYPE, 'string'),
    },
  },
  {
    label: '颜色',
    field: 'binColor',
    component: 'Select',
    componentProps: {
      options: previewOptions(),
    }
  },
  {
    label: '部门id',
    show: false,
    field: 'deptId',
    component: 'Input',
  },
]
