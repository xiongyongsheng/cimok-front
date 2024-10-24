import { defHttp } from '@/utils/http/axios'

// 查询SummaryBin记录列表
export function getSummaryBinPage(params) {
  return defHttp.get({ url: '/tmm/summary-bin/page', params })
}

// 查询SummaryBin记录详情
export function getSummaryBin(id: number) {
  return defHttp.get({ url: `/tmm/summary-bin/get?id=${id}` })
}

// 新增SummaryBin记录
export function createSummaryBin(data) {
  return defHttp.post({ url: '/tmm/summary-bin/create', data })
}

// 修改SummaryBin记录
export function updateSummaryBin(data) {
  return defHttp.put({ url: '/tmm/summary-bin/update', data })
}

// 删除SummaryBin记录
export function deleteSummaryBin(id: number) {
  return defHttp.delete({ url: `/tmm/summary-bin/delete?id=${id}` })
}

// 导出SummaryBin记录 Excel
export function exportSummaryBin(params) {
  return defHttp.download({ url: '/tmm/summary-bin/export-excel', params }, 'SummaryBin记录.xls')
}