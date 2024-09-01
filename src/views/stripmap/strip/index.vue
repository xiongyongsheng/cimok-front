<!--
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-30 12:57:02
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import StripModal from "./StripModal.vue";
import { columns, searchFormSchema } from "./strip.data";
import { useI18n } from "@/hooks/web/useI18n";
import { useMessage } from "@/hooks/web/useMessage";
import { useModal, BasicModal } from "@/components/Modal";
import { IconEnum } from "@/enums/appEnum";
import { BasicTable, FormSchema, TableAction, useTable } from "@/components/Table";
import { deleteStrip, exportStrip, getStripPage } from "@/api/stripmap/strip";
import { Divider, Select, Button, Upload } from "ant-design-vue";
import { BasicForm, useComponentRegister, useForm } from "@/components/Form";
import { h, ref } from "vue";
import { useRouter } from "vue-router";
defineOptions({ name: "Strip" });

useComponentRegister("Button", Button);
useComponentRegister("AUpload", Upload);
const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();
const [registerModal, { openModal }] = useModal();
const router = useRouter()
const [registerTable, { getForm, reload }] = useTable({
  title: "批次查询",
  api: getStripPage,
  columns,
  formConfig: { schemas: searchFormSchema, showAdvancedButton: false },
  useSearchForm: true,
  showTableSetting: true,
  showSummary: true,
  clickToRowSelect: true,
  actionColumn: {
    width: 140,
    title: t("common.action"),
    dataIndex: "action",
    fixed: "right",
  },
});

function handleCreate() {
  openModal(true, { isUpdate: false });
}

function handleEdit(record: Recordable) {
  openModal(true, { record, isUpdate: true });
}

async function handleExport() {
  createConfirm({
    title: t("common.exportTitle"),
    iconType: "warning",
    content: t("common.exportMessage"),
    async onOk() {
      await exportStrip(getForm().getFieldsValue());
      createMessage.success(t("common.exportSuccessText"));
    },
  });
}

async function handleDelete(record: Recordable) {
  await deleteStrip(record.id);
  createMessage.success(t("common.delSuccessText"));
  reload();
}
const [registerBindLotModal, { openModal: openBindLotModal }] = useModal();



const bindLotSchemas: FormSchema[] = [
  {
    field: 'lotId',
    label: '原批号',
    required: true,
    component: 'Input',
    componentProps: {
      placeholder: '请输入原批号'
    },
    colProps: {
      span: 24
    }
  },
  {
    field: 'stripList',
    component: 'Select',
    label: '条号',
    required: true,
    slot: 'stripList'
  },
  {
    field: 'lotId',
    component: 'Input',
    label: '新批号',
    required: true,
    componentProps: {
      placeholder: '请输入新批号'
    }
  },
  {
    field: 'workOrderId',
    component: 'Input',
    label: '新工单',
    required: true,
    componentProps: {
      placeholder: '请输入新工单'
    }
  }
]
const [registerBindLotForm, { }] = useForm({
  labelWidth: 80,
  baseColProps: { span: 24 },
  schemas: bindLotSchemas,
  showActionButtonGroup: false,
  // actionColOptions: { span: 23 }
})


const bindLotColumns = [
  {
    dataIndex: 'stripId',
  },
]
const bindLotDataSource = ref([])
const [registerBindLotTable] = useTable({
  showHeader: false,
  columns: bindLotColumns,
  dataSource: bindLotDataSource.value,
  clickToRowSelect: true,
  showIndexColumn: false,
  canResize: false,
  // isCanResizeParent: true,
  // locale: {
  //   emptyText: '请输入原批号，按回车键查询'
  // },
  rowSelection: {
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows)
    }
  }
});

function handleOpenBindLotModal() {
  bindLotDataSource.value = []
  openBindLotModal(true)
}

// 机台上传弹框
const [registerUploadModal, { openModal: openUploadModal }] = useModal();

function handleOpenUploadModal() {
  openUploadModal(true)
}

