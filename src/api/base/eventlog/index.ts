import { defHttp } from '@/utils/http/axios'

// 查询设备事件日志列表
export function getEventLogPage(params) {
  return defHttp.get({ url: '/base/event-log/page', params })
}

// 查询设备事件日志详情
export function getEventLog(id: number) {
  return defHttp.get({ url: `/base/event-log/get?id=${id}` })
}

// 新增设备事件日志
export function createEventLog(data) {
  return defHttp.post({ url: '/base/event-log/create', data })
}

// 修改设备事件日志
export function updateEventLog(data) {
  return defHttp.put({ url: '/base/event-log/update', data })
}

// 删除设备事件日志
export function deleteEventLog(id: number) {
  return defHttp.delete({ url: `/base/event-log/delete?id=${id}` })
}

// 导出设备事件日志 Excel
export function exportEventLog(params) {
  return defHttp.download({ url: '/base/event-log/export-excel', params }, '设备事件日志.xls')
}