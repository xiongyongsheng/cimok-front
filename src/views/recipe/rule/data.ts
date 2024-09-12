import {
  useRender,
  type BasicColumn,
  type FormSchema,
} from '@/components/Table';
import { handleSearchFormSchema } from '@/views/recipe/utils/index';
import { DICT_TYPE, getDictOptions } from '@/utils/dict';
import { h, ref, unref } from 'vue';
import { Input, Table } from 'ant-design-vue';
import { getSimpleList } from '@/api/base/recipe';

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
    dataIndex: '',
    width: 160,
  },
  {
    title: '状态',
    dataIndex: '',
    width: 160,
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
    field: 'id',
    component: 'Input',
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
              title: '参考范围-低',
              dataIndex: '4',
              key: '4',
              renderType: 'input',
            },
            {
              align: 'center',
              title: '参考范围-高',
              dataIndex: '5',
              key: '5',
              renderType: 'input',
            },
          ],
          dataSource: createTableDataSource.value,
        },
        {
          bodyCell: ({ column, text, record, index }) => {
            if (column.renderType === 'input') {
              return h(Input, {
                value: text,
                style: {
                  width: '80px',
                },
                onChange: (e) => {
                  // @ts-ignore
                  createTableDataSource.value[index][column.dataIndex] =
                    e.target.value;
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
