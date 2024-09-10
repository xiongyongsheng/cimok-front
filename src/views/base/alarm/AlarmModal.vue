<script lang="ts" setup>
import { ref, unref } from 'vue'
import { createFormSchema, updateFormSchema } from './alarm.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { BasicForm, useForm } from '@/components/Form'
import { BasicModal, useModalInner } from '@/components/Modal'
import { createAlarm, getAlarm, getEqptTypeList, updateAlarm } from '@/api/base/alarm'

defineOptions({ name: 'AlarmModal' })

const emit = defineEmits(['success', 'register'])

const { t } = useI18n()
const { createMessage } = useMessage()
const isUpdate = ref(true)

const [registerForm, { setFieldsValue, resetFields, resetSchema, validate, setProps }] = useForm({
  labelWidth: 120,
  baseColProps: { span: 24 },
  schemas: createFormSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 }
})

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields()
  let eqptTypeList = [];
  await getEqptTypeList().then((res) => {
    eqptTypeList = res.map((item) => ({
      label: item.eqptTypeName,
      value: item.eqptTypeCode,
    }))
  });
  createFormSchema.map((item) => {
    if (item.field === 'eqpTypeId') {
      item.componentProps = {
        options: eqptTypeList
      }
    }
  })
  resetSchema(createFormSchema)
  setModalProps({ confirmLoading: false })
  isUpdate.value = !!data?.isUpdate
  if (unref(isUpdate)) {
    resetSchema(updateFormSchema)
    const res = await getAlarm(data.record.id)
    setFieldsValue({ ...res })
  }
})

async function handleSubmit() {
  try {
    const values = await validate()
    setModalProps({ confirmLoading: true })
    if (unref(isUpdate))
      await updateAlarm(values)
    else
      await createAlarm(values)

    closeModal()
    emit('success')
    createMessage.success(t('common.saveSuccessText'))
  } finally {
    setModalProps({ confirmLoading: false })
  }
}
</script>
<template>
  <BasicModal v-bind="$attrs" :title="isUpdate ? t('action.edit') : '新增报警信息'" @register="registerModal"
    @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>