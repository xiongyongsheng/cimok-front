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
          title: 'Recipe版本标识',
          dataIndex: 'rcpHisId',
          width: 160,
        },
        {
          title: '设备编码',
          dataIndex: 'eqptCode',
          width: 160,
        },
        {
          title: '核验参数数量',
          dataIndex: 'paramCnt',
          width: 160,
        },
        {
          title: '核验失败数量',
          dataIndex: 'failParamCnt',
          width: 160,
        },
        {
          title: '核验结果',
          dataIndex: 'checkResult',
          width: 160,
        },
        {
          title: '核验结构详情',
          dataIndex: 'checkResultDetail',
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
        label: 'Recipe名称',
        field: 'rcpName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Recipe版本标识',
        field: 'rcpHisId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设备编码',
        field: 'eqptCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '核验参数数量',
        field: 'paramCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '核验失败数量',
        field: 'failParamCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '核验结果',
        field: 'checkResult',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '核验结构详情',
        field: 'checkResultDetail',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '核验参数数量',
          field: 'paramCnt',
            component: 'Input',
        },
        {
          label: '核验失败数量',
          field: 'failParamCnt',
            component: 'Input',
        },
        {
          label: '核验结果',
          field: 'checkResult',
            component: 'Input',
        },
        {
          label: '核验结构详情',
          field: 'checkResultDetail',
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
          label: '设备编码',
          field: 'eqptCode',
            component: 'Input',
        },
        {
          label: '核验参数数量',
          field: 'paramCnt',
            component: 'Input',
        },
        {
          label: '核验失败数量',
          field: 'failParamCnt',
            component: 'Input',
        },
        {
          label: '核验结果',
          field: 'checkResult',
            component: 'Input',
        },
        {
          label: '核验结构详情',
          field: 'checkResultDetail',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]
