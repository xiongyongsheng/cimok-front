<script lang="ts" setup>
import { onMounted, ref, unref } from 'vue';
import { createFormSchema } from './data';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicForm, useForm } from '@/components/Form';
import { Card, Button } from 'ant-design-vue';
import { rcpIndexSuitRecipe,downloadRecipe } from '@/api/base/recipe';

defineOptions({ name: 'RecipeDownloadManually' });

const { t } = useI18n();
const { createMessage } = useMessage();
const isUpdate = ref(true);

const [
  registerForm,
  { setFieldsValue, resetFields, getFieldsValue, validate },
] = useForm({
  labelWidth: 120,
  baseColProps: { span: 24 },
  schemas: createFormSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 },
});
const isGetRecipe = ref(true);
let reqFrameId;
const handleCheckFieldsValue = () => {
  const data = getFieldsValue();
  if (data.lotId && data.eqptCode && isGetRecipe.value) {
    isGetRecipe.value = false;
    rcpIndexSuitRecipe({
      lotId: data.lotId,
      eqptCode: data.eqptCode,
    })
      .catch(() => {
        resetFields();
        isGetRecipe.value = true;
      })
      .then((res) => {
        // cancelAnimationFrame(reqFrameId);
      });
  }
  // reqFrameId = requestAnimationFrame(handleCheckFieldsValue);
};
onMounted(() => {
  // handleCheckFieldsValue();
});
async function handleSubmit() {
  try {
    const values = await validate();
    await downloadRecipe({downloadRecipeDetailReqDtoList:[values]}).then(() => {
      createMessage.success(t('common.saveSuccessText'));
    })
  } finally {
  }
}
</script>
<template>
  <Card title="Recipe下载">
    <div style="width: 100%; margin: auto">
      <BasicForm @register="registerForm" />
      <div style="display: flex; justify-content: center; gap: 30px">
        <Button type="dashed" size="large" @click="resetFields"> 重置 </Button>
        <Button type="primary" size="large" @click="handleSubmit">下载</Button>
      </div>
    </div>
  </Card>
</template>
