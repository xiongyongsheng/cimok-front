<script lang="ts" setup>
import { onMounted, ref, unref } from 'vue'
import { updateFormSchema } from './alarmRule.data'
import { useI18n } from '@/hooks/web/useI18n'
import { useMessage } from '@/hooks/web/useMessage'
import { BasicForm, FormSchema, useForm } from '@/components/Form'
import { BasicModal, useModalInner } from '@/components/Modal'
import { createAlarmRule, getAlarmRule, updateAlarmRule } from '@/api/base/alarmrule'
import { Card, Checkbox } from 'ant-design-vue'
import { getEqptTypeList } from '@/api/base/alarm'

defineOptions({ name: 'AlarmRuleModal' })

const emit = defineEmits(['success', 'register'])

const { t } = useI18n()
const { createMessage } = useMessage()
const isUpdate = ref(true)
const eqptTypeList = ref([])
const alarmInfoList = ref([])
const createFormSchema: FormSchema[] = [
  {
    label: '设备类型',
    field: 'eqptTypeCode',
    component: 'Select',
    required: true,
    componentProps: {
      options: eqptTypeList,
      placeholder: '请选择设备类型',
    },
    colProps: {
      span: 8
    }
  },
  {
    label: '报警信息',
    field: 'alid',
    component: 'Select',
    required: true,
    componentProps: {
      options: alarmInfoList,
      placeholder: '请选择报警信息',
    },
    colProps: {
      span: 8,
    }
  },
  {
    label: '管理等级',
    field: 'mngLevel',
    required: true,
    component: 'Select',
    componentProps: {
      options: [],
      placeholder: '请选择管理等级',
    },
    colProps: {
      span: 8,
    }
  },
  {
    label: '窗口时长',
    field: 'windowTime',
    component: 'InputNumber',
    componentProps: {
      placeholder: '请输入窗口时长(分钟)',
      min: 1,
    },
    colProps: {
      span: 8,
    }
  },
  {
    label: '发生次数',
    field: 'occurTimes',
    component: 'InputNumber',
    componentProps: {
      placeholder: '请输入发生次数',
      min: 1,
    },
    colProps: {
      span: 8,
    }
  },
]

const CheckboxFormSchema: FormSchema[] = [
  {
    label: '处置措施',
    field: 'alarmInfo',
    component: 'Checkbox',
    componentProps: {
      options: [],
    },
  },
]
const [registerForm, { setFieldsValue, resetFields, resetSchema, validate }] = useForm({
  labelWidth: 90,
  baseColProps: { span: 24 },
  schemas: createFormSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 }
})

onMounted(async () => {
  const res = await getEqptTypeList()
  eqptTypeList.value = res.map((item) => ({
    label: item.eqptTypeName,
    value: item.eqptTypeCode,
  }))
})

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields()
  setModalProps({ confirmLoading: false })
  isUpdate.value = !!data?.isUpdate
  if (unref(isUpdate)) {
    resetSchema(updateFormSchema)
    const res = await getAlarmRule(data.record.id)
    setFieldsValue({ ...res })
  }
})

async function handleSubmit() {
  try {
    const values = await validate()
    setModalProps({ confirmLoading: true })
    if (unref(isUpdate))
      await updateAlarmRule(values)
    else
      await createAlarmRule(values)

    closeModal()
    emit('success')
    createMessage.success(t('common.saveSuccessText'))
  } finally {
    setModalProps({ confirmLoading: false })
  }
}
</script>
<template>
  <BasicModal v-bind="$attrs" :title="isUpdate ? t('action.edit') : t('action.create')" @register="registerModal"
    width="1000px" @ok="handleSubmit">
    <Card title="报警信息" size="small" class="mb-10px">
      <BasicForm @register="registerForm" />
    </Card>

    <Card title="处置措施" size="small" class="mb-10px">
      <BasicForm :schemas="CheckboxFormSchema" :showActionButtonGroup="false" :labelWidth="90"
        :baseColProps="{ span: 24 }" />
    </Card>

    <Card title="邮件通知" size="small" class="mb-10px">
    </Card>

    <Card title="检验任务" size="small">
    </Card>
  </BasicModal>
</template>