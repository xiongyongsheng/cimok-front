<script lang="ts" setup>
import CreateModal from './createModal.vue';
import UploadModal from './uploadModal.vue';
import ScopeOfUseModal from './scopeOfUseModal.vue';
import VersionModal from './versionModal.vue';
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
import { getPage } from '@/api/base/recipe';

defineOptions({ name: 'RecipeOperationLog' });

const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();
const [registerModal, { openModal }] = useModal();

const [registerTable, { getForm, reload }] = useTable({
  title: 'Recipe列表',
  api: list,
  // api: getPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
  actionColumn: {
    width: 200,
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

async function handleDelete(record: Recordable) {
  await deleteRcpParam(record.id);
  createMessage.success(t('common.delSuccessText'));
  reload();
}

const [uploadModal, { openModal: openUploadModal }] = useModal();
function handleUpload() {
  openUploadModal(true, { isUpdate: false });
}
const [scopeOfUseModal, { openModal: openScopeOfUseModal }] = useModal();
function handleScopeOfUse() {
  openScopeOfUseModal(true, { isUpdate: false });
}
const [versionModal, { openModal: openVersionModalModal }] = useModal();
function handleVersion() {
  openVersionModalModal(true, { isUpdate: false });
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
        >
          使用范围
        </a-button>
        <a-button
          v-auth="['base:rcp-param:create']"
          :preIcon="IconEnum.PREVIEW"
          @click="handleVersion"
        >
          版本对比
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                // icon: IconEnum.EDIT,
                label: '锁定',
                auth: 'base:rcp-param:update',
                popConfirm: {
                  title: '是否确定锁定Recipe?',

                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
              {
                // icon: IconEnum.DELETE,
                danger: true,
                label: '升级',
                auth: 'base:rcp-param:delete',
              },
              {
                // icon: IconEnum.DELETE,
                label: '查看记录',
                auth: 'base:rcp-param:update',
                onClick: handleEdit.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CreateModal @register="registerModal" @success="reload()" />
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
  </div>
</template>
