import { defHttp } from '@/utils/http/axios'

// 查询基板上位置上采集信息列表
export function getDataPosPage(params) {
  return defHttp.get({ url: '/stripmap/data-pos/page', params })
}

// 查询基板上位置上采集信息详情
export function getDataPos(id: number) {
  return defHttp.get({ url: `/stripmap/data-pos/get?id=${id}` })
}

// 新增基板上位置上采集信息
export function createDataPos(data) {
  return defHttp.post({ url: '/stripmap/data-pos/create', data })
}

// 修改基板上位置上采集信息
export function updateDataPos(data) {
  return defHttp.put({ url: '/stripmap/data-pos/update', data })
}

// 删除基板上位置上采集信息
export function deleteDataPos(id: number) {
  return defHttp.delete({ url: `/stripmap/data-pos/delete?id=${id}` })
}

// 导出基板上位置上采集信息 Excel
export function exportDataPos(params) {
  return defHttp.download({ url: '/stripmap/data-pos/export-excel', params }, '基板上位置上采集信息.xls')
}