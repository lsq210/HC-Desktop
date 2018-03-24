<template>
  <div>
    <div class='chart-container'>
      <!-- <div class="chart-wrapper">
        <linec id="line" height='100%' width='100%'></linec>
      </div> -->
      <div class="chart-wrapper">
        <scatterColor id="scatterColor" height='100%' width='100%'></scatterColor>
      </div>
       <!-- <div class="chart-wrapper">
        <scatterTime id="scatterTime" height='100%' width='100%'></scatterTime>
      </div> -->
       <div class="chart-wrapper">
        <parallel id="parallel" height='100%' width='100%'></parallel>
      </div>
       <div class="chart-wrapper">
        <radarMulti id="radarMulti" height='100%' width='100%'></radarMulti>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import Linec from "@/components/Charts/lineMarker";
//import Key from "@/components/Charts/keyboard";
import scatterColor from "@/components/Charts/multiCity/scatterColor";
// import scatterTime from "@/components/Charts/multiCity/scatterTime";
import parallel from "@/components/Charts/multiCity/parallel";
import radarMulti from "@/components/Charts/multiCity/radarMulti"; 

export default {
  name: "lineChart",
  components: { scatterColor,parallel,radarMulti }
};
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

