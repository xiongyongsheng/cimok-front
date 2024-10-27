<template>
  <div class="main-content">
    <div class="main-container">
      <div class="query">
        <Form
          :form="form"
          layout="inline"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 24 }"
        >
          <FormItem>
            <a-input
              style="width: 250px"
              placeholder="类型名称"
              v-model:value="form.checktaskTypeName"
            />
          </FormItem>
          <FormItem>
            <a-input
              style="width: 250px"
              placeholder="项目名称"
              v-model:value="form.itemName"
            />
          </FormItem>
          <FormItem>
            <a-input
              style="width: 250px"
              placeholder="项目代码"
              v-model:value="form.itemCode"
            />
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
      <a-button type="primary" @click="addData" style="margin: 20px 20px 0 0"
        ><Icon icon="ant-design:plus-outlined" />新建</a-button
      >
      <a-button @click="openImportModal" style="margin: 20px 0"
        >导入数据</a-button
      >
      <div class="table">
        <Table
          :columns="columns"
          :data-source="tableData"
          :loading="loading"
          :pagination="pagination"
          @change="handleTableChange"
        >
          <template #itemIsNecessary="{ record }">
            {{
              getDictTypeText(itemIsNecessaryOptions, record.itemIsNecessary)
            }}
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
      :itemIsNecessaryOptions="itemIsNecessaryOptions"
      :visible="editModalVisible"
      :mode="mode"
      @close="closeEditModal"
      @refreshTable="queryData"
      :form="editForm"
    ></EditModal>
    <ImportModal
      v-if="importModalVisible"
      :visible="importModalVisible"
      @close="closeImportModal"
    ></ImportModal>
  </div>
</template>

<script lang="ts" setup>
import { Table, Form, FormItem, Popconfirm, message } from 'ant-design-vue';
import { IconEnum } from '@/enums/appEnum';
import Icon from '@/components/Icon';
import EditModal from './EditModal.vue';
import ImportModal from './ImportModal.vue';
import { ResultEnum } from '@/enums/httpEnum';
import {
  getChecktaskItemPage,
  getChecktaskItem,
  createChecktaskItem,
  updateChecktaskItem,
  deleteChecktaskItem,
  exportChecktaskItem,
  getTempltateChecktaskItem,
} from '@/api/base/checktaskitem';
import { ref, reactive, onMounted } from 'vue';
defineOptions({ name: 'ChecktaskItem' });
import { getDictOptions, DictDataType } from '@/utils/dict';
// 表单数据
const form = ref({
  checktaskTypeName: '',
  itemName: '',
  itemCode: '',
});
let columns = [
  {
    title: '类型名称',
    dataIndex: 'checktaskTypeName',
    key: 'checktaskTypeName',
    align: 'center',
  },
  {
    title: '类型代码',
    dataIndex: 'checktaskTypeCode',
    key: 'checktaskTypeCode',
    algin: 'center',
    align: 'center',
  },
  {
    title: '项目名称',
    dataIndex: 'itemName',
    key: 'itemName',
    align: 'center',
  },
  {
    title: '项目代码',
    dataIndex: 'itemCode',
    key: 'itemCode',
    align: 'center',
  },
  {
    title: '必填',
    dataIndex: 'itemIsNecessary',
    slots: { customRender: 'itemIsNecessary' },
    key: 'itemIsNecessary',
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
let mode = ref('');
const editForm = ref({});
let tableData = ref([]);
const pagination = ref({
  defaultCurrent: 1,
  defaultPageSize: 10,
  current: 1,
  total: 0,
  pageSize: 10,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total) => `共${total}条数据`,
});
const loading = ref(false);
let itemIsNecessaryOptions = reactive(getDictOptions('CheckITemNecessary'));
// 生命周期
onMounted(() => {
  queryData();
});
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
    checktaskTypeName: '',
    checktaskTypeCode: '',
    itemName: '',
    itemCode: '',
    itemIsNecessary: '',
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
  let res = await deleteChecktaskItem(record.id);
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
const handleTableChange = (page) => {
  pagination.value.current = page.current;
  pagination.value.pageSize = page.pageSize;
  queryData();
};
const resetData = () => {
  form.value = {
    checktaskTypeName: '',
    itemName: '',
    itemCode: '',
  };
  queryData();
};
const queryData = async () => {
  // 请求表格数据
  let params = Object.assign(
    { pageSize: pagination.value.pageSize, pageNo: pagination.value.current },
    form.value
  );
  let res = await getChecktaskItemPage(params);
  tableData.value = res.list;
  pagination.value.total = res.total;
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
.main-content {
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
        .ant-input {
          margin-right: 30px;
        }
      }
      .buttons {
        width: 141px;
        position: absolute;
        right: -13px;
      }
    }
    .table {
      width: 100%;
      height: calc(100% - 166px);
      background: #fff;
      :deep(.ant-table-wrapper) {
        height: 100%;
        .ant-spin-nested-loading {
          height: 100%;
          .ant-spin-container {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .ant-table-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            .ant-table-body {
              position: relative;
              flex: 1;
              table {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
              }
            }
          }
          .ant-table {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>
