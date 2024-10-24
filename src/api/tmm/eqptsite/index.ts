import { defHttp } from '@/utils/http/axios'

// 查询Site实时良率列表
export function getEqptSitePage(params) {
  return defHttp.get({ url: '/tmm/eqpt-site/page', params })
}

// 查询Site实时良率详情
export function getEqptSite(id: number) {
  return defHttp.get({ url: `/tmm/eqpt-site/get?id=${id}` })
}

// 新增Site实时良率
export function createEqptSite(data) {
  return defHttp.post({ url: '/tmm/eqpt-site/create', data })
}

// 修改Site实时良率
export function updateEqptSite(data) {
  return defHttp.put({ url: '/tmm/eqpt-site/update', data })
}

// 删除Site实时良率
export function deleteEqptSite(id: number) {
  return defHttp.delete({ url: `/tmm/eqpt-site/delete?id=${id}` })
}

// 导出Site实时良率 Excel
export function exportEqptSite(params) {
  return defHttp.download({ url: '/tmm/eqpt-site/export-excel', params }, 'Site实时良率.xls')
}