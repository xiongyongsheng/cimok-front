import { defHttp } from '@/utils/http/axios'

// 查询校验任务的具体项目列表
export function getChecktaskItemPage(params) {
  return defHttp.get({ url: '/base/checktask-item/page', params })
}

// 查询校验任务的具体项目详情
export function getChecktaskItem(id: number) {
  return defHttp.get({ url: `/base/checktask-item/get?id=${id}` })
}

// 新增校验任务的具体项目
export function createChecktaskItem(data) {
  return defHttp.post({ url: '/base/checktask-item/create', data })
}

// 修改校验任务的具体项目
export function updateChecktaskItem(data) {
  return defHttp.put({ url: '/base/checktask-item/update', data })
}

// 删除校验任务的具体项目
export function deleteChecktaskItem(id: number) {
  return defHttp.delete({ url: `/base/checktask-item/delete?id=${id}` })
}

// 导出校验任务的具体项目 Excel
export function exportChecktaskItem(params) {
  return defHttp.download({ url: '/base/checktask-item/export-excel', params }, '校验任务的具体项目.xls')
}