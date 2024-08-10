import { defHttp } from '@/utils/http/axios'

// 查询报警管控规则列表
export function getAlarmRulePage(params) {
  return defHttp.get({ url: '/base/alarm-rule/page', params })
}

// 查询报警管控规则详情
export function getAlarmRule(id: number) {
  return defHttp.get({ url: `/base/alarm-rule/get?id=${id}` })
}

// 新增报警管控规则
export function createAlarmRule(data) {
  return defHttp.post({ url: '/base/alarm-rule/create', data })
}

// 修改报警管控规则
export function updateAlarmRule(data) {
  return defHttp.put({ url: '/base/alarm-rule/update', data })
}

// 删除报警管控规则
export function deleteAlarmRule(id: number) {
  return defHttp.delete({ url: `/base/alarm-rule/delete?id=${id}` })
}

// 导出报警管控规则 Excel
export function exportAlarmRule(params) {
  return defHttp.download({ url: '/base/alarm-rule/export-excel', params }, '报警管控规则.xls')
}