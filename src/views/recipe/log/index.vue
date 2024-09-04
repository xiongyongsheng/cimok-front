<script lang="ts" setup>
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

defineOptions({ name: 'RecipeApproval' });

const { t } = useI18n();
const { createConfirm, createMessage } = useMessage();
const [registerModal, { openModal }] = useModal();

const [registerTable, { getForm, reload }] = useTable({
  title: 'Recipe操作记录',
  api: list,
  // api: getPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
});
</script>
<template>
  <div>
    <BasicTable @register="registerTable"> </BasicTable>
  </div>
</template>
