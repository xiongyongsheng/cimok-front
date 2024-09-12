<script lang="ts" setup>
import {
  actionLogColumns as columns,
  actionLogSearchFormSchema as searchFormSchema,
} from './data';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { useModal } from '@/components/Modal';
import { IconEnum } from '@/enums/appEnum';
import { BasicTable, TableAction, useTable } from '@/components/Table';

import { rcpOpLogPage } from '@/api/base/recipe';

defineOptions({ name: 'RecipeActionLog' });

const { t } = useI18n();

const [registerTable] = useTable({
  title: 'Recipe操作记录',
  api: rcpOpLogPage,
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
