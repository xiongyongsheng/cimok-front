import { defHttp } from '@/utils/http/axios'

// 查询条号信息列表
export function getStripPage(params) {
  return defHttp.get({ url: '/stripmap/strip/page', params })
}

// 查询条号信息详情
export function getStrip(id: string) {
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

// 批量新增 
export function createBatch(data) {
  return defHttp.post({ url: '/stripmap/strip/createBatch', data })
}

// 获取子批subLot次下所有strip信息 /stripmap/strip/getAllStripWithCon
export function getAllStripWithCon(subLot: string) {
  return defHttp.get({ url: `/stripmap/strip/getAllStripWithCon?subLot=${subLot}` })
}
//upload文件
export function uploadStripXml(data) {
  return defHttp.uploadFile({ url: '/dev-api/stripmap/strip/parseStripXml' }, data)
}
export function uploadStripManual(data) {
  return defHttp.post({ url: '/stripmap/strip/uploadStripManual' ,data} )
}