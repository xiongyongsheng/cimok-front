import { defHttp } from '@/utils/http/axios';

// 查询转换定义列表
export function getCodeConversionPage(params) {
  return defHttp
    .get({ url: '/wafermap/code-conversion/page', params })
    .then((res) => {
      console.log(
        '%c [ res ]-6',
        'font-size:13px; background:pink; color:#bf2c9f;',
        res
      );

      return res;
    });
}

// 查询转换定义详情
export function getCodeConversion(id: number) {
  return defHttp.get({ url: `/wafermap/code-conversion/get?id=${id}` });
}

// 新增转换定义
export function createCodeConversion(data) {
  return defHttp.post({ url: '/wafermap/code-conversion/create', data });
}

// 修改转换定义
export function updateCodeConversion(data) {
  return defHttp.put({ url: '/wafermap/code-conversion/update', data });
}

// 状态修改
export function updateCodeConversionStatus(id: number, status: number) {
  const data = {
    id,
    status,
  }
  return defHttp.put({ url: '/wafermap/code-conversion/update-status', data })

}
// 删除转换定义
export function deleteCodeConversion(id: number) {
  return defHttp.delete({ url: `/wafermap/code-conversion/delete?id=${id}` });
}

// 导出转换定义 Excel
export function exportCodeConversion(params) {
  return defHttp.download(
    { url: '/wafermap/code-conversion/export-excel', params },
    '转换定义.xls'
  );
}
