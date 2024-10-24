import { defHttp } from '@/utils/http/axios'

// 查询SITE监控规则列表
export function getSiteRulePage(params) {
  return defHttp.get({ url: '/tmm/site-rule/page', params })
}

// 查询SITE监控规则详情
export function getSiteRule(id: number) {
  return defHttp.get({ url: `/tmm/site-rule/get?id=${id}` })
}

// 新增SITE监控规则
export function createSiteRule(data) {
  return defHttp.post({ url: '/tmm/site-rule/create', data })
}

// 修改SITE监控规则
export function updateSiteRule(data) {
  return defHttp.put({ url: '/tmm/site-rule/update', data })
}

// 删除SITE监控规则
export function deleteSiteRule(id: number) {
  return defHttp.delete({ url: `/tmm/site-rule/delete?id=${id}` })
}

// 导出SITE监控规则 Excel
export function exportSiteRule(params) {
  return defHttp.download({ url: '/tmm/site-rule/export-excel', params }, 'SITE监控规则.xls')
}