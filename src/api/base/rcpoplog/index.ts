import { defHttp } from '@/utils/http/axios'

// 查询Recipe操作记录列表
export function getRcpOpLogPage(params) {
  return defHttp.get({ url: '/base/rcp-op-log/page', params })
}

// 查询Recipe操作记录详情
export function getRcpOpLog(id: number) {
  return defHttp.get({ url: `/base/rcp-op-log/get?id=${id}` })
}

// 新增Recipe操作记录
export function createRcpOpLog(data) {
  return defHttp.post({ url: '/base/rcp-op-log/create', data })
}

// 修改Recipe操作记录
export function updateRcpOpLog(data) {
  return defHttp.put({ url: '/base/rcp-op-log/update', data })
}

// 删除Recipe操作记录
export function deleteRcpOpLog(id: number) {
  return defHttp.delete({ url: `/base/rcp-op-log/delete?id=${id}` })
}

// 导出Recipe操作记录 Excel
export function exportRcpOpLog(params) {
  return defHttp.download({ url: '/base/rcp-op-log/export-excel', params }, 'Recipe操作记录.xls')
}