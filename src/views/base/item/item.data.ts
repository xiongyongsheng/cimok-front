import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '项目代码',
          dataIndex: 'itemCode',
          width: 160,
        },
        {
          title: '项目名称',
          dataIndex: 'itemName',
          width: 160,
        },
        {
          title: '数据类型',
          dataIndex: 'valueType',
          width: 160,
        },
        {
          title: '来源ID;如果是下拉单选，下拉多选，枚举选择，则关联系统中数据字典查询的唯一标识；如果是URL获取到的参数，则需要填写Url，后加?param=xxx,xxx则是需要在接口中获取到的具体数据。',
          dataIndex: 'sourceId',
          width: 160,
        },
        {
          title: '部门id',
          dataIndex: 'deptId',
          width: 160,
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          width: 180,
          customRender: ({ text }) => {
            return useRender.renderDate(text)
          },
        },
]

export const searchFormSchema: FormSchema[] = [
      {
        label: '项目代码',
        field: 'itemCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '项目名称',
        field: 'itemName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据类型',
        field: 'valueType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '来源ID;如果是下拉单选，下拉多选，枚举选择，则关联系统中数据字典查询的唯一标识；如果是URL获取到的参数，则需要填写Url，后加?param=xxx,xxx则是需要在接口中获取到的具体数据。',
        field: 'sourceId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '部门id',
        field: 'deptId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '创建人',
        field: 'creator',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '创建时间',
        field: 'createTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
      {
        label: '更新人',
        field: 'updater',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '更新时间',
        field: 'updateTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
]

export const createFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
        {
          label: '项目代码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '项目名称',
          field: 'itemName',
            component: 'Input',
        },
        {
          label: '数据类型',
          field: 'valueType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '来源ID;如果是下拉单选，下拉多选，枚举选择，则关联系统中数据字典查询的唯一标识；如果是URL获取到的参数，则需要填写Url，后加?param=xxx,xxx则是需要在接口中获取到的具体数据。',
          field: 'sourceId',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
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
          label: '项目代码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '项目名称',
          field: 'itemName',
            component: 'Input',
        },
        {
          label: '数据类型',
          field: 'valueType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '来源ID;如果是下拉单选，下拉多选，枚举选择，则关联系统中数据字典查询的唯一标识；如果是URL获取到的参数，则需要填写Url，后加?param=xxx,xxx则是需要在接口中获取到的具体数据。',
          field: 'sourceId',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]