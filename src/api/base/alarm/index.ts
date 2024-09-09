import { defHttp } from '@/utils/http/axios'

// 查询报警基础信息列表
export function getAlarmPage(params) {
  return defHttp.get({ url: '/base/alarm/page', params })
}

// 查询报警基础信息详情
export function getAlarm(id: number) {
  return defHttp.get({ url: `/base/alarm/get?id=${id}` })
}

// 新增报警基础信息
export function createAlarm(data) {
  return defHttp.post({ url: '/base/alarm/create', data })
}

// 修改报警基础信息
export function updateAlarm(data) {
  return defHttp.put({ url: '/base/alarm/update', data })
}

// 删除报警基础信息
export function deleteAlarm(id: number) {
  return defHttp.delete({ url: `/base/alarm/delete?id=${id}` })
}

// 导出报警基础信息 Excel
export function exportAlarm(params) {
  return defHttp.download({ url: '/base/alarm/export-excel', params }, '报警基础信息.xls')
}

export function getEqptTypeList() {
  return defHttp.get({ url: '/base/eqpt-type/get-simple-list' })
}
