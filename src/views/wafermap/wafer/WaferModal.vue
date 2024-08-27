<script lang="ts" setup>
import { h, ref, unref } from "vue";
import { useI18n } from "@/hooks/web/useI18n";
import { useMessage } from "@/hooks/web/useMessage";
import { BasicForm, FormSchema, useForm } from "@/components/Form";
import { BasicModal, useModalInner } from "@/components/Modal";
import {
  createWafer,
  getWafer,
  importWafer,
  updateWafer,
  validateWafer,
} from "@/api/wafermap/wafer";
import { Button, Upload } from "ant-design-vue";
import { useComponentRegister } from "@/components/Form";
import { DICT_TYPE, getDictOptions } from "@/utils/dict";

useComponentRegister("Button", Button);
useComponentRegister("AUpload", Upload);

defineOptions({ name: "WaferModal" });

const emit = defineEmits(["success", "register"]);

const importData = ref({});

const { t } = useI18n();
const { createMessage } = useMessage();
const isUpdate = ref(true);

const createFormSchema: FormSchema[] = [
  {
    label: "片号",
    field: "waferId",
    component: "Input",
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "批号",
    field: "waferLotId",
    component: "Input",
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "客户代码",
    field: "custCode",
    component: "Input",
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "芯片型号",
    field: "diePart",
    component: "Input",
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "原始方向",
    field: "fnloc",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.WAFER_ORIENTATION, "string"),
    },
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "旋转角度",
    field: "ffrot",
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.WAFER_ROTATION_ANGLE, "string"),
    },
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "Bin位数",
    field: "binCodeLength",
    rules: [
      {
        type: "number",
        message: "请输入Bin位数",
      },
    ],
    component: "InputNumber",
    componentProps: {
      type: "number",
      min: 1,
      decimalSeparator: false,
    },
    required: true,
    colProps: { span: 12 },
  },
  {
    label: "类型",
    field: "processType",
    required: true,
    component: "Select",
    componentProps: {
      options: getDictOptions(DICT_TYPE.PROCESS_TYPE, "string"),
    },
    colProps: { span: 12 },
  },
  {
    field: "button",
    component: "Button",
    colProps: { span: 24 },
    render: () => {
      return h(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "flex-end",
          },
        },
        [
          h(
            Button,
            {
              type: "primary",
              onClick: () => {
                handleValide();
              },
            },
            "验证",
          ),
        ],
      );
    },
  },
  {
    label: "数据",
    field: "fileContent",
    required: true,
    component: "InputTextArea",
    componentProps: {
      rows: 10,
    },
    colProps: { span: 24 },
  },
  {
    label: " ",
    field: "upload",
    component: "AUpload",
    colProps: { span: 24 },
    render: () => {
      return h(
        Upload,
        {
          accept: ".csv,.xlsx,.xls,.txt",
          beforeUpload(file) {
            var reader = new FileReader();
            reader.onload = () => {
              setFieldsValue({ fileContent: reader.result });
            };
            reader.readAsText(file);
            // importWafer({
            //   file,
            // }).then((res) => {
            //   importData.value = res;
            //   debugger;
            // });
            return false;
          },
        },
        [
          h(
            Button,
            {
              type: "primary",
            },
            "点击上传",
          ),
        ],
      );
    },
  },
];

const [
  registerForm,
  { getFieldsValue, setFieldsValue, resetFields, resetSchema, validate, validateFields },
] = useForm({
  labelWidth: 80,
  baseColProps: { span: 24 },
  schemas: createFormSchema,
  showActionButtonGroup: false,
  actionColOptions: { span: 23 },
});

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  resetFields();
  setModalProps({ confirmLoading: false });
  isUpdate.value = !!data?.isUpdate;
});

const handleValide = () => {
  validateFields(["fileContent"]).then(() => {
    const data = getFieldsValue();
    validateWafer(data).then((res) => {
      debugger;
    });
  });
};

async function handleSubmit() {
  try {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) await updateWafer(values);
    else await createWafer(values);

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
    :title="isUpdate ? t('action.edit') : '新增数据'"
    @register="registerModal"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm"> </BasicForm>
  </BasicModal>
</template>
