<template>
  <div class="info-modal" ref="infoModal">
    <a-modal
      width="80%"
      wrap-class-name="detail-modal"
      v-model="visible"
      :getContainer="() => $refs.infoModal"
      :maskClosable="false"
      :afterClose="returnTo"
      :dialogStyle="{ top: '20px' }"
    >
      <div class="info-container">
        <!-- <span class="return-icon" @click="returnTo">
          <a-icon type="rollback"></a-icon> 返回</span> -->
        <div class="top-content">
          <div class="info-item">
            <span class="info-span-main">授权编号：{{ eaInfo.eaNo }}</span>
            <span
              style="
                font-style: italic;
                margin-left: 280px;
                font-weight: bold;
                font-size: 20px;
              "
              :style="getStatusStyle(currentStatusLabel)"
            >
              {{ currentStatusLabel }}
            </span>
            <!-- <span
              v-if="eaInfo.isEa===1"
              style="font-style: italic;margin-left: 280px;
font-weight: bold; color:orange;font-size:20px">电子授权书</span> -->
          </div>
          <div class="info-item">
            <span class="info-span-4" style="font-weight: bold">
              授权书签署时间：{{ eaInfo.signTime }}
            </span>
            <span class="info-span-4" style="font-weight: bold; width: 75%">
              授权有效期：{{
                eaInfo.startDate ? eaInfo.startDate.split(' ')[0] : ''
              }}
              --
              {{
                eaInfo.endDate ? eaInfo.endDate.split(' ')[0] : '退出行政事项止'
              }}</span
            >
          </div>
          <div class="info-item">
            <span class="info-span-4">
              上传单位：{{ eaInfo.uploadUnit || '-' }}
            </span>
            <span class="info-span-4">
              上传系统：{{ eaInfo.uploadSystem || '-' }}
            </span>
            <span class="info-span-4">
              操作人：{{ eaInfo.uploader || '-' }}
            </span>
            <span class="info-span-4">
              操作人证件号码：{{ eaInfo.uploaderIdcard || '-' }}
            </span>
          </div>
          <div class="file-buttons">
            <a-button
              type="primary"
              style="margin-right: 20px"
              @click="viewIdcard"
            >
              查看身份证
            </a-button>
            <a-button
              type="success"
              style="background: #13a713; color: #fff"
              @click="viewCertificate"
            >
              查看户口本
            </a-button>
          </div>
        </div>
        <div class="center-content">
          <div class="card-container">
            <div class="card">
              <div class="card-title">授权人信息</div>
              <div class="card-info">
                姓名： {{ eaInfo.eaPersonName || '-' }}
              </div>
              <div class="card-info">
                证件类型：
                {{
                  getDictTypeText(certificateType, eaInfo.eaCertificateType) ||
                  '-'
                }}
              </div>
              <div class="card-info">
                证件号码： {{ eaInfo.eaCertificateNumber || '-' }}
              </div>
              <div class="card-info">
                是否为电子授权书： {{ eaInfo.isEa === 1 ? '是' : '否' || '-' }}
              </div>
            </div>
            <div class="card">
              <div class="card-title">申请人信息</div>
              <div class="card-info">
                姓名： {{ eaInfo.appPersonName || '-' }}
              </div>
              <div class="card-info">
                证件类型：
                {{
                  getDictTypeText(certificateType, eaInfo.appCertificateType) ||
                  '-'
                }}
              </div>
              <div class="card-info">
                证件号码： {{ eaInfo.appCertificateNumber || '-' }}
              </div>
              <div class="card-info">
                与授权人关系：
                {{
                  getDictTypeText(
                    householdRelation,
                    eaInfo.appFamilyRelation
                  ) || '-'
                }}
              </div>
            </div>
            <div
              class="card"
              v-if="eaInfo.agentName && eaInfo.agentCertificateNumber"
            >
              <div class="card-title">监护人信息</div>
              <div class="card-info">姓名： {{ eaInfo.agentName || '-' }}</div>
              <div class="card-info">
                证件类型：
                {{
                  getDictTypeText(
                    certificateType,
                    eaInfo.agentCertificateType
                  ) || '-'
                }}
              </div>
              <div class="card-info">
                证件号码： {{ eaInfo.agentCertificateNumber || '-' }}
              </div>
              <div class="card-info">
                与授权人关系：
                {{
                  getDictTypeText(
                    householdRelation,
                    eaInfo.agentFamilyRelation
                  ) || '-'
                }}
              </div>
            </div>
            <div
              class="card"
              style="margin-bottom: 0"
              v-if="eaInfo.handlePerson && eaInfo.handlePersonCertificateNumber"
            >
              <div class="card-title">经办人信息</div>
              <div class="card-info">
                姓名： {{ eaInfo.handlePerson || '-' }}
              </div>
              <div class="card-info">
                证件类型：
                {{
                  getDictTypeText(
                    certificateType,
                    eaInfo.handlePersonCertificateType
                  ) || '-'
                }}
              </div>
              <div class="card-info">
                证件号码： {{ eaInfo.handlePersonCertificateNumber || '-' }}
              </div>
            </div>
          </div>
          <div class="pdf">
            <!-- <AttachmentPreview
              class="attahment-item"
              :fileType="pdfUrl + '101'"
              :file-id="pdfUrl"
              :fileTitle="pdfUrl ? '授权书' : '无授权书'"
              :readonly="true"
            ></AttachmentPreview> -->
            <!-- <pdf
              v-for="i in numPages"
              :key="i"
              :src="src"
              :page="i"
              ref="pdfDom"
            ></pdf> -->
            <iframe
              frameborder="0"
              width="100%"
              height="100%"
              id="iframePdf"
              :src="pdfUrl"
            ></iframe>
          </div>
        </div>
      </div>
      <span slot="footer">
        <a-button @click="returnTo">关闭</a-button>
      </span>
    </a-modal>
    <a-modal
      width="700px"
      wrap-class-name="pohto-modal"
      v-model="photoVisible"
      :title="photoModalTitle"
      :maskClosable="false"
      :footer="null"
      :getContainer="() => $refs.infoModal"
    >
      <div class="images-container">
        <AttachmentPreview
          v-if="imageList.length > 0"
          class="attahment-item"
          :fileType="imageList[0].filePath + '101'"
          :file-id="imageList[0].filePath"
          :fileTitle="'身份证正面'"
          :readonly="true"
        >
        </AttachmentPreview>
        <AttachmentPreview
          v-if="imageList.length > 0"
          class="attahment-item"
          :fileType="imageList[1].filePath + '101'"
          :file-id="imageList[1].filePath"
          :fileTitle="'身份证反面'"
          :readonly="true"
        ></AttachmentPreview>
        <!-- <img v-for="(img,index) in imageList" :key="index" :src="getSrc(img.fileBase64)"/> -->
      </div>
    </a-modal>
  </div>
