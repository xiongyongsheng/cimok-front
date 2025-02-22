<script lang="ts" setup>
import CreateModal from './createModal.vue';
import VersionModal from './versionModal.vue';
import ParamsDetailModal from './paramDetailModal.vue';
import { columns, searchFormSchema } from './data';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { useModal } from '@/components/Modal';
import { IconEnum } from '@/enums/appEnum';
import { BasicTable, TableAction, useTable } from '@/components/Table';

import { list } from '@/views/recipe/mock/api/query';

import {
  deleteRcpParam,
  exportRcpParam,
  getRcpParamPage,
} from '@/api/base/rcpparam';
import { rcpLimitRulePage, rcpLimitRuleSubmit } from '@/api/base/recipe';
import { ref, unref } from 'vue';

defineOptions({ name: 'RecipeRule' });

const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();
const [registerModal, { openModal }] = useModal();

const tableSelectedRows = ref();
const [registerTable, { getForm, reload }] = useTable({
  title: '参数规则管理',
  api: rcpLimitRulePage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
  actionColumn: {
    width: 100,
    title: t('common.action'),
    dataIndex: 'action',
    fixed: 'right',
  },
  rowSelection: {
    type: 'radio',
    onChange(record, selectedRows) {
      tableSelectedRows.value = selectedRows;
    },
  },
});

function handleCreate() {
  openModal(true, { isUpdate: false });
}

async function handleExport() {
  createConfirm({
    title: t('common.exportTitle'),
    iconType: 'warning',
    content: t('common.exportMessage'),
    async onOk() {
      await exportRcpParam(getForm().getFieldsValue());
      createMessage.success(t('common.exportSuccessText'));
    },
  });
}

async function handleSubmit(record: Recordable) {
  await rcpLimitRuleSubmit({ id: record.id });
  createMessage.success(t('common.submitSuccessText'));
  reload();
}
const [versionModal, { openModal: openVersionModalModal }] = useModal();
function handleVersion() {
  openVersionModalModal(true, {
    tableSelectedRows: unref(tableSelectedRows),
  });
}

const [paramDetailModal, { openModal: openParamDetailModal }] = useModal();
function handleParamDetail(record) {
  openParamDetailModal(true, {
    record: record,
  });
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          v-auth="['base:rcp-param:create']"
          :preIcon="IconEnum.ADD"
          @click="handleCreate"
        >
          新建
        </a-button>
        <a-button
          v-auth="['base:rcp-param:create']"
          :preIcon="IconEnum.VIEW"
          :disabled="!tableSelectedRows?.length"
          @click="handleVersion"
        >
          版本对比
        </a-button>
        <a-button
          v-auth="['base:rcp-param:create']"
          :preIcon="IconEnum.ADD_FOLD"
        >
          导入数据
        </a-button>
      </template>
      <template #bodyCell="{ text, column, record }">
        <template v-if="column.key === 'limitRuleId'">
          <a @click="handleParamDetail(record)">{{ text }}</a>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                // icon: IconEnum.EDIT,
                label: '提交',
                auth: 'base:rcp-param:update',
                popConfirm: {
                  title: '是否确定审批通过xxx规则？',
                  placement: 'left',
                  confirm: handleSubmit.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CreateModal @register="registerModal" @success="reload()" />
    <VersionModal
      title="版本对比"
      @register="versionModal"
      @success="reload()"
    />
    <ParamsDetailModal
      title="参数列表"
      @register="paramDetailModal"
      @success="reload()"
    />
  </div>
</template>
