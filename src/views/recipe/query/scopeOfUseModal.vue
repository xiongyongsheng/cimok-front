<script lang="ts" setup>
import { h, reactive, ref, unref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { FormSchema, useForm } from '@/components/Form';
import { BasicModal, useModalInner } from '@/components/Modal';
import { createRcpParam, updateRcpParam } from '@/api/base/rcpparam';
import { rcpIndexSuitEqpt, saveRcpIndexSuitEqpt } from '@/api/base/recipe';
import { Input, Table } from 'ant-design-vue';

defineOptions({ name: 'createModel' });

const emit = defineEmits(['success', 'register']);

const { t } = useI18n();
const { createMessage } = useMessage();

const [registerModal, { setModalProps, closeModal }] = useModalInner(
  async ({ tableSelectedRows: [row] }) => {
    table.dataSource = await rcpIndexSuitEqpt({
      recipeId: row.id,
      id: row.id,
    });
    table.rowSelection.selectedRowKeys = table.dataSource
      .filter((item) => item.isChecked)
      .map((item) => item.id);
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
    setModalProps({ confirmLoading: true });
    saveRcpIndexSuitEqpt(table.dataSource.filter((item) => item.isChecked));
    closeModal();
    emit('success');
    createMessage.success(t('common.saveSuccessText'));
  } finally {
    setModalProps({ confirmLoading: false });
  }
}
</script>
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" @ok="handleSubmit">
    <!-- <BasicForm @register="registerForm" /> -->
    <Table v-bind="table"></Table>
  </BasicModal>
</template>
