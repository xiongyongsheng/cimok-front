import type { BasicColumn, FormSchema } from '@/components/Table';
import { useRender } from '@/components/Table';
import { handleSearchFormSchema } from '@/views/recipe/utils/index';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { getSimpleList } from '@/api/base/recipe';

export const columns: BasicColumn[] = [
  {
    title: 'Recipe名称',
    dataIndex: 'rcpName',
    width: 160,
  },
  {
    title: '版本类型',
    dataIndex: 'rcpVerType',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.RECIPE_TYPE_ENUM);
    },
  },
  {
    title: '版本号',
    dataIndex: 'rcpVerCode',
    width: 160,
  },
  {
    title: '参数校验',
    dataIndex: 'rcpLimitRuleId',
    width: 160,
  },
  {
    title: '规则版本',
    dataIndex: 'rcpLimitRuleCode',
    width: 160,
  },
  {
    title: '来源设备',
    dataIndex: 'eqptTypeName',
    width: 160,
  },
  {
    title: '适用设备',
    dataIndex: 'rcpEqptSuitDOList',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderText(String(text?.length || 0), '台');
    },
  },
  {
    title: '创建人员',
    dataIndex: 'creator',
    width: 160,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.RECIPE_STATUS_ENUM);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '类型',
    field: 'rcpHisId',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_VERSION_TYPE, 'string'),
    },
    colProps: { span: 8 },
  },
  {
    label: '设备类型',
    field: 'paramName',
    component: 'ApiSelect',
    componentProps: {
      api: () => getSimpleList(),
      labelField: 'eqptTypeName',
      valueField: 'eqptTypeCode',
    },
    colProps: { span: 8 },
  },
  {
    label: '设备号',
    field: 'eqptCode',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '审批状态',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getDictOptions(DICT_TYPE.RECIPE_APPROVAL_STATUS, 'string'),
    },
    colProps: { span: 8 },
  },
  //@ts-ignore
].map(handleSearchFormSchema);
