import { defHttp } from '@/utils/http/axios'

// 查询Summary失效记录列表
export function getSummaryFailPage(params) {
  return defHttp.get({ url: '/tmm/summary-fail/page', params })
}

// 查询Summary失效记录详情
export function getSummaryFail(id: number) {
  return defHttp.get({ url: `/tmm/summary-fail/get?id=${id}` })
}

// 新增Summary失效记录
export function createSummaryFail(data) {
  return defHttp.post({ url: '/tmm/summary-fail/create', data })
}

// 修改Summary失效记录
export function updateSummaryFail(data) {
  return defHttp.put({ url: '/tmm/summary-fail/update', data })
}

// 删除Summary失效记录
export function deleteSummaryFail(id: number) {
  return defHttp.delete({ url: `/tmm/summary-fail/delete?id=${id}` })
}

// 导出Summary失效记录 Excel
export function exportSummaryFail(params) {
  return defHttp.download({ url: '/tmm/summary-fail/export-excel', params }, 'Summary失效记录.xls')
}