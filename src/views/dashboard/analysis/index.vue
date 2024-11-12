<script lang="ts" setup>
import { ref } from 'vue'
// import GrowCard from './components/GrowCard.vue'
// import SiteAnalysis from './components/SiteAnalysis.vue'
// import VisitSource from './components/VisitSource.vue'
// import VisitRadar from './components/VisitRadar.vue'
// import SalesProductPie from './components/SalesProductPie.vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 500)
</script>

<template>
  <div class="p-4">
    <GrowCard :loading="loading" class="enter-y" />
    <SiteAnalysis class="enter-y !my-4" :loading="loading" />
    <div class="enter-y md:flex">
    </div>
  </div>
</template>
