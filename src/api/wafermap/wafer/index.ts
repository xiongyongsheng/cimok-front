import { defHttp } from '@/utils/http/axios'

// 查询晶圆片信息列表
export function getWaferPage(params) {
  return defHttp.get({ url: '/wafermap/wafer/page', params })
}

// 查询晶圆片信息详情
export function getWafer(id: number) {
  return defHttp.get({ url: `/wafermap/wafer/get?id=${id}` })
}

// 新增晶圆片信息
export function createWafer(data) {
  return defHttp.post({ url: '/wafermap/wafer/create', data })
}

// 修改晶圆片信息
export function updateWafer(data) {
  return defHttp.put({ url: '/wafermap/wafer/update', data })
}

// 删除晶圆片信息
export function deleteWafer(id: number) {
  return defHttp.delete({ url: `/wafermap/wafer/delete?id=${id}` })
}

// 导出晶圆片信息 Excel
export function exportWafer(params) {
  return defHttp.download({ url: '/wafermap/wafer/export-excel', params }, '晶圆片信息.xls')
}