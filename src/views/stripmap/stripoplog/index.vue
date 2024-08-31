<script lang="ts" setup>
import { columns, searchFormSchema } from './stripOpLog.data'
import { BasicTable, useTable } from '@/components/Table'
import { getStripOpLogPage } from '@/api/stripmap/stripoplog'

defineOptions({ name: 'StripOpLog' })

const [registerTable] = useTable({
  title: '作业记录追溯',
  api: getStripOpLogPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
})

</script>
<template>
  <div>
    <BasicTable @register="registerTable"></BasicTable>
  </div>
</template>
