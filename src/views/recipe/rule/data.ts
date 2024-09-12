import {
  useRender,
  type BasicColumn,
  type FormSchema,
} from '@/components/Table';
import { handleSearchFormSchema } from '@/views/recipe/utils/index';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { h, ref, unref, watch } from 'vue';
import { Button, Input, Table } from 'ant-design-vue';
import { getSimpleList } from '@/api/base/recipe';
import { uniqueId } from 'lodash-es';

export const columns: BasicColumn[] = [
  {
    title: '参数规则',
    dataIndex: 'limitRuleId',
    width: 160,
  },
  {
    title: '版本号',
    dataIndex: 'ruleVerCode',
    width: 160,
  },
  {
    title: 'Recipe名称',
    dataIndex: 'rcpName',
    width: 160,
  },
  {
    title: '关联Recipe数量',
    dataIndex: 'rcpLimitRuleDetailDOList',
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
    width: 160,
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
    label: '规则名称',
    field: 'rcpHisId',
    component: 'Input',
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
  //@ts-ignore
].map(handleSearchFormSchema);

const createTableDataSource = ref<
  {
    paramCode: string;
    paramName: string;
    minVal: string;
    maxVal: string;
    errorMessage: string;
  }[]
>([]);
watch(
  () => createTableDataSource.value,
  () => {
    createTableDataSource.value.forEach((item) => {
      if (
        Number(item.minVal) > Number(item.maxVal) ||
        isNaN(Number(item.maxVal)) ||
        isNaN(Number(item.minVal))
      ) {
        item.errorMessage = '参考范围-高必须大于参考范围-低';
      } else {
        item.errorMessage = '';
      }
    });
  },
  { immediate: true, deep: true }
);

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
    field: 'rcpLimitRuleDetailDOList',
    component: 'Input',
    required: true,
    render: (renderCallbackParams, opts) => {
      if (createTableDataSource.value.length) {
        renderCallbackParams.model[renderCallbackParams.field] =
          createTableDataSource.value;
      } else {
        renderCallbackParams.model[renderCallbackParams.field] = null;
      }
      return h(
        Table,
        {
          columns: [
            {
              align: 'center',
              title: '参数代码',
              dataIndex: 'paramCode',
              _input: {
                type: 'text',
              },
            },
            {
              align: 'center',
              title: '参数名称',
              dataIndex: 'paramName',
              _input: {
                type: 'text',
              },
            },
            {
              align: 'center',
              title: '参考范围-低',
              dataIndex: 'minVal',
              _input: {
                type: 'number',
              },
            },
            {
              align: 'center',
              title: '参考范围-高',
              dataIndex: 'maxVal',
              _input: {
                type: 'number',
              },
            },
          ],
          dataSource: createTableDataSource.value,
        },
        {
          bodyCell: ({ column, text, data, index }) => {
            if (column._input) {
              return h(Input, {
                value: text,
                type: column._input.type ?? 'text',
                status: createTableDataSource.value[index].errorMessage
                  ? 'error'
                  : '',
                style: {
                  width: '80px',
                },
                onChange: (e) => {
                  createTableDataSource.value[index][column.dataIndex] =
                    e.target.value;
                },
              });
            } else {
              return text;
            }
          },
          footer: () => {
            return h(
              Button,
              {
                onClick: () => {
                  createTableDataSource.value.push({
                    paramCode: uniqueId('code-'),
                    paramName: uniqueId('name-'),
                    minVal: '',
                    maxVal: '',
                    errorMessage: '',
                  });
                },
              },
              '添加规则'
            );
          },
        }
      );
    },
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

const scopeOfUseDataSource = ref([
  {
    '1': 'TEMP',
    '2': '温度',
    '3': 3,
    '4': 1,
    '5': 5,
  },
]);
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
              dataIndex: '1',
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
