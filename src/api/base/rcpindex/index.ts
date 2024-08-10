import { defHttp } from '@/utils/http/axios'

// 查询Recipe索引列表
export function getRcpIndexPage(params) {
  return defHttp.get({ url: '/base/rcp-index/page', params })
}

// 查询Recipe索引详情
export function getRcpIndex(id: number) {
  return defHttp.get({ url: `/base/rcp-index/get?id=${id}` })
}

// 新增Recipe索引
export function createRcpIndex(data) {
  return defHttp.post({ url: '/base/rcp-index/create', data })
}

// 修改Recipe索引
export function updateRcpIndex(data) {
  return defHttp.put({ url: '/base/rcp-index/update', data })
}

// 删除Recipe索引
export function deleteRcpIndex(id: number) {
  return defHttp.delete({ url: `/base/rcp-index/delete?id=${id}` })
}

// 导出Recipe索引 Excel
export function exportRcpIndex(params) {
  return defHttp.download({ url: '/base/rcp-index/export-excel', params }, 'Recipe索引.xls')
}