const uploadSchemas: FormSchema[] = [
  {
    field: 'eqptCode',
    label: '设备号',
    required: true,
    component: 'Input',
    componentProps: {
      placeholder: '请输入设备号'
    },
    colProps: {
      span: 12
    }
  },
  {
    field: 'stripId',
    label: '条号',
    required: true,
    component: 'Input',
    componentProps: {
      placeholder: '请输入条号'
    },
    colProps: {
      span: 12
    }
  },
  {
    field: "button",
    component: "Button",
    colProps: { span: 24 },
    render: () => {
      return h(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "flex-end",
          },
        },
        [
          h(
            Button,
            {
              type: "primary",
              onClick: () => {

              },
            },
            "验证",
          ),
        ],
      );
    },
  },
  {
    label: "数据",
    field: "fileContent",
    required: true,
    component: "InputTextArea",
    componentProps: {
      rows: 10,
      maxLength: 1000,
      placeholder: '请输入数据'
    },
    colProps: { span: 24 },
  },
  {
    label: " ",
    field: "upload",
    component: "AUpload",
    colProps: { span: 24 },
    render: () => {
      return h(
        Upload,
        {
          accept: ".csv,.xlsx,.xls,.txt",
          beforeUpload(file) {
            var reader = new FileReader();
            reader.onload = () => {
              // TODO 验证数据
            };
            reader.readAsText(file);
            return false;
          },
        },
        [
          h(
            Button,
            {
              // type: "primary",
            },
            "上传文件",
          ),
        ],
      );
    },
  },
]
const [registerUploadForm, { }] = useForm({
  labelWidth: 80,
  baseColProps: { span: 24 },
  schemas: uploadSchemas,
  showActionButtonGroup: false,
})


</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #form-formFooter>
        <Divider class="mt-10px mb-15px" />
        <div class="flex items-center mb-15px bg-white flex-1">
          <div class="w-80px mr-15px text-right">新增和补录</div>
          <a-button class="mr-15px" type="primary" :preIcon="IconEnum.ADD" @click="handleCreate">
            新增数据
          </a-button>
          <a-button class="mr-15px" :preIcon="IconEnum.ADD" @click="handleOpenBindLotModal">
            绑定新批号
          </a-button>
          <a-button :preIcon="IconEnum.ADD" @click="handleOpenUploadModal"> 机台上传 </a-button>
        </div>
      </template>
      <template #toolbar>
        <!-- <a-button
          type="primary"
          v-auth="['stripmap:mapdata:create']"
          :preIcon="IconEnum.ADD"
          @click="handleCreate"
        >
          {{ t("action.create") }}
        </a-button> -->
        <a-button v-auth="['stripmap:mapdata:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t("action.export") }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'stripId'">
          <router-link :to="`/stripmap/search/strip/detail?id=${record.id}`">{{ record.stripId }}</router-link>
        </template>
        <template v-if="column.key === 'subLot'">
          <router-link :to="`/stripmap/search/strip/sublotDetail?subLot=${record.subLot}`">{{ record.subLot
            }}</router-link>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              icon: IconEnum.EDIT,
              label: t('action.edit'),
              auth: 'stripmap:mapdata:update',
              onClick: () => {
                router.push(`/stripmap/search/strip/detail?id=${record.id}&edit=true`)
              },
            },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
              auth: 'stripmap:mapdata:delete',
              popConfirm: {
                title: t('common.delMessage'),
                placement: 'left',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]" />
        </template>
      </template>
    </BasicTable>
    <StripModal @register="registerModal" @success="reload()" />
    <!-- 绑定批号弹框 -->
    <BasicModal v-bind="$attrs" title="绑定批号" @register="registerBindLotModal">
      <div class="flex-1 flex">
        <BasicForm @register="registerBindLotForm" class='flex-1'>
          <template #stripList="{ model, field }">
            <Select v-model:value="model[field]" class='hidden' />
            <BasicTable @register="registerBindLotTable" class="h-400px" :bordered='true' :maxHeight="500" />
          </template>
        </BasicForm>
      </div>

    </BasicModal>
    <!-- 机台上传弹框 -->
    <BasicModal @register="registerUploadModal" title="机台上传">
      <div class="flex-1 flex">
        <BasicForm @register="registerUploadForm" class='flex-1'></BasicForm>
      </div>
    </BasicModal>
  </div>
</template>
