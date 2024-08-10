import { defHttp } from '@/utils/http/axios'

// 查询RCP版本和机台的适用范围列表
export function getRcpEqptSuitPage(params) {
  return defHttp.get({ url: '/base/rcp-eqpt-suit/page', params })
}

// 查询RCP版本和机台的适用范围详情
export function getRcpEqptSuit(id: number) {
  return defHttp.get({ url: `/base/rcp-eqpt-suit/get?id=${id}` })
}

// 新增RCP版本和机台的适用范围
export function createRcpEqptSuit(data) {
  return defHttp.post({ url: '/base/rcp-eqpt-suit/create', data })
}

// 修改RCP版本和机台的适用范围
export function updateRcpEqptSuit(data) {
  return defHttp.put({ url: '/base/rcp-eqpt-suit/update', data })
}

// 删除RCP版本和机台的适用范围
export function deleteRcpEqptSuit(id: number) {
  return defHttp.delete({ url: `/base/rcp-eqpt-suit/delete?id=${id}` })
}

// 导出RCP版本和机台的适用范围 Excel
export function exportRcpEqptSuit(params) {
  return defHttp.download({ url: '/base/rcp-eqpt-suit/export-excel', params }, 'RCP版本和机台的适用范围.xls')
}