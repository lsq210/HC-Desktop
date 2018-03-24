<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import resize from "../mixins/resize";
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

      var dataBJave = [[168, 128, 172, 1.49, 97, 56, 24]];

      var lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      };

      var option = {
        backgroundColor: "#344b58",
        title: {
          text: "AQI - 雷达图",
          left: "center",
          textStyle: {
            color: "#eee"
          }
        },
        legend: {
          bottom: 5,
          data: ["武汉"],
          itemGap: 20,
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          selectedMode: "single"
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
          indicator: [
            { name: "AQI", max: 300 },
            { name: "PM2.5", max: 250 },
            { name: "PM10", max: 300 },
            { name: "CO", max: 5 },
            { name: "NO2", max: 200 },
            { name: "SO2", max: 100 }
          ],
          shape: "circle",
          splitNumber: 5,
          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(238, 197, 102, 0.1)",
                "rgba(238, 197, 102, 0.2)",
                "rgba(238, 197, 102, 0.4)",
                "rgba(238, 197, 102, 0.6)",
                "rgba(238, 197, 102, 0.8)",
                "rgba(238, 197, 102, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "武汉",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJave,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#B3E4A1"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.25
              }
            }
          }
        ]
      };

      this.chart.setOption(option, true);
    }
  }
};
</script>
