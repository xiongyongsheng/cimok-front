<script lang="ts" setup name="RecipeQueryDetail">
import { h, reactive, ref, unref } from 'vue';
import {
  Card,
  CardGrid,
  Button,
  Table,
  TypographyTitle,
  Input,
  Select,
  Steps,
  Popconfirm,
} from 'ant-design-vue';
import { rcpIndexGet, upgradeRcp } from '@/api/base/recipe';
import { useRoute, useRouter } from 'vue-router';
import { useRender } from '@/components/Table/src/hooks/useRender';
import { getDictOptions, DICT_TYPE } from '@/utils/dict';
import { cloneDeep, isEqual } from 'lodash-es';

const customRender = {
  rcpVerType: ({ text }) => {
    return h('div', text);
  },
};
const isLoading = ref(false);
const router = useRouter();
const handleUpgrade = () => {
  isLoading.value = true;

  upgradeRcp({
    ...data.detail,
    paramRuleChange: !isEqual(data.detail, data.orgDetail),
  })
    .finally(() => {
      isLoading.value = false;
    })
    .then((res) => {
      router.back();
      // data.getDetailData();
    });
};
const route = useRoute();
const data = reactive({
  loading: true,
  detail: {
    fileRespDTOList: [],
    rcpEqptSuitDOList: [],
    rcpParamDOList: [],
  },
  orgDetail: {
    fileRespDTOList: [],
    rcpEqptSuitDOList: [],
    rcpParamDOList: [],
  },
  getDetailData() {
    data.loading = true;
    rcpIndexGet({
      id: route.query.id,
    })
      .then((res) => {
        data.detail = res;
        data.orgDetail = cloneDeep(res);
      })
      .finally(() => {
        data.loading = false;
      });
  },
  basicInfo: [
    {
      label: '版本类型',
      dataIndex: 'rcpVerType',
      customRender: ({ text, item }) => {
        return h(Select, {
          //@ts-ignore
          options: getDictOptions(DICT_TYPE.RECIPE_TYPE_ENUM, 'string'),
          value: text,
          style: {
            width: '120px',
          },
          onChange: (value) => {
            data.detail[item.dataIndex] = value;
          },
        });
      },
    },
    {
      label: '版本号',

      dataIndex: 'rcpVerCode',
    },
    {
      label: '来源设备',

      dataIndex: 'eqptTypeName',
    },
    {
      label: '创建时间',
      dataIndex: 'createTime',
      customRender: ({ text }) => {
        return useRender.renderDate(text);
      },
    },
    {
      label: '创建人',
      dataIndex: 'creator',
    },
  ],
  fileList: {
    columns: [
      {
        title: '文件名称',
        dataIndex: 'name',
      },
      {
        title: '文件路径',
        dataIndex: 'path',
      },
    ],
  },
  ruleList: {
    value: [],
    handleChange: (value) => {},
    options: [...Array(25)].map((_, i) => ({
      value: (i + 10).toString(36) + (i + 1),
    })),
    columns: [
      {
        title: '参数代码',
        dataIndex: 'paramCode',
      },
      {
        title: '参数名称',
        dataIndex: 'paramName',
      },
      {
        title: '参数值',
        dataIndex: 'realVal',
      },
      {
        title: '参考范围-低',
        dataIndex: 'minVal',
        width: 300,
      },
      {
        title: '参考范围-高',
        dataIndex: 'maxVal',
        width: 300,
      },
    ].map((item) => {
      return item;
    }),
  },
  devices: {
    columns: [
      {
        title: '设备号',
        dataIndex: 'eqptCode',
      },
      {
        title: '设备类型',
        dataIndex: 'eqpTypeCode',
      },
    ],
  },
  uploadFile: {
    columns: [
      {
        title: '文件名',
        dataIndex: 'fileName',
      },
      {
        title: '说明',
        dataIndex: 'fileDescription',
      },
    ],
  },
});
data.getDetailData();
</script>
<template>
  <div v-loading="data.loading">
    <Card :title="route.query.name">
      <template #extra>
        <Popconfirm title="是否确认提交?" @confirm="handleUpgrade">
          <Button type="primary" :loadding="isLoading">升级</Button>
        </Popconfirm>
      </template>
      <template v-for="item in data.basicInfo" :key="item.dataIndex">
        <CardGrid style="width: 33%" :hoverable="false">
          <span>{{ item.label }}：</span>
          <component
            :is="item.customRender"
            v-if="item.customRender"
            :text="data.detail[item.dataIndex]"
            :item="item"
          />
          <span v-else>
            {{ data.detail[item.dataIndex] }}
          </span>
        </CardGrid>
      </template>
    </Card>
    <Card title="文件列表">
      <Table
        :columns="data.fileList.columns"
        :data-source="data.detail.fileRespDTOList || []"
      >
      </Table>
    </Card>
    <Card>
      <template #title>
        <TypographyTitle :level="5" style="display: inline-block"
          >参数表</TypographyTitle
        >
        <!-- <Select
          placeholder="请选择规则版本"
          v-model:value="data.ruleList.value"
          mode="multiple"
          style="width: 200px; display: inline-block; margin-left: 20px"
          :options="data.ruleList.options"
          @change="data.ruleList.handleChange"
        /> -->
      </template>
      <!-- <template #extra>自动保存新规则</template> -->
      <Table
        :columns="data.ruleList.columns"
        :data-source="data.detail.rcpParamDOList"
      >
        <template #bodyCell="{ text, value, record, column, index }">
          <Input
            v-if="['minVal', 'maxVal'].includes(String(column.dataIndex))"
            :value="text"
            @input="
              (e) => {
                data.detail.rcpParamDOList[index][column.dataIndex] =
                  e.target.value;
              }
            "
          />
          <span v-else>{{ text }}</span>
        </template>
      </Table>
    </Card>
    <Card title="适用设备">
      <Table
        :columns="data.devices.columns"
        :data-source="data.detail.rcpEqptSuitDOList"
      >
      </Table>
    </Card>
    <Card title="上传附件">
      <Table :columns="data.uploadFile.columns" :data-source="[]"> </Table>
    </Card>
  </div>
</template>
