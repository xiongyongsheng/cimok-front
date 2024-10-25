<template>
  <div class="info-modal" ref="editModal">
    <Modal
      width="90%"
      wrap-class-name="detail-modal"
      :visible="modalVisible"
      title="单据详情"
      :getContainer="() => $refs.editModal"
      @ok="saveData"
      @cancel="returnTo"
    >
      <div class="info-container">
        <div class="basic-info">
          <div style="height: 22px; display: flex">
            <div style="width: 7px; height: 100%; background: #1677ff"></div>
            <span style="margin-left: 11px">基础信息</span>
          </div>
          <div class="form">
            <Form
              :form="basicForm"
              layout="inline"
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 16, offset: 1 }"
            >
              <FormItem label="单据号">
                <a-input
                  placeholder="请输入"
                  v-model:value="basicForm.checktaskCode"
                  readonly
                /><span style="position: absolute; width: 100px; top: 4px"
                  >（自动生成）</span
                >
              </FormItem>
              <FormItem label="单据类型">
                <a-input
                  placeholder="请输入"
                  v-model:value="basicForm.checktaskTypeCode"
                /> </FormItem
              ><FormItem label="设备编码">
                <a-input
                  placeholder="请输入"
                  v-model:value="basicForm.eqptCode"
                /> </FormItem
              ><FormItem label="批次号">
                <a-input placeholder="请输入" v-model:value="basicForm.lotld" />
              </FormItem>
            </Form>
          </div>
        </div>
        <div class="detail-info">
          <div style="height: 22px; display: flex">
            <div style="width: 7px; height: 100%; background: #1677ff"></div>
            <span style="margin-left: 11px">详细信息</span>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { Modal, Form, FormItem, message } from 'ant-design-vue';
import Icon from '@/components/Icon';
import {
  createChecktask,
  updateChecktask,
  getChecktaskId,
  getChecktaskTypeList,
} from '@/api/base/checktask';
import { ref, reactive, computed, watch } from 'vue';

defineOptions({ name: 'EditModal' });
const emit = defineEmits(['close', 'refreshTable']);
const props = defineProps({
  visible: {
    checktaskTypeCode: Boolean,
    default: false,
  },
  // 表单数据
  basicForm: {
    checktaskTypeCode: Object,
    default: () => {
      return {
        checktaskCode: '',
        checktaskTypeCode: '',
        eqptCode: '',
        lotld: '',
      };
    },
  },
  mode: {
    type: String,
    default: 'add',
  },
  id: {
    type: String,
    default: '',
  },
});
const modalVisible = computed(() => props.visible);
watch(
  () => props.mode,
  (newV) => {
    if (newV === 'add') {
      // 新增，获取单据号
    } else {
    }
  }
);
const returnTo = () => {
  emit('close');
};
const saveData = async () => {
  if (
    !props.basicForm.checktaskCode ||
    !props.basicForm.checktaskTypeCode ||
    !props.basicForm.eqptCode ||
    !props.basicForm.lotld
  ) {
    message.info('请将表单填写完整！');
    return;
  }
  if (props.mode === 'add') {
    let res = await createChecktask(props.basicForm);
    console.log('res', res);
    if (res) {
      message.success('新增成功！');
      emit('close');
      emit('refreshTable');
    } else {
      message.error('新增失败！');
    }
  } else {
    let res = await updateChecktask(props.basicForm);
    console.log('res', res);
    if (res) {
      message.success('更新成功！');
      emit('close');
      emit('refreshTable');
    } else {
      message.error('更新失败！');
    }
  }
};
</script>

<style lang="less" scoped>
.info-modal {
  // height: 100vh;
  // 修改弹窗样式

  .info-container {
    padding: 30px 50px;
    .basic-info {
      .form {
        margin: 50px 0;
        :deep(.ant-form-item) {
          width: 48%;
          margin-bottom: 20px;
        }
      }
    }
    .detail-info {
    }
  }
}
</style>
