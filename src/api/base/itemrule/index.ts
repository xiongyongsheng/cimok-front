import { defHttp } from '@/utils/http/axios';

// 查询点检项目规则列表
export function getItemRulePage(params) {
  return defHttp.get({ url: '/base/item-rule/page', params });
}

// 查询点检项目规则详情
export function getItemRule(id: number) {
  return defHttp.get({ url: `/base/item-rule/get?id=${id}` });
}

// 新增点检项目规则
export function createItemRule(data) {
  return defHttp.post({ url: '/base/item-rule/create', data });
}

// 修改点检项目规则
export function updateItemRule(data) {
  return defHttp.put({ url: '/base/item-rule/update', data });
}

// 删除点检项目规则
export function deleteItemRule(id: number) {
  return defHttp.delete({ url: `/base/item-rule/delete?id=${id}` });
}

// 导出点检项目规则 Excel
export function exportItemRule(params) {
  return defHttp.download(
    { url: '/base/item-rule/export-excel', params },
    '点检项目规则.xls'
  );
}

export function createItemRuleBatch(data) {
  return defHttp.post({ url: '/base/item-rule/saveBatch', data });
}
