<script lang="ts" setup>
import { ref, unref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicForm, useForm } from '@/components/Form';
import { BasicModal, useModalInner } from '@/components/Modal';

defineOptions({ name: 'createModel' });

const emit = defineEmits(['success', 'register']);

const { t } = useI18n();
const { createMessage } = useMessage();

const [registerModal] = useModalInner(async (data) => {
  rcpLimitRuleCompare({ id: data.tableSelectedRows[0].id }).then((res) => {
    table.value.dataSource = res.reduce((pre, cur) => {
      return pre.rcpICompareDetailRespVoList.concat(
        cur.rcpICompareDetailRespVoList
      );
    });
  });
});

import { Table } from 'ant-design-vue';
import { rcpLimitRuleCompare } from '@/api/base/recipe';
const table = ref({
  columns: [
    {
      title: '参数代码',
      dataIndex: 'paramCode',
      minWidth: 50,
      align: 'center',
      fixed: 'left',
    },
    {
      title: '参数名称',
      dataIndex: 'paramName',
      minWidth: 50,
      align: 'center',
      fixed: 'left',
    },
    {
      title: '参考范围-最低',
      dataIndex: 'minVal',
      minWidth: 100,
      align: 'center',
    },
    {
      title: '参考范围-最高',
      dataIndex: 'maxVal',
      minWidth: 100,
      align: 'center',
    },
  ],
  dataSource: [],
});
</script>
<template>
  <BasicModal
    v-bind="$attrs"
    :show-cancel-btn="false"
    :show-ok-btn="false"
    @register="registerModal"
  >
    <Table v-bind="table"> </Table>
  </BasicModal>
</template>
