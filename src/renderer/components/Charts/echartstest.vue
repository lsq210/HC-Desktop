<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      var option = {
        backgroundColor: '#404a59',
        title: {
          text: "武汉2017年空气质量等级比例图",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: ["rose1", "rose2", "rose3", "rose4", "rose5"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 110],
            center: ["25%", "50%"],
            roseType: "radius",
            // label: {
            //     normal: {
            //         show: false
            //     },
            //     emphasis: {
            //         show: true
            //     }
            // },
            // lableLine: {
            //     normal: {
            //         show: false
            //     },
            //     emphasis: {
            //         show: true
            //     }
            // },
            data: [
              { value: 75, name: "优的天数" },
              { value: 180, name: "良的天数" },
              { value: 30, name: "轻度污染的天数" },
              { value: 45, name: "中度污染的天数" },
              { value: 35, name: "重度污染的天数" }
            ]
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["75%", "50%"],
            roseType: "area",
            data: [
              { value: 75, name: "优的天数" },
              { value: 180, name: "良的天数" },
              { value: 30, name: "轻度污染的天数" },
              { value: 45, name: "中度污染的天数" },
              { value: 35, name: "重度污染的天数" }
            ]
          }
        ]
      };

      this.chart.setOption(option, true);
    }
  }
};
</script>
