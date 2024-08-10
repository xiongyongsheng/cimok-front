import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 160,
    },
        {
          title: '设备类型编码',
          dataIndex: 'eqptTypeCode',
          width: 160,
        },
        {
          title: '规则ID',
          dataIndex: 'ruleId',
          width: 160,
        },
        {
          title: '报警ID',
          dataIndex: 'alid',
          width: 160,
        },
        {
          title: '管理等级',
          dataIndex: 'mngLevel',
          width: 160,
        },
        {
          title: '管理窗口时长',
          dataIndex: 'windowTime',
          width: 160,
        },
        {
          title: '发生次数',
          dataIndex: 'occurTimes',
          width: 160,
        },
        {
          title: '邮件通知',
          dataIndex: 'mailNoti',
          width: 160,
        },
        {
          title: '邮件群组',
          dataIndex: 'mailGroup',
          width: 160,
        },
        {
          title: '检验任务',
          dataIndex: 'checkTask',
          width: 160,
        },
        {
          title: '检验任务类型',
          dataIndex: 'checkTaskType',
          width: 160,
        },
        {
          title: '锁定批次',
          dataIndex: 'holdLot',
          width: 160,
        },
        {
          title: '锁定设备',
          dataIndex: 'holdEqpt',
          width: 160,
        },
        {
          title: '修机任务',
          dataIndex: 'repairTask',
          width: 160,
        },
        {
          title: '部门id',
          dataIndex: 'deptId',
          width: 160,
        },
        {
          title: '是否启用',
          dataIndex: 'enable',
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
        label: '设备类型编码',
        field: 'eqptTypeCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '规则ID',
        field: 'ruleId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '报警ID',
        field: 'alid',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '管理等级',
        field: 'mngLevel',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '管理窗口时长',
        field: 'windowTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
      {
        label: '发生次数',
        field: 'occurTimes',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '邮件通知',
        field: 'mailNoti',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '邮件群组',
        field: 'mailGroup',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '检验任务',
        field: 'checkTask',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '检验任务类型',
        field: 'checkTaskType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '锁定批次',
        field: 'holdLot',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '锁定设备',
        field: 'holdEqpt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '修机任务',
        field: 'repairTask',
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
        label: '是否启用',
        field: 'enable',
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
          label: '设备类型编码',
          field: 'eqptTypeCode',
            component: 'Input',
        },
        {
          label: '规则ID',
          field: 'ruleId',
            component: 'Input',
        },
        {
          label: '报警ID',
          field: 'alid',
            component: 'Input',
        },
        {
          label: '管理等级',
          field: 'mngLevel',
            component: 'Input',
        },
        {
          label: '管理窗口时长',
          field: 'windowTime',
            component: 'DatePicker',
            componentProps: {
              showTime: true,
              format: 'YYYY-MM-DD HH:mm:ss',
              valueFormat: 'x',
            },
        },
        {
          label: '发生次数',
          field: 'occurTimes',
            component: 'Input',
        },
        {
          label: '邮件通知',
          field: 'mailNoti',
            component: 'Input',
        },
        {
          label: '邮件群组',
          field: 'mailGroup',
            component: 'Input',
        },
        {
          label: '检验任务',
          field: 'checkTask',
            component: 'Input',
        },
        {
          label: '检验任务类型',
          field: 'checkTaskType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '锁定批次',
          field: 'holdLot',
            component: 'Input',
        },
        {
          label: '锁定设备',
          field: 'holdEqpt',
            component: 'Input',
        },
        {
          label: '修机任务',
          field: 'repairTask',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
        {
          label: '是否启用',
          field: 'enable',
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
          label: '设备类型编码',
          field: 'eqptTypeCode',
            component: 'Input',
        },
        {
          label: '规则ID',
          field: 'ruleId',
            component: 'Input',
        },
        {
          label: '报警ID',
          field: 'alid',
            component: 'Input',
        },
        {
          label: '管理等级',
          field: 'mngLevel',
            component: 'Input',
        },
        {
          label: '管理窗口时长',
          field: 'windowTime',
            component: 'DatePicker',
            componentProps: {
              showTime: true,
              format: 'YYYY-MM-DD HH:mm:ss',
              valueFormat: 'x',
            },
        },
        {
          label: '发生次数',
          field: 'occurTimes',
            component: 'Input',
        },
        {
          label: '邮件通知',
          field: 'mailNoti',
            component: 'Input',
        },
        {
          label: '邮件群组',
          field: 'mailGroup',
            component: 'Input',
        },
        {
          label: '检验任务',
          field: 'checkTask',
            component: 'Input',
        },
        {
          label: '检验任务类型',
          field: 'checkTaskType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '锁定批次',
          field: 'holdLot',
            component: 'Input',
        },
        {
          label: '锁定设备',
          field: 'holdEqpt',
            component: 'Input',
        },
        {
          label: '修机任务',
          field: 'repairTask',
            component: 'Input',
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
        {
          label: '是否启用',
          field: 'enable',
            component: 'Input',
        },
]
