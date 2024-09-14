<script lang="ts" setup name="RecipeQueryDetail">
import { reactive, ref, unref } from 'vue';
import {
  Card,
  CardGrid,
  Button,
  Table,
  TypographyTitle,
  Input,
  Select,
  Steps,
} from 'ant-design-vue';
import { rcpIndexGet } from '@/api/base/recipe';
import { useRoute } from 'vue-router';
import { useRender } from '@/components/Table/src/hooks/useRender';

const handleUpgrade = () => {
  console.log('handleUpgrade');
};
const route = useRoute();
const data = reactive({
  loading: true,
  detail: {
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
      })
      .finally(() => {
        data.loading = false;
      });
  },
  basicInfo: [
    {
      label: '版本类型',

      dataIndex: 'rcpVerType',
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
    handleChange: (value) => {
      console.log('value', value);
    },
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
      },
      {
        title: '参考范围-高',
        dataIndex: 'maxVal',
      },
    ],
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
    <Card title="BGA-HISILICON-2401">
      <CardGrid
        style="width: 33%"
        v-for="item in data.basicInfo"
        :hoverable="false"
      >
        <span>{{ item.label }}：</span>
        <span>{{
          item.customRender
            ? item.customRender({ text: data.detail[item.dataIndex] })
            : data.detail[item.dataIndex]
        }}</span>
      </CardGrid>
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
    <Card>
      <Steps
        :current="1"
        :items="[
          {
            title: '李小明',
            description: '2020-11-25 23:26:08',
          },
          {
            title: 'In Progress',
            description: '2020-11-25 23:26:08',
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description: '2020-11-25 23:26:08',
          },
        ]"
      ></Steps>
    </Card>
  </div>
</template>
