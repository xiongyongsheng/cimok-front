<script lang="ts" setup>
import { ref, unref } from 'vue';
import { createFormSchema, updateFormSchema } from './data';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicForm, useForm } from '@/components/Form';
import { BasicModal, useModalInner } from '@/components/Modal';
import { Card, Button } from 'ant-design-vue';
import {
  createRcpParam,
  getRcpParam,
  updateRcpParam,
} from '@/api/base/rcpparam';

defineOptions({ name: 'RecipeDownload' });

const emit = defineEmits(['success', 'register']);
const props = defineProps({
  title: String,
});

const { t } = useI18n();
const { createMessage } = useMessage();
const isUpdate = ref(true);

const [registerForm, { setFieldsValue, resetFields, resetSchema, validate }] =
  useForm({
    labelWidth: 120,
    baseColProps: { span: 24 },
    schemas: createFormSchema,
    showActionButtonGroup: false,
    actionColOptions: { span: 23 },
  });

const [registerModal, { setModalProps, closeModal }] = useModalInner(
  async (data) => {
    resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      resetSchema(updateFormSchema);
      const res = await getRcpParam(data.record.id);
      setFieldsValue({ ...res });
    }
  }
);

async function handleSubmit() {
  try {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) await updateRcpParam(values);
    else await createRcpParam(values);

    closeModal();
    emit('success');
    createMessage.success(t('common.saveSuccessText'));
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
<template>
  <Card title="Recipe下载">
    <div style="width: 600px; margin: auto">
      <BasicForm @register="registerForm" />
      <div style="display: flex; justify-content: center; gap: 30px">
        <Button type="dashed" size="large"> 重置 </Button>
        <Button type="primary" size="large">下载</Button>
      </div>
    </div>
  </Card>
</template>
