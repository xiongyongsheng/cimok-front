import { defHttp } from '@/utils/http/axios'

// 查询RCP版本记录列表
export function getRcpHisPage(params) {
  return defHttp.get({ url: '/base/rcp-his/page', params })
}

// 查询RCP版本记录详情
export function getRcpHis(id: number) {
  return defHttp.get({ url: `/base/rcp-his/get?id=${id}` })
}

// 新增RCP版本记录
export function createRcpHis(data) {
  return defHttp.post({ url: '/base/rcp-his/create', data })
}

// 修改RCP版本记录
export function updateRcpHis(data) {
  return defHttp.put({ url: '/base/rcp-his/update', data })
}

// 删除RCP版本记录
export function deleteRcpHis(id: number) {
  return defHttp.delete({ url: `/base/rcp-his/delete?id=${id}` })
}

// 导出RCP版本记录 Excel
export function exportRcpHis(params) {
  return defHttp.download({ url: '/base/rcp-his/export-excel', params }, 'RCP版本记录.xls')
}