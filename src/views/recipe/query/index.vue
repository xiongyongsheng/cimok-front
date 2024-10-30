<script lang="ts" setup>
import CreateModal from './createModal.vue';
import UploadModal from './uploadModal.vue';
import ScopeOfUseModal from './scopeOfUseModal.vue';
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
import {
  getPage,
  getPageLog,
  getPageDetail,
  rcpIndexUpdateStatus,
} from '@/api/base/recipe';

defineOptions({ name: 'RecipeQuery' });

const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();
const [registerModal, { openModal }] = useModal();

const tableSelectedRows = ref();
const [registerTable, { getForm, reload, getSelectRows }] = useTable({
  title: 'Recipe列表',
  api: getPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
  rowSelection: {
    type: 'radio',
    onChange(record, selectedRows) {
      tableSelectedRows.value = selectedRows;
    },
  },
  actionColumn: {
    width: 250,
    title: t('common.action'),
    dataIndex: 'action',
    fixed: 'right',
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
    title: t('common.exportTitle'),
    iconType: 'warning',
    content: t('common.exportMessage'),
    async onOk() {
      await exportRcpParam(getForm().getFieldsValue());
      createMessage.success(t('common.exportSuccessText'));
    },
  });
}

console.log(
  '%c [ getDictDatas(DICT_TYPE.RECIPE_STATUS_ENUM) ]-80',
  'font-size:13px; background:pink; color:#bf2c9f;',
  getDictDatas(DICT_TYPE.RECIPE_STATUS_ENUM)
);
async function handleLock(record: Recordable) {
  await rcpIndexUpdateStatus({
    id: record.id,
    status: '1',
  });
  createMessage.success(t('common.delSuccessText'));
  reload();
}

const [uploadModal, { openModal: openUploadModal }] = useModal();
function handleUpload() {
  openUploadModal(true, { isUpdate: false });
}
const [scopeOfUseModal, { openModal: openScopeOfUseModal }] = useModal();
function handleScopeOfUse() {
  openScopeOfUseModal(true, {
    isUpdate: false,
    tableSelectedRows: unref(tableSelectedRows),
  });
}
const [versionModal, { openModal: openVersionModalModal }] = useModal();
function handleVersion() {
  openVersionModalModal(true, {
    isUpdate: false,
    tableSelectedRows: unref(tableSelectedRows),
  });
}
const [paramDetailModal, { openModal: openParamDetailModal }] = useModal();
function handleParamDetail(record) {
  openParamDetailModal(true, {
    isUpdate: false,
    record: record,
  });
}

import { useRouter } from 'vue-router';
import { ref, unref } from 'vue';
import { DICT_TYPE, getDictDatas } from '@/utils/dict';
const router = useRouter();
function handleUpgrade(record: Recordable) {
  router.push({
    name: 'RecipeQueryUpgrade',
    query: {
      id: record.id,
      name:record.rcpName,
    },
  });
}

function handleActionLog(record: Recordable) {
  router.push({
    name: 'RecipeActionLog',
    query: {
      // id: record.id,
      rcpName: record.rcpName,
      rcpVerType: record.rcpVerType,
      rcpVerCode: record.rcpVerCode,
    },
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
          :preIcon="IconEnum.UPLOAD"
          @click="handleUpload"
        >
          设备上传
        </a-button>
        <a-button
          v-auth="['base:rcp-param:create']"
          :preIcon="IconEnum.ADD"
          @click="handleCreate"
        >
          新建
        </a-button>
        <a-button
          v-auth="['base:rcp-param:create']"
          :preIcon="IconEnum.VIEW"
          @click="handleScopeOfUse"
          :disabled="!tableSelectedRows?.length"
        >
          使用范围
        </a-button>
        <a-button
          v-auth="['base:rcp-param:create']"
          :preIcon="IconEnum.PREVIEW"
          @click="handleVersion"
          :disabled="!tableSelectedRows?.length"
        >
          版本对比
        </a-button>
      </template>
      <template #bodyCell="{ text, column, record }">
        <template v-if="column.key === 'rcpName'">
          <router-link
            :to="{
              name: 'RecipeQueryDetail',
              query: {
                id: record.id,
              },
            }"
          >
            {{ text }}
          </router-link>
        </template>
        <template v-if="column.key === 'rcpLimitRuleId'">
          <a @click="handleParamDetail(record)">{{ text }}</a>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: IconEnum.TEST,
                label: '锁定',
                auth: 'base:rcp-param:update',
                disabled: record.status != '6',
                popConfirm: {
                  title: '是否确定锁定Recipe?',
                  placement: 'left',
                  confirm: handleLock.bind(null, record),
                },
              },
              {
                icon: IconEnum.SEND,
                danger: true,
                label: '升级',
                auth: 'base:rcp-param:delete',
                onClick: handleUpgrade.bind(null, record),
              },
              {
                icon: IconEnum.LOG,
                label: '查看记录',
                auth: 'base:rcp-param:update',
                onClick: handleActionLog.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CreateModal
      title="新建Recipe"
      @register="registerModal"
      @success="reload()"
    />
    <UploadModal title="设备上传" @register="uploadModal" @success="reload()" />
    <ScopeOfUseModal
      title="选择设备"
      @register="scopeOfUseModal"
      @success="reload()"
    />
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
