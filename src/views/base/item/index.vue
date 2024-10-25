<script lang="ts" setup>
  import ItemModal from './ItemModal.vue'
  import ItemRuleListModal from '../itemrule/itemRuleListModal.vue'

  import { columns, searchFormSchema } from './item.data'
  import { useI18n } from '@/hooks/web/useI18n'
  import { useMessage } from '@/hooks/web/useMessage'
  import { useModal } from '@/components/Modal'
  import { IconEnum } from '@/enums/appEnum'
  import { BasicTable, TableAction, useTable } from '@/components/Table'
  import { deleteItem, exportItem, getItemPage } from '@/api/base/item'

  defineOptions({ name: 'Item' })

  const { t } = useI18n()
  const { createConfirm, createMessage } = useMessage()
  const [registerModal, { openModal }] = useModal()
  const [registerRuleModal, { openModal: openRuleModal }] = useModal()
  const [registerTable, { getForm, reload }] = useTable({
    title: '点检项目定义列表',
    api: getItemPage,
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

  function handleRule(record: Recordable) {
    openRuleModal(true, {record, isUpdate: false })
  }

  async function handleExport() {
    createConfirm({
      title: t('common.exportTitle'),
      iconType: 'warning',
      content: t('common.exportMessage'),
      async onOk() {
        await exportItem(getForm().getFieldsValue())
        createMessage.success(t('common.exportSuccessText'))
      },
    })
  }

  async function handleDelete(record: Recordable) {
    await deleteItem(record.id)
    createMessage.success(t('common.delSuccessText'))
    reload()
  }
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['base:item:create']" :preIcon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button v-auth="['base:item:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t('action.export') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
                  :actions="[
                          { icon: IconEnum.EDIT, 
                            label: '分配规则', auth: 'base:item:update', onClick: handleRule.bind(null, record) },
                          { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'base:item:update', onClick: handleEdit.bind(null, record) },
                          {
                          icon: IconEnum.DELETE,
                          danger: true,
                          label: t('action.delete'),
                          auth: 'base:item:delete',
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
    <ItemModal @register="registerModal" @success="reload()" />
    <itemRuleListModal @register="registerRuleModal" @success="reload()" />
  </div>
</template>