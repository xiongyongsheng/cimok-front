<script lang="ts" setup>
import { h, ref, unref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import { ApiSelect, BasicForm, FormSchema, useForm } from '@/components/Form';
import { BasicModal, useModalInner } from '@/components/Modal';
import {
  eapUploadRecipe,
  eqptRecipeList,
  getSimpleList,
  simpleList,
} from '@/api/base/recipe';
import { Table } from 'ant-design-vue';

defineOptions({ name: 'uploadModel' });

const emit = defineEmits(['success', 'register']);

const { t } = useI18n();
const { createMessage } = useMessage();

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
  children?: DataItem[];
}

const rowSelection = ref({
  // checkStrictly: false,
  selectedRowKeys: [],
});

const dataSource = ref([]);
const uploadFormSchema: FormSchema[] = [
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
    label: '设备号',
    field: 'eqptCode',
    component: 'ApiSelect',
    render: (renderCallbackParams, opts) => {
      return h(ApiSelect, {
        api: () => {
          return simpleList({
            id: renderCallbackParams.model.id,
          });
        },
        onChange: (value) => {
          renderCallbackParams.model[renderCallbackParams.field] = value;
          if (
            renderCallbackParams.model.eqptTypeCode !== undefined &&
            renderCallbackParams.model.eqptCode !== undefined
          ) {
            eqptRecipeList({
              eqptCode: renderCallbackParams.model.eqptCode,
              eqptTypeCode: renderCallbackParams.model.eqptTypeCode,
            }).then((res) => {
              dataSource.value = res;
            });
          }
        },
        disabled: !renderCallbackParams.model.eqptTypeCode,
        labelField: 'eqptCode',
        valueField: 'id',
        placeholder: '请选择',
        immediate: false,
      });
    },
    required: true,
  },
  {
    label: 'Recipe列表',
    field: 'recipeNames',
    component: 'Input',
    // ifShow(renderCallbackParams) {
    //   return renderCallbackParams.model.eqptCode!== undefined && renderCallbackParams.model.eqptTypeCode!== undefined;
    // },
    render: (renderCallbackParams, opts) => {
      return h(Table, {
        rowKey: 'rcpName',
        rowSelection: {
          ...unref(rowSelection),
          onChange: (
            selectedRowKeys: (string | number)[],
            selectedRows: DataItem[]
          ) => {
            renderCallbackParams.model[renderCallbackParams.field] =
              // @ts-ignore
              rowSelection.value.selectedRowKeys = selectedRowKeys;
          },
        },
        columns: [
          {
            title: '编号',
            dataIndex: 'rcpName',
          },
        ],
        dataSource: unref(dataSource),
      });
    },
    required: true,
  },
];

const [
  registerForm,
  { setFieldsValue, getFieldsValue, resetFields, resetSchema, validate },
] = useForm({
  labelWidth: 120,
  baseColProps: { span: 24 },
  schemas: uploadFormSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 },
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(
  async (data) => {
    resetFields();
    rowSelection.value.selectedRowKeys = [];
    dataSource.value = [];
  }
);

async function handleSubmit() {
  try {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    await eapUploadRecipe(values);
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
