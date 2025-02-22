import { defHttp } from '@/utils/http/axios'

// 查询Recipe参数列表
export function getRcpParamPage(params) {
  return defHttp.get({ url: '/base/rcp-param/page', params })
}

// 查询Recipe参数详情
export function getRcpParam(id: number) {
  return defHttp.get({ url: `/base/rcp-param/get?id=${id}` })
}

// 新增Recipe参数
export function createRcpParam(data) {
  return defHttp.post({ url: '/base/rcp-param/create', data })
}

// 修改Recipe参数
export function updateRcpParam(data) {
  return defHttp.put({ url: '/base/rcp-param/update', data })
}

// 删除Recipe参数
export function deleteRcpParam(id: number) {
  return defHttp.delete({ url: `/base/rcp-param/delete?id=${id}` })
}

// 导出Recipe参数 Excel
export function exportRcpParam(params) {
  return defHttp.download({ url: '/base/rcp-param/export-excel', params }, 'Recipe参数.xls')
}