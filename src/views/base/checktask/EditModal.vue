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
                  disabled
                /><span style="position: absolute; width: 100px; top: 4px"
                  >（自动生成）</span
                >
              </FormItem>
              <FormItem label="单据类型">
                <Select
                  :allowClear="true"
                  v-model:value="basicForm.checktaskTypeCode"
                  placeholder="请选择"
                  :disabled="mode === 'edit'"
                >
                  <SelectOption
                    :value="item.checktaskTypeCode"
                    v-for="(item, index) in checktaskItems"
                    :key="index"
                  >
                    {{ item.checktaskTypeName }}
                  </SelectOption>
                </Select>
              </FormItem>
              <FormItem label="设备编码">
                <a-input
                  placeholder="请输入"
                  v-model:value="basicForm.eqptCode"
                  :disabled="mode === 'edit'"
                />
              </FormItem>
              <FormItem label="批次号">
                <a-input
                  placeholder="请输入"
                  v-model:value="basicForm.lotId"
                  :disabled="mode === 'edit'"
                />
              </FormItem>
            </Form>
          </div>
          <a-button
            :disabled="mode === 'edit'"
            style="position: absolute; right: 171px"
            @click="getDetails"
            type="primary"
            >获取</a-button
          >
        </div>
        <div class="detail-info">
          <div style="height: 22px; display: flex">
            <div style="width: 7px; height: 100%; background: #1677ff"></div>
            <span style="margin-left: 11px">详细信息</span>
          </div>
          <div class="form">
            <Form
              :form="detailForm"
              :label-col="{ span: 6 }"
              :wrapper-col="{ span: 8, offset: 1 }"
            >
              <template v-for="(item, index) in customForm" :key="index">
                <FormItem :required="item.required" :label="item.itemName">
                  <a-input
                    v-if="item.type === 'input'"
                    placeholder="请输入"
                    v-model:value="detailForm[index].itemValue"
                  />
                  <InputNumber
                    placeholder="请输入数字"
                    v-if="item.type === 'inputNumber'"
                    id="inputNumber"
                    v-model:value="detailForm[index].itemValue"
                    :class="{
                      'orange-input':
                        detailForm[index].itemValue &&
                        ((item.upperLimit &&
                          detailForm[index].itemValue > item.upperLimit) ||
                          (item.lowerLimit &&
                            detailForm[index].itemValue < item.lowerLimit)),
                    }"
                  />
                  <Select
                    v-else-if="item.type === 'select'"
                    :allowClear="true"
                    v-model:value="detailForm[index].itemValue"
                    placeholder="请选择"
                  >
                    <SelectOption
                      :value="each.key"
                      v-for="(each, index) in item.options"
                      :key="index"
                    >
                      {{ each.label }}
                    </SelectOption>
                  </Select>
                  <template v-else-if="item.type === 'selectMultiple'">
                    <a-input
                      v-model:value="detailForm[index].itemValue"
                      disabled
                    />
                    <a-button
                      style="position: absolute; right: -91px"
                      @click="getMultipleData(item, index)"
                      type="primary"
                      >获取</a-button
                    >
                  </template>
                  <Upload
                    v-else-if="item.type === 'image'"
                    name="file"
                    list-type="picture-card"
                    class="avatar-uploader"
                    :show-upload-list="false"
                    :headers="headers"
                    accept=".jpg,.png,.jpeg"
                    action="/upload"
                    @change="(info) => handleChange(info, index)"
                  >
                    <img
                      v-if="detailForm[index].itemValue"
                      :src="detailForm[index].itemValue"
                      style="height: 100%"
                      alt="图片"
                    />
                    <div v-else>
                      <Icon
                        :icon="
                          imageLoading
                            ? 'ant-design:loading'
                            : 'ant-design:plus'
                        "
                      />
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </Upload>
                </FormItem>
              </template>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import {
  Modal,
  Form,
  FormItem,
  message,
  Select,
  SelectOption,
  Upload,
  InputNumber,
} from 'ant-design-vue';
import axios from 'axios';
import Icon from '@/components/Icon';
import {
  createChecktask,
  updateChecktask,
  getChecktaskItems,
  getDetailInfo,
  invokeApi,
} from '@/api/base/checktask';
import { getDictOptions } from '@/utils/dict';
import { defHttp } from '@/utils/http/axios';

