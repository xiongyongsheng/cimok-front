<script lang="ts" setup>
import { ref, unref } from 'vue'
import { createFormSchema, updateFormSchema } from './strip.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { BasicForm, useForm } from '@/components/Form'
import { BasicModal, useModalInner } from '@/components/Modal'
import { BasicTable } from '@/components/Table'
import { createBatch, getStrip } from '@/api/stripmap/strip'
import { Button } from 'ant-design-vue'

defineOptions({ name: 'StripModal' })

const emit = defineEmits(['success', 'register'])

const { t } = useI18n()
const { createMessage } = useMessage()
const isUpdate = ref(true)

const [registerForm, { setFieldsValue, getFieldsValue, resetFields, resetSchema, validate }] = useForm({
  labelWidth: 80,
  baseColProps: { span: 24 },
  schemas: createFormSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 }
})

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields()
  stripList.value = []
  setModalProps({ confirmLoading: false })
  isUpdate.value = !!data?.isUpdate
  if (unref(isUpdate)) {
    resetSchema(updateFormSchema)
    const res = await getStrip(data.record.id)
    setFieldsValue({ ...res })
  }
})

async function handleSubmit() {
  try {
    const values = await validate()
    setModalProps({ confirmLoading: true })
    await createBatch({
      ...values,
      stripList: stripList.value
    })
    closeModal()
    emit('success')
    createMessage.success(t('common.saveSuccessText'))
  } finally {
    setModalProps({ confirmLoading: false })
  }
}

const stripList = ref<{ stripId: string, viewStripId: string }[]>([])

// 根据批号+连接符+位数的序号
function handleGenerateStrip() {
  const { subLot, stripCnt, digit, connectChar } = getFieldsValue()
  // 验证
  validate().then(() => {
    stripList.value = []
    for (let i = 0; i < stripCnt; i++) {
      stripList.value.push({
        stripId: subLot + connectChar + i.toString().padStart(digit, '0'),
        viewStripId: ''
      })
    }
  })
}

const columns = [
  {
    title: '条号',
    dataIndex: 'stripId',
    key: 'stripId',
  },
  {
    title: '来料条号',
    dataIndex: 'viewStripId',
    key: 'viewStripId',
  },
]
</script>
<template>
  <BasicModal v-bind="$attrs" title="新建条号" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
    <div class="flex justify-end">
      <Button @click="handleGenerateStrip">
        生成
      </Button>
    </div>
    <div class="mt-4 flex-1">
      <BasicTable :columns="columns" :dataSource="stripList" class='h-full' :bordered='true' :maxHeight="300">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'viewStripId'">
            <a-input v-model:value="record.viewStripId" />
          </template>
        </template>
      </BasicTable>
    </div>
  </BasicModal>
</template>