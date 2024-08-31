import type { BasicColumn, FormSchema } from "@/components/Table";
import { useRender } from "@/components/Table";
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { h } from 'vue';

export const columns: BasicColumn[] = [
  // {
  //   title: "ID",
  //   dataIndex: "id",
  //   width: 160,
  // },
  {
    title: "设备型号",
    dataIndex: "",
    width: 160,
  },
  {
    title: "设备编码",
    dataIndex: "eqptCode",
    width: 160,
  },
  {
    title: "工步",
    dataIndex: "stepCode",
    width: 160,
  },
  {
    title: "装片数量",
    dataIndex: "bondChipCnt",
    width: 160,
  },
  {
    title: "报警采集",
    dataIndex: "alarmCollect",
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_BOOLEAN_STRING)
    },
  },
  {
    title: "偏移量采集",
    dataIndex: "correlationCollect",
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_BOOLEAN_STRING)
    },
  },
  {
    title: "生效",
    dataIndex: "status",
    width: 160,
    fixed: "right",
    // customRender: ({ text }) => {
    //   return h('Switch', {
    //     checked: text === '1',
    //     onChange: (checked) => {
    //      debugger
    //     },
    //   })
    // },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: " ",
    field: "",
    labelWidth: 15,
    component: "Input",
    componentProps: {
      placeholder: "设备类型",
    },
    colProps: { span: 4 },
  },
  {
    label: " ",
    labelWidth: 15,
    field: "",
    component: "Input",
    componentProps: {
      placeholder: "项目名称",
    },
    colProps: { span: 4 },
  },
  {
    label: " ",
    labelWidth: 15,
    field: "",
    component: "Input",
    componentProps: {
      placeholder: "项目代码",
    },
    colProps: { span: 4 },
  },
  
];

export const createFormSchema: FormSchema[] = [
  {
    label: "编号",
    field: "id",
    show: false,
    component: "Input",
  },
  {
    label: "设备型号",
    field: "",
    component: "Input",
    componentProps: {
      placeholder: "请输入设备型号",
    },
  },
  {
    label: "设备编码",
    field: "eqptCode",
    component: "Input",
    componentProps: {
      placeholder: "请输入设备编码",
    },
  },
  {
    label: "工步",
    field: "stepCode",
    component: "Input",
    componentProps: {
      placeholder: "请输入工步",
    },
  },
  {
    label: "装片数量",
    field: "bondChipCnt",
    component: "Input",
    componentProps: {
      placeholder: "请输入装片数量",
    },
  },
  {
    label: "报警采集",
    field: "alarmCollect",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING, 'string'),
      placeholder: "请选择报警采集",
    },
  },
  {
    label: "偏移量采集",
    field: "correlationCollect",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING, 'string'),
      placeholder: "请选择偏移量采集",
    },
  },
  {
    label: "是否生效",
    field: "status",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING, 'string'),
      placeholder: "请选择是否生效",
    },
  },
];

export const updateFormSchema: FormSchema[] = [
  {
    label: "编号",
    field: "id",
    show: false,
    component: "Input",
  },
  {
    label: "设备型号",
    field: "",
    component: "Input",
    componentProps: {
      placeholder: "请输入设备型号",
    },
  },
  {
    label: "设备编码",
    field: "eqptCode",
    component: "Input",
    componentProps: {
      placeholder: "请输入设备编码",
    },
  },
  {
    label: "工步",
    field: "stepCode",
    component: "Input",
    componentProps: {
      placeholder: "请输入工步",
    },
  },
  {
    label: "装片数量",
    field: "bondChipCnt",
    component: "Input",
    componentProps: {
      placeholder: "请输入装片数量",
    },
  },
  {
    label: "报警采集",
    field: "alarmCollect",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING, 'string'),
      placeholder: "请选择报警采集",
    },
  },
  {
    label: "偏移量采集",
    field: "correlationCollect",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING, 'string'),
      placeholder: "请选择偏移量采集",
    },
  },
  {
    label: "是否生效",
    field: "status",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING, 'string'),
      placeholder: "请选择是否生效",
    },
  },
];
