<script lang="ts" setup>
  import SummaryModal from './SummaryModal.vue'
  import { columns, searchFormSchema } from './summary.data'
  import { useI18n } from '@/hooks/web/useI18n'
  import { useMessage } from '@/hooks/web/useMessage'
  import { useModal } from '@/components/Modal'
  import { IconEnum } from '@/enums/appEnum'
  import { BasicTable, TableAction, useTable } from '@/components/Table'
  import { deleteSummary, exportSummary, getSummaryPage } from '@/api/tmm/summary'
  import {useRouter} from "vue-router";

  defineOptions({ name: 'Summary' })

  const { t } = useI18n()
  const { createConfirm, createMessage } = useMessage()
  const [registerModal, { openModal }] = useModal()
  const router = useRouter()

  const [registerTable, { getForm, reload }] = useTable({
    api: getSummaryPage,
    afterFetch: (list) => {
      return list.map(item=>{
        return {
          ...item,
          children:item.summaryDOS
        }
      })
    },
    columns,
    formConfig: { labelWidth: 120, schemas: searchFormSchema },
    useSearchForm: true,
    showIndexColumn:false,
    // rowSelection:{
    //   type: 'checkbox',
    // }
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
        await exportSummary(getForm().getFieldsValue())
        createMessage.success(t('common.exportSuccessText'))
      },
    })
  }

  async function handleDelete(record: Recordable) {
    await deleteSummary(record.id)
    createMessage.success(t('common.delSuccessText'))
    reload()
  }

  const handleDetail = (record:any) => {
    console.log('record',record)
    router.push({name:'SummaryDetail',query:{id:record.id} })
  }
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
<!--      <template #toolbar>-->
<!--        <a-button type="primary" v-auth="['tmm:summary:create']" :preIcon="IconEnum.ADD" @click="handleCreate">-->
<!--          {{ t('action.create') }}-->
<!--        </a-button>-->
<!--        <a-button v-auth="['tmm:summary:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">-->
<!--          {{ t('action.export') }}-->
<!--        </a-button>-->
<!--      </template>-->
      <template #bodyCell="{ column, record }">
        <template v-if="column.key==='subLotId'">
          <a-button type="link" block @click="handleDetail(record)">{{ record.subLotId }}</a-button>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
                  :actions="[
                          { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'tmm:summary:update', onClick: handleEdit.bind(null, record) },
                          {
                          icon: IconEnum.DELETE,
                          danger: true,
                          label: t('action.delete'),
                          auth: 'tmm:summary:delete',
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
    <SummaryModal @register="registerModal" @success="reload()" />
  </div>
</template>
