<!--
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-30 12:57:02
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import MapdataModal from "./MapdataModal.vue";
import { columns, searchFormSchema } from "./mapdata.data";
import { useI18n } from "@/hooks/web/useI18n";
import { useMessage } from "@/hooks/web/useMessage";
import { useModal } from "@/components/Modal";
import { IconEnum } from "@/enums/appEnum";
import { BasicTable, TableAction, useTable } from "@/components/Table";
import { deleteMapdata, exportMapdata, getMapdataPage } from "@/api/stripmap/mapdata";
import { Divider } from "ant-design-vue";

defineOptions({ name: "StripMapdata" });

const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();
const [registerModal, { openModal }] = useModal();

const [registerTable, { getForm, reload }] = useTable({
  title: "MAP数据列表",
  api: getMapdataPage,
  columns,
  formConfig: { schemas: searchFormSchema, showAdvancedButton: false },
  useSearchForm: true,
  showTableSetting: true,
  showSummary: true,
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
      await exportMapdata(getForm().getFieldsValue());
      createMessage.success(t("common.exportSuccessText"));
    },
  });
}

async function handleDelete(record: Recordable) {
  await deleteMapdata(record.id);
  createMessage.success(t("common.delSuccessText"));
  reload();
}
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
          <a-button class="mr-15px" :preIcon="IconEnum.ADD" @click="handleCreate">
            绑定新批号
          </a-button>
          <a-button :preIcon="IconEnum.ADD" @click="handleCreate"> 机台上传 </a-button>
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
        <a-button
          v-auth="['stripmap:mapdata:export']"
          :preIcon="IconEnum.EXPORT"
          @click="handleExport"
        >
          {{ t("action.export") }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'stripId'">
          <router-link to="">{{ record.stripId }}</router-link>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: IconEnum.EDIT,
                label: t('action.edit'),
                auth: 'stripmap:mapdata:update',
                onClick: handleEdit.bind(null, record),
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
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MapdataModal @register="registerModal" @success="reload()" />
  </div>
</template>
