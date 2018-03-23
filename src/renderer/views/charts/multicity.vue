<template>
  <div>
    <div class='chart-container'>
      <div class="chart-wrapper">
      <linec id="line" height='100%' width='100%'></linec>
      </div>
      <div class="chart-wrapper">
      <key id="key" height='100%' width='100%'></key>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Linec from "@/components/Charts/lineMarker";
import Key from "@/components/Charts/keyboard";

export default {
  name: "lineChart",
  components: { Linec, Key }
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

