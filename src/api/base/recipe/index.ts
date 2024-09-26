import { defHttp } from '@/utils/http/axios';

export function rcpLimitRuleSubmit(data) {
  return defHttp.post({
    url: '/base/rcp-limit-rule/submit',
    data,
  });
}
export function createRcpRule(data) {
  return defHttp.post({
    url: '/base/rcp-limit-rule/create',
    data,
  });
}
export function upgradeRcp(data) {
  return defHttp.post({
    url: '/base/rcp-index/upgrade',
    data,
  });
}
export function saveRcpIndexSuitEqpt(data) {
  return defHttp.post({
    url: '/base/rcp-index/save/suit/eqpt',
    data,
  });
}
export function rcpIndexSuitRecipe(params) {
  return defHttp.get({
    url: '/base/rcp-index/suit/recipe',
    params,
  });
}
export function rcpLimitRuleCompare(params) {
  return defHttp.get({
    url: '/base/rcp-limit-rule/recipe/rule/compare',
    params,
  });
}
export function rcpLimitRuleGet(params) {
  return defHttp.get({ url: '/base/rcp-limit-rule/get', params });
}
export function rcpLimitRulePage(params) {
  return defHttp.get({ url: '/base/rcp-limit-rule/page', params });
}
export function rcpOpLogPage(params) {
  return defHttp.get({ url: '/base/rcp-op-log/page', params });
}
export function rcpIndexUpgrade(data) {
  return defHttp.post({ url: '/base/rcp-index/upgrade', data });
}
export function rcpIndexUpdateStatus(data) {
  return defHttp.put({ url: '/base/rcp-index/update-status', data });
}
export function rcpIndexGetRuleParam(params) {
  return defHttp.get({ url: '/base/rcp-index/get/rule/param', params });
}
export function rcpIndexGet(params) {
  return defHttp.get({ url: '/base/rcp-index/get', params });
}
export function rcpIndexSuitEqpt(params) {
  return defHttp.get({ url: '/base/rcp-index/suit/eqpt', params });
}
export function eapUploadRecipe(params) {
  return defHttp.post({ url: '/base/rcp-index/eap/upload/recipe', params });
}
export function eqptRecipeList(params) {
  return defHttp.get({ url: '/base/rcp-index/eqpt/recipe/list', params });
}
export function simpleList(params) {
  return defHttp.get({ url: '/base/eqpt/simple-list', params });
}
export function getSimpleList() {
  return defHttp.get({ url: '/base/eqpt-type/get-simple-list' });
}
export function getPage(params) {
  return defHttp.get({ url: '/base/rcp-index/page', params });
}

// 查询Recipe参数列表
export function getPageLog(params) {
  return defHttp.get({ url: '/base/rcp-op-log/page', params });
}

// 获得RCP操作的详情分页
export function getPageDetail(params) {
  return defHttp.get({ url: '/base/rcp-op-detail/page', params });
}

// 查询Recipe参数详情
export function getRcpParam(id: number) {
  return defHttp.get({ url: `/base/rcp-param/get?id=${id}` });
}

// 新增Recipe参数
export function createRcpParam(data) {
  return defHttp.post({ url: '/base/rcp-param/create', data });
}

// 修改Recipe参数
export function updateRcpParam(data) {
  return defHttp.put({ url: '/base/rcp-param/update', data });
}

// 删除Recipe参数
export function deleteRcpParam(id: number) {
  return defHttp.delete({ url: `/base/rcp-param/delete?id=${id}` });
}

// 导出Recipe参数 Excel
export function exportRcpParam(params) {
  return defHttp.download(
    { url: '/base/rcp-param/export-excel', params },
    'Recipe参数.xls'
  );
}
// 手动下载recipe
export function downloadRecipe(data) {
  return defHttp.post({ url: '/base/rcp-index/download/recipe', data });
}
