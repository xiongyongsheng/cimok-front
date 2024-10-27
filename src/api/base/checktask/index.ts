import { defHttp } from '@/utils/http/axios';

// 查询点检单主列表
export function getChecktaskPage(params) {
  return defHttp.get({ url: '/base/checktask/page', params });
}

// 查询点检单主详情
export function getChecktask(id: number) {
  return defHttp.get({ url: `/base/checktask/get?id=${id}` });
}
// 获取单据号
export function getChecktaskId() {
  return defHttp.get({ url: '/base/checktask/get-id' });
}

// 获取单据类型下拉框
export function getChecktaskItems() {
  return defHttp.get({ url: '/base/checktask-item/list' });
}
export function getListDetail(id) {
  return defHttp.get({ url: `/base/checktask/get?id=${id}` });
}
// 新增点检单主
export function createChecktask(data) {
  return defHttp.post({ url: '/base/checktask/create', data });
}

export function invokeApi(data) {
  return defHttp.post({ url: '/base/checktask/invoke-api', data });
}
export function getDetailInfo(params) {
  return defHttp.get({ url: '/base/checktask-item/list-item', params });
}

// 修改点检单主
export function updateChecktask(data) {
  return defHttp.put({ url: '/base/checktask/update', data });
}

// 删除点检单主
export function deleteChecktask(id: number) {
  return defHttp.delete({ url: `/base/checktask/delete?id=${id}` });
}

// 导出点检单主 Excel
export function exportChecktask(params) {
  return defHttp.download(
    { url: '/base/checktask/export-excel', params },
    '点检单主.xls'
  );
}
