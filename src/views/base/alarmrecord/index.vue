<script lang="ts" setup>
import AlarmRecordModal from './AlarmRecordModal.vue'
import { columns } from './alarmRecord.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { useModal } from '@/components/Modal'
import { IconEnum } from '@/enums/appEnum'
import { BasicTable, FormSchema, TableAction, useTable } from '@/components/Table'
import { deleteAlarmRecord, exportAlarmRecord, getAlarmRecordPage } from '@/api/base/alarmrecord'
import { onMounted, ref } from 'vue'
import { getEqptTypeList } from '@/api/base/alarm'

defineOptions({ name: 'AlarmRecord' })

const { t } = useI18n()
const { createConfirm, createMessage } = useMessage()
const [registerModal, { openModal }] = useModal()

const eqptTypeList = ref([]);
const searchFormSchema: FormSchema[] = [
  {
    label: ' ',
    labelWidth: 15,
    field: 'alid',
    component: 'Input',
    componentProps: {
      placeholder: 'Alarm代码',
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'eqptCode',
    component: 'Input',
    componentProps: {
      placeholder: '设备号',
    },
    colProps: { span: 5 },
  },
  {
    label: ' ',
    labelWidth: 15,
    field: 'eqptTypeCode',
    component: 'Select',
    componentProps: {
      placeholder: '设备类型',
      options: eqptTypeList,
    },
    colProps: { span: 5 },
  },
]

onMounted(async () => {
  getEqptTypeList().then((res) => {
    eqptTypeList.value = res.map((item) => ({
      label: item.eqptTypeName,
      value: item.eqptTypeCode,
    }))
  });
})

const [registerTable, { getForm, reload }] = useTable({
  title: 'Alarm记录',
  api: getAlarmRecordPage,
  columns,
  formConfig: { labelWidth: 120, schemas: searchFormSchema },
  useSearchForm: true,
  showTableSetting: true,
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
      await exportAlarmRecord(getForm().getFieldsValue())
      createMessage.success(t('common.exportSuccessText'))
    },
  })
}

async function handleDelete(record: Recordable) {
  await deleteAlarmRecord(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <!-- <template #toolbar>
        <a-button type="primary" v-auth="['base:alarm-record:create']" :preIcon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button v-auth="['base:alarm-record:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t('action.export') }}
        </a-button>
      </template> -->
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'base:alarm-record:update', onClick: handleEdit.bind(null, record) },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
              auth: 'base:alarm-record:delete',
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
    <AlarmRecordModal @register="registerModal" @success="reload()" />
  </div>
</template>
