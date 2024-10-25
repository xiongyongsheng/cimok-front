<script lang="ts" setup>
  import { nextTick, ref, unref } from 'vue'
  import { columns, ruleListFormSchema } from './itemRule.data'
  import { useI18n } from '@/hooks/web/useI18n'
  import { IconEnum } from '@/enums/appEnum'
  import { useMessage } from '@/hooks/web/useMessage'
  import { BasicForm, useForm } from '@/components/Form'
  import { BasicModal, useModalInner } from '@/components/Modal'
  import { BasicTable, TableAction, useTable } from '@/components/Table'
  import type { EditRecordRow } from '@/components/Table'

  import { createItemRule, getItemRule, updateItemRule, getItemRulePage, deleteItemRule, createItemRuleBatch } from '@/api/base/itemrule'

  defineOptions({ name: 'ItemRuleListModal' })

  const emit = defineEmits(['success', 'register'])

  const { t } = useI18n()
  const { createMessage } = useMessage()
  const isUpdate = ref(true)

  const [registerForm, { setFieldsValue, validate, getFieldsValue }] = useForm({
    labelWidth: 120,
    baseColProps: { span: 24 },
    schemas: ruleListFormSchema,
    showActionButtonGroup: false,
    actionColOptions: { span: 23 }
  })

  const itemCode = ref('');
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    setModalProps({ confirmLoading: false })
    itemCode.value = data.record.itemCode;
    const res = {
      itemId: data.record.id,
      itemCode: data.record.itemCode,
      itemName: data.record.itemName

    }
    setFieldsValue({ ...res })
  })
  const [registerTable, { getForm, reload, setTableData, getDataSource }] = useTable({
    title: '点检项目规则列表',
    api: async () => {
      const res = await getItemRulePage({
        itemCode: itemCode.value
      });
      return res
    }  ,
    columns,
    maxHeight: 300,
    pagination: false,
    useSearchForm: false,
    showTableSetting: false,
    showIndexColumn: false,
    actionColumn: {
      width: 40,
      title: t('common.action'),
      dataIndex: 'action',
      fixed: 'right',
    }
  })



// 新增行
const handleAddRow = () => {
  const itemData = getFieldsValue();
  const newRow: EditRecordRow = {
    key: Date.now(), // 生成唯一的 ID
    itemCode: itemData.itemCode,
    itemName: itemData.itemName,
  }
  const tableData = getDataSource() || [];
  tableData.push(newRow)
  setTableData(tableData)

  nextTick(() => {
    const itemData = getDataSource()[getDataSource().length -1];
    handleEdit(itemData);
  })
}

  async function handleSubmit() {
    try {
      const rules = getDataSource().map(item => {
        return {
          itemCode: item.itemCode,
          itemName: item.itemName,
          custCode: item.custCode,
          productCode: item.productCode,
          eqptType: item.eqptType,
          upperLimit: item.upperLimit,
          lowerLimit: item.lowerLimit,
          id: item.id || ""
        }
      })
      setModalProps({ confirmLoading: true })
      // if (unref(isUpdate))
      //   await updateItemRule(values)
      // else
        await createItemRuleBatch(rules)

      closeModal()
      emit('success')
      createMessage.success(t('common.saveSuccessText'))
    } finally {
      setModalProps({ confirmLoading: false })
    }
  }
  function handleEdit(record: EditRecordRow) {
    record.onEdit?.(true)
  }
async function handleDelete(record: Recordable) {
    if(record.id == null) {
      const tableData = getDataSource();
      tableData.splice(tableData.findIndex(item => item.key === record.key), 1);
      setTableData(tableData)
    }else {
      await deleteItemRule(record.id)
      createMessage.success(t('common.delSuccessText'))
    }
    reload()
  }
</script>
<template>
  <BasicModal v-bind="$attrs" title="新建项目规则" @register="registerModal" @ok="handleSubmit" width="800px" >
    <BasicForm @register="registerForm" />
    <div>
    <BasicTable @register="registerTable"  @row-click="handleEdit">
      <template #toolbar>
        <a-button type="primary" v-auth="['base:item-rule:create']" :preIcon="IconEnum.ADD" @click="handleAddRow">
          {{ t('action.create') }}
        </a-button>
        
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
                  :actions="[
                          {
                          icon: IconEnum.DELETE,
                          danger: true,
                          label: t('action.delete'),
                          auth: 'base:item-rule:delete',
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
  </div>
  </BasicModal>
</template>