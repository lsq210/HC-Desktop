<template>
  <div class="chart-container">
    <div class="select-wrapper">
      <el-row type="flex" justify="end">
        <el-col :span="4" :offset="1">
          <el-select 
          v-model="citySelectedValue"
          filterable
          :disabled="isCitySelectDisable"
          @change="citySelectChanged"
           placeholder="选择城市">
            <el-option
            v-for="item in cityOptions"
            :key="item.id"
            :label="item.cityname"
            :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5" :offset="1">
            <el-date-picker
            v-model="dateSelectedValue"
            align="right"
            type="month"
            editable: false
            placeholder="选择时间"
            :disabled="isDatePickerDisable"/>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <mixChart id="mixChart" height='100%' width='100%'></mixChart>
    </div>
     <div class="chart-wrapper">
      <calendar id="calendar" height='100%' width='100%'></calendar>
    </div>
    <div class="chart-wrapper" style="height: 100vh;">
      <radar id="radar" height='100%' width='100%'></radar>
    </div>
    <div class="chart-wrapper">
      <rose id="rose" height='100%' width='100%'></rose>
    </div>
    <div class="chart-wrapper">
      <scatterColor2 
      id="scatterColor2"
      height='100%'
      width='100%'>
      </scatterColor2>
    </div>
  </div>
</template>

 
<script>
/* eslint-disable */
import mixChart from "@/components/Charts/singleCity/mixChart"
import radar from "@/components/Charts/singleCity/radar"
import calendar from "@/components/Charts/singleCity/calendar"
import scatterColor2 from "@/components/Charts/singleCity/scatterColor2"
import rose from "@/components/Charts/singleCity/rose"
import { getCitiesInfo } from "@/api/data/main"
import { getDataTimeSpan } from "@/api/data/main"

export default {
  name: "keyboardChart",
  data() {
    return {
      cityOptions: [],
      citySelectedValue: "",
      dateSelectedValue: "2017-03"
    };
  },
  mounted() {
    this.initCityData()
  },
  computed: {
    isCitySelectDisable: function() {
      return this.cityOptions.length > 0 ? false : true
    },
    isDatePickerDisable: function() {
      return this.cityOptions.length > 0 ? false : true
    }
  },
  methods: {
    initCityData() {
      getCitiesInfo({
        format: "json"
      }).then(response => {
        this.cityOptions = response.data
        // console.log(JSON.stringify(response.data))
      });
    },
    citySelectChanged(newValue) {
      getDataTimeSpan({
        format: "json",
        city: newValue
      }).then(response => {
        let minYear = response.data.min.year
        let minmonth = response.data.min.month
        let maxYear = response.data.max.year
        let maxMonth = response.data.max.month


      })
      console.log(JSON.stringify(newValue))
    }
  },
  components: { mixChart, radar, calendar, scatterColor2, rose }
};
</script>
 
<style lang="scss" scoped>
.chart-container {
  padding: 20px 32px 25px 32px;
  background-color: rgb(240, 242, 245);
  .select-wrapper {
    margin-bottom: 20px;
    margin-right: 32px;
    width: 100%;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px;
    margin-bottom: 32px;
    width: 100%;
    height: 85vh;
  }
}
</style>
