import { defHttp } from '@/utils/http/axios'

// 查询MAP数据列表
export function getMapdataPage(params) {
  return defHttp.get({ url: '/stripmap/mapdata/page', params })
}

// 查询MAP数据详情
export function getMapdata(id: number) {
  return defHttp.get({ url: `/stripmap/mapdata/get?id=${id}` })
}

// 新增MAP数据
export function createMapdata(data) {
  return defHttp.post({ url: '/stripmap/mapdata/create', data })
}

// 修改MAP数据
export function updateMapdata(data) {
  return defHttp.put({ url: '/stripmap/mapdata/update', data })
}

// 删除MAP数据
export function deleteMapdata(id: number) {
  return defHttp.delete({ url: `/stripmap/mapdata/delete?id=${id}` })
}

// 导出MAP数据 Excel
export function exportMapdata(params) {
  return defHttp.download({ url: '/stripmap/mapdata/export-excel', params }, 'MAP数据.xls')
}