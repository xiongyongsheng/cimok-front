import type { BasicColumn, FormSchema } from '@/components/Table'
import { useRender } from '@/components/Table'
import { DICT_TYPE } from '@/utils/dict'

export const columns: BasicColumn[] = [
  // {
  //     title: 'ID',
  //     dataIndex: 'id',
  //     width: 160,
  // },
  {
    title: 'Alarm代码',
    dataIndex: 'alid',
    width: 160,
  },
  {
    title: 'Alarm名称',
    dataIndex: '',
    width: 160,
  },
  {
    title: '设备类型',
    dataIndex: 'eqptTypeCode',
    width: 160,
  },
  {
    title: '管理等级',
    dataIndex: 'mngLevel',
    width: 160,
  },
  {
    title: '管理窗口时长(分钟)',
    dataIndex: 'windowTime',
    width: 160,
  },
  {
    title: '发生次数',
    dataIndex: 'occurTimes',
    width: 160,
  },
  {
    title: '管控方式',
    dataIndex: '',
    width: 160,
  },
  {
    title: '生效',
    dataIndex: 'enable',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_BOOLEAN_STRING)
    }
  },
  {
    title: '创建人员',
    dataIndex: 'creator',
    width: 160,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 160,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    },
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
      options: [],
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
      options: [],
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
