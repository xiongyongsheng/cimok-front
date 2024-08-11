import { defHttp } from '@/utils/http/axios'

// 查询Wafer坐标关联列表
export function getWaferPage(params) {
  return defHttp.get({ url: '/stripmap/wafer/page', params })
}

// 查询Wafer坐标关联详情
export function getWafer(id: number) {
  return defHttp.get({ url: `/stripmap/wafer/get?id=${id}` })
}

// 新增Wafer坐标关联
export function createWafer(data) {
  return defHttp.post({ url: '/stripmap/wafer/create', data })
}

// 修改Wafer坐标关联
export function updateWafer(data) {
  return defHttp.put({ url: '/stripmap/wafer/update', data })
}

// 删除Wafer坐标关联
export function deleteWafer(id: number) {
  return defHttp.delete({ url: `/stripmap/wafer/delete?id=${id}` })
}

// 导出Wafer坐标关联 Excel
export function exportWafer(params) {
  return defHttp.download({ url: '/stripmap/wafer/export-excel', params }, 'Wafer坐标关联.xls')
}