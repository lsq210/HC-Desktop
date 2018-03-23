<template>
  <div class="chart-container">
    <div class="chart-wrapper">
      <key id="test1" height='100%' width='100%'></key>
    </div>
    <div class="chart-wrapper">
      <echartstest id="test2" height='100%' width='100%'></echartstest>
    </div>
  </div>
</template>

<script>
import key from '@/components/Charts/keyboard'
import echartstest from '@/components/Charts/echartstest'

export default {
  name: 'keyboardChart',
  components: { key, echartstest }
}
</script>

<style lang="scss" scoped>
.chart-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px;
    margin-bottom: 32px;
    width: 100%;
    height: 85vh;
  }
}
</style>
