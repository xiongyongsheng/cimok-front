import type { BasicColumn, FormSchema } from '@/components/Table';
import { useRender } from '@/components/Table';
import { handleSearchFormSchema } from '@/views/recipe/utils/index';
import { selectOptions } from '../mock/api/common';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { h, ref, unref } from 'vue';
import { Input, Table } from 'ant-design-vue';
import { eqptRecipeList, getSimpleList, simpleList } from '@/api/base/recipe';
import { ApiSelect } from '@/components/Form';

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

export const actionLogColumns: BasicColumn[] = [
  {
    title: 'Recipe名称',
    dataIndex: 'rcpName',
    width: 160,
  },
  {
    title: 'Recipe类型',
    dataIndex: 'rcpHisId',
    width: 160,
  },
  {
    title: '文件标识',
    dataIndex: 'paramName',
    width: 160,
  },
  {
    title: '操作类型',
    dataIndex: 'paramCode',
    width: 160,
  },
  {
    title: '时间',
    dataIndex: 'paramNick',
    width: 160,
  },
  {
    title: 'Source',
    dataIndex: 'realVal',
    width: 160,
  },
  {
    title: 'Target',
    dataIndex: 'sortCode',
    width: 160,
  },
  {
    title: '结果',
    dataIndex: 'deptId',
    width: 160,
  },
];
export const actionLogSearchFormSchema: FormSchema[] = [
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '操作类型',
    field: 'rcpHisId',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '设备号',
    field: 'paramName',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '操作时间',
    field: 'paramCode',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
  //@ts-ignore
].map(handleSearchFormSchema);

const createTablerowSelection = ref({
  // checkStrictly: false,
  selectedRowKeys: [],
});
const createTableDataSource = ref([
  {
    '1': 'TEMP',
    '2': '温度',
    '3': 3,
    '4': 1,
    '5': 5,
  },
]);
export const createFormSchema: FormSchema[] = [
  {
    label: '设备型号',
    field: 'eqptTypeCode',
    component: 'ApiSelect',
    componentProps: {
      api: getSimpleList,
      labelField: 'eqptTypeName',
      valueField: 'eqptTypeCode',
      immediate: false,
    },
    required: true,
  },
  {
    label: '设置参数',
    field: 'rcpHisId',
    component: 'Input',
    render: (renderCallbackParams, opts) => {
      return h(
        Table,
        {
          columns: [
            {
              align: 'center',
              title: '参数代码',
              dataIndex: '1',
              key: '1',
            },
            {
              align: 'center',
              title: '参数名称',
              dataIndex: '2',
              key: '2',
            },
            {
              align: 'center',
              title: '参数值',
              dataIndex: '3',
              key: '3',
            },
            {
              align: 'center',
              title: '参考范围-低',
              dataIndex: '4',
              key: '4',
            },
            {
              align: 'center',
              title: '参考范围-高',
              dataIndex: '5',
              key: '5',
            },
          ],
          dataSource: createTableDataSource.value,
        },
        {
          bodyCell: ({ column, text, record, index }) => {
            if (column.key === '3') {
              return h(Input, {
                value: text,
                // @ts-ignore
                status:
                  text >= record['4'] && text <= record['5'] ? ' ' : 'warning',
                style: {
                  width: '80px',
                },
                onChange: (e) => {
                  // @ts-ignore
                  createTableDataSource.value[index]['3'] = e.target.value;
                },
              });
            } else {
              return text;
            }
          },
        }
      );
    },
    required: true,
  },
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
    required: true,
  },
];

export const updateFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input',
  },
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
  },
  {
    label: 'Recipe版本标识',
    field: 'rcpHisId',
    component: 'Input',
  },
  {
    label: '参数名称',
    field: 'paramName',
    component: 'Input',
  },
  {
    label: '参数代码',
    field: 'paramCode',
    component: 'Input',
  },
  {
    label: '参数别名',
    field: 'paramNick',
    component: 'Input',
  },
  {
    label: '参数值',
    field: 'realVal',
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sortCode',
    component: 'Input',
  },
  {
    label: '部门id',
    field: 'deptId',
    component: 'Input',
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
  children?: DataItem[];
}

