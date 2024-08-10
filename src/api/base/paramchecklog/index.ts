import { defHttp } from '@/utils/http/axios'

// 查询参数比对记录列表
export function getParamCheckLogPage(params) {
  return defHttp.get({ url: '/base/param-check-log/page', params })
}

// 查询参数比对记录详情
export function getParamCheckLog(id: number) {
  return defHttp.get({ url: `/base/param-check-log/get?id=${id}` })
}

// 新增参数比对记录
export function createParamCheckLog(data) {
  return defHttp.post({ url: '/base/param-check-log/create', data })
}

// 修改参数比对记录
export function updateParamCheckLog(data) {
  return defHttp.put({ url: '/base/param-check-log/update', data })
}

// 删除参数比对记录
export function deleteParamCheckLog(id: number) {
  return defHttp.delete({ url: `/base/param-check-log/delete?id=${id}` })
}

// 导出参数比对记录 Excel
export function exportParamCheckLog(params) {
  return defHttp.download({ url: '/base/param-check-log/export-excel', params }, '参数比对记录.xls')
}