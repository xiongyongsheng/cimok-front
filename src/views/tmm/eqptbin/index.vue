<script lang="ts" setup>
  import EqptBinModal from './EqptBinModal.vue'
  import { columns, searchFormSchema } from './eqptBin.data'
  import { useI18n } from '@/hooks/web/useI18n'
  import { useMessage } from '@/hooks/web/useMessage'
  import { useModal } from '@/components/Modal'
  import { IconEnum } from '@/enums/appEnum'
  import { BasicTable, TableAction, useTable } from '@/components/Table'
  import { deleteEqptBin, exportEqptBin, getEqptBinPage } from '@/api/tmm/eqptbin'

  defineOptions({ name: 'EqptBin' })

  const { t } = useI18n()
  const { createConfirm, createMessage } = useMessage()
  const [registerModal, { openModal }] = useModal()

  const [registerTable, { getForm, reload }] = useTable({
    title: 'BIN实时良率列表',
    api: getEqptBinPage,
    columns,
    formConfig: { labelWidth: 120, schemas: searchFormSchema },
    useSearchForm: true,
    showTableSetting: true,
    actionColumn: {
      width: 140,
      title: t('common.action'),
      dataIndex: 'action',
      fixed: 'right',
    }
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
        await exportEqptBin(getForm().getFieldsValue())
        createMessage.success(t('common.exportSuccessText'))
      },
    })
  }

  async function handleDelete(record: Recordable) {
    await deleteEqptBin(record.id)
    createMessage.success(t('common.delSuccessText'))
    reload()
  }
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['tmm:eqpt-bin:create']" :preIcon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button v-auth="['tmm:eqpt-bin:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t('action.export') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
                  :actions="[
                          { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'tmm:eqpt-bin:update', onClick: handleEdit.bind(null, record) },
                          {
                          icon: IconEnum.DELETE,
                          danger: true,
                          label: t('action.delete'),
                          auth: 'tmm:eqpt-bin:delete',
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
    <EqptBinModal @register="registerModal" @success="reload()" />
  </div>
</template>