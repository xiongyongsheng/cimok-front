<template>
  <div class="check-task">
    <div class="main-container">
      <div class="query">
        <Form
          :form="form"
          layout="inline"
          :label-col="{ span: 0 }"
          :wrapper-col="{ span: 20, offset: 0 }"
        >
          <FormItem>
            <a-input placeholder="单据号" v-model:value="form.checktaskCode" />
          </FormItem>
          <FormItem>
            <a-input
              placeholder="单据类型"
              v-model:value="form.checktaskTypeCode"
            />
          </FormItem>
          <FormItem>
            <a-input placeholder="设备号" v-model:value="form.eqptCode" />
          </FormItem>
          <FormItem>
            <a-input placeholder="批次号" v-model:value="form.lotld" />
          </FormItem>
          <FormItem>
            <a-input placeholder="作业站点" v-model:value="form.jobSite" />
          </FormItem>
          <FormItem class="buttons">
            <a-button
              style="margin-right: 20px"
              type="primary"
              @click="queryData"
            >
              查询
            </a-button>
            <a-button type="default" @click="resetData"> 重置 </a-button>
          </FormItem>
        </Form>
      </div>
      <a-button type="primary" @click="addData" style="margin: 30px 20px 20px 0"
        ><Icon icon="ant-design:plus-outlined" />新建</a-button
      >
      <div class="table">
        <Table
          :columns="columns"
          :data-source="tableData"
          :loading="loading"
          :pagination="pagination"
          @change="handleTableChange"
        >
          <template #checktaskState="{ record }">
            {{ getDictTypeText(taskStateOptions, record.checktaskState) }}
          </template>
          <template #action="{ record }">
            <a-button
              size="small"
              type="danger"
              style="margin-right: 10px; color: #1677ff"
              @click="editData(record)"
              ><Icon icon="clarity:note-edit-line" />编辑</a-button
            >
            <Popconfirm
              title="确定删除此条数据？"
              ok-text="确定"
              cancel-text="取消"
              @confirm="deleteData(record)"
            >
              <a-button type="danger" style="color: #ff4d4f" size="small"
                ><Icon icon="ant-design:delete-outlined" /> 删除</a-button
              >
            </Popconfirm>
          </template>
        </Table>
      </div>
    </div>
    <EditModal
      v-if="editModalVisible"
      :visible="editModalVisible"
      @close="closeEditModal"
      :basicForm="editForm"
      @refreshTable="queryData"
      :mode="mode"
    ></EditModal>
  </div>
</template>

<script lang="ts" setup>
import { Table, Form, FormItem, Popconfirm, message } from 'ant-design-vue';
import { IconEnum } from '@/enums/appEnum';
import Icon from '@/components/Icon';
import EditModal from './EditModal.vue';
import { getDictOptions, DictDataType } from '@/utils/dict';
import {
  getChecktaskPage,
  getChecktask,
  deleteChecktask,
} from '@/api/base/checktask';
// import ImportModal from './ImportModal.vue';
import { ref, reactive, onMounted } from 'vue';
defineOptions({ name: 'Checktask' });
// 表单数据
const form = ref({
  checktaskCode: '',
  checktaskTypeCode: '',
  eqptCode: '',
  lotld: '',
  jobSite: '',
});
// 生命周期
onMounted(() => {
  queryData();
});
let columns = [
  {
    title: '单据号',
    dataIndex: 'checktaskCode',
    key: 'checktaskCode',
    align: 'center',
  },
  {
    title: '单据类型',
    dataIndex: 'checktaskTypeCode',
    key: 'checktaskTypeCode',
    algin: 'center',
    align: 'center',
  },
  {
    title: '设备编码',
    dataIndex: 'eqptCode',
    key: 'eqptCode',
    align: 'center',
  },
  {
    title: '批次号',
    dataIndex: 'lotld',
    key: 'lotld',
    align: 'center',
  },
  {
    title: '状态',
    dataIndex: 'checktaskState',
    key: 'checktaskState',
    slots: { customRender: 'checktaskState' },

    align: 'center',
  },
  {
    title: '执行角色',
    key: 'executorRole',
    dataIndex: 'executorRole',
    align: 'center',
  },
  {
    title: '创建人员',
    key: 'created',
    dataIndex: 'created',
    align: 'center',
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
    align: 'center',
  },
  {
    title: '完成人员',
    key: 'finishUser',
    dataIndex: 'finishUser',
    align: 'center',
  },
  {
    title: '完成时间',
    key: 'completeTime',
    dataIndex: 'completeTime',
    align: 'center',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    width: '300px',
    slots: { customRender: 'action' },
    align: 'center',
  },
];
const editModalVisible = ref(false);
const importModalVisible = ref(false);

