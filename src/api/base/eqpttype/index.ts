import { defHttp } from '@/utils/http/axios'

// 查询设备类型列表
export function getEqptTypePage(params) {
  return defHttp.get({ url: '/base/eqpt-type/page', params })
}

// 查询设备类型详情
export function getEqptType(id: number) {
  return defHttp.get({ url: `/base/eqpt-type/get?id=${id}` })
}

// 新增设备类型
export function createEqptType(data) {
  return defHttp.post({ url: '/base/eqpt-type/create', data })
}

// 修改设备类型
export function updateEqptType(data) {
  return defHttp.put({ url: '/base/eqpt-type/update', data })
}

// 删除设备类型
export function deleteEqptType(id: number) {
  return defHttp.delete({ url: `/base/eqpt-type/delete?id=${id}` })
}

// 导出设备类型 Excel
export function exportEqptType(params) {
  return defHttp.download({ url: '/base/eqpt-type/export-excel', params }, '设备类型.xls')
}