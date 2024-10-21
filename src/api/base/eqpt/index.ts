import { defHttp } from '@/utils/http/axios'

// 查询设备台账列表
export function getEqptPage(params) {
  return defHttp.get({ url: '/base/eqpt/page', params })
}

// 查询设备台账详情
export function getEqpt(id: number) {
  return defHttp.get({ url: `/base/eqpt/get?id=${id}` })
}

// 新增设备台账
export function createEqpt(data) {
  return defHttp.post({ url: '/base/eqpt/create', data })
}

// 修改设备台账
export function updateEqpt(data) {
  return defHttp.put({ url: '/base/eqpt/update', data })
}

// 删除设备台账
export function deleteEqpt(id: number) {
  return defHttp.delete({ url: `/base/eqpt/delete?id=${id}` })
}

// 导出设备台账 Excel
export function exportEqpt(params) {
  return defHttp.download({ url: '/base/eqpt/export-excel', params }, '设备台账.xls')
}

// 获取设备总览
export function getEqptStatusTotal(params) {
  return defHttp.get({ url: `/base/eqpt/status/get/total` ,params})
}
// 获取设备实时状态
export function getEqptStatusReal(params) {
  return defHttp.get({ url: `/base/eqpt/status/get/eqp/real`,params })
}
