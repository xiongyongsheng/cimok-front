import type { BasicColumn, FormSchema } from "@/components/Table";
import { useRender } from "@/components/Table";
import { DICT_TYPE, getDictOptions } from '@/utils/dict';

export const columns: BasicColumn[] = [
  {
    title: "条号",
    dataIndex: "stripId",
    width: 160,
  },
  {
    title: "条号明码",
    dataIndex: "visibleStripId",
    width: 160,
  },
  {
    title: "工单号",
    dataIndex: "workOrder",
    width: 160,
  },
  {
    title: "批次号",
    dataIndex: "subLot",
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
    title: "总数",
    dataIndex: "unitCnt",
    width: 160,
  },
  {
    title: "Good",
    dataIndex: "goodCnt",
    width: 160,
  },
  {
    title: "NG",
    dataIndex: "ngCnt",
    width: 160,
  },
  {
    title: "空",
    dataIndex: "nullCnt",
    width: 160,
  },
  {
    title: "X-OUT",
    dataIndex: "xCnt",
    width: 160,
  },
  {
    title: "作业状态",
    dataIndex: "processState",
    width: 160,
    customRender: ({ value }) => {
      return useRender.renderDict(value, DICT_TYPE.STRIP_MAPDATA_TYPE)
    },
  },
  {
    title: "最后作业站点",
    dataIndex: "currentProcessStep",
    width: 160,
  },
  {
    title: "WIP站点",
    dataIndex: "",
    width: 160,
  },
  {
    title: "设置站点",
    dataIndex: "setProcessStep",
    width: 160,
  },
  {
    title: "类型",  
    dataIndex: "processType",
    width: 160,
    customRender: ({ value }) => {
      return useRender.renderDict(value, DICT_TYPE.PROCESS_TYPE)
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: "批次信息",
    labelWidth:80,
    field: "",
    component: "Input",
    componentProps:{
      style:{
        display:'none'
      }
    },
    colProps: { style:{
      width:100
    } },
    
  },
  {
    label: " ",
    labelWidth:15,
    field: "stripId",
    component: "Input",
    componentProps:{
      placeholder:'条号'
    },
    colProps: { span: 3 },
  },
  {
    label: " ",
    labelWidth:15,
    field: "subLot",
    component: "Input",
    componentProps:{
      placeholder:'批次号'
    },
    colProps: { span: 3 },
  },
  {
    label: " ",
    labelWidth:15,
    field: "workOrder",
    component: "Input",
    componentProps:{
      placeholder:'工单号'
    },
    colProps: { span: 3 },
  },
  {
    label: " ",
    labelWidth:15,
    field: "",
    component: "Input",
    componentProps:{
      placeholder:'晶圆ID'
    },
    colProps: { span: 3 },
  },
  {
    label: " ",
    labelWidth:15,
    field: "processState",
    component: "Select",
    componentProps:{
      placeholder:'作业状态',
      options: getDictOptions(DICT_TYPE.STRIP_MAPDATA_TYPE, 'string'),
    },
    colProps: { span: 3 },
  },
  {
    label: " ",
    labelWidth:15,
    field: "",
    component: "Input",
    componentProps:{
      placeholder:'物料类型'
    },
    colProps: { span: 3 },
  },
  
];

export const createFormSchema: FormSchema[] = [
  {
    label: "工单号",
    field: "workOrder",
    required: true,
    component: "Input",
    componentProps:{
      placeholder:'请输入工单号'
    },
    colProps: { span: 12 },
  },
  {
    label: "批号",
    field: "subLot",
    component: "Input",
    componentProps:{
      placeholder:'请输入批号'
    },
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "条数",
    field: "stripCnt",
    component: "Input",
    componentProps:{
      placeholder:'请输入条数',
      type:'number',
      min: 1,
    },
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "位数",
    field: "digit",
    component: "Input",
    componentProps:{
      placeholder:'请输入位数',
      type:'number',
      min: 1,
    },
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "连接符",
    field: "connectChar",
    component: "Input",
    componentProps:{
      placeholder:'请输入连接符'
    },
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "类型",
    field: "processType",
    component: "Select",
    componentProps: {
      placeholder:'请选择类型',
      options: getDictOptions(DICT_TYPE.PROCESS_TYPE, 'string'),
    },
    required: true,
    colProps: { span: 12 },
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
    label: "条号",
    field: "stripId",
    component: "Input",
  },
  {
    label: "版本号",
    field: "dataVer",
    component: "Input",
  },
  {
    label: "良品数量",
    field: "goodCnt",
    component: "Input",
  },
  {
    label: "不良数量",
    field: "ngCnt",
    component: "Input",
  },
  {
    label: "空BIN数量",
    field: "nullCnt",
    component: "Input",
  },
  {
    label: "来料不良数量",
    field: "xCnt",
    component: "Input",
  },
  {
    label: "MAP数据",
    field: "mapData",
    component: "Input",
  },
  {
    label: "数据类型(原始/转换后)",
    field: "dataType",
    component: "Select",
    componentProps: {
      options: [],
    },
  },
  {
    label: "部门id",
    field: "deptId",
    component: "Input",
  },
];
