<template>
  <div class="main-content">
    <div class="top">
      <div class="title-header">
        <span class="title">个人电子授权在线核验服务</span>
        <span style="font-size: 12px; color: grey">
          在线实时验证个人电子授权证照真伪</span
        >
      </div>
      <div class="container">
        <div class="query">
          <a-row type="flex" justify="space-around">
            <a-col :span="14" style="padding-top: 27px">
              <a-form-model
                :model="form"
                ref="ruleForm"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item
                  label="姓名"
                  ref="eaPersonName"
                  prop="eaPersonName"
                >
                  <a-input
                    v-model="form.eaPersonName"
                    placeholder="请输入姓名"
                    @blur="
                      () => {
                        $refs.eaPersonName.onFieldBlur()
                      }
                    "
                  />
                </a-form-model-item>
                <a-form-model-item
                  label="证件号码"
                  ref="eaCertificateNumber"
                  prop="eaCertificateNumber"
                >
                  <a-input
                    v-model="form.eaCertificateNumber"
                    placeholder="请输入个人证件号码"
                    @blur="
                      () => {
                        $refs.eaCertificateNumber.onFieldBlur()
                      }
                    "
                  />
                </a-form-model-item>
                <a-form-model-item label="授权编号" ref="eaNo" prop="eaNo">
                  <a-input
                    v-model="form.eaNo"
                    placeholder="请输入授权编号"
                    @blur="
                      () => {
                        $refs.eaNo.onFieldBlur()
                      }
                    "
                  />
                </a-form-model-item>
              </a-form-model>
            </a-col>
            <a-col :span="10" class="btn-col">
              <a-button type="primary" @click="verifyData">核验</a-button>
              <a-button
                type="primary "
                class="search-reset"
                @click="handleReset"
                >重置</a-button
              >
            </a-col>
          </a-row>
        </div>
        <div class="result">
          <div class="res-container">
            <a-row
              v-for="(item, index) in resultList"
              :key="item.key"
              :gutter="[0, 5]"
            >
              <a-col :span="3" align="right">
                <span :class="[index === 0 ? 'result-span' : '']">
                  {{ item.title }}:
                </span>
              </a-col>
              <a-col :span="20" :offset="1">
                <span v-if="item.title === '核验结果'" class="result-span2">{{
                  item.data
                }}</span>
                <span v-else-if="item.title === '所属地区'">{{
                  item.data || '-'
                }}</span>
                <span
                  v-else-if="item.title === '授权状态'"
                  :style="getStatusStyle(item.data)"
                  style="font-weight: bold"
                  >{{ getDictTypeText(eaStatusList, item.data) || '-' }}</span
                >
                <span v-else>{{ item.data }}</span>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="content">
      <div class="title-header" style="position: relative; top: -17px">
        <span class="title">个人电子授权查询</span>
      </div>
      <div class="container">
        <div class="search-container">
          <div class="search-l">
            <div class="search-l-item-3 flex-r">
              <div class="search-l-name">姓名：</div>
              <div class="search-l-value">
                <a-input
                  placeholder="请输入"
                  class="search-l-value-f"
                  v-model="searchForm.eaPersonName"
                ></a-input>
              </div>
            </div>
            <div class="search-l-item-3 flex-r">
              <div class="search-l-name">证件号码：</div>
              <div class="search-l-value">
                <a-input
                  placeholder="请输入"
                  class="search-l-value-f"
                  v-model="searchForm.eaCertificateNumber"
                ></a-input>
              </div>
            </div>
            <div class="search-l-item-3 flex-r">
              <div class="search-l-name">所属地区：</div>
              <div class="search-l-value">
                <region-select
                  placeholder="请选择地区"
                  class="search-l-value-f"
                  :regionValue="this.topCode"
                  :topCode="topCode"
                  ref="regionSelect"
                  @change="changeRegion"
                ></region-select>
              </div>
            </div>
            <div class="search-l-item-3 flex-r">
              <div class="search-l-name" style="width: 180px">
                是否为电子授权书：
              </div>
              <div class="search-l-value" style="width: calc(100% - 180px)">
                <a-select
                  class="search-l-value-f"
                  :allowClear="true"
                  v-model="searchForm.isEa"
                >
                  <a-select-option value="">请选择</a-select-option>
                  <a-select-option
                    :value="item.dictValue"
                    v-for="(item, index) in isEaList"
                    :key="index"
                  >
                    {{ item.dictLabel }}
                  </a-select-option>
                </a-select>
              </div>
            </div>
            <div class="search-l-item-3 flex-r">
              <div class="search-l-name">授权状态：</div>
              <div class="search-l-value">
                <a-select
                  class="search-l-value-f"
                  :allowClear="true"
                  v-model="searchForm.status"
                  placeholder="授权状态"
                >
                  <a-select-option value="">请选择</a-select-option>
                  <a-select-option
                    :value="item.dictValue"
                    v-for="(item, index) in eaStatusList"
                    :key="index"
                  >
                    {{ item.dictLabel }}
                  </a-select-option>
                </a-select>
              </div>
            </div>
            <div class="search-l-item-3 flex-r">
              <div class="search-l-name">授权编号：</div>
              <div class="search-l-value">
                <a-input
                  placeholder="请输入"
                  class="search-l-value-f"
                  v-model="searchForm.eaNo"
                ></a-input>
              </div>
            </div>
          </div>
          <div class="search-btns">
            <a-button
              class="search-btn"
              type="primary"
              icon="search"
              @click="queryTableData"
            >
              查询
            </a-button>
            <a-button
              class="search-btn search-reset"
              type="default"
              icon="reload"
              @click="handleSearchReset"
            >
              重置</a-button
            >
          </div>
        </div>
        <div class="table">
          <a-table
            :columns="columns"
            :data-source="tableData"
            :loading="loading"
            :pagination="pagination"
            @change="handleTableChange"
          >
            <span slot="index" slot-scope="text, record, index">
              {{ (pagination.current - 1) * pagination.pageSize + index + 1 }}
            </span>
            <span slot="zoneCode" slot-scope="text, record">{{
              getZoneStr(record, 'zoneCode')
            }}</span>
            <span slot="isEa" slot-scope="text">{{
              getDictTypeText(isEaList, text)
            }}</span>
            <span slot="status" slot-scope="text">
              <span :style="getStatusStyle(text)" class="status-span">{{
                getDictTypeText(eaStatusList, text)
              }}</span>
            </span>
            <span slot="action" slot-scope="text, record">
              <span
                class="theme-color"
                @click="viewEaInfo(record)"
                style="cursor: pointer"
              >
                查看
              </span>
            </span>
          </a-table>
        </div>
      </div>
    </div> -->

    <ea-info
      v-if="infoModalVisible"
      :visible="infoModalVisible"
      :currentId="currentId"
      :currentStatusLabel="currentStatusLabel"
      @closeInfoModal="closeInfoModal"
    ></ea-info>
  </div>
