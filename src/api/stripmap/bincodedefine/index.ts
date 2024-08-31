import { defHttp } from '@/utils/http/axios'

// 查询stripMap binCode定义列表
export function getBincodeDefinePage(params) {
  return defHttp.get({ url: '/stripmap/bincode-define/page', params })
}

// 查询stripMap binCode定义详情
export function getBincodeDefine(id: number) {
  return defHttp.get({ url: `/stripmap/bincode-define/get?id=${id}` })
}

// 新增stripMap binCode定义
export function createBincodeDefine(data) {
  return defHttp.post({ url: '/stripmap/bincode-define/create', data })
}

// 修改stripMap binCode定义
export function updateBincodeDefine(data) {
  return defHttp.put({ url: '/stripmap/bincode-define/update', data })
}

// 删除stripMap binCode定义
export function deleteBincodeDefine(id: number) {
  return defHttp.delete({ url: `/stripmap/bincode-define/delete?id=${id}` })
}

// 导出stripMap binCode定义 Excel
export function exportBincodeDefine(params) {
  return defHttp.download({ url: '/stripmap/bincode-define/export-excel', params }, 'stripMap binCode定义.xls')
}