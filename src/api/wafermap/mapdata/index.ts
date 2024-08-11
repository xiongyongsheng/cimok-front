import { defHttp } from '@/utils/http/axios'

// 查询晶圆图档数据列表
export function getMapdataPage(params) {
  return defHttp.get({ url: '/wafermap/mapdata/page', params })
}

// 查询晶圆图档数据详情
export function getMapdata(id: number) {
  return defHttp.get({ url: `/wafermap/mapdata/get?id=${id}` })
}

// 新增晶圆图档数据
export function createMapdata(data) {
  return defHttp.post({ url: '/wafermap/mapdata/create', data })
}

// 修改晶圆图档数据
export function updateMapdata(data) {
  return defHttp.put({ url: '/wafermap/mapdata/update', data })
}

// 删除晶圆图档数据
export function deleteMapdata(id: number) {
  return defHttp.delete({ url: `/wafermap/mapdata/delete?id=${id}` })
}

// 导出晶圆图档数据 Excel
export function exportMapdata(params) {
  return defHttp.download({ url: '/wafermap/mapdata/export-excel', params }, '晶圆图档数据.xls')
}