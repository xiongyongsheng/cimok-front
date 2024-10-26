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
export function getEqptTraffic(params) {
  return defHttp.get({ url: `/base/eqpt/status/get/communication/traffic`,params })
}
export function getEqptAllList(params) {
  return defHttp.get({ url: `/base/eqpt/status/get/detail/eqp`,params })
}

// 设备冶具信息
export function getEqptEqptfixture(params) {
  return defHttp.get({ url: `/base/eqpt/status/fixture`,params })
}
// 设备buyoff信息
export function getEqptEqptBuyoffInfo(params) {
  return defHttp.get({ url: `/base/eqpt/status/getBuyoffInfo`,params })
}
// 设备通信信息
export function getEqptEqptCommInfo(params) {
  return defHttp.get({ url: `/base/eqpt/status/getEqptCommInfo`,params })
}
// 设备材料信息
export function getEqptEqptMaterialInfo(params) {
  return defHttp.get({ url: `/base/eqpt/status/getEqptMaterialInfo`,params })
}
// 设备履历信息
export function getEqptStatusResume(params) {
  return defHttp.get({ url: `/base/eqpt/status/resume`,params })
}
// 设备状态信息
export function getEqptStatusList(params) {
  return defHttp.get({ url: `/base/eqpt/status/getEqptStatus`,params })
}
export function getEqptLotStatus(params) {
  return defHttp.get({ url: `/base/eqpt/status/eqpt/lot`,params })
}
export function getEqptStatusDetail(params) {
  return defHttp.get({ url: `/base/eqpt/status/detail`,params })
}