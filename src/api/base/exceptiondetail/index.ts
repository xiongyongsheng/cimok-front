import { defHttp } from '@/utils/http/axios'

// 查询异常明细列表
export function getExceptionDetailPage(params) {
  return defHttp.get({ url: '/base/exception-detail/page', params })
}

// 查询异常明细详情
export function getExceptionDetail(id: number) {
  return defHttp.get({ url: `/base/exception-detail/get?id=${id}` })
}

// 新增异常明细
export function createExceptionDetail(data) {
  return defHttp.post({ url: '/base/exception-detail/create', data })
}

// 修改异常明细
export function updateExceptionDetail(data) {
  return defHttp.put({ url: '/base/exception-detail/update', data })
}

// 删除异常明细
export function deleteExceptionDetail(id: number) {
  return defHttp.delete({ url: `/base/exception-detail/delete?id=${id}` })
}

// 导出异常明细 Excel
export function exportExceptionDetail(params) {
  return defHttp.download({ url: '/base/exception-detail/export-excel', params }, '异常明细.xls')
}