import { defHttp } from '@/utils/http/axios'

// 查询条号信息列表
export function getStripPage(params) {
  return defHttp.get({ url: '/stripmap/strip/page', params })
}

// 查询条号信息详情
export function getStrip(id: number) {
  return defHttp.get({ url: `/stripmap/strip/get?id=${id}` })
}

// 新增条号信息
export function createStrip(data) {
  return defHttp.post({ url: '/stripmap/strip/create', data })
}

// 修改条号信息
export function updateStrip(data) {
  return defHttp.put({ url: '/stripmap/strip/update', data })
}

// 删除条号信息
export function deleteStrip(id: number) {
  return defHttp.delete({ url: `/stripmap/strip/delete?id=${id}` })
}

// 导出条号信息 Excel
export function exportStrip(params) {
  return defHttp.download({ url: '/stripmap/strip/export-excel', params }, '条号信息.xls')
}