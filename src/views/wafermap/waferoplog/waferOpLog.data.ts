/*
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-25 11:23:03
 * @LastEditors: 卢靖康
 */
import type { BasicColumn, FormSchema } from "@/components/Table";
import { useRender } from "@/components/Table";
import { DICT_TYPE, getDictOptions } from '@/utils/dict';

export const columns: BasicColumn[] = [
  {
    title: "片号",
    dataIndex: "waferId",
    width: 160,
  },
  {
    title: "批次号",
    dataIndex: "waferLotId",
    width: 160,
  },
  {
    title: "设备号",
    dataIndex: "eqptCode",
    width: 160,
  },
  {
    title: "操作类型",
    dataIndex: "opType",
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.WAFER_OP_TYPE)
    },  
  },
  {
    title: "作业站点",
    dataIndex: "processStep",
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
    title: "操作人",
    dataIndex: "updater",
    width: 160,
  },
  {
    title: "操作时间",
    dataIndex: "updateTime",
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: ' ',
    labelWidth: 15,
    field: "waferId",
    component: "Input",
    componentProps: {
      "type": "text",
      "placeholder": "片号"
    },
    colProps: { span: 4 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: "eqptCode",
    component: "Input",
    componentProps: {
      "type": "text",
      "placeholder": "设备号"
    },
    colProps: { span: 4 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'opType',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.WAFER_OP_TYPE,'string'),
    },
    colProps: { span: 8 },
  }
];
