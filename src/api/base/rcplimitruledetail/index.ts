import { defHttp } from '@/utils/http/axios'

// 查询参数规则明细列表
export function getRcpLimitRuleDetailPage(params) {
  return defHttp.get({ url: '/base/rcp-limit-rule-detail/page', params })
}

// 查询参数规则明细详情
export function getRcpLimitRuleDetail(id: number) {
  return defHttp.get({ url: `/base/rcp-limit-rule-detail/get?id=${id}` })
}

// 新增参数规则明细
export function createRcpLimitRuleDetail(data) {
  return defHttp.post({ url: '/base/rcp-limit-rule-detail/create', data })
}

// 修改参数规则明细
export function updateRcpLimitRuleDetail(data) {
  return defHttp.put({ url: '/base/rcp-limit-rule-detail/update', data })
}

// 删除参数规则明细
export function deleteRcpLimitRuleDetail(id: number) {
  return defHttp.delete({ url: `/base/rcp-limit-rule-detail/delete?id=${id}` })
}

// 导出参数规则明细 Excel
export function exportRcpLimitRuleDetail(params) {
  return defHttp.download({ url: '/base/rcp-limit-rule-detail/export-excel', params }, '参数规则明细.xls')
}