<script setup lang="ts">
import {useRoute} from "vue-router";
import {
  apiGetSummary,
  apiGetSummaryBinList,
  apiGetSummaryFailList,
  apiGetSummarySiteList, apiSummaryFailAllDistribution, apiSummaryFailDistribution
} from "@/api/tmm/summary";
import { onMounted, ref} from "vue";
import BasicTable from "@/components/Table/src/BasicTable.vue";
import {Progress, Row, Col} from 'ant-design-vue';
import * as echarts from 'echarts';


const route = useRoute()

const detail = ref()
const getSummary = async () => {
  const res = await apiGetSummary(route.query.id as string)
  if (res) {
    detail.value = res
    getSummarySiteList(res.testRecordId)
    getSummaryBinList(res.testRecordId)
    getSummaryFailList(res.testRecordId)
    summaryFailAllDistribution()
  }
}


const siteData = ref([])
const siteColumns = [
  {
    title: 'Site',
    dataIndex: 'siteId',
  },
  {
    title: 'Pass',
    dataIndex: 'passCnt',
  },
  {
    title: 'Fail',
    dataIndex: 'failCnt',
  },
  {
    title: 'Total',
    dataIndex: 'totalCnt',
  },
  {
    title: 'Yield',
    dataIndex: 'yield',
  },
]
const getSummarySiteList = async (id: string) => {
  const res = await apiGetSummarySiteList(id)
  if (res) {
    siteData.value = res
  }
}

const softData = ref([])
const hardData = ref([])
const softColumns = [
  {
    title: 'BIN',
    dataIndex: 'binId',
  },
  {
    title: 'P/F',
    dataIndex: 'binType',
  },
  {
    title: 'Group',
    dataIndex: 'binGroup',
  },
  {
    title: 'Total',
    dataIndex: 'cnt',
  },
  {
    title: 'Yield',
    dataIndex: 'yield',
  },
  {
    title: 'Site1',
    dataIndex: 'site1',
  },
  {
    title: 'Site2',
    dataIndex: 'site2',
  },
  {
    title: 'Site3',
    dataIndex: 'site3',
  },
  {
    title: 'Site4',
    dataIndex: 'site4',
  },
  {
    title: 'Site5',
    dataIndex: 'site5',
  },
  {
    title: 'Site6',
    dataIndex: 'site6',
  },
  {
    title: 'Site7',
    dataIndex: 'site7',
  },
  {
    title: 'Site8',
    dataIndex: 'site8',
  },
  {
    title: 'Site9',
    dataIndex: 'site9',
  },
]
const getSummaryBinList = async (id: string) => {
  const res = await apiGetSummaryBinList(id)
  if (res) {
    softData.value = res['HB'] || []
    hardData.value = res['SB'] || []
  }
}

const failData = ref([])
const failColumns = [
  {
    title: '排名',
    dataIndex: 'sortCode',
    width: 60,
  },
  {
    title: '项目名称',
    dataIndex: 'itemName',
  },
  {
    title: '数量',
    dataIndex: 'cnt',
  },
  {
    title: '占比',
    dataIndex: 'percent',
  },
]
const getSummaryFailList = async (id: string) => {
  const res = await apiGetSummaryFailList(id)
  if (res) {
    failData.value = res.sort((a, b) => a.sortCode - b.sortCode)
  }
}

const chartRef = ref()


const failSite = ref([])
const handleDetail = async (record: any) => {
  const res = await apiSummaryFailDistribution(record.testRecordId, record.itemName)
  if (res) {
    failSite.value = res
    const list:{name:string,value:number}[] = []
    for(let key in res){
      list.push({name:`site${key.toString()}(${res[key]})`,value:Number(res[key])})
    }
    const myChart = echarts.init(chartRef.value)
    myChart.setOption({
      name:'Site分布',
      series: [
        {
          type: 'treemap',
          label:{
            fontSize:32
          },
          data: list
        }
      ]
    });
  }
}

const summaryFailAllDistribution = async () => {
  const res = await apiSummaryFailAllDistribution(detail.value.testRecordId)
  if(res){
    const list:{name:string,value:number}[] = []
    for(let key in res){
      list.push({name:`site${key.toString()}(${res[key]})`,value:Number(res[key])})
    }
    const myChart = echarts.init(chartRef.value)
    myChart.setOption({
      name:'Site分布',
      series: [
        {
          type: 'treemap',
          label:{
            fontSize:32
          },
          data: list
        }
      ]
    });
  }
}

onMounted(() => {
  getSummary()
})
</script>

