<script lang="ts" setup>
import { useRoute } from "vue-router";
import { getStrip } from "@/api/stripmap/strip";
import { h, onMounted, ref } from "vue";
import { useLoading } from '@/components/Loading';
import { Button, Card, Select } from 'ant-design-vue';
import { BasicTable, useRender } from "@/components/Table";
import { BinCodeBlock, BinCodeMap } from "@/components/BinCode";
import { DescItem, useDescription, Description } from "@/components/Description";
import { DICT_TYPE, getDictOptions } from "@/utils/dict";

defineOptions({
    name: 'StripDetail'
})
const wrapEl = ref()
const [openWrapLoading, closeWrapLoading] = useLoading({
    target: wrapEl,
    props: {
        tip: '加载中...',
        absolute: true,
    },
});
const { query } = useRoute();
const stripId = query.id as string;
const detailData = ref()
const stripInfo = ref()
const dataReady = ref(false)
const isStripEdit = ref(false)


const schema: DescItem[] = [
    {
        field: "goodCnt",
        label: "Good",
        render: (curVal) => {
            return h(BinCodeBlock, {
                backgroundColor: "#71b605",
                text: curVal,
                style: {
                    marginRight: "10px",
                },
            });
        },
    },
    {
        field: "ngCnt",
        label: "NG",
        render: (curVal) => {
            return h(BinCodeBlock, {
                backgroundColor: "#f58402",
                text: curVal,
                style: {
                    marginRight: "10px",
                },
            });
        },
    },
    {
        field: "xcnt",
        label: "X-OUT",
        render: (curVal) => {
            return h(BinCodeBlock, {
                backgroundColor: "#0f01f5",
                text: curVal,
                style: {
                    marginRight: "10px",
                },
            });
        },
    },
    {
        field: "nullCnt",
        label: "NG",
        render: (curVal) => {
            return h(BinCodeBlock, {
                backgroundColor: "#aaaaaa",
                text: curVal,
                style: {
                    marginRight: "10px",
                },
            });
        },
    },
    {
        field: "creator",
        label: "创建人",
    },
    {
        field: "createTime",
        label: "创建时间",
        render: (text) => {
            return useRender.renderDate(text);
        },
        span: 3
    },
    {
        field: "lastProcessStep",
        label: "最后作业站点",
        render: (text) => {
            return useRender.renderDict(text, DICT_TYPE.STRIP_PROCESS_STEP);
        },
    },
    {
        field: "",
        label: "WIP站点",
    },
    {
        field: "setProcessStep",
        label: "设置站点",
        render: (text) => {
            return h(Select, {
                value: text,
                style: {
                    width: "95%",
                },
                options: getDictOptions(DICT_TYPE.STRIP_PROCESS_STEP, 'string') as [],
                onChange: (val) => {
                    stripInfo.value.setProcessStep = val
                }
            })
        }
    },
    {
        field: "processState",
        label: "作业状态",
        render: (text) => {
            return h(Select, {
                value: text,
                style: {
                    width: "95%",
                },
                options: getDictOptions(DICT_TYPE.STRIP_PROCESS_STATUS, 'string') as []
            })
        }
    },

];
const [register] = useDescription({
    data: stripInfo,
    schema: schema,
    bordered: false,
    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 },
    size: "middle",
});
const defectCacuColumns = [
    {
        title: '站点',
        dataIndex: 'deptId',
        key: 'deptId',
    },
    {
        title: '作业设备',
        dataIndex: 'eqptCode',
        key: 'eqptCode',
    },
    {
        title: '原因',
        dataIndex: 'defectReason',
        key: 'defectReason',
    },
    {
        title: '数量',
        dataIndex: 'badNum',
        key: 'badNum',
    },
];



onMounted(() => {
    dataReady.value = false;
    getStrip(stripId).then((res) => {
        detailData.value = res
        stripInfo.value = res.stripInfo
    }).finally(() => {
        dataReady.value = true
    });
});

</script>

<template>
    <div ref="wrapEl" v-loading="!dataReady" loading-tip="加载中...">
        <div v-if="dataReady" class="h-full p-10px">
            <Card>
                <template #title>
                    <div class="flex items-center">
                        <div class="text-lg font-bold">{{ stripInfo.stripId }}</div>
                        <div class="text-sm text-gray-500 ml-20px">{{ stripInfo.subLot }}</div>
                    </div>
                </template>
                <Description @register="register">
                </Description>
                <div class="flex justify-start mt-10px mb-10px">
                    <div class="text-md font-bold">不良数量统计</div>
                </div>
                <BasicTable :bordered="true" :columns="defectCacuColumns" :canResize='false' :maxHeight="300" />
            </Card>

            <Card class="mt-10px">
                <template #title>
                    <div class="flex">
                        <div class='py-10px flex-1'>
                            <div class="text-md font-bold">{{ stripInfo.stripId }}</div>
                            <div class="mt-10px flex font-400 font-size-14px">
                                <div class="mr-30px">
                                    <span class="color-#71b605">Goods：</span>
                                    <span>{{ stripInfo.goodCnt }}</span>
                                </div>
                                <div class="mr-30px">
                                    <span class="color-#f58402">NG：</span>
                                    <span>{{ stripInfo.ngCnt }}</span>
                                </div>
                                <div class="mr-30px">
                                    <span class="color-#0f01f5">X-OUT：</span>
                                    <span>{{ stripInfo.xcnt }}</span>
                                </div>
                                <div class="mr-30px">
                                    <span class="color-#aaaaaa">空：</span>
                                    <span>{{ stripInfo.nullCnt }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-1 items-center">
                            <div>修改为：</div>
                            <div class="w-50px h-28px bg-#71b605 color-#fff text-center rd-4px mr-10px">G</div>
                            <div class="w-50px h-28px bg-#f58402 color-#fff text-center rd-4px mr-10px">NG</div>
                            <div class="w-50px h-28px bg-#aaaaaa color-#fff text-center rd-4px mr-10px">NL</div>
                            <div class="w-50px h-28px bg-#0f01f5 color-#fff text-center rd-4px mr-10px">X</div>
                        </div>
                        <div class='flex-1'></div>
                    </div>
                </template>
                <BinCodeMap :mapData="stripInfo.mapData" :waferBinCodeList="Object.keys(stripInfo.binColorColl).map(key => {
                    return {
                        binCode: key,
                        binColor: stripInfo.binColorColl[key],
                    }
                })" height="300px" :binCodeLength='stripInfo.binCodeLen' :colCnt='stripInfo.colQty'
                    :rowCnt='stripInfo.rowQty' />
            </Card>

            <Card class="mt-10px" v-for="(item, index) in detailData.waferInfoList" :key="index">
                <template #title>
                    <div class="text-md font-bold">{{ item.waferId }}</div>
                </template>
                <BinCodeMap :binCodeLength='item.binCodeLength' :colCnt='item.colCnt' :rowCnt='item.rowCnt'
                    :mapData="item.mapData" :waferBinCodeList="item.waferBinCodeList" />
            </Card>
        </div>
    </div>
</template>