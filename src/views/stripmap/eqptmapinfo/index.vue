<!--
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-28 00:29:12
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import EqptMapinfoModal from './EqptMapinfoModal.vue'
import { columns, searchFormSchema } from './eqptMapinfo.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { useModal } from '@/components/Modal'
import { IconEnum } from '@/enums/appEnum'
import { BasicTable, TableAction, useTable } from '@/components/Table'
import { deleteEqptMapinfo, exportEqptMapinfo, getEqptMapinfoPage } from '@/api/stripmap/eqptmapinfo'

defineOptions({ name: 'EqptMapinfo' })

const { t } = useI18n()
const { createConfirm, createMessage } = useMessage()
const [registerModal, { openModal }] = useModal()

const [registerTable, { getForm, reload }] = useTable({
  title: '设备设置',
  api: getEqptMapinfoPage,
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
      await exportEqptMapinfo(getForm().getFieldsValue())
      createMessage.success(t('common.exportSuccessText'))
    },
  })
}

async function handleDelete(record: Recordable) {
  await deleteEqptMapinfo(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['stripmap:eqpt-mapinfo:create']" :preIcon="IconEnum.ADD"
          @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button v-auth="['stripmap:eqpt-mapinfo:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t('action.export') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'stripmap:eqpt-mapinfo:update', onClick: handleEdit.bind(null, record) },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
              auth: 'stripmap:eqpt-mapinfo:delete',
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
    <EqptMapinfoModal @register="registerModal" @success="reload()" />
  </div>
</template>
