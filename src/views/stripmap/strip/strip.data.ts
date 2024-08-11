import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '条号',
          dataIndex: 'stripId',
          width: 160,
        },
        {
          title: '条号明码',
          dataIndex: 'visibleStripId',
          width: 160,
        },
        {
          title: '工单号',
          dataIndex: 'workOrder',
          width: 160,
        },
        {
          title: '子批号',
          dataIndex: 'subLot',
          width: 160,
        },
        {
          title: '来源',
          dataIndex: 'source',
          width: 160,
        },
        {
          title: '行数',
          dataIndex: 'rows',
          width: 160,
        },
        {
          title: '列数',
          dataIndex: 'cols',
          width: 160,
        },
        {
          title: '总数',
          dataIndex: 'unitCnt',
          width: 160,
        },
        {
          title: '数据版本',
          dataIndex: 'mapdataVer',
          width: 160,
        },
        {
          title: '设置站别',
          dataIndex: 'setProcessStep',
          width: 160,
        },
        {
          title: '当前作业站别',
          dataIndex: 'currentProcessStep',
          width: 160,
        },
        {
          title: '作业状态',
          dataIndex: 'processState',
          width: 160,
        },
        {
          title: '作业类型(量产/测试)',
          dataIndex: 'processType',
          width: 160,
        },
        {
          title: '部门id',
          dataIndex: 'deptId',
          width: 160,
        },
        {
          title: '创建人',
          dataIndex: 'creator',
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
        {
          title: '更新人',
          dataIndex: 'updater',
          width: 160,
        },
        {
          title: '更新时间',
          dataIndex: 'updateTime',
          width: 180,
          customRender: ({ text }) => {
            return useRender.renderDate(text)
          },
        },
]

export const searchFormSchema: FormSchema[] = [
      {
        label: '条号',
        field: 'stripId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '条号明码',
        field: 'visibleStripId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '工单号',
        field: 'workOrder',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '子批号',
        field: 'subLot',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '来源',
        field: 'source',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '行数',
        field: 'rows',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '列数',
        field: 'cols',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '总数',
        field: 'unitCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据版本',
        field: 'mapdataVer',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '设置站别',
        field: 'setProcessStep',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '当前作业站别',
        field: 'currentProcessStep',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '作业状态',
        field: 'processState',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '作业类型(量产/测试)',
        field: 'processType',
          component: 'Select',
          componentProps: {
              options: [],
          },
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
          label: '条号',
          field: 'stripId',
            component: 'Input',
        },
        {
          label: '条号明码',
          field: 'visibleStripId',
            component: 'Input',
        },
        {
          label: '工单号',
          field: 'workOrder',
            component: 'Input',
        },
        {
          label: '子批号',
          field: 'subLot',
            component: 'Input',
        },
        {
          label: '来源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '行数',
          field: 'rows',
            component: 'Input',
        },
        {
          label: '列数',
          field: 'cols',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapdataVer',
            component: 'Input',
        },
        {
          label: '设置站别',
          field: 'setProcessStep',
            component: 'Input',
        },
        {
          label: '当前作业站别',
          field: 'currentProcessStep',
            component: 'Input',
        },
        {
          label: '作业状态',
          field: 'processState',
            component: 'Input',
        },
        {
          label: '作业类型(量产/测试)',
          field: 'processType',
            component: 'Select',
            componentProps: {
                options:[],
            },
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
          label: '条号',
          field: 'stripId',
            component: 'Input',
        },
        {
          label: '条号明码',
          field: 'visibleStripId',
            component: 'Input',
        },
        {
          label: '工单号',
          field: 'workOrder',
            component: 'Input',
        },
        {
          label: '子批号',
          field: 'subLot',
            component: 'Input',
        },
        {
          label: '来源',
          field: 'source',
            component: 'Input',
        },
        {
          label: '行数',
          field: 'rows',
            component: 'Input',
        },
        {
          label: '列数',
          field: 'cols',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapdataVer',
            component: 'Input',
        },
        {
          label: '设置站别',
          field: 'setProcessStep',
            component: 'Input',
        },
        {
          label: '当前作业站别',
          field: 'currentProcessStep',
            component: 'Input',
        },
        {
          label: '作业状态',
          field: 'processState',
            component: 'Input',
        },
        {
          label: '作业类型(量产/测试)',
          field: 'processType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]