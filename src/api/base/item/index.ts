import { defHttp } from '@/utils/http/axios'

// 查询点检项目定义列表
export function getItemPage(params) {
  return defHttp.get({ url: '/base/item/page', params })
}

// 查询点检项目定义详情
export function getItem(id: number) {
  return defHttp.get({ url: `/base/item/get?id=${id}` })
}

// 新增点检项目定义
export function createItem(data) {
  return defHttp.post({ url: '/base/item/create', data })
}

// 修改点检项目定义
export function updateItem(data) {
  return defHttp.put({ url: '/base/item/update', data })
}

// 删除点检项目定义
export function deleteItem(id: number) {
  return defHttp.delete({ url: `/base/item/delete?id=${id}` })
}

// 导出点检项目定义 Excel
export function exportItem(params) {
  return defHttp.download({ url: '/base/item/export-excel', params }, '点检项目定义.xls')
}