<script lang="ts" setup>
import { reactive, ref, unref } from 'vue';
import { scopeOfUseFormSchema } from './data';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicForm, useForm } from '@/components/Form';
import { BasicModal, useModalInner } from '@/components/Modal';
import {
  createRcpParam,
  getRcpParam,
  updateRcpParam,
} from '@/api/base/rcpparam';
import { rcpIndexSuitEqpt } from '@/api/base/recipe';
import { Table } from 'ant-design-vue';

defineOptions({ name: 'createModel' });

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
    schemas: scopeOfUseFormSchema,
    showActionButtonGroup: false,
    actionColOptions: { span: 23 },
  });

const [registerModal, { setModalProps, closeModal }] = useModalInner(
  async ({ tableSelectedRows: [row] }) => {
    console.log(
      '%c [ row ]-37',
      'font-size:13px; background:pink; color:#bf2c9f;',
      row
    );
    // resetFields();
    // setModalProps({ confirmLoading: false });
    // isUpdate.value = !!data?.isUpdate;
    // if (unref(isUpdate)) {
    //   resetSchema(updateFormSchema);
    //   const res = await getRcpParam(data.record.id);
    //   setFieldsValue({ ...res });
    // }
    table.dataSource = await rcpIndexSuitEqpt({
      recipeId: row.id,
      id: row.id,
    });
  }
);

const table = reactive({
  rowKey: 'id',
  rowSelection: {
    selectedRowKeys: [],
    onChange(selectedRowKeys, selectedRows) {
      table.rowSelection.selectedRowKeys = selectedRowKeys;
    },
  },
  columns: [
    {
      align: 'center',
      title: '设备型号',
      dataIndex: 'eqptCode',
    },
  ],
  dataSource: [],
});

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
  <BasicModal
    v-bind="$attrs"
    :title="title"
    @register="registerModal"
    @ok="handleSubmit"
  >
    <!-- <BasicForm @register="registerForm" /> -->
    <Table v-bind="table"></Table>
  </BasicModal>
</template>
