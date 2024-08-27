<!--
 * @Author: 卢靖康
 * @Date: 2024-08-22 10:55:06
 * @LastEditTime: 2024-08-22 21:27:31
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
defineOptions({ name: "BinCodeBlock" });
const props = defineProps({
  /**
   * 颜色
   */
  backgroundColor: { type: String },
  fontColor: { type: String, default: "white" },
  /**
   * 文本
   */
  text: { type: String, default: "" },
  /**
   * 高
   */
  height: { type: [String, Number], default: "22px" },
  lineHeight: { type: [String, Number], default: "22px" },
  width: { type: String, default: "100%" },
});
</script>

<template>
  <div
    :style="{
      backgroundColor: props.backgroundColor,
      height: props.height,
      lineHeight: props.lineHeight,
      width: props.width,
      color: props.fontColor,
      padding: '0 5px',
    }"
  >
    {{ props.text }}
  </div>
</template>

<style lang="less" scoped></style>
