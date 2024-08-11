import { defHttp } from '@/utils/http/axios'

// 查询设备作业的Map信息列表
export function getEqptMapinfoPage(params) {
  return defHttp.get({ url: '/stripmap/eqpt-mapinfo/page', params })
}

// 查询设备作业的Map信息详情
export function getEqptMapinfo(id: number) {
  return defHttp.get({ url: `/stripmap/eqpt-mapinfo/get?id=${id}` })
}

// 新增设备作业的Map信息
export function createEqptMapinfo(data) {
  return defHttp.post({ url: '/stripmap/eqpt-mapinfo/create', data })
}

// 修改设备作业的Map信息
export function updateEqptMapinfo(data) {
  return defHttp.put({ url: '/stripmap/eqpt-mapinfo/update', data })
}

// 删除设备作业的Map信息
export function deleteEqptMapinfo(id: number) {
  return defHttp.delete({ url: `/stripmap/eqpt-mapinfo/delete?id=${id}` })
}

// 导出设备作业的Map信息 Excel
export function exportEqptMapinfo(params) {
  return defHttp.download({ url: '/stripmap/eqpt-mapinfo/export-excel', params }, '设备作业的Map信息.xls')
}