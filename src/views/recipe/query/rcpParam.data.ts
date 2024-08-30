import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: 'Recipe名称',
          dataIndex: 'rcpName',
          width: 160,
        },
        {
          title: '版本类型',
          dataIndex: 'rcpHisId',
          width: 160,
        },
        {
          title: '版本号',
          dataIndex: 'paramName',
          width: 160,
        },
        {
          title: '参数校验',
          dataIndex: 'paramCode',
          width: 160,
        },
        {
          title: '规则版本',
          dataIndex: 'paramNick',
          width: 160,
        },
        {
          title: '来源设备',
          dataIndex: 'realVal',
          width: 160,
        },
        {
          title: '适用设备',
          dataIndex: 'sortCode',
          width: 160,
        },
        {
          title: '创建人员',
          dataIndex: 'deptId',
          width: 160,
        },
        {
          title: '状态',
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
        label: 'Recipe名称',
        field: 'rcpName',
          component: 'Input',
        colProps: { span: 8, },
        
      },
      {
        label: 'Recipe版本标识',
        field: 'rcpHisId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数名称',
        field: 'paramName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数代码',
        field: 'paramCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数别名',
        field: 'paramNick',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '参数值',
        field: 'realVal',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '排序',
        field: 'sortCode',
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
        label: '创建时间',
        field: 'createTime',
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
]

export const updateFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
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
]
