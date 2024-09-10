<script lang="ts" setup>
import AlarmRuleModal from './AlarmRuleModal.vue'
import { columns } from './alarmRule.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { useModal } from '@/components/Modal'
import { IconEnum } from '@/enums/appEnum'
import { BasicTable, FormSchema, TableAction, useTable } from '@/components/Table'
import { deleteAlarmRule, exportAlarmRule, getAlarmRulePage } from '@/api/base/alarmrule'
import { onMounted, ref } from 'vue'
import { getEqptTypeList } from '@/api/base/alarm'

defineOptions({ name: 'AlarmRule' })

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
  title: 'Alarm管控规则列表',
  api: getAlarmRulePage,
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
      await exportAlarmRule(getForm().getFieldsValue())
      createMessage.success(t('common.exportSuccessText'))
    },
  })
}

async function handleDelete(record: Recordable) {
  await deleteAlarmRule(record.id)
  createMessage.success(t('common.delSuccessText'))
  reload()
}
</script>
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" v-auth="['base:alarm-rule:create']" :preIcon="IconEnum.ADD" @click="handleCreate">
          {{ t('action.create') }}
        </a-button>
        <a-button v-auth="['base:alarm-rule:export']" :preIcon="IconEnum.EXPORT" @click="handleExport">
          {{ t('action.export') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            { icon: IconEnum.EDIT, label: t('action.edit'), auth: 'base:alarm-rule:update', onClick: handleEdit.bind(null, record) },
            {
              icon: IconEnum.DELETE,
              danger: true,
              label: t('action.delete'),
              auth: 'base:alarm-rule:delete',
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
    <AlarmRuleModal @register="registerModal" @success="reload()" />
  </div>
</template>