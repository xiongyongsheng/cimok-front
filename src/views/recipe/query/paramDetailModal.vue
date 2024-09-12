<script lang="ts" setup name="RecipeParamDetail">
import { ref, unref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicModal, useModalInner } from '@/components/Modal';
import { rcpIndexGetRuleParam } from '@/api/base/recipe';
import { Table } from 'ant-design-vue';

const emit = defineEmits(['success', 'register']);

const { t } = useI18n();
const { createMessage } = useMessage();

const [registerModal, { setModalProps, closeModal }] = useModalInner(
  async (data) => {
    table.value.dataSource = await rcpIndexGetRuleParam({
      recipeHisId: data.record.rcpHisId,
      rcpLimitRuleId: data.record.rcpLimitRuleId,
      id: data.record.id,
    });
  }
);

async function handleSubmit() {
  try {
    setModalProps({ confirmLoading: true });

    closeModal();
    emit('success');
    createMessage.success(t('common.saveSuccessText'));
  } finally {
    setModalProps({ confirmLoading: false });
  }
}

const table = ref({
  columns: [
    {
      title: '参数代码',
      dataIndex: 'paramCode',
      width: 100,
      align: 'center',
    },
    {
      title: '参数名称',
      dataIndex: 'paramName',
      width: 100,
      align: 'center',
    },
    {
      title: '参数值',
      dataIndex: 'realVal',
      width: 100,
      align: 'center',
    },
    {
      title: '参考范围-最低',
      dataIndex: 'minVal',
      width: 100,
      align: 'center',
    },
    {
      title: '参考范围-最高',
      dataIndex: 'maxVal',
      width: 100,
      align: 'center',
    },
  ],
  dataSource: [],
});
</script>
<template>
  <BasicModal
    v-bind="$attrs"
    :show-ok-btn="false"
    :show-cancel-btn="false"
    @register="registerModal"
  >
    <Table v-bind="table"> </Table>
  </BasicModal>
</template>
