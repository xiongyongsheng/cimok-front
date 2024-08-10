import { defHttp } from '@/utils/http/axios'

// 查询RCP操作的详情列表
export function getRcpOpDetailPage(params) {
  return defHttp.get({ url: '/base/rcp-op-detail/page', params })
}

// 查询RCP操作的详情详情
export function getRcpOpDetail(id: number) {
  return defHttp.get({ url: `/base/rcp-op-detail/get?id=${id}` })
}

// 新增RCP操作的详情
export function createRcpOpDetail(data) {
  return defHttp.post({ url: '/base/rcp-op-detail/create', data })
}

// 修改RCP操作的详情
export function updateRcpOpDetail(data) {
  return defHttp.put({ url: '/base/rcp-op-detail/update', data })
}

// 删除RCP操作的详情
export function deleteRcpOpDetail(id: number) {
  return defHttp.delete({ url: `/base/rcp-op-detail/delete?id=${id}` })
}

// 导出RCP操作的详情 Excel
export function exportRcpOpDetail(params) {
  return defHttp.download({ url: '/base/rcp-op-detail/export-excel', params }, 'RCP操作的详情.xls')
}