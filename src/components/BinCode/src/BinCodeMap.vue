<!--
 * @Author: 卢靖康
 * @Date: 2024-08-22 14:31:04
 * @LastEditTime: 2024-08-27 21:53:38
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Leafer, Group, Rect, Text, Box, Debug, RenderEvent } from "leafer-ui";
import type { WaferBinCodeListItem } from "../../../types/wafer/waferMap";
import { Loading, useLoading } from "@/components/Loading";
Debug.enable = true;

const wrapEl = ref(null);
const loadingRef = ref(false);

const [openWrapLoading, closeWrapLoading] = useLoading({
  target: wrapEl,
  props: {
    // tip: "加载中...",
    absolute: true,
  },
});
defineOptions({ name: "BinCodeMap" });
const binCodeMapId = ref(new Date().getTime().toString());
let leafer;

const props = defineProps({
  // 容器宽度
  width: {
    type: [String, Number],
    default: "100%",
  },
  // 容器高度
  height: {
    type: [String, Number],
    default: "700px",
  },
  // binCode对应关系
  waferBinCodeList: {
    type: Array,
    default: () => [],
  },
  // 完整的mapString信息
  mapData: {
    type: String,
  },
  // 根据binCodeLength分割mapData
  binCodeLength: {
    type: Number,
    default: 1,
  },
  // 总列数
  colCnt: {
    type: Number,
    default: 0,
  },
  // 总行数
  rowCnt: {
    type: Number,
    default: 0,
  },
});

interface BinCocdeItemGroup {
  binCode: string;
  binCodeType: string;
  binColor: string;
  binNum: number;
  // x轴显示坐标
  x: number;
  // y轴显示坐标
  y: number;
  // 容器实际x坐标
  _x?: number;
  // 容器实际y坐标
  _y?: number;
}

class BinCodeBox {
  binCodeBox?: Box;
  // mapData
  mapData: string = "";
  // 根据binCodeLength分割mapData
  binCodeLength: number = 1;
  // binCode对应关系
  waferBinCodeList: WaferBinCodeListItem[] = [];
  // 总列数
  colCnt: number = 0;
  // 总行数
  rowCnt: number = 0;
  // codeMap
  private codeMap: Map<string, WaferBinCodeListItem> = new Map();
  // private binCodeList: BinCocdeItemGroup[] = [];

  private realWidth: number = 0;
  private realHeight: number = 0;

  private binWidth: number = 30;
  private binHeight: number = 30;

  constructor(params) {
    this.mapData = params.mapData;
    this.binCodeLength = params.binCodeLength;
    this.waferBinCodeList = params.waferBinCodeList;
    this.colCnt = params.colCnt;
    this.rowCnt = params.rowCnt;
    this.codeMap = new Map(this.waferBinCodeList.map((item) => [item.binCode, item]));
    this.realWidth = this.binWidth * (this.colCnt + 1);
    this.realHeight = this.binHeight * (this.rowCnt + 1);
  }

  createBinCodeBox() {
    const binCodeBox = new Box({
      around: "top",
      x: leafer.width / 2,
      y: 0,
      // scale:
    });
    this._createBinCodeX(binCodeBox);
    this._createBinCodeY(binCodeBox);
    const leaferW = leafer.width;
    const leaferH = leafer.height;
    // 算出缩放比例
    binCodeBox.scale = Math.min(leaferW / this.realWidth, leaferH / this.realHeight);

    let x = 0,
      y = 1;
    for (let i = 0; i < this.mapData.length; i += this.binCodeLength) {
      let end = Math.min(i + this.binCodeLength, this.mapData.length);
      // 计算x、y坐标
      x++;
      if (x > this.colCnt) {
        x = 1;
        y++;
      }
      if (y > this.rowCnt) {
        y = 1;
        x++;
      }
      const binCodeItem: BinCocdeItemGroup = {
        ...this.codeMap.get(this.mapData.slice(i, end))!,
        x: x,
        y: y,
      };
      binCodeBox.add(this._createBinCodeGroup(binCodeItem));
    }
    this.binCodeBox = binCodeBox;

    return binCodeBox;
  }

  resize() {}
  /**
   * 创建单个BinCode
   */
  private _createBinCodeGroup(binCodeItem: BinCocdeItemGroup) {
    const rect = new Rect({
      width: 28,
      height: 28,
      fill: binCodeItem.binColor,
    });
    // code
    const text = new Text({
      width: this.binWidth,
      height: this.binHeight,
      fill: "#000",
      text: binCodeItem.binCode,
      textAlign: "center",
      verticalAlign: "middle",
    });
    // 计算容器实际坐标
    const group = new Group({
      x: binCodeItem.x * this.binWidth,
      y: binCodeItem.y * this.binHeight,
      children: [rect, text],
      fill: "#fff",
    });
    return group;
  }

  /**
   * 创建BinCodeX坐标
   */
  private _createBinCodeX(binCodeBox) {
    for (let i = 0; i < this.colCnt; i++) {
      const text = new Text({
        width: 30,
        height: this.binHeight,
        text: `${i + 1}`,
        textAlign: "center",
        verticalAlign: "middle",
        fill: "#000",
        x: this.binWidth * (i + 1),
        y: 0,
      });
      binCodeBox.add(text);
    }
  }

  /**
   * 创建BinCodeY坐标
   */
  private _createBinCodeY(binCodeBox) {
    for (let i = 0; i < this.rowCnt; i++) {
      const text = new Text({
        width: 30,
        height: this.binHeight,
        text: `${i + 1}`,
        textAlign: "center",
        verticalAlign: "middle",
        fill: "#000",
        y: this.binWidth * (i + 1),
        x: 0,
      });
      binCodeBox.add(text);
    }
  }
}

onMounted(() => {
  leafer = new Leafer({ view: binCodeMapId.value });

  const binCodeBox = new BinCodeBox({
    mapData: props.mapData,
    binCodeLength: props.binCodeLength,
    waferBinCodeList: props.waferBinCodeList,
    colCnt: props.colCnt,
    rowCnt: props.rowCnt,
  });
  const $binCodeBox = binCodeBox.createBinCodeBox();
  leafer.on(RenderEvent.BEFORE, function () {
    openWrapLoading();
  });
  leafer.on(RenderEvent.END, function () {
    closeWrapLoading();
  });
  // console.log(props.mapData?.length);
  leafer.add($binCodeBox);
});
</script>
<template>
  <div
    :id="binCodeMapId"
    :style="{
      width: props.width,
      height: props.height,
    }"
  >
    <div ref="wrapEl" v-loading="loadingRef"></div>
  </div>
</template>

<style lang="less" scoped></style>