<template>
  <div class="xingyuv-layout-content full">
    <div class="summary-detail">
      <div class="summary-detail-header">
        <div class="summary-detail-header-title">
          {{ detail?.subLotId }}
        </div>
        <div class="summary-detail-header-content">
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              客户批号：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.custLot }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              测试数量：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.totalCnt }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              产品名称：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.productCode }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              站点：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.processStep }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              测试步骤：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.testStep }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              测试程序：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.testProgram }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              TesterID：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.testerCode }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              HandlerID：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.handlerCode }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              开始时间：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.startTime }}
            </div>
          </div>
          <div class="summary-detail-header-content-card">
            <div class="summary-detail-header-content-card-label">
              结束时间：
            </div>
            <div class="summary-detail-header-content-card-text">
              {{ detail?.endTime }}
            </div>
          </div>
        </div>
      </div>

      <div class="summary-detail-total">
        <div class="summary-detail-total-card">
          <div class="summary-detail-total-card-left" style=" background-color: #8080ff;">
            <img class="mx-auto h-30 xl:h-50" src="@/assets/svg/plus.svg">
          </div>
          <div class="summary-detail-total-card-right">
            <div class="summary-detail-total-card-right-number">
              {{ detail?.totalCnt }}
            </div>
            <div class="summary-detail-total-card-right-text">
              总数量
            </div>
          </div>
        </div>
        <div class="summary-detail-total-card">
          <div class="summary-detail-total-card-left" style=" background-color: #51d351;">
            <img class="mx-auto h-30 xl:h-50" src="@/assets/svg/star.svg">
          </div>
          <div class="summary-detail-total-card-right">
            <div class="summary-detail-total-card-right-number">
              {{ detail?.passCnt }}
            </div>
            <div class="summary-detail-total-card-right-text">
              Pass数量
            </div>
          </div>
        </div>
        <div class="summary-detail-total-card">
          <div class="summary-detail-total-card-left" style=" background-color: #ec808d;">
            <img class="mx-auto h-30 xl:h-50" src="@/assets/svg/node.svg">
          </div>
          <div class="summary-detail-total-card-right">
            <div class="summary-detail-total-card-right-number">
              {{ detail?.failCnt }}
            </div>
            <div class="summary-detail-total-card-right-text">
              Fail数量
            </div>
          </div>
        </div>
        <div class="summary-detail-total-card">
          <div class="summary-detail-total-card-left" style=" background-color: #70b604;">
            <img class="mx-auto h-30 xl:h-50" src="@/assets/svg/time_note.svg">
          </div>
          <div class="summary-detail-total-card-right">
            <div class="summary-detail-total-card-right-number">
              {{ detail?.yield || 0 }}%
            </div>
            <div class="summary-detail-total-card-right-text">
              良率
            </div>
          </div>
        </div>
        <div class="summary-detail-total-card">
          <div class="summary-detail-total-card-left"  style=" background-color: #95f204;">
            <img class="mx-auto h-30 xl:h-50" src="@/assets/svg/note_right.svg">
          </div>
          <div class="summary-detail-total-card-right">
            <div class="summary-detail-total-card-right-number">
              {{ detail?.highestSiteYield || 0 }}%
            </div>
            <div class="summary-detail-total-card-right-text">
              初测良率
            </div>
          </div>
        </div>
        <div class="summary-detail-total-card">
          <div class="summary-detail-total-card-left" style=" background-color: #95f204;">
            <img class="mx-auto h-30 xl:h-50" src="@/assets/svg/note_right.svg">
          </div>
          <div class="summary-detail-total-card-right">
            <div class="summary-detail-total-card-right-number">
              {{ detail?.lowestSiteYield || 0 }}%
            </div>
            <div class="summary-detail-total-card-right-text">
              Recover良率
            </div>
          </div>
        </div>

      </div>


      <Row :gutter="24" class="summary-detail-site">
        <Col :span="12">
          <div class="summary-detail-title">Site分析</div>
          <BasicTable
            :columns="siteColumns"
            :dataSource="siteData"
            :inset="false"
            :showIndexColumn="false"
            :pagination="false"
            :border="false"
            :scroll="{y:'100%'}"
          >
          </BasicTable>
        </Col>
        <Col :span="12">
          <div class="summary-detail-title">SiteGap</div>
          <div class="summary-detail-site-gap-box">
            <div class="summary-detail-site-gap-box-card">
              <div class="summary-detail-site-gap-box-card-left">
                <div class="summary-detail-site-gap-box-card-left-text">Max</div>
                <div class="summary-detail-site-gap-box-card-left-number">{{ detail?.highestSiteYield || 0 }}%</div>
              </div>
              <div class="summary-detail-site-gap-box-card-right">
                <Progress type="circle" :percent="detail?.highestSiteYield || 0" :width="70" size="small" strokeColor="#51d351"/>
              </div>
            </div>

            <div class="summary-detail-site-gap-box-card">
              <div class="summary-detail-site-gap-box-card-left">
                <div class="summary-detail-site-gap-box-card-left-text">SiteGap</div>
                <div class="summary-detail-site-gap-box-card-left-number">{{ detail?.siteGap || 0 }}%</div>
              </div>
              <div class="summary-detail-site-gap-box-card-right">
                <Progress type="circle" :percent="detail?.siteGap || 0" :width="70" size="small" strokeColor="#ff9900"/>
              </div>
            </div>

            <div class="summary-detail-site-gap-box-card">
              <div class="summary-detail-site-gap-box-card-left">
                <div class="summary-detail-site-gap-box-card-left-text">Min</div>
                <div class="summary-detail-site-gap-box-card-left-number">{{ detail?.lowestSiterield || 0 }}%</div>
              </div>
              <div class="summary-detail-site-gap-box-card-right">
                <Progress type="circle" :percent="detail?.lowestSiterield || 0" :width="70" size="small" strokeColor="#ec808d"/>
              </div>
            </div>

          </div>
        </Col>
      </Row>

      <div class="summary-detail-soft">
        <div class="summary-detail-title">SoftBin</div>
        <BasicTable
          :inset="false"
          :columns="softColumns"
          :dataSource="softData"
          :showIndexColumn="false"
          :pagination="false"
          :border="false"
          :scroll="{y:'100%'}"
        >
        </BasicTable>
      </div>

      <div class="summary-detail-hard">
        <div class="summary-detail-title">HardBin</div>
        <BasicTable
          :inset="false"
          :columns="softColumns"
          :dataSource="hardData"
          :showIndexColumn="false"
          :pagination="false"
          :border="false"
          :scroll="{y:'100%'}"
        >
        </BasicTable>
      </div>

      <Row :gutter="24" class="summary-detail-footer">
        <Col :span="12">
          <div class="summary-detail-title pointer" style="color: #0080ff" @click="summaryFailAllDistribution">Fail</div>
          <BasicTable
            :inset="false"
            :columns="failColumns"
            :dataSource="failData"
            :showIndexColumn="false"
            :pagination="false"
            :border="false"
            :scroll="{y:'500px'}"
          >
            <template #bodyCell="{ column, record, index }">
              <template v-if="column.key==='sortCode'">
                <div class="sort-code" :class="{'sort-code-active':index+1<4}">{{ index + 1 }}</div>
                <!--                <a-button type="link" block @click="handleDetail(record)">{{ record.itemName }}</a-button>-->
              </template>
              <template v-if="column.key==='itemName'">
                <a-button type="link" block @click="handleDetail(record)">{{
                    record.itemName
                  }}
                </a-button>
              </template>
            </template>
          </BasicTable>
        </Col>
        <Col :span="12">
          <div class="summary-detail-title">Site分布</div>
          <div class="summary-detail-footer-site" ref="chartRef" id="failSite">
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<style scoped lang="less">
.summary-detail {
  background-color: #fff;
  padding: 20px;

  &-title {
    font-size: 16px;
    font-weight: 700;
  }

  &-header {
    &-title {
      font-size: 18px;
      color: #02a7f0;
      font-weight: 700;
      height: 28px;
      line-height: 28px;
    }

    &-content {
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;

      &-card {
        display: flex;
        align-items: center;
        font-size: 14px;

        &-label {
          font-weight: 700;
          color: #7f7f7f;
        }

        &-text {

        }
      }
    }
  }

  &-total {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    &-card {
      display: flex;
      align-items: center;

      &-left{
        width: 60px;
        height: 60px;
        border-radius: 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        >img{
          width: 80%;
          height: 80%;
        }
      }

      &-right {
        &-number {
          font-weight: 700;
          color: #666;
          font-size: 28px;
        }

        &-text {
          font-weight: 400;
          color: #999;
          font-size: 14px;
        }
      }
    }
  }

  &-site {
    margin-top: 32px;
    display: flex;
    //align-items: center;
    justify-content: space-between;

    &-table {
      width: 755px;
    }

    &-gap {
      width: 548px;

      &-box {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-card {
          width: 300px;
          display: flex;
          border: 1px solid #000;
          padding: 8px 16px;
          margin-bottom: 16px;
          border-radius: 10px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.047058823529411764);

          &-left {
            width: 200px;
            &-text {
              font-size: 14px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.42745098039215684);
            }

            &-number {
              font-size: 30px;
              font-weight: 700;
              color: rgba(0, 0, 0, 0.8470588235294118);
            }
          }

          &-right {
            //margin-left: 80px;
            margin-top: 32px;
            //width: 70px;
            //height: 70px;
          }
        }
      }
    }
  }

  &-soft {
    margin-top: 32px;
    min-height: 300px;
  }

  &-hard {
    margin-top: 32px;
    min-height: 300px;
  }

  &-footer {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;

    &-fail {
      //width: 700px;
    }

    &-site {
      //width: 550px;
      height: 550px;
      margin-top: 6px;
      border: 1px solid rgb(233, 233, 233);
      //column-count: 4;
      //display: grid;
      //grid-template-columns: repeat(4,1fr);
      //grid-template-rows: masonry;
      display: flex;
      flex-wrap: wrap;
      //align-items: center;
      //justify-content: center;
      >div{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.sort-code {
  width: 23px;
  height: 23px;
  font-weight: 700;
  color: #fff;
  background-color: rgba(204, 204, 204, 1);
  border-radius: 5px;
}

.sort-code-active {
  background-color: rgba(255, 153, 0, 1);
}

.pointer{
  cursor: pointer;
}
</style>
