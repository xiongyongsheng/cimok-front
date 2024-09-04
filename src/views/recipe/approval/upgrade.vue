<script lang="ts" setup>
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
defineOptions({ name: 'RecipeApprovalUpgrade' });

const handleUpgrade = () => {
  console.log('handleUpgrade');
};
const data = reactive({
  basicInfo: {
    versionType: {
      label: '版本类型',
      value: 'Normal',
    },
    versionNo: {
      label: '版本号',
      value: 'Normal',
    },
    sourceDevice: {
      label: '来源设备',
      value: 'Normal',
    },
    createTime: {
      label: '创建时间',
      value: 'Normal',
    },
    createUser: {
      label: '创建人',
      value: 'Normal',
    },
  },
  hoverable: false,
  fileList: {
    columns: [
      {
        title: '文件名称',
        dataIndex: 'fileName',
      },
      {
        title: '文件路径',
        dataIndex: 'filePath',
      },
    ],
    dataSource: [
      {
        fileName: 'BGA-HISILICON-2401',
        filePath: 'file/path/name',
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
        dataIndex: 'deviceCode',
      },
      {
        title: '参数名称',
        dataIndex: 'deviceName',
      },
      {
        title: '参数值',
        dataIndex: 'deviceValue',
      },
      {
        title: '参考范围-低',
        dataIndex: 'deviceRangeMin',
      },
      {
        title: '参考范围-高',
        dataIndex: 'deviceRangeMax',
      },
    ],
    dataSource: [
      {
        deviceCode: 'BGA-HISILICON-2401',
        deviceName: 'file/path/name',
        deviceValue: 'file/path/name',
        deviceRangeMin: 'file/path/name',
        deviceRangeMax: 'file/path/name',
      },
    ],
  },
  devices: {
    columns: [
      {
        title: '设备号',
        dataIndex: 'deviceNo',
      },
      {
        title: '设备类型',
        dataIndex: 'deviceType',
      },
    ],
    dataSource: [
      {
        deviceNo: 'BGA-HISILICON-2401',
        deviceType: 'file/path/name',
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
    dataSource: [
      {
        fileName: 'BGA-HISILICON-2401',
        fileDescription: 'file description',
      },
    ],
  },
});
</script>
<template>
  <div>
    <Card title="BGA-HISILICON-2401">
      <template #extra>
        <Button type="primary" @click="handleUpgrade">升级</Button>
      </template>
      <CardGrid
        style="width: 33%"
        v-for="item in data.basicInfo"
        :hoverable="data.hoverable"
      >
        <span>{{ item.label }}：</span>
        <span>{{ item.value }}</span>
      </CardGrid>
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
    <Card title="文件列表">
      <Table
        :columns="data.fileList.columns"
        :data-source="data.fileList.dataSource"
      >
      </Table>
    </Card>
    <Card>
      <template #title>
        <TypographyTitle :level="5" style="display: inline-block"
          >参数表</TypographyTitle
        >
        <span style="font-size: 12px; font-weight: normal; margin: 0 0 0 20px"
          >参数规则：<span style="color: #02a7f0">DB-0.4x0.4-A</span></span
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
        :data-source="data.ruleList.dataSource"
      >
      </Table>
    </Card>
    <Card title="适用设备">
      <Table
        :columns="data.devices.columns"
        :data-source="data.devices.dataSource"
      >
      </Table>
    </Card>
    <Card title="上传附件">
      <Table
        :columns="data.uploadFile.columns"
        :data-source="data.uploadFile.dataSource"
      >
      </Table>
    </Card>
  </div>
</template>
