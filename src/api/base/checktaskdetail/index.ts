import { defHttp } from '@/utils/http/axios'

// 查询点检单详情列表
export function getChecktaskDetailPage(params) {
  return defHttp.get({ url: '/base/checktask-detail/page', params })
}

// 查询点检单详情详情
export function getChecktaskDetail(id: number) {
  return defHttp.get({ url: `/base/checktask-detail/get?id=${id}` })
}

// 新增点检单详情
export function createChecktaskDetail(data) {
  return defHttp.post({ url: '/base/checktask-detail/create', data })
}

// 修改点检单详情
export function updateChecktaskDetail(data) {
  return defHttp.put({ url: '/base/checktask-detail/update', data })
}

// 删除点检单详情
export function deleteChecktaskDetail(id: number) {
  return defHttp.delete({ url: `/base/checktask-detail/delete?id=${id}` })
}

// 导出点检单详情 Excel
export function exportChecktaskDetail(params) {
  return defHttp.download({ url: '/base/checktask-detail/export-excel', params }, '点检单详情.xls')
}