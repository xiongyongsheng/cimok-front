<script lang="ts" setup>
import WaferModal from './WaferModal.vue'
import {columns, searchFormSchema} from './wafer.data'
import {useI18n} from '@/hooks/web/useI18n'
import {useMessage} from '@/hooks/web/useMessage'
import {useModal} from '@/components/Modal'
import {IconEnum} from '@/enums/appEnum'
import {BasicTable, TableAction, useTable} from '@/components/Table'
import {deleteWafer, exportWafer, getWaferPage} from '@/api/wafermap/wafer'

defineOptions({name: 'Wafer'})

const {t} = useI18n()
const {createConfirm, createMessage} = useMessage()
const [registerModal, {openModal}] = useModal()

const [registerTable, {getForm, reload}] = useTable({
  title: '晶圆片信息列表',
  api: getWaferPage,
  columns,
  formConfig: {labelWidth: 120, schemas: searchFormSchema},
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
  openModal(true, {isUpdate: false})
}

function handleEdit(record: Recordable) {
  openModal(true, {record, isUpdate: true})
}

async function handleExport() {
  createConfirm({
    title: t('common.exportTitle'),
    iconType: 'warning',
    content: t('common.exportMessage'),
    async onOk() {
      await exportWafer(getForm().getFieldsValue())
      createMessage.success(t('common.exportSuccessText'))
    },
  })
}

async function handleDelete(record: Recordable) {
  await deleteWafer(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['wafermap:wafer:create']" :preIcon="IconEnum.ADD"
                  @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button v-auth="['wafermap:wafer:export']" :preIcon="IconEnum.EXPORT"
                  @click="handleExport">
          {{ t('action.export') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
                          { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'wafermap:wafer:update', onClick: handleEdit.bind(null, record) },
                          {
                          icon: IconEnum.DELETE,
                          danger: true,
                          label: t('action.delete'),
                          auth: 'wafermap:wafer:delete',
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
    <WaferModal @register="registerModal" @success="reload()"/>
  </div>
</template>