const rowSelection = ref({
  // checkStrictly: false,
  selectedRowKeys: [],
});
export const uploadFormSchema: FormSchema[] = [
  {
    label: '设备型号',
    field: 'eqptTypeCode',
    component: 'ApiSelect',
    componentProps: {
      api: getSimpleList,
      labelField: 'eqptTypeName',
      valueField: 'eqptTypeCode',
      immediate: false,
    },
    required: true,
  },
  {
    label: '设备号',
    field: 'eqptCode',
    component: 'ApiSelect',
    render: (renderCallbackParams, opts) => {
      return h(ApiSelect, {
        api: () => {
          return simpleList({
            id: renderCallbackParams.model.id,
          });
        },
        onChange: (value) => {
          renderCallbackParams.model[renderCallbackParams.field] = value;
        },
        disabled: !renderCallbackParams.model.eqptTypeCode,
        labelField: 'id',
        valueField: 'eqptCode',
        placeholder: '请选择',
        immediate: false,
      });
    },
    required: true,
  },
  {
    label: 'Recipe列表',
    field: 'rcpHisId',
    component: 'Input',
    // ifShow(renderCallbackParams) {
    //   return renderCallbackParams.model.eqptCode!== undefined && renderCallbackParams.model.eqptTypeCode!== undefined;
    // },
    render: (renderCallbackParams, opts) => {
      let dataSource: any = ref([]);
      if (
        renderCallbackParams.model.eqptTypeCode !== undefined &&
        renderCallbackParams.model.eqptCode !== undefined
      ) {
        eqptRecipeList({
          eqptCode: renderCallbackParams.model.eqptCode,
          eqptTypeCode: renderCallbackParams.model.eqptTypeCode,
        }).then((res) => {
          dataSource.value = res.data;
        });
      }

      return h(Table, {
        rowSelection: {
          ...unref(rowSelection),
          onChange: (
            selectedRowKeys: (string | number)[],
            selectedRows: DataItem[]
          ) => {
            renderCallbackParams.model[renderCallbackParams.field] =
              // @ts-ignore
              rowSelection.value.selectedRowKeys = selectedRowKeys;
          },
        },
        columns: [
          {
            title: '编号',
            dataIndex: 'id',
            key: 'id',
          },
        ],
        dataSource: unref(dataSource),
      });
    },
    required: true,
  },
];

const scopeOfUseDataSource = ref([]);
const scopeOfUseRowSelection = ref({
  // checkStrictly: false,
  selectedRowKeys: [],
});
export const scopeOfUseFormSchema: FormSchema[] = [
  {
    label: '设置参数',
    field: 'rcpHisId',
    component: 'Input',
    render: (renderCallbackParams, opts) => {
      return h(
        Table,
        {
          rowSelection: {
            ...unref(scopeOfUseRowSelection),
            onChange: (
              selectedRowKeys: (string | number)[],
              selectedRows: DataItem[]
            ) => {
              renderCallbackParams.model[renderCallbackParams.field] =
                // @ts-ignore
                scopeOfUseRowSelection.value.selectedRowKeys = selectedRowKeys;
            },
          },
          columns: [
            {
              align: 'center',
              title: '设备型号',
              dataIndex: 'eqptCode',
              key: '1',
            },
          ],
          dataSource: scopeOfUseDataSource.value,
        },
        {
          bodyCell: ({ column, text, record, index }) => {
            if (column.key === '3') {
              return h(Input, {
                value: text,
                // @ts-ignore
                status:
                  text >= record['4'] && text <= record['5'] ? ' ' : 'warning',
                style: {
                  width: '80px',
                },
                onChange: (e) => {
                  // @ts-ignore
                  createTableDataSource.value[index]['3'] = e.target.value;
                },
              });
            } else {
              return text;
            }
          },
        }
      );
    },
    required: true,
  },
];
