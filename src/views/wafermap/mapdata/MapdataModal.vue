<!--
 * @Author: 卢靖康
 * @Date: 2024-08-14 14:42:37
 * @LastEditTime: 2024-08-30 20:07:38
 * @LastEditors: 卢靖康
-->
<script lang="ts" setup>
import { ref, unref } from "vue";
import { createFormSchema, updateFormSchema } from "./mapdata.data";
import { useI18n } from "@/hooks/web/useI18n";
import { useMessage } from "@/hooks/web/useMessage";
import { BasicForm, useForm } from "@/components/Form";
import { BasicModal, useModalInner } from "@/components/Modal";
import { createMapdata, getMapdata, updateMapdata } from "@/api/wafermap/mapdata";

defineOptions({ name: "MapdataModal" });

const emit = defineEmits(["success", "register"]);

const { t } = useI18n();
const { createMessage } = useMessage();
const isUpdate = ref(true);

const [registerForm, { setFieldsValue, resetFields, resetSchema, validate }] = useForm({
  labelWidth: 120,
  baseColProps: { span: 24 },
  schemas: createFormSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 },
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });
  isUpdate.value = !!data?.isUpdate;
  if (unref(isUpdate)) {
    resetSchema(updateFormSchema);
    const res = await getMapdata(data.record.id);
    setFieldsValue({ ...res });
  }
});

async function handleSubmit() {
  try {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) await updateMapdata(values);
    else await createMapdata(values);

    closeModal();
    emit("success");
    createMessage.success(t("common.saveSuccessText"));
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
<template>
  <BasicModal
    v-bind="$attrs"
    :title="isUpdate ? t('action.edit') : t('action.create')"
    @register="registerModal"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
    <div>123</div>
  </BasicModal>
</template>
