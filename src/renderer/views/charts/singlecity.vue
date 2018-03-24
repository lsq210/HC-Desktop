<template>
  <div class="chart-container">
    <div class="chart-wrapper">
      <mixChart id="mixChart" height='100%' width='100%'></mixChart>
    </div>
     <div class="chart-wrapper">
      <calendar id="calendar" height='100%' width='100%'></calendar>
    </div>
    <div class="chart-wrapper">
      <radar id="radar" height='100%' width='100%'></radar>
    </div>
    <div class="chart-wrapper">
      <echartstest id="test2" height='100%' width='100%'></echartstest>
    </div>
    <div class="chart-wrapper">
      <scatterColor2 id="scatterColor2" height='100%' width='100%'></scatterColor2>
    </div>
  </div>
</template>

 
<script>
/* eslint-disable */
import mixChart from '@/components/Charts/mixChart' 
import radar from '@/components/Charts/singleCity/radar'
import calendar from '@/components/Charts/singleCity/calendar'
import scatterColor2 from '@/components/Charts/singleCity/scatterColor2'
import echartstest from '@/components/Charts/echartstest'
 
export default { 
  name: 'keyboardChart', 
  components: { mixChart,radar,calendar,scatterColor2,echartstest } 
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
