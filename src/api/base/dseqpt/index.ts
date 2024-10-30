import { defHttp } from '@/utils/http/axios'

// 查询设备台账列表
export function getDSEqptPage(params) {
  return defHttp.get({ url: '/base/ds-event-log/page', params })
}
