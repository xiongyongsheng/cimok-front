<script lang="ts" setup>
import AlarmModal from './AlarmModal.vue'
import { columns } from './alarm.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { useModal } from '@/components/Modal'
import { IconEnum } from '@/enums/appEnum'
import { BasicTable, FormSchema, TableAction, useTable } from '@/components/Table'
import { deleteAlarm, exportAlarm, getAlarmPage, getEqptTypeList } from '@/api/base/alarm'
import { DICT_TYPE, getDictOptions } from '@/utils/dict'
import { onMounted, ref } from 'vue'

defineOptions({ name: 'Alarm' })

const { t } = useI18n()
const { createConfirm, createMessage } = useMessage()
const [registerModal, { openModal }] = useModal()

const eqptTypeList = ref([])
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
    field: 'isControl',
    component: 'Select',
    componentProps: {
      placeholder: '是否管控',
      options: getDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING, 'boolean'),
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


const [registerTable, { getForm, reload }] = useTable({
  title: 'Alarm列表',
  api: getAlarmPage,
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

onMounted(() => {
  getEqptTypeList().then((res) => {
    eqptTypeList.value = res.map((item) => ({
      label: item.eqptTypeName,
      value: item.eqptTypeCode,
    }))
  });
});


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
      await exportAlarm(getForm().getFieldsValue())
      createMessage.success(t('common.exportSuccessText'))
    },
  })
}

async function handleDelete(record: Recordable) {
  await deleteAlarm(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['base:alarm:create']" :preIcon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button v-auth="['base:alarm:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t('action.export') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'base:alarm:update', onClick: handleEdit.bind(null, record) },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
              auth: 'base:alarm:delete',
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
    <AlarmModal @register="registerModal" @success="reload()" />
  </div>
</template>