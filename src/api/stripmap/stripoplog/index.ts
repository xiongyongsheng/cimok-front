import { defHttp } from '@/utils/http/axios'

// 查询操作记录列表
export function getStripOpLogPage(params) {
  return defHttp.get({ url: '/stripmap/strip-op-log/page', params })
}

// 查询操作记录详情
export function getStripOpLog(id: string) {
  return defHttp.get({ url: `/stripmap/strip-op-log/get?id=${id}` })
}

// 新增操作记录
export function createStripOpLog(data) {
  return defHttp.post({ url: '/stripmap/strip-op-log/create', data })
}

// 修改操作记录
export function updateStripOpLog(data) {
  return defHttp.put({ url: '/stripmap/strip-op-log/update', data })
}

// 删除操作记录
export function deleteStripOpLog(id: number) {
  return defHttp.delete({ url: `/stripmap/strip-op-log/delete?id=${id}` })
}

// 导出操作记录 Excel
export function exportStripOpLog(params) {
  return defHttp.download({ url: '/stripmap/strip-op-log/export-excel', params }, '操作记录.xls')
}