<!--
 * @Author: 卢靖康
 * @Date: 2024-08-22 14:31:04
 * @LastEditTime: 2024-08-27 22:54:46
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { Leafer, Group, Rect, Text, Box, Debug, RenderEvent, PointerEvent } from "leafer-ui";
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
function openLoading(absolute: boolean) {
  compState.absolute = absolute;
  compState.loading = true;
}
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
  binWidth: {
    type: Number,
    default: 30
  },
  binHeight: {
    type: Number,
    default: 30
  }
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
  // 激活状态
  active?: boolean;
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

  binWidth: number = 30;
  binHeight: number = 30;
  // 边距
  marginSize: number = 2;

  constructor(params) {
    this.mapData = params.mapData;
    this.binCodeLength = params.binCodeLength || 1;
    this.waferBinCodeList = params.waferBinCodeList;
    this.colCnt = Number(params.colCnt);
    this.rowCnt = Number(params.rowCnt);
    if (params.binWidth) {
      this.binWidth = params.binWidth;
    }
    if (params.binHeight) {
      this.binHeight = params.binHeight;
    }
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
    const scale = Math.min(leaferW / this.realWidth, leaferH / this.realHeight);
    binCodeBox.scale = scale > 1.5 ? 1.5 : scale;

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

  resize() { }
  /**
   * 创建单个BinCode
   */
  private _createBinCodeGroup(binCodeItem: BinCocdeItemGroup) {
    const rect = new Rect({
      width: this.binWidth,
      height: this.binHeight,
      fill: binCodeItem.binColor,
      x: this.marginSize,
      y: this.marginSize,
      // strokeWidth: 1,
      // stroke: '#fff',
    });
    // code
    const text = new Text({
      width: this.binWidth,
      height: this.binHeight,
      fill: "#000",
      text: binCodeItem.binCode,
      textAlign: "center",
      verticalAlign: "middle",
      x: this.marginSize,
      y: this.marginSize,
    });
    // 计算容器实际坐标

    
    const group = new Box({
      width: this.binWidth + this.marginSize * 2,
      height: this.binHeight + this.marginSize * 2,
      x: binCodeItem.x * this.binWidth + (this.marginSize * (binCodeItem.x - 1)),
      y: binCodeItem.y * this.binHeight + (this.marginSize * (binCodeItem.y - 1)),
      children: [rect, text],
      strokeWidth: 2,
      stroke: '#fff',
      data: binCodeItem,
      event: {
        [PointerEvent.TAP]: function (e: PointerEvent) {
          const $box = e.current as Box
          if (binCodeItem.active) {
            $box.stroke = '#fff'
            $box.zIndex = 1
            $box.data.active = false
          } else {
            $box.stroke = '#000'
            $box.zIndex = 999
            $box.data.active = true
          }
        },
        // [PointerEvent.LEAVE]: function (e: PointerEvent) {
        //   const $box = e.current as Box
        //   $box.stroke = '#fff'
        //   $box.zIndex = 1
        // }
      }
    });


    return group;
  }

  /**
   * 创建BinCodeX坐标
   */
  private _createBinCodeX(binCodeBox) {
    for (let i = 0; i < this.colCnt; i++) {
      const text = new Text({
        width: this.binWidth,
        height: this.binHeight,
        text: `${i + 1}`,
        textAlign: "center",
        verticalAlign: "middle",
        fill: "#000",
        x: this.binWidth * (i + 1) + this.marginSize * (i + 1),
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
        width: this.binWidth,
        height: this.binHeight,
        text: `${i + 1}`,
        textAlign: "center",
        verticalAlign: "middle",
        fill: "#000",
        y: this.binHeight * (i + 1) + this.marginSize * (i + 1),
        x: 0,
      });
      binCodeBox.add(text);
    }
  }
}
const compState = reactive({
  absolute: false,
  loading: false,
  tip: "加载中...",
});
onMounted(() => {
  leafer = new Leafer({ view: binCodeMapId.value });

  const binCodeBox = new BinCodeBox({
    mapData: props.mapData,
    binCodeLength: props.binCodeLength,
    waferBinCodeList: props.waferBinCodeList,
    colCnt: props.colCnt,
    rowCnt: props.rowCnt,
    binWidth: props.binWidth,
    binHeight: props.binHeight,
  });
  const $binCodeBox = binCodeBox.createBinCodeBox();
  leafer.on(RenderEvent.BEFORE, function () {
    openLoading(true);
    openWrapLoading();
  });
  leafer.on(RenderEvent.END, function () {
    compState.loading = false;
    closeWrapLoading();
  });
  // console.log(props.mapData?.length);
  leafer.add($binCodeBox);
});
</script>
<template>
  <div :id="binCodeMapId" :style="{
    width: props.width,
    height: props.height,
  }">
    <div ref="wrapEl" v-loading="loadingRef"></div>
    <!-- <Loading :loading="compState.loading" :absolute="compState.absolute" /> -->
  </div>
</template>

<style lang="less" scoped></style>
