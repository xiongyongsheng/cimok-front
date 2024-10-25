<template>
  <div class="import-modal" ref="importModal">
    <Modal
      width="50%"
      :visible="modalVisible"
      title="数据导入"
      :getContainer="() => $refs.importModal"
      @cancel="returnTo"
    >
      <div class="info-container">
        <Steps progress-dot :current="currentPage">
          <Step title="上传文件" />
          <Step title="数据预览" />
          <Step title="导入数据" />
          <Step title="导入完成" />
        </Steps>
        <!-- 上传文件 -->
        <template v-if="currentPage == 1">
          <div class="upload">
            <div class="img">
              <Icon
                style="font-size: 53px"
                icon="ant-design:cloud-upload-outlined"
              />
            </div>
            <div class="text">
              <div style="font-size: 19px; font-weight: bold">
                上传填好的信息表
              </div>
              <div>
                文件后缀名必须为xls 或xlsx
                （即Excel格式），文件大小不得大于10M，最多支持导入3000条数据
              </div>
              <div class="upload-btn" @click="uploadFile">
                <Upload
                  name="file"
                  :headers="headers"
                  accept=".xls,.xlsx"
                  action="/dev-api/base/checktask-item/import-excel"
                  @change="handleFileChange"
                >
                  <span>上传文件</span>
                </Upload>
              </div>
            </div>
          </div>
          <div class="warning">
            <div class="img">
              <Icon
                style="font-size: 43px; color: #ff6c00"
                icon="ant-design:exclamation-circle"
              />
            </div>
            <div class="text">
              <div>特别提示</div>
              <div>
                导入过程中如发现同名客户，且对该客户数据有更新权限，则更新这条客户数据
              </div>
            </div>
          </div>
        </template>
        <!-- 数据预览 -->
        <template v-else-if="currentPage == 2">
          <Table
            v-if="dataStatus == 'success'"
            :columns="columns"
            :data-source="tableData"
            :pagination="pagination"
          ></Table>
          <div v-else class="data-error">
            <div class="title">
              <div class="img">
                <Icon
                  style="font-size: 43px; color: #ff6c00"
                  icon="ant-design:exclamation-circle"
                />
              </div>
              <div class="text">
                <div>
                  <span style="font-weight: bold">正常数据条数：</span
                  ><span style="color: green">{{ errorData.rightNum }}条</span>
                </div>
                <div>
                  <span style="font-weight: bold">异常数据条数：</span
                  ><span style="color: red">{{ errorData.errorNum }}条</span>
                </div>
              </div>
            </div>
            <div class="warning-info">
              <div
                style="font-weight: bold; font-size: 18px; margin-bottom: 5px"
              >
                异常提示：
              </div>
              <div
                v-for="(item, index) in errorData.warningInfo"
                :key="index"
                style="line-height: 22px; margin-bottom: 5px"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="currentPage == 3">
          <div class="process">
            <Progress :percent="uploadPercent" status="active" />
            <div style="margin-top: 10px">
              {{ uploadPercent == 100 ? '导入完成' : '正在导入数据' }}
            </div>
          </div>
        </template>
      </div>
      <template #footer>
        <a-button type="primary" v-if="uploadPercent == 100" @click="returnTo"
          >完成</a-button
        >
        <a-button v-if="uploadPercent != 100 && currentPage != 1" @click="toPre"
          >上一步</a-button
        >
        <a-button v-if="uploadPercent != 100" @click="toNext" type="primary"
          >下一步</a-button
        >
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { Table, Modal, Steps, Step, Upload, Progress } from 'ant-design-vue';
import { importChecktaskItem } from '@/api/base/checktaskitem';
import { getAccessToken, getTenantId } from '@/utils/auth';
import Icon from '@/components/Icon';
import { ref, reactive, computed } from 'vue';
defineOptions({ name: 'ImportModal' });
const emit = defineEmits(['close']);
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
        projectName: '',
        itemCode: '',
        itemIsNecessary: '',
      };
    },
  },
});
const modalVisible = computed(() => props.visible);
const currentPage = ref(1);
// 上传进度
const uploadPercent = ref(0);

// 上传文件数据状态
const dataStatus = ref('error');
const errorData = reactive({
  rightNum: 100,
  errorNum: 100,
  warningInfo: [
    '第1行：  已存在名称为【 深圳市亿恩科技有限公司 】的客户，如果继续导入将会更新这条客户的数据',
    '第2行：【客户名称】字段不能为空',
    '第2行：【所属行业】字段不能为空',
    '第2行：【客户类型】字段不能为空',
    '第2行：【手机号】已关联其他联系人',
  ],
});
let columns = [
  {
    title: '参数代码',
    dataIndex: 'checktaskTypeName',
    key: 'checktaskTypeName',
    align: 'center',
  },
  {
    title: '参数名称',
    dataIndex: 'checktaskTypeCode',
    key: 'checktaskTypeCode',
    algin: 'center',
    align: 'center',
  },
  {
    title: '参数范围-小',
    dataIndex: 'projectName',
    key: 'projectName',
    align: 'center',
  },
  {
    title: '参数范围-大',
    dataIndex: 'itemCode',
    key: 'itemCode',
    align: 'center',
  },
];
const headers = reactive({
  Authorization: `Bearer ${getAccessToken()}`,
  'tenant-id': getTenantId(),
});
const tableData = reactive([
  {
    checktaskTypeName: '11',
    checktaskTypeCode: '11',
    projectName: '11',
    itemCode: '11',
  },
]);
const pagination = reactive({
  defaultCurrent: 1,
  defaultPageSize: 10,
  current: 1,
  total: 0,
  pageSize: 10,
});
const uploadFile = () => {};

const returnTo = () => {
  emit('close');
};
const saveData = () => {};

const toNext = () => {
  currentPage.value = currentPage.value + 1;
  if (currentPage.value == 2) {
    let interval = setInterval(() => {
      if (uploadPercent.value == 100) {
        clearInterval(interval);
        return;
      }
      uploadPercent.value = uploadPercent.value + 1;
    }, 100);
  }
};
const toPre = () => {
  currentPage.value = currentPage.value - 1;
};
const handleFileChange = async (info) => {
  console.log('info', info);
  // let res = await importChecktaskItem({ file: info.file.originFileObj });
  // console.log('res', res);
};
</script>

<style lang="less" scoped>
.import-modal {
  // height: 100vh;
  // 修改弹窗样式
  .info-container {
    padding: 30px 50px;

    .upload {
      height: 200px;
      border: 0.5px solid grey;
      display: flex;
      margin: 50px 0;
      border-radius: 5px;
      .img {
        width: 200px;
        background: #14101021;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .text {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        color: grey;
        > div {
          flex: 1;
          display: flex;
          align-items: center;
        }
      }
      .upload-btn {
        span {
          color: blue;
          cursor: pointer;
        }
      }
    }
    .warning {
      height: 150px;
      border: 0.5px solid grey;
      background: rgba(186, 114, 6, 0.5);
      display: flex;
      border-radius: 5px;
      .img {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .text {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        color: grey;
        > div {
          flex: 1;
          display: flex;
          align-items: center;
        }
      }
    }
    .data-error {
      margin: 50px 0;
      .title {
        height: 150px;
        border: 0.5px solid grey;
        display: flex;
        border-radius: 5px;
        .img {
          width: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #14101021;
        }
        .text {
          margin-left: 30px;
          padding-top: 40px;
          > div {
            margin-bottom: 10px;
          }
        }
      }
      .warning-info {
        border-radius: 5px;
        padding: 30px;
        margin-top: 30px;
        background: #14101021;
      }
    }
    .process {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
