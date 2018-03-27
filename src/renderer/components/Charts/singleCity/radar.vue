<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import resize from "../mixins/resize";
import { getCityPollutantsByYear } from "../../../api/data/main";

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

      getCityPollutantsByYear({
        format: "json",
        city: 2,
        year: 2017
      })
        .then(response => {
          // var dataBJave = [[168, 128, 172, 1.49, 97, 56, 24]];
          var maxData = [];
          maxData.push(response.data[2]);
          var minData = [];
          minData.push(response.data[0]);
          var argData = [];
          argData.push(response.data[1]);

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
              data: ["最大值", "最小值", "平均值"],
              itemGap: 20,
              textStyle: {
                color: "#fff",
                fontSize: 14
              },
              selectedMode: "single"
            },
            radar: {
              indicator: [
                { name: "AQI", max: 400 },
                { name: "PM2.5", max: 350 },
                { name: "PM10", max: 500 },
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
                show: true
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(238, 197, 102, 0.5)"
                }
              }
            },
            series: [
              {
                name: "最大值",
                type: "radar",
                lineStyle: lineStyle,
                data: maxData,
                symbol: "none",
                itemStyle: {
                  normal: {
                    color: "#F9713C"
                  }
                },
                areaStyle: {
                  normal: {
                    opacity: 0.25
                  }
                }
              },
              {
                name: "最小值",
                type: "radar",
                lineStyle: lineStyle,
                data: minData,
                symbol: "none",
                itemStyle: {
                  normal: {
                    color: "#B3E4A1"
                  }
                },
                areaStyle: {
                  normal: {
                    opacity: 0.9
                  }
                }
              },
              {
                name: "平均值",
                type: "radar",
                lineStyle: lineStyle,
                data: argData,
                symbol: "none",
                itemStyle: {
                  normal: {
                    color: "rgb(238, 197, 102)"
                  }
                },
                areaStyle: {
                  normal: {
                    opacity: 0.5
                  }
                }
              }
            ]
          };
          this.chart.setOption(option, true);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
