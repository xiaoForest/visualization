<template>
  <div id="echartsRepairs"></div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts"
import { Strong } from "mdast"
import { defineComponent, onMounted, inject } from "vue"
const props = defineProps({
  TheList: {
    type: Array,
    default: []
  }
})
onMounted(() => {
  change()
})

// let echarts = inject<any>("echarts") // 主要
// 基本柱形图
const change = () => {
  var chartDom: any = document.getElementById("echartsRepairs")
  const chartBox = echarts.init(chartDom, "dark", {
    renderer: "svg"
  }) // 主要

  const option = {
    backgroundColor: "#070b40", //背景色
    tooltip: {
      trigger: "item"
    },
    legend: {
      top: "5%",
      left: "center"
    },
    series: [
      {
        name: "统计信息",
        type: "pie",
        radius: ["30%", "50%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 2,
          borderColor: "#070b40",
          borderWidth: 0
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12
            // fontWeight: "bold"
          }
        },
        labelLine: {
          show: true
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c} }",
          minMargin: 2,
          edgeDistance: 60,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 10,
              color: "#fff"
            }
          }
        },
        data: props.TheList
      }
    ]
  }
  chartBox.setOption(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    chartBox.resize()
  })
}
</script>

<style scoped lang="less">
#echartsRepairs {
  min-width: 100%;
  min-height: 500px;
}
</style>
