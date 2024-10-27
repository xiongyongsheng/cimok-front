<template>
  <div class="info-modal" ref="infoModal">
    <Modal
      width="30%"
      wrap-class-name="detail-modal"
      :visible="modalVisible"
      title="项目信息"
      :getContainer="() => $refs.infoModal"
      @ok="saveData"
      @cancel="returnTo"
    >
      <div class="info-container">
        <Form
          :form="pageForm"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 16, offset: 1 }"
        >
          <FormItem label="类型名称">
            <a-input
              placeholder="请输入"
              v-model:value="pageForm.checktaskTypeName"
            />
          </FormItem>
          <FormItem label="类型代码">
            <a-input
              placeholder="请输入"
              v-model:value="pageForm.checktaskTypeCode"
            />
          </FormItem>
          <FormItem label="项目名称">
            <Select
              :allowClear="true"
              v-model:value="pageForm.itemName"
              @change="itemNameChange"
              placeholder="请选择"
            >
              <SelectOption
                :value="item.itemName"
                v-for="(item, index) in checktaskItems"
                :key="index"
              >
                {{ item.itemName }}
              </SelectOption>
            </Select>
          </FormItem>
          <FormItem label="项目代码">
            <a-input disabled v-model:value="pageForm.itemCode" />
          </FormItem>
          <FormItem label="必填">
            <Select
              :allowClear="true"
              v-model:value="pageForm.itemIsNecessary"
              placeholder="请选择"
            >
              <SelectOption
                :value="item.key"
                v-for="(item, index) in itemIsNecessaryOptions"
                :key="index"
              >
                {{ item.label }}
              </SelectOption>
            </Select>
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import {
  Modal,
  Form,
  FormItem,
  Select,
  SelectOption,
  message,
} from 'ant-design-vue';
import Icon from '@/components/Icon';
import { ResultEnum } from '@/enums/httpEnum';
import {
  createChecktaskItem,
  updateChecktaskItem,
  getChecktaskItems,
} from '@/api/base/checktaskitem';
import { ref, reactive, computed, onMounted, watch } from 'vue';
defineOptions({ name: 'EditModal' });
const emit = defineEmits(['close', 'refreshTable']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单数据
  form: {
    type: Object,
    default: () => {
      return {
        checktaskTypeName: '',
        checktaskTypeCode: '',
        itemName: '',
        itemCode: '',
        itemIsNecessary: '',
      };
    },
  },
  mode: {
    type: String,
    default: 'add',
  },
  itemIsNecessaryOptions: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

let pageForm = ref({
  checktaskTypeName: '',
  checktaskTypeCode: '',
  itemName: '',
  itemCode: '',
  itemIsNecessary: '',
});
const modalVisible = computed(() => props.visible);
let checktaskItems = ref([]);

onMounted(async () => {
  let res = await getChecktaskItems();
  checktaskItems.value = res;
  console.log('checktaskItems', checktaskItems);
});
watch(
  () => props.form,
  (newV) => {
    pageForm.value = newV;
    console.log('newV', newV);
  },
  { deep: true, immediate: true }
);
const returnTo = () => {
  emit('close');
};
const saveData = async () => {
  if (
    !pageForm.value.checktaskTypeName ||
    !pageForm.value.checktaskTypeCode ||
    !pageForm.value.itemName ||
    !pageForm.value.itemCode ||
    !pageForm.value.itemIsNecessary
  ) {
    message.info('请将表单填写完整！');
    return;
  }
  if (props.mode === 'add') {
    let res = await createChecktaskItem(pageForm.value);
    console.log('res', res);
    if (res) {
      message.success('新增成功！');
      emit('close');
      emit('refreshTable');
    } else {
      message.error('新增失败！');
    }
  } else {
    let res = await updateChecktaskItem(pageForm.value);
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
const itemNameChange = (val) => {
  console.log('val', val);
  const data = checktaskItems.value.filter((item) => item.itemName === val);
  pageForm.value.itemCode = data[0].itemCode;
};
</script>

<style lang="less" scoped>
.info-modal {
  // height: 100vh;
  position: absolute;
  // 修改弹窗样式
}
</style>
