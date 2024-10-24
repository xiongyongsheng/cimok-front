import { defHttp } from '@/utils/http/axios'

// 查询批次Summary数据列表
export function getSummaryPage(params) {
  return defHttp.get({ url: '/tmm/summary/page', params })
}

// 查询批次Summary数据详情
export function getSummary(id: number) {
  return defHttp.get({ url: `/tmm/summary/get?id=${id}` })
}

// 新增批次Summary数据
export function createSummary(data) {
  return defHttp.post({ url: '/tmm/summary/create', data })
}

// 修改批次Summary数据
export function updateSummary(data) {
  return defHttp.put({ url: '/tmm/summary/update', data })
}

// 删除批次Summary数据
export function deleteSummary(id: number) {
  return defHttp.delete({ url: `/tmm/summary/delete?id=${id}` })
}

// 导出批次Summary数据 Excel
export function exportSummary(params) {
  return defHttp.download({ url: '/tmm/summary/export-excel', params }, '批次Summary数据.xls')
}

export function apiGetSummary(id:string){
  return defHttp.get({ url: `/tmm/summary/get?id=${id}` })
}

export function apiGetSummarySiteList(id:string){
  return defHttp.get({ url: `/tmm/summary-site/list?testRecordId=${id}` })
}

export function apiGetSummaryBinList(id:string){
  return defHttp.get({ url: `/tmm/summary-bin/list?testRecordId=${id}` })
}

export function apiGetSummaryFailList(id:string){
  return defHttp.get({ url: `/tmm/summary-fail/list?testRecordId=${id}` })
}

export function apiSummaryFailDistribution(id:string,itemName:string){
  return defHttp.get({ url: `/tmm/summary-fail/distribution?testRecordId=${id}&itemName=${itemName}` })
}

export function apiSummaryFailAllDistribution(id:string){
  return defHttp.get({ url: `/tmm/summary-fail/all-distribution?testRecordId=${id}` })
}
