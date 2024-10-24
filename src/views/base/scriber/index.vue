<script lang="ts" setup>
import ScriberModal from './ScriberModal.vue'
import { columns, searchFormSchema } from './scriber.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { useModal } from '@/components/Modal'
import { IconEnum } from '@/enums/appEnum'
import { BasicTable, TableAction, useTable } from '@/components/Table'
import { deleteEventLog, exportEventLog, getEventLogPage } from '@/api/base/eventlog'

defineOptions({ name: 'ScriberEqpt' })

const { t } = useI18n()
const { createConfirm, createMessage } = useMessage()
const [registerModal, { openModal }] = useModal()

const [registerTable, { getForm, reload }] = useTable({
  title: '划片设备',
  api: getEventLogPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
  // actionColumn: {
  //   width: 140,
  //   title: t('common.action'),
  //   dataIndex: 'action',
  //   fixed: 'right',
  // }
})

function handleCreate() {
  openModal(true, { isUpdate: false })
}

function handleEdit(record: Recordable) {
  openModal(true, { record, isUpdate: true })
}

async function handleExport() {
  createConfirm({
    title: t('common.exportTitle'),
    iconType: 'warning',
    content: t('common.exportMessage'),
    async onOk() {
      await exportEventLog(getForm().getFieldsValue())
      createMessage.success(t('common.exportSuccessText'))
    },
  })
}

async function handleDelete(record: Recordable) {
  await deleteEventLog(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            { icon: IconEnum.EDIT, label: t('action.edit'),  onClick: handleEdit.bind(null, record) },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
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
    <EventLogModal @register="registerModal" @success="reload()" />
  </div>
</template>