const editForm = ref({});
let tableData = ref([
  // {
  //   checktaskCode: '11',
  //   checktaskTypeCode: '11',
  //   eqptCode: '11',
  //   lotld: '11',
  //   created: '11',
  //   checktaskState: '11',
  //   createTime: '11',
  //   executorRole: '22',
  //   finishUser: '22',
  //   completeTime: '22',
  // },
]);
let taskStateOptions = reactive(getDictOptions('CheckTaskState'));
const pagination = reactive({
  defaultCurrent: 1,
  defaultPageSize: 10,
  current: 1,
  total: 0,
  pageSize: 10,
});
let mode = ref('');
const loading = ref(false);
// 编辑
const editData = (record) => {
  editModalVisible.value = true;
  mode.value = 'edit';
  editForm.value = record;
};
// 新建
const addData = () => {
  editModalVisible.value = true;
  editForm.value = {
    checktaskCode: '',
    checktaskTypeCode: '',
    eqptCode: '',
    lotld: '',
    jobSite: '',
  };
  mode.value = 'add';
};
const closeEditModal = () => {
  editModalVisible.value = false;
};
const closeImportModal = () => {
  importModalVisible.value = false;
};
// 删除
const deleteData = async (record) => {
  let res = await deleteChecktask(record.id);
  console.log('res', res);
  if (res) {
    message.success('删除成功！');
    queryData();
  } else {
    message.error('删除失败！');
  }
};
const openImportModal = (record) => {
  importModalVisible.value = true;
};
const handleTableChange = (pagination) => {};
const resetData = () => {
  form.value = {
    checktaskCode: '',
    checktaskTypeCode: '',
    eqptCode: '',
    lotld: '',
    jobSite: '',
  };
  queryData();
};
const queryData = async () => {
  // 请求表格数据
  let params = Object.assign(
    { pageSize: pagination.pageSize, pageNo: pagination.current },
    form.value
  );
  let res = await getChecktaskPage(params);
  tableData.value = res.list;
  console.log('tableData', tableData);
};
/**
 * @description 公共转码函数
 * @params dictList 转码的数组
 * @params value 要转码的value值
 */
const getDictTypeText = (dictList, value) => {
  if (dictList && dictList.length > 0 && value != null) {
    for (var i = 0; i < dictList.length; i++) {
      if (dictList[i].key == value) {
        return dictList[i].label;
      }
    }
    return value;
  } else {
    return '';
  }
};
</script>
<style lang="less" scoped>
.check-task {
  width: 100%;
  height: 100%;
  .main-container {
    width: 100%;
    height: 100%;
    padding: 20px 40px 0 20px;
    .query {
      height: 50px;
      position: relative;
      // margin-top: 20px;
      // margin-bottom: 20px;
      :deep(.ant-form) {
        // .ant-input {
        //   margin-right: 30px;
        // }
      }
      .buttons {
        width: 173px;
        position: absolute;
        right: -42px;
      }
    }
    .table {
      width: 100%;
      height: 80%;
    }
  }
}
</style>
