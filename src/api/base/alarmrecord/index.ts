import { defHttp } from '@/utils/http/axios'

// 查询设备报警记录列表
export function getAlarmRecordPage(params) {
  return defHttp.get({ url: '/base/alarm-record/page', params })
}

// 查询设备报警记录详情
export function getAlarmRecord(id: number) {
  return defHttp.get({ url: `/base/alarm-record/get?id=${id}` })
}

// 新增设备报警记录
export function createAlarmRecord(data) {
  return defHttp.post({ url: '/base/alarm-record/create', data })
}

// 修改设备报警记录
export function updateAlarmRecord(data) {
  return defHttp.put({ url: '/base/alarm-record/update', data })
}

// 删除设备报警记录
export function deleteAlarmRecord(id: number) {
  return defHttp.delete({ url: `/base/alarm-record/delete?id=${id}` })
}

// 导出设备报警记录 Excel
export function exportAlarmRecord(params) {
  return defHttp.download({ url: '/base/alarm-record/export-excel', params }, '设备报警记录.xls')
}