import { ref, reactive, computed, watch, onMounted } from 'vue';
import { getAccessToken, getTenantId } from '@/utils/auth';
import { custom } from 'vue-types';
import { info } from 'console';
defineOptions({ name: 'EditModal' });
const emit = defineEmits(['close', 'refreshTable']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单数据
  basicForm: {
    type: Object,
    default: () => {
      return {
        checktaskCode: '',
        checktaskTypeCode: '',
        eqptCode: '',
        lotId: '',
      };
    },
  },
  checktaskDetails: {
    type: Array,
    default: () => {
      return [];
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
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
const headers = reactive({
  Authorization: `Bearer ${getAccessToken()}`,
  'tenant-id': getTenantId(),
});
let imageLoading = ref(false);
let detailForm = ref({});
let customForm = ref([]);
// 数据类型下拉
let itemSourceOptions = reactive(getDictOptions('elog_item_source'));
let checktaskItems = ref([]);
const modalVisible = computed(() => props.visible);
const getDetails = async () => {
  let params = {
    checktaskTypeCode: props.basicForm.checktaskTypeCode,
    eqpCode: props.basicForm.eqptCode,
    lotNo: props.basicForm.lotId,
  };
  console.log('getDetails', params);

  let res = await getDetailInfo(params);
  let form: object[] = [];
  let textMapping = {
    文本: 'input',
    图片: 'image',
    下拉单选: 'select',
    下拉多选: 'selectMultiple',
    数字: 'inputNumber',
  };
  let detailTmpForm: object[] = [];
  if (res.length === 0) {
    message.info('无项目数据！');
    return;
  }
  console.log('itemSourceOptions', itemSourceOptions);
  res.forEach((detail) => {
    let obj = detail.items[0];

    let valueType = obj.valueType;
    let valueItem = itemSourceOptions.filter(
      (item) => item.key === valueType
    )[0];
    if (valueItem) {
      let valueText = valueItem.label;
      if (valueText === '下拉单选') {
        form.push({
          type: textMapping[valueText],
          itemName: obj.itemName,
          options: getDictOptions(obj.itemSources[0].sourceContent),
          required: detail.itemIsNecessary === 'Y',
        });
      } else if (valueText === '下拉多选') {
        form.push({
          type: textMapping[valueText],
          itemName: obj.itemName,
          url: obj.itemSources[0].apiUrl,
          apiCode: obj.itemSources[0].sourceContent,
          required: detail.itemIsNecessary === 'Y',
        });
      } else if (valueText === '数字') {
        form.push({
          type: textMapping[valueText],
          itemName: obj.itemName,
          upperLimit: obj.itemRules[0].upperLimit,
          lowerLimit: obj.itemRules[0].lowerLimit,
          required: detail.itemIsNecessary === 'Y',
        });
      } else {
        form.push({
          type: textMapping[valueText],
          itemName: obj.itemName,
          required: detail.itemIsNecessary === 'Y',
        });
      }

      if (props.mode === 'add') {
        detailTmpForm.push({
          itemName: detail.itemName,
          itemCode: detail.itemCode,
          itemValue: '',
          required: detail.itemIsNecessary === 'Y',
        });
      } else {
        // 编辑回显
        let item1: object[] = props.checktaskDetails.filter(
          (each) => each.itemCode === detail.itemCode
        );
        let itemValue = '';
        let id;
        if (item1.length > 0) {
          itemValue = item1[0].itemValue;
          id = item1[0].id;
        }
        detailTmpForm.push({
          id,
          itemName: detail.itemName,
          itemCode: detail.itemCode,
          itemValue,
          required: detail.itemIsNecessary === 'Y',
        });
      }
    }
  });
  console.log('form', form, detailTmpForm);
  customForm.value = form;
  detailForm.value = detailTmpForm;
};
watch(
  () => props.mode,
  (newV) => {
    if (newV === 'add') {
      // 新增，获取单据号
    } else if (newV === 'edit') {
      console.log('newV', newV);
      // edit调取这个 获取动态表单
      getDetails();
    }
  },
  { immediate: true }
);
onMounted(async () => {
  checktaskItems.value = await getChecktaskItems();
});
const returnTo = () => {
  emit('close');
};
const saveData = async () => {
  console.log('save11', props.basicForm, detailForm);
  let form = JSON.parse(JSON.stringify(detailForm.value));
  let { requireFlag, allState } = handleDataState(form);
  if (!requireFlag) {
    message.info('表单必填项未填写完整！');
    return;
  }

  // if (props.mode === 'add') {
  let checktaskDetails = detailForm.value.map((item) => {
    return {
      id: props.mode === 'add' ? '' : item.id,
      itemName: item.itemName,
      itemCode: item.itemCode,
      itemValue: item.itemValue,
      itemState: item.itemState ? 'Y' : 'N',
    };
  });
  let params = {
    id: props.mode === 'add' ? '' : props.basicForm.id,
    checktaskState: allState ? 'Y' : 'N',
    checktaskCode: props.basicForm.checktaskCode,
    checktaskTypeCode: props.basicForm.checktaskTypeCode,
    eqptCode: props.basicForm.eqptCode,
    lotId: props.basicForm.lotId,
    checktaskDetails,
  };
  console.log('params222', params);
  let res;
  if (props.mode === 'add') {
    res = await createChecktask(params);
  } else {
    res = await updateChecktask(params);
  }

  console.log('res', res);
  let text = props.mode === 'add' ? '新增' : '更新';
  if (res) {
    message.success(`${text}成功！`);
    emit('close');
    emit('refreshTable');
  } else {
    message.error(`${text}失败！`);
  }
  // } else {
  //   let res = await updateChecktask(props.basicForm);
  //   console.log('res', res);
  //   if (res) {
  //     message.success('更新成功！');
  //     emit('close');
  //     emit('refreshTable');
  //   } else {
  //     message.error('更新失败！');
  //   }
  // }
};
const handleChange = (info, index) => {
  if (info.file.status === 'uploading') {
    imageLoading.value = true;
    return;
  }
  console.log('info', info);
  if (info.file.status === 'done') {
    detailForm.value[index].itemValue = info.file.response.data;
  }
};

const getMultipleData = async (data, index) => {
  if (data.url) {
    let params = {
      eqpCode: props.basicForm.eqptCode,
      lotNo: props.basicForm.lotId,
      apiUrl: data.url,
      apiCode: props.basicForm.apiCode,
    };
    // let config = {
    //   url: data.url,
    //   params: params,
    //   headers: headers,
    //   method: 'post',
    //   withCredentials: true,
    // };
    let res = await invokeApi(params);

    console.log('datadd', res);
    if (res) {
      detailForm.value[index].itemValue = Object.values(JSON.parse(res))[0];
      message.success('获取成功！');
    } else {
      message.error('获取失败！');
    }
  }
};

const handleDataState = (form) => {
  let requireFlag = true;
  let allState = true;

  for (let i = 0; i < form.length; i++) {
    let item = form[i];
    if (item.required && !item.itemValue) {
      requireFlag = false;
      allState = false;
      return { requireFlag, allState };
    }
    detailForm.value[i].itemState = true;
    if (
      customForm.value[i].type == 'inputNumber' &&
      (item.itemValue > customForm.value[i].upperLimit ||
        item.itemValue < customForm.value[i].lowerLimit)
    ) {
      allState = false;
      detailForm.value[i].itemState = false;
    }
  }
  return { requireFlag, allState };
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
        margin: 50px 0 0 0;
        :deep(.ant-form-item) {
          width: 48%;
          margin-bottom: 20px;
        }
      }
    }
    .detail-info {
      margin-top: 52px;
      .avatar-uploader {
        :deep(> .ant-upload) {
          width: 128px;
          height: 128px;
          .ant-upload-select-picture-card i {
            font-size: 32px;
            color: #999;
          }

          .ant-upload-select-picture-card .ant-upload-text {
            margin-top: 8px;
            color: #666;
          }
        }
      }
      .orange-input {
        :deep(input) {
          background: orange;
        }
      }
    }
  }
}
</style>
