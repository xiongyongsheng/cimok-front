import { defHttp } from '@/utils/http/axios'

// 更新stripMap binCode定义 /stripmap/bincode-define/update
export function updateBinCodeDefine(data) {
  return defHttp.put({ url: '/stripmap/bincode-define/update', data })
}
 
// 创建stripMap binCode定义 /stripmap/bincode-define/create
export function createBinCodeDefine(data) {
  return defHttp.post({ url: '/stripmap/bincode-define/create', data })
}

// 删除stripMap binCode定义 /stripmap/bincode-define/delete
export function deleteBinCodeDefine(id: number) {
  return defHttp.delete({ url: `/stripmap/bincode-define/delete?id=${id}` })
}

// 获得stripMap binCode定义分页 /stripmap/bincode-define/page
export function getBinCodeDefinePage(params) {
  return defHttp.get({ url: '/stripmap/bincode-define/page', params })
}

// 获得stripMap binCode定义详情 /stripmap/bincode-define/get
export function getBinCodeDefine(id: number) {
  return defHttp.get({ url: `/stripmap/bincode-define/get?id=${id}` })
}

// 导出stripMap binCode定义 Excel /stripmap/bincode-define/export-excel
export function exportBinCodeDefine(params) {
  return defHttp.get({ url: '/stripmap/bincode-define/export-excel', params })
}
