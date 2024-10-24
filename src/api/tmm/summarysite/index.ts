import { defHttp } from '@/utils/http/axios'

// 查询SummarySite记录列表
export function getSummarySitePage(params) {
  return defHttp.get({ url: '/tmm/summary-site/page', params })
}

// 查询SummarySite记录详情
export function getSummarySite(id: number) {
  return defHttp.get({ url: `/tmm/summary-site/get?id=${id}` })
}

// 新增SummarySite记录
export function createSummarySite(data) {
  return defHttp.post({ url: '/tmm/summary-site/create', data })
}

// 修改SummarySite记录
export function updateSummarySite(data) {
  return defHttp.put({ url: '/tmm/summary-site/update', data })
}

// 删除SummarySite记录
export function deleteSummarySite(id: number) {
  return defHttp.delete({ url: `/tmm/summary-site/delete?id=${id}` })
}

// 导出SummarySite记录 Excel
export function exportSummarySite(params) {
  return defHttp.download({ url: '/tmm/summary-site/export-excel', params }, 'SummarySite记录.xls')
}