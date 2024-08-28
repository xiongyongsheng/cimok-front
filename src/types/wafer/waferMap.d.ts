/*
 * @Author: 卢靖康
 * @Date: 2024-08-22 12:32:33
 * @LastEditTime: 2024-08-28 21:17:12
 * @LastEditors: 卢靖康
 */
export interface WaferMapDetailInfo {
  id: string;
  waferId: string;
  custCode: string;
  diePart: string;
  waferLotId: string;
  fnloc:string;
  orloc: string;
  unitCnt: string;
  goodCnt: string;
  ngCnt: string;
  updateTime: string;
  yield: string;
  mapData: string;
  binCodeLength: number;
  colCnt: number;
  rowCnt: number;
  waferBinCodeList: WaferBinCodeListItem[];
}

export interface WaferBinCodeListItem {
  binCode: string;
  binCodeType: string;
  binNum: number;
  binColor: string;
}



export interface WaferMapLogDetailInfo {
  id: string;
  waferId: string;
  opType: string;
  eqptCode: string;
  processStep: string;
  ffrot:string;
  orloc: string;
  unitCnt: string;
  goodCnt: string;
  ngCnt: string;
  mapData: string;
  binCodeLength
  colCnt: number;
  rowCnt: number;
  createTime: string;
  creator: string;
  waferBinCodeList: WaferBinCodeListItem[];
}
