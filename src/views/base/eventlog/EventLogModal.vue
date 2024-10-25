<script lang="ts" setup>
import { Col,  Row, } from 'ant-design-vue'
  import { ref, unref } from 'vue'
  import { createFormSchema, updateFormSchema } from './eventLog.data'
  import { useI18n } from '@/hooks/web/useI18n'
  import { useMessage } from '@/hooks/web/useMessage'
  import { BasicForm, useForm } from '@/components/Form'
  import { BasicModal, useModalInner } from '@/components/Modal'
  import { createEventLog, getEventLog, updateEventLog } from '@/api/base/eventlog'

  defineOptions({ name: 'EventLogModal' })

  const emit = defineEmits(['success', 'register'])

  const { t } = useI18n()
  const { createMessage } = useMessage()
  const isUpdate = ref(true)

  const schema = ref({})

  const [registerForm, { setFieldsValue, resetFields, resetSchema, validate }] = useForm({
    labelWidth: 120,
    baseColProps: { span: 24 },
    schemas: createFormSchema,
    showActionButtonGroup: false,
    actionColOptions: { span: 23 }
  })

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    console.log('data',data);
    resetFields()
    setModalProps({ confirmLoading: false })
    isUpdate.value = !!data?.isUpdate
    
    if (unref(isUpdate)) {
      resetSchema(updateFormSchema)
      const res = await getEventLog(data.record.id)
      console.log('res',res);
      schema.value = res.items
      console.log('res111',schema.value);
      
      setFieldsValue({ ...res })
    }
  })

  async function handleSubmit() {
    try {
      const values = await validate()
      setModalProps({ confirmLoading: true })
      if (unref(isUpdate))
        await updateEventLog(values)
      else
        await createEventLog(values)

      closeModal()
      emit('success')
      createMessage.success(t('common.saveSuccessText'))
    } finally {
      setModalProps({ confirmLoading: false })
    }
  }
</script>
<template>
  <BasicModal v-bind="$attrs" title="数据详情" cancel-text="关闭" :show-ok-btn="false" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm" >
      
    </BasicForm>
    <Row class="table_header">
      <Col
        class="table_cell"
        span="12"
      >
        项目
      </Col>
      <Col
        class="table_cell"
        span="12"
      >
        数据
      </Col>
    </Row>
    <Row class="table_rows" v-for="(colItem, index) in schema" :key="index">
      <Col
        class="table_cell"
        span="12"
      >
        {{colItem.eventItemName}}
      </Col>
      <Col
        class="table_cell"
        span="12"
      >
        {{colItem.eventItemValue}}
      </Col>
    </Row>
  </BasicModal>
</template>
<style lang="less" scoped>
  .table_header {
    background-color: rgb(250, 250, 250);
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .table_rows {
    line-height: 1.8;
  }
  .table_cell {
    text-align: center;
  }
</style>