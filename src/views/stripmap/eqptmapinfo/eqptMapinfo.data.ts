import type { BasicColumn, FormSchema } from "@/components/Table";
import { useRender } from "@/components/Table";

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
  },
  {
    title: "偏移量采集",
    dataIndex: "correlationCollect",
    width: 160,
  },
  {
    title: "生效",
    dataIndex: "status",
    width: 160,
    fixed: "right",
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
    label: "设备编码",
    field: "eqptCode",
    component: "Input",
  },
  {
    label: "作业工步",
    field: "stepCode",
    component: "Input",
  },
  {
    label: "装片数量",
    field: "bondChipCnt",
    component: "Input",
  },
  {
    label: "是否开启收集报警",
    field: "alarmCollect",
    component: "Input",
  },
  {
    label: "是否开启收集偏移量",
    field: "correlationCollect",
    component: "Input",
  },
  {
    label: "部门id",
    field: "deptId",
    component: "Input",
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
    label: "设备编码",
    field: "eqptCode",
    component: "Input",
  },
  {
    label: "作业工步",
    field: "stepCode",
    component: "Input",
  },
  {
    label: "装片数量",
    field: "bondChipCnt",
    component: "Input",
  },
  {
    label: "是否开启收集报警",
    field: "alarmCollect",
    component: "Input",
  },
  {
    label: "是否开启收集偏移量",
    field: "correlationCollect",
    component: "Input",
  },
  {
    label: "部门id",
    field: "deptId",
    component: "Input",
  },
];
