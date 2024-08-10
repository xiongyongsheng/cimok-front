import { defHttp } from '@/utils/http/axios'

// 查询Recipe参数规则列表
export function getRcpLimitRulePage(params) {
  return defHttp.get({ url: '/base/rcp-limit-rule/page', params })
}

// 查询Recipe参数规则详情
export function getRcpLimitRule(id: number) {
  return defHttp.get({ url: `/base/rcp-limit-rule/get?id=${id}` })
}

// 新增Recipe参数规则
export function createRcpLimitRule(data) {
  return defHttp.post({ url: '/base/rcp-limit-rule/create', data })
}

// 修改Recipe参数规则
export function updateRcpLimitRule(data) {
  return defHttp.put({ url: '/base/rcp-limit-rule/update', data })
}

// 删除Recipe参数规则
export function deleteRcpLimitRule(id: number) {
  return defHttp.delete({ url: `/base/rcp-limit-rule/delete?id=${id}` })
}

// 导出Recipe参数规则 Excel
export function exportRcpLimitRule(params) {
  return defHttp.download({ url: '/base/rcp-limit-rule/export-excel', params }, 'Recipe参数规则.xls')
}