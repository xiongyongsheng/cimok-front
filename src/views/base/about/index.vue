<script lang="ts" setup>
import { h } from 'vue'
import { Tag } from 'ant-design-vue'
import { PageWrapper } from '@/components/Page'
import type { DescItem } from '@/components/Description'
import { Description, useDescription } from '@/components/Description'
import { DOC_URL, GITHUB_URL, SITE_URL } from '@/settings/siteSetting'

const { pkg, lastBuildTime } = __APP_INFO__



</script>

<template>
  <PageWrapper title="关于">
    <template #headerContent>
      <div class="flex items-center justify-between">
        <span class="flex-1">
          CIM系统（计算机集成制造系统，Computer Integrated Manufacturing）运用于半导体、光伏、新能源汽车等多个行业，是先进制造工厂里的一系列自动化信息管理系统的总和。半导体领域的CIM系统涵盖了从设备监控、生产调度到工艺控制和产品追溯等多个关键环节，赋能整个芯片制造周期。
        </span>
      </div>
    </template>
  </PageWrapper>
</template>
