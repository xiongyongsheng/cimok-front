/*
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-24 23:19:07
 * @LastEditors: 卢靖康
 */
import { defHttp } from '@/utils/http/axios'

// 查询操作记录列表
export function getWaferOpLogPage(params) {
  return defHttp.get({ url: '/wafermap/wafer-op-log/page', params })
}

// 查询操作记录详情
export function getWaferOpLog(id: string) {
  return defHttp.get({ url: `/wafermap/wafer-op-log/get?id=${id}` })
}

// 新增操作记录
export function createWaferOpLog(data) {
  return defHttp.post({ url: '/wafermap/wafer-op-log/create', data })
}

// 修改操作记录
export function updateWaferOpLog(data) {
  return defHttp.put({ url: '/wafermap/wafer-op-log/update', data })
}

// 删除操作记录
export function deleteWaferOpLog(id: number) {
  return defHttp.delete({ url: `/wafermap/wafer-op-log/delete?id=${id}` })
}

// 导出操作记录 Excel
export function exportWaferOpLog(params) {
  return defHttp.download({ url: '/wafermap/wafer-op-log/export-excel', params }, '操作记录.xls')
}
