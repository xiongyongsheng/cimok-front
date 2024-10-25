<script lang="ts" setup>
  import { ref, unref } from 'vue'
  import { createFormSchema, updateFormSchema } from './exceptionDetail.data'
  import { useI18n } from '@/hooks/web/useI18n'
  import { useMessage } from '@/hooks/web/useMessage'
  import { BasicForm, useForm } from '@/components/Form'
  import { BasicModal, useModalInner } from '@/components/Modal'
  import { createExceptionDetail, getExceptionDetail, updateExceptionDetail } from '@/api/base/exceptiondetail'

  defineOptions({ name: 'ExceptionDetailModal' })

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
    resetFields()
    setModalProps({ confirmLoading: false })
    isUpdate.value = !!data?.isUpdate
    if (unref(isUpdate)) {
      resetSchema(updateFormSchema)
      const res = await getExceptionDetail(data.record.id)
      console.log('res', res);
      
       schema.value = res.actiongLogList
      setFieldsValue({ ...res })
    }
  })

  async function handleSubmit() {
    try {
      const values = await validate()
      setModalProps({ confirmLoading: true })
      if (unref(isUpdate))
        await updateExceptionDetail(values)
      else
        await createExceptionDetail(values)

      closeModal()
      emit('success')
      createMessage.success(t('common.saveSuccessText'))
    } finally {
      setModalProps({ confirmLoading: false })
    }
  }
</script>
<template>
  <BasicModal v-bind="$attrs" title="管控详情" cancel-text="关闭" :show-ok-btn="false" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
    <div class="wrapper">
      <div class="title">执行详情</div>
      <Row class="table_header">
        <Col
          class="table_cell"
          span="6"
        >
          措施类型
        </Col>
        <Col
          class="table_cell"
          span="6"
        >
          措施目标
        </Col>
        <Col
          class="table_cell"
          span="6"
        >
          执行时间
        </Col>
        <Col
          class="table_cell"
          span="6"
        >
          执行结果
        </Col>
      </Row>
      <Row class="table_rows" v-for="(colItem, index) in schema" :key="index">
        <Col
          class="table_cell"
          span="6"
        >
          {{colItem.actionType}}
        </Col>
        <Col
          class="table_cell"
          span="6"
        >
          {{colItem.actionTarget}}
        </Col>
        <Col
          class="table_cell"
          span="6"
        >
          {{colItem.updateTime}}
        </Col>
        <Col
          class="table_cell"
          span="6"
        >
          {{colItem.actionResult}}
        </Col>
      </Row>
    </div>
  </BasicModal>
</template>
<style lang="less" scoped>
  .wrapper {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 8px;
    
  }
  .title {
    padding: 10px;
  }
  .table_header {
    width: 100%;
    background-color: rgb(250, 250, 250);
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .table_rows {
    // background-color: rgb(250, 250, 250);
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    // line-height: 1.8;
  }
  .table_cell {
    width: 25%;
    // line-height: 34px;
    text-align: center;
  }
</style>