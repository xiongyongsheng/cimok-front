<script lang="ts" setup>
import { columns, searchFormSchema } from './data';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { IconEnum } from '@/enums/appEnum';
import { BasicTable, TableAction, useTable } from '@/components/Table';

import { list } from '@/views/recipe/mock/api/query';

import {
  deleteRcpParam,
  exportRcpParam,
  getRcpParamPage,
} from '@/api/base/rcpparam';

defineOptions({ name: 'RecipeApproval' });

const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();

const [registerTable, { getForm, reload }] = useTable({
  title: 'Recipe审批',
  api: list,
  // api: getPage,
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
});

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
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <router-link
            :to="{
              path: `/recipe/approval/upgrade?id=${record.id}`,
            }"
          >
            {{ record[column.dataIndex] }}
          </router-link>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                // icon: IconEnum.EDIT,
                label: '通过',
                auth: 'base:rcp-param:update',
                popConfirm: {
                  title: '是否确定审批通过？',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
