<!--
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-27 23:40:45
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import BinCodeModal from "./BinCodeModal.vue";
import { columns, searchFormSchema } from "./binCode.data";
import { useI18n } from "@/hooks/web/useI18n";
import { useMessage } from "@/hooks/web/useMessage";
import { useModal } from "@/components/Modal";
import { IconEnum } from "@/enums/appEnum";
import { BasicTable, TableAction, useTable } from "@/components/Table";
import {
  getBinCodeDefinePage,
  deleteBinCodeDefine,
  exportBinCodeDefine,
} from "@/api/stripmap/bindCodeDefine";
import { Switch } from "ant-design-vue";

defineOptions({ name: "BinCodeDefine" });

const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();
const [registerModal, { openModal }] = useModal();

const [registerTable, { getForm, reload }] = useTable({
  title: "转换规则",
  api: getBinCodeDefinePage,
  columns,
  formConfig: { labelWidth: 80, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
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
      await exportBinCodeDefine(getForm().getFieldsValue());
      createMessage.success(t("common.exportSuccessText"));
    },
  });
}

async function handleDelete(record: Recordable) {
  await deleteBinCodeDefine(record.id);
  createMessage.success(t("common.delSuccessText"));
  reload();
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['wafermap:code-conversion:create']" :preIcon="IconEnum.ADD"
          @click="handleCreate">
          {{ t("action.create") }}
        </a-button>
        <a-button v-auth="['wafermap:code-conversion:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t("action.export") }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'status'">
          <Switch></Switch>
        </template>

        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              icon: IconEnum.EDIT,
              label: t('action.edit'),
              // auth: 'wafermap:code-conversion:update',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
              // auth: 'wafermap:code-conversion:delete',
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
    <BinCodeModal @register="registerModal" @success="reload()" />
  </div>
</template>
