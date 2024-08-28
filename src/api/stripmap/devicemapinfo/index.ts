/*
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-28 21:20:13
 * @LastEditors: 卢靖康
 */
import { defHttp } from '@/utils/http/axios'

// 查询产品Map信息列表
export function getDeviceMapinfoPage(params) {
  return defHttp.get({ url: '/stripmap/device-mapinfo/page', params })
}

// 查询产品Map信息详情
export function getDeviceMapinfo(id: number) {
  return defHttp.get({ url: `/stripmap/device-mapinfo/get?id=${id}` })
}

// 新增产品Map信息
export function createDeviceMapinfo(data) {
  return defHttp.post({ url: '/stripmap/device-mapinfo/create', data })
}

// 修改产品Map信息
export function updateDeviceMapinfo(data) {
  return defHttp.put({ url: '/stripmap/device-mapinfo/update', data })
}

// 删除产品Map信息
export function deleteDeviceMapinfo(id: number) {
  return defHttp.delete({ url: `/stripmap/device-mapinfo/delete?id=${id}` })
}

// 导出产品Map信息 Excel
export function exportDeviceMapinfo(params) {
  return defHttp.download({ url: '/stripmap/device-mapinfo/export-excel', params }, '产品Map信息.xls')
}