</template>

<script>
import Vue from 'vue'
import regionSelect from '@/views/taiUnit/regionSelect' // 行政区划
import { queryCommonDict } from '@/api/common'
import { dataVerification, getTableData } from '@/api/eaManagement.js'
import { getAllZoneStr } from '@/utils/region'
import { getDictTypeText } from '@/utils/util'
import { pageMixin } from '@/mixins/pageMixins'
import EaInfo from './EaInfo.vue'
import { deepCopy } from '@/utils/copy'

export default {
  name: 'List',
  mixins: [pageMixin],
  components: {
    regionSelect,
    EaInfo,
  },
  data() {
    return {
      infoModalVisible: false,
      loading: false,
      queryRegionValue: Vue.ls.get('zoneCode'),
      topCode: Vue.ls.get('zoneCode'),

      isEaList: [
        { dictLabel: '是', dictValue: '1' },
        { dictLabel: '否', dictValue: '0' },
      ],
      eaStatusList: [],
      tableData: [],
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          key: 'index',
          scopedSlots: { customRender: 'index' },
          align: 'center',
        },
        {
          title: '所属地区',
          dataIndex: 'zoneCode',
          key: 'zoneCode',
          algin: 'center',
          scopedSlots: { customRender: 'zoneCode' },
          align: 'center',
        },
        {
          title: '姓名',
          dataIndex: 'eaPersonName',
          key: 'eaPersonName',
          align: 'center',
        },
        {
          title: '证件号码',
          dataIndex: 'eaCertificateNumber',
          key: 'eaCertificateNumber',
          align: 'center',
        },
        {
          title: '是否为电子授权书',
          key: 'isEa',
          dataIndex: 'isEa',
          scopedSlots: { customRender: 'isEa' },
          align: 'center',
        },
        {
          title: '授权编号',
          key: 'eaNo',
          dataIndex: 'eaNo',
          align: 'center',
        },
        {
          title: '授权状态',
          key: 'status',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' },
          align: 'center',
        },
        {
          title: '操作',
          key: 'action',
          width: '300px',
          scopedSlots: { customRender: 'action' },
          align: 'center',
        },
      ],
      form: { eaNo: '', eaCertificateNumber: '', eaPersonName: '' },
      labelCol: { span: 5 },
      wrapperCol: { span: 13 },
      resultList: [
        { title: '核验结果' },
        { title: '姓名', data: '-' },
        { title: '证件号码', data: '-' },
        { title: '授权编号', data: '-' },
        { title: '所属地区', data: '' },
        { title: '授权有效期', data: '-' },
        { title: '授权状态', data: '' },
      ],

      searchForm: {
        eaPersonName: '',
        eaCertificateNumber: '',
        zoneCode: Vue.ls.get('zoneCode'),
        isEa: '',
        status: '',
        eaNo: '',
      },
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        current: 1,
        total: 0,
        pageSize: 10,
      },
      currentId: '',
      currentStatusLabel: '',
      getDictTypeText: getDictTypeText,
      getZoneStr: getAllZoneStr,
      // 表单核验规则
      rules: {
        eaPersonName: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {
            required: true,
            pattern: new RegExp(/^[\u4E00-\u9FA5]+$/),
            message: '请输入正确的姓名',
            trigger: 'blur',
          },
        ],
        eaCertificateNumber: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
          {
            required: true,
            pattern: new RegExp(
              /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            ),
            message: '请输入正确格式的证件号码',
            trigger: 'blur',
          },
        ],
        eaNo: [
          { required: true, message: '请输入授权编号', trigger: 'blur' },
          {
            required: true,
            pattern: new RegExp(/^居经授第\d{18}号$/),
            message: '请输入正确格式的授权编号',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  computed: {},
  async created() {
    // 必须使用await,否则无法赋上值
    this.eaStatusList = await queryCommonDict('eaStatus')
  },
  mounted() {
    // 初始化地区树的数据
    this.$nextTick(() => {
      this.$refs.regionSelect.initTree()
    })
  },
  methods: {
    handleTableChange(pagination) {
      this.pagination.current = pagination.current
      this.pagination.pageSize = pagination.pageSize
      this.queryTableData()
    },
    queryTableData() {
      console.log('searchForm', this.searchForm)
      this.loading = true
      const pagination = {
        pageNum: this.pagination.current,
        pageSize: this.pagination.pageSize,
      }
      getTableData(this.searchForm, pagination).then((res) => {
        this.loading = false
        const data = res.data
        this.tableData = data

        this.pagination.total = res.total
      })
      // this.loading = true
      // 请求
      // this.data = [{
      //   id: 1,
      //   eaPersonName: '张三',
      //   eaCertificateNumber: '11010119900307234',
      //   zoneCode: '110000',
      //   isEa: '1',
      //   status: '1',
      //   eaNo: '12345678901234567890' },
      // {
      //   id: 2,
      //   eaPersonName: '张三',
      //   eaCertificateNumber: '11010119900307234',
      //   zoneCode: '110000',
      //   isEa: '1',
      //   status: '2',
      //   eaNo: '12345678901234567890' },
      // {
      //   id: 3,
      //   eaPersonName: '张三',
      //   eaCertificateNumber: '11010119900307234',
      //   zoneCode: '110000',
      //   isEa: '1',
      //   status: '3',
      //   eaNo: '12345678901234567890' },
      // {
      //   id: 4,
      //   eaPersonName: '张三',
      //   eaCertificateNumber: '11010119900307234',
      //   zoneCode: '110000',
      //   isEa: '0',
      //   status: '4',
      //   eaNo: '12345678901234567890' }]
    },

    getStatusStyle(status) {
      console.log(status)
      switch (status) {
        case 1:
          return 'color:#13a713;border-color:#13a713;'
        case 2:
          return 'color:red;border-color:red'
        case 3:
          return 'color:orange;border-color:orange'
        case 4:
          return 'color:grey;border-color:grey'
        default:
          return 'color:green;border-color:green'
      }
    },
    viewEaInfo(item) {
      console.log('viewEaInfo', item)
      this.currentId = item.eaId
      this.currentStatusLabel = this.getDictTypeText(
        this.eaStatusList,
        item.status
      )
      this.infoModalVisible = true
    },
    handleReset() {
      this.$refs.ruleForm.resetFields()
      this.form = { eaNo: '', eaCertificateNumber: '', eaPersonName: '' }
      // 清空结果
      this.resultList = [
        { title: '核验结果' },
        { title: '姓名', data: '-' },
        { title: '证件号码', data: '-' },
        { title: '授权编号', data: '-' },
        { title: '所属地区', data: '' },
        { title: '授权有效期', data: '-' },
        { title: '授权状态', data: '' },
      ]
    },
    handleSearchReset() {
      this.searchForm = {
        eaPersonName: '',
        eaCertificateNumber: '',
        zoneCode: '',
        isEa: '',
        status: '',
        eaNo: '',
      }
      this.searchForm.zoneCode = Vue.ls.get('zoneCode')
      this.$nextTick(() => {
        this.$refs.regionSelect.initTree()
      })
    },
    changeRegion(value) {
      console.log('changeRegion', value)
      this.searchForm.zoneCode = value[value.length - 1]
    },
    /**
     * @description 关闭查看弹窗的回调
     */
    closeInfoModal() {
      this.infoModalVisible = false
      this.currentId = ''
      this.currentStatusLabel = ''
    },
    verifyData() {
      this.$refs.ruleForm.validate((valid) => {
        console.log('valid', valid)
        if (valid) {
          dataVerification(this.form).then((res) => {
            console.log('res', res)
            const data = res.data
            if (data && Object.keys(data).length > 0) {
              this.resultList[0]['data'] = ''
              this.resultList[1]['data'] = data.eaPersonName
              this.resultList[2]['data'] = data.eaCertificateNumber
              this.resultList[3]['data'] = data.eaNo
              this.resultList[4]['data'] = this.getZoneStr(data, 'zoneCode')
              this.resultList[5]['data'] =
                (data.startDate ? data.startDate.split(' ')[0] : '') +
                ' - ' +
                (data.endDate ? data.endDate.split(' ')[0] : '退出行政事项止')
              this.resultList[6]['data'] = data.status
            } else {
              //
              this.resultList = [
                {
                  title: '核验结果',
                  data: res.msg || '您输入的信息有误，请核对后再进行核验',
                },
                { title: '姓名', data: '-' },
                { title: '证件号码', data: '-' },
                { title: '授权编号', data: '-' },
                { title: '所属地区', data: '' },
                { title: '授权有效期', data: '-' },
                { title: '授权状态', data: '' },
              ]
            }
          })
        }
      })
    },
  },
  watch: {},
}
</script>
<style lang="less" scoped>
@import '~@/styles/search.less';
@import '~@/styles/page.less';
@normal-font-size: 18px;
.main-content {
  font-size: @content-font-size;
  .top {
    // height: 30%;
    .container {
      display: flex;
      margin: 0px 50px 2px 50px;
      .query {
        flex: 1;
        border-right: 1px solid @base-theme-color;
        margin-top: 8px;
        .btn-col {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          /deep/.ant-btn {
            width: 143px;
            height: 60px;
            display: block;
            span {
              font-size: 27px;
            }
          }
        }
      }
      .result {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .res-container {
          // padding-left: 200px;
          position: relative;
          top: 5px;
          /deep/.ant-row:first-child {
            margin-top: -8px;
          }
          .result-span {
            color: @base-theme-color;
            font-size: 18px;
            margin-bottom: 5px;
          }
          .result-span2 {
            color: red;
            font-weight: bold;
            font-size: 18px;
          }
        }
      }
    }
  }
  .title-header {
    height: 30px;
    line-height: 30px;
    // margin-bottom: 13px;
    .title {
      color: @base-theme-color;
      font-weight: bold;
      margin-right: 10px;
      font-size: 16px;
      &:before {
        content: '';
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        top: 5px;
        margin-right: 7px;
        background: url('~@/assets/title-header.png') no-repeat;
        background-size: contain;
      }
    }
    border-bottom: 1px solid @base-theme-color;
  }
  .content {
    // height: 70%;
    .container {
      .search-container {
        .search-l {
          .search-l-item-3 {
            width: 32%;
            margin: 5px 1% 5px 0;
          }
        }
        .search-btns {
          min-width: 122px;
          margin: 5px 0;
          height: 32px;
          line-height: 32px;
          text-align: right;
          .search-btn {
            width: 90px;
            margin: 3px 3px;
            display: block;
          }
        }
      }
      .table {
        margin: 15px;
        margin-bottom: 0;
        .status-span {
          display: inline-block;
          border: 1px solid;
          text-align: center;
          width: 42px;
          height: 23px;
          border-radius: 5px;
          line-height: 20px;
        }
      }
    }
  }
  /deep/.ant-form-item-label {
    background: white !important;
    border: none;
  }
  .theme-color {
    color: @base-theme-color;
  }
}
</style>
