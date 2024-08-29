import type { BasicColumn, FormSchema } from "@/components/Table";
import { useRender } from "@/components/Table";

export const columns: BasicColumn[] = [
  {
    title: "ID",
    dataIndex: "id",
    width: 160,
  },
  {
    title: "产品型号",
    dataIndex: "deviceCode",
    width: 160,
  },
  {
    title: "工单号",
    dataIndex: "",
    width: 160,
  },
  {
    title: "批次号",
    dataIndex: "lotId",
    width: 160,
  },
  {
    title: "行数",
    dataIndex: "rowQty",
    width: 160,
  },
  {
    title: "列数",
    dataIndex: "colQty",
    width: 160,
  },
  {
    title: "区域数",
    dataIndex: "blocks",
    width: 160,
  },
  // {
  //   title: '总数',
  //   dataIndex: 'unitCnt',
  //   width: 160,
  // },

  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: " ",
    labelWidth: 15,
    field: "deviceCode",
    component: "Input",
    componentProps:{
      placeholder:'产品型号'
    },
    colProps: { span: 4 },
  },
  {
    label: " ",
    labelWidth: 15,
    field: "lotId",
    component: "Input",
    componentProps:{
      placeholder:'批次号'
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
    label: "产品编码",
    field: "deviceCode",
    component: "Input",
  },
  {
    label: "批次号",
    field: "lotId",
    component: "Input",
  },
  {
    label: "行数",
    field: "rowQty",
    component: "Input",
  },
  {
    label: "列数",
    field: "colQty",
    component: "Input",
  },
  {
    label: "块数",
    field: "blocks",
    component: "Input",
  },
  {
    label: "总数",
    field: "unitCnt",
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
    label: "产品编码",
    field: "deviceCode",
    component: "Input",
  },
  {
    label: "批次号",
    field: "lotId",
    component: "Input",
  },
  {
    label: "行数",
    field: "rowQty",
    component: "Input",
  },
  {
    label: "列数",
    field: "colQty",
    component: "Input",
  },
  {
    label: "块数",
    field: "blocks",
    component: "Input",
  },
  {
    label: "总数",
    field: "unitCnt",
    component: "Input",
  },
  {
    label: "部门id",
    field: "deptId",
    component: "Input",
  },
];