</template>

<script>
import { queryCommonDict } from '@/api/common'
import pdf from 'vue-pdf'
import { getEaDetail } from '@/api/eaManagement'
import { downloadBytes } from '@/api/sys-manage'
import { getDictTypeText } from '@/utils/util'
import AttachmentPreview from '@/components/AttachmentPreview'
export default {
  name: 'EaInfo',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    currentId: {
      type: String,
      default: '',
    },
    currentStatusLabel: {
      type: String,
      default: '',
    },
  },
  components: { pdf, AttachmentPreview },
  data() {
    return {
      eaInfo: {
        // 授权书编号
        eaNo: '',
        // 授权状态
        status: '',
        signTime: '',
        // 是否为电子授权书
        isEa: '',
        // 授权人姓名
        eaPersonName: '',
        // 授权人证件类型
        eaCertificateType: '',
        // 授权人证件号码
        eaCertificateNumber: '',
        // 申请人姓名
        appPersonName: '',
        // 申请人证件类型
        appCertificateType: '',
        // 申请人证件号码
        appCertificateNumber: '',
        appFamilyRelation: '',
        // 委托代理人姓名
        agentName: '',
        // 委托代理人证件类型
        agentCertificateType: '',
        // 委托代理人证件号码
        agentCertificateNumber: '',
        // 委托代理人与授权人关系
        agentFamilyRelation: '',
        // 有效期开始日期
        startDate: '',
        // 有效期截止日期
        endDate: '',
        // 上传人姓名
        uploadUnit: '',
        uploadSystem: '',
        uploader: '',
        uploaderIdcard: '',
        handlePerson: '',
        handlePersonCertificateType: '',
        handlePersonCertificateNumber: '',
        // 电子授权扩展信息
        fileList: [
          {
            // 授权文件分类
            fileCategory: '10',
            // 授权文件类型
            fileType: '21',
            // 授权文件格式
            eaFileFormatType: '1',
            // 授权文件扩展名
            fileExt: '',
            filePath: '',
          },
        ],
      },
      photoVisible: false,
      photoModalTitle: '',
      pdfUrl: '',
      numPages: 1,
      imageList: [],
      certificateType: [],
      householdRelation: [],
      getDictTypeText: getDictTypeText,
    }
  },
  async created() {
    this.certificateType = await queryCommonDict('DM_ZJLX')
    this.householdRelation = await queryCommonDict('householdRelation')
  },
  mounted() {
    console.log(this.currentStatusLabel)
  },
  methods: {
    returnTo() {
      this.$emit('closeInfoModal')
    },
    viewIdcard() {
      this.imageList = this.eaInfo.fileList.filter(
        (item) => item.fileCategory === '20'
      )
      if (this.imageList.length === 0) {
        this.$message.warning('暂无身份证信息', 1)
        return
      }
      this.photoModalTitle = '身份证信息'
      this.photoVisible = true
    },
    viewCertificate() {
      this.imageList = this.eaInfo.fileList.filter(
        (item) => item.fileCategory === '30'
      )
      if (this.imageList.length === 0) {
        this.$message.warning('暂无户口本信息')
        return
      }
      this.photoModalTitle = '户口本信息'
      this.photoVisible = true
    },
    getStatusStyle(status) {
      console.log('status')
      switch (status) {
        case '有效':
          return 'color:#13a713;border-color:#13a713;'
        case '过期':
          return 'color:red;border-color:red'
        case '退出':
          return 'color:orange;border-color:orange'
        case '撤销':
          return 'color:grey;border-color:grey'
        default:
          return 'color:green;border-color:green'
      }
    },
    getNumPages() {
      this.src = pdf.createLoadingTask({
        url: this.pdfUrl,
      })
      this.src.promise.then((pdf) => {
        this.numPages = pdf.numPages
      })
    },
    getSrc(path) {
      return 'data:image/jpeg;base64,' + path
    },
  },
  watch: {
    currentId: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log('currentId', newVal)
        getEaDetail(newVal).then((res) => {
          this.eaInfo = res.data
          this.eaInfo.fileList.forEach((item) => {
            downloadBytes(item.filePath).then((res) => {
              if (item.fileCategory === '10') {
                this.pdfUrl = 'data:application/pdf;base64,' + res.data
                // this.getNumPages()
              }
              // item.fileBase64 = res.data
            })
            // if (item.fileCategory === '10') {
            //   this.pdfUrl = item.filePath
            //   console.log('pdfUrl', this.pdfUrl)
            // }
          })
        })
      },
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/search.less';
@import '~@/styles/page.less';
.info-modal {
  // height: 100vh;
  position: absolute;
  // 修改弹窗样式
  > div {
    // height: 100%;
    .ant-modal-root {
      // /deep/.detail-modal{
      //   height: 97%;
      //   overflow: hidden;
      //   .ant-modal{
      //     height: calc(100% - 80px);
      //     padding-bottom:0;
      //     .ant-modal-content{
      //       height: 100%;
      /deep/.ant-modal-body {
        background: #f7f8fa;
        max-height: 820px;
        overflow: auto;
        // .ant-modal-body{
        //   height: 100%;
        //   overflow: auto;
        // }
        //         padding:0;
        //         height:100%;
        //         overflow:auto;
      }
      //     }
      //   }
      // }
      /deep/.pohto-modal {
        .images-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          min-height: 200px;
          // img{
          //   width:300px;
          //   height:300px;
          //   object-fit: contain;
          // }
        }
      }
    }
  }

  .info-container {
    background: #f7f8fa;
    padding: 20px 20px 20px 15px;
    font-size: @content-font-size;
    .attahment-item {
      // width: 33%;
      margin: 10px 0;

      ::v-deep {
        .file-input-wrapper {
          width: 180px;
        }

        .img-wrapper {
          width: 100px;
          height: 70px;
        }

        .img-preview {
          margin: 4px 0;
        }

        .img-title {
          height: 30px;
          line-height: 30px;
        }
      }
    }
    .return-icon {
      cursor: pointer;
      color: @base-theme-color;
      font-size: 17px;
      font-weight: bold;
    }
    .top-content {
      background: #fff;
      position: relative;
      height: 170px;
      margin-bottom: 20px;
      .info-item {
        margin: 20px 0 20px 20px;
        height: 40px;
        line-height: 40px;
        .info-span-main {
          color: @base-theme-color;
          font-size: 16px;
          font-weight: bold;
        }
        .info-span-3 {
          display: inline-block;
          width: 33%;
          font-weight: bold;
        }
        .info-span-4 {
          display: inline-block;
          width: 25%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .file-buttons {
        position: absolute;
        top: 13px;
        right: 20px;
      }
    }
    .center-content {
      display: flex;
      background: #f1f2f5;
      // min-height:600px;
      .card-container {
        width: 370px;
        // background: #fff;
        margin-right: 30px;
        .card {
          width: 100%;
          height: 240px;
          background: rgba(29, 99, 255, 10%);
          padding: 25px 45px 15px 45px;
          margin-bottom: 30px;
          .card-title {
            color: @base-theme-color;
            border-bottom: 1px solid @base-theme-color;
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .card-info {
            height: 36px;
            line-height: 36px;
            color: #4e5969;
          }
        }
        .card:last-child {
          margin-bottom: 0;
        }
      }
      .pdf {
        background: #fff;
        flex: 1;
        // max-height: 780px;
        // overflow: auto;
      }
    }
  }
}
</style>
