<script lang="ts" setup>
import { ref, unref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicModal, useModalInner } from '@/components/Modal';
import { createRcpParam, updateRcpParam } from '@/api/base/rcpparam';

defineOptions({ name: 'createModel' });

const emit = defineEmits(['success', 'register']);

const { t } = useI18n();
const { createMessage } = useMessage();
const isUpdate = ref(true);

const [registerModal, { setModalProps, closeModal }] = useModalInner(
  async (data) => {
    // console.log('%c [ data ]-36', 'font-size:13px; background:pink; color:#bf2c9f;', data)
    // resetFields();
    // setModalProps({ confirmLoading: false });
    // isUpdate.value = !!data?.isUpdate;
    // if (unref(isUpdate)) {
    //   resetSchema(updateFormSchema);
    //   const res = await getRcpParam(data.record.id);
    //   setFieldsValue({ ...res });
    // }
    // rcpIndexSuitEqpt()
  }
);

async function handleSubmit() {
  try {
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

import { Table } from 'ant-design-vue';
const table = ref({
  columns: [
    {
      title: '参数代码',
      dataIndex: 'index',
      key: 'index',
      width: 100,
    },
    {
      title: '参数名称',
      dataIndex: 'paramName',
      key: 'paramName',
      width: 100,
    },
    {
      title: '参考范围-最低',
      dataIndex: 'index',
      key: 'index',
      width: 100,
    },
    {
      title: '参考范围-最高',
      dataIndex: 'paramName',
      key: 'paramName',
      width: 100,
    },
    {
      title: '版本A',
      dataIndex: 'index',
      key: 'index',
      width: 100,
    },
    {
      title: '版本B',
      dataIndex: 'paramName',
      key: 'paramName',
      width: 100,
    },
    {
      title: '版本C',
      dataIndex: 'index',
      key: 'index',
      width: 100,
    },
    {
      title: '版本D',
      dataIndex: 'paramName',
      key: 'paramName',
      width: 100,
    },
  ],
});
</script>
<template>
  <BasicModal
    v-bind="$attrs"
    :title="title"
    @register="registerModal"
    :show-ok-btn="false"
    :show-cancel-btn="false"
  >
    <Table v-bind="table"> </Table>
  </BasicModal>
</template>
