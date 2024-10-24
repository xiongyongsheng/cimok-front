import { defHttp } from '@/utils/http/axios'

// 查询BIN实时良率列表
export function getEqptBinPage(params) {
  return defHttp.get({ url: '/tmm/eqpt-bin/page', params })
}

// 查询BIN实时良率详情
export function getEqptBin(id: number) {
  return defHttp.get({ url: `/tmm/eqpt-bin/get?id=${id}` })
}

// 新增BIN实时良率
export function createEqptBin(data) {
  return defHttp.post({ url: '/tmm/eqpt-bin/create', data })
}

// 修改BIN实时良率
export function updateEqptBin(data) {
  return defHttp.put({ url: '/tmm/eqpt-bin/update', data })
}

// 删除BIN实时良率
export function deleteEqptBin(id: number) {
  return defHttp.delete({ url: `/tmm/eqpt-bin/delete?id=${id}` })
}

// 导出BIN实时良率 Excel
export function exportEqptBin(params) {
  return defHttp.download({ url: '/tmm/eqpt-bin/export-excel', params }, 'BIN实时良率.xls')
}