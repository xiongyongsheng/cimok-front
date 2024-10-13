import { defHttp } from '@/utils/http/axios'

// 查询点检单主列表
export function getChecktaskPage(params) {
  return defHttp.get({ url: '/base/checktask/page', params })
}

// 查询点检单主详情
export function getChecktask(id: number) {
  return defHttp.get({ url: `/base/checktask/get?id=${id}` })
}

// 新增点检单主
export function createChecktask(data) {
  return defHttp.post({ url: '/base/checktask/create', data })
}

// 修改点检单主
export function updateChecktask(data) {
  return defHttp.put({ url: '/base/checktask/update', data })
}

// 删除点检单主
export function deleteChecktask(id: number) {
  return defHttp.delete({ url: `/base/checktask/delete?id=${id}` })
}

// 导出点检单主 Excel
export function exportChecktask(params) {
  return defHttp.download({ url: '/base/checktask/export-excel', params }, '点检单主.xls')
}