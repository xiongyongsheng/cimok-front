import { defHttp } from '@/utils/http/axios'

// 查询规则触发行动列表
export function getRuleActionPage(params) {
  return defHttp.get({ url: '/base/rule-action/page', params })
}

// 查询规则触发行动详情
export function getRuleAction(id: number) {
  return defHttp.get({ url: `/base/rule-action/get?id=${id}` })
}

// 新增规则触发行动
export function createRuleAction(data) {
  return defHttp.post({ url: '/base/rule-action/create', data })
}

// 修改规则触发行动
export function updateRuleAction(data) {
  return defHttp.put({ url: '/base/rule-action/update', data })
}

// 删除规则触发行动
export function deleteRuleAction(id: number) {
  return defHttp.delete({ url: `/base/rule-action/delete?id=${id}` })
}

// 导出规则触发行动 Excel
export function exportRuleAction(params) {
  return defHttp.download({ url: '/base/rule-action/export-excel', params }, '规则触发行动.xls')
}