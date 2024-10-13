import { defHttp } from '@/utils/http/axios'

// 查询措施执行详情列表
export function getActiongLogPage(params) {
  return defHttp.get({ url: '/base/actiong-log/page', params })
}

// 查询措施执行详情详情
export function getActiongLog(id: number) {
  return defHttp.get({ url: `/base/actiong-log/get?id=${id}` })
}

// 新增措施执行详情
export function createActiongLog(data) {
  return defHttp.post({ url: '/base/actiong-log/create', data })
}

// 修改措施执行详情
export function updateActiongLog(data) {
  return defHttp.put({ url: '/base/actiong-log/update', data })
}

// 删除措施执行详情
export function deleteActiongLog(id: number) {
  return defHttp.delete({ url: `/base/actiong-log/delete?id=${id}` })
}

// 导出措施执行详情 Excel
export function exportActiongLog(params) {
  return defHttp.download({ url: '/base/actiong-log/export-excel', params }, '措施执行详情.xls')
}