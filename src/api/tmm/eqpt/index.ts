import { defHttp } from '@/utils/http/axios'

// 查询测试设备实时状态列表
export function getEqptPage(params) {
  return defHttp.get({ url: '/tmm/eqpt/page', params })
}

// 查询测试设备实时状态详情
export function getEqpt(id: number) {
  return defHttp.get({ url: `/tmm/eqpt/get?id=${id}` })
}

// 新增测试设备实时状态
export function createEqpt(data) {
  return defHttp.post({ url: '/tmm/eqpt/create', data })
}

// 修改测试设备实时状态
export function updateEqpt(data) {
  return defHttp.put({ url: '/tmm/eqpt/update', data })
}

// 删除测试设备实时状态
export function deleteEqpt(id: number) {
  return defHttp.delete({ url: `/tmm/eqpt/delete?id=${id}` })
}

// 导出测试设备实时状态 Excel
export function exportEqpt(params) {
  return defHttp.download({ url: '/tmm/eqpt/export-excel', params }, '测试设备实时状态.xls')
}