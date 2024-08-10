<script lang="ts" setup>
  import { ref, unref } from 'vue'
  import { createFormSchema, updateFormSchema } from './rcpOpLog.data'
  import { useI18n } from '@/hooks/web/useI18n'
  import { useMessage } from '@/hooks/web/useMessage'
  import { BasicForm, useForm } from '@/components/Form'
  import { BasicModal, useModalInner } from '@/components/Modal'
  import { createRcpOpLog, getRcpOpLog, updateRcpOpLog } from '@/api/base/rcpoplog'

  defineOptions({ name: 'RcpOpLogModal' })

  const emit = defineEmits(['success', 'register'])

  const { t } = useI18n()
  const { createMessage } = useMessage()
  const isUpdate = ref(true)

  const [registerForm, { setFieldsValue, resetFields, resetSchema, validate }] = useForm({
    labelWidth: 120,
    baseColProps: { span: 24 },
    schemas: createFormSchema,
    showActionButtonGroup: false,
    actionColOptions: { span: 23 }
  })

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields()
    setModalProps({ confirmLoading: false })
    isUpdate.value = !!data?.isUpdate
    if (unref(isUpdate)) {
      resetSchema(updateFormSchema)
      const res = await getRcpOpLog(data.record.id)
      setFieldsValue({ ...res })
    }
  })

  async function handleSubmit() {
    try {
      const values = await validate()
      setModalProps({ confirmLoading: true })
      if (unref(isUpdate))
        await updateRcpOpLog(values)
      else
        await createRcpOpLog(values)

      closeModal()
      emit('success')
      createMessage.success(t('common.saveSuccessText'))
    } finally {
      setModalProps({ confirmLoading: false })
    }
  }
</script>
<template>
  <BasicModal v-bind="$attrs" :title="isUpdate ? t('action.edit') : t('action.create')" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>