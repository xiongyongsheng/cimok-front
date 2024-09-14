<script lang="ts" setup>
import { h, ref, unref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { BasicForm, FormSchema, useForm } from '@/components/Form';
import { BasicModal, useModalInner } from '@/components/Modal';
import {
  createRcpParam,
  getRcpParam,
  updateRcpParam,
} from '@/api/base/rcpparam';
import { getSimpleList } from '@/api/base/recipe';
import { Input, Table } from 'ant-design-vue';

defineOptions({ name: 'createModel' });

const emit = defineEmits(['success', 'register']);

const createTableDataSource = ref([]);
const createFormSchema: FormSchema[] = [
  {
    label: '设备型号',
    field: 'eqptTypeCode',
    component: 'ApiSelect',
    componentProps: {
      api: getSimpleList,
      labelField: 'eqptTypeName',
      valueField: 'eqptTypeCode',
      immediate: false,
    },
    required: true,
  },
  {
    label: '设置参数',
    field: 'rcpHisId',
    component: 'Input',
    render: (renderCallbackParams, opts) => {
      return h(
        Table,
        {
          columns: [
            {
              align: 'center',
              title: '参数代码',
              dataIndex: '1',
              key: '1',
            },
            {
              align: 'center',
              title: '参数名称',
              dataIndex: '2',
              key: '2',
            },
            {
              align: 'center',
              title: '参数值',
              dataIndex: '3',
              key: '3',
            },
            {
              align: 'center',
              title: '参考范围-低',
              dataIndex: '4',
              key: '4',
            },
            {
              align: 'center',
              title: '参考范围-高',
              dataIndex: '5',
              key: '5',
            },
          ],
          dataSource: createTableDataSource.value,
        },
        {
          bodyCell: ({ column, text, record, index }) => {
            if (column.key === '3') {
              return h(Input, {
                value: text,
                // @ts-ignore
                status:
                  text >= record['4'] && text <= record['5'] ? ' ' : 'warning',
                style: {
                  width: '80px',
                },
                onChange: (e) => {
                  // @ts-ignore
                  createTableDataSource.value[index]['3'] = e.target.value;
                },
              });
            } else {
              return text;
            }
          },
        }
      );
    },
    required: true,
  },
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
    required: true,
  },
];

const updateFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input',
  },
  {
    label: 'Recipe名称',
    field: 'rcpName',
    component: 'Input',
  },
  {
    label: 'Recipe版本标识',
    field: 'rcpHisId',
    component: 'Input',
  },
  {
    label: '参数名称',
    field: 'paramName',
    component: 'Input',
  },
  {
    label: '参数代码',
    field: 'paramCode',
    component: 'Input',
  },
  {
    label: '参数别名',
    field: 'paramNick',
    component: 'Input',
  },
  {
    label: '参数值',
    field: 'realVal',
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sortCode',
    component: 'Input',
  },
  {
    label: '部门id',
    field: 'deptId',
    component: 'Input',
  },
];

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
  <BasicModal v-bind="$attrs" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
