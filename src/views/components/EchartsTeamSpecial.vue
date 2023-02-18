<template>
  <div id="main"></div>
</template>
  
 
<script lang="ts" setup>
import { defineComponent, onMounted, inject } from "vue"

onMounted(() => {
  change()
})

let echarts = inject<any>("echarts") // 主要
// 基本柱形图
const change = () => {
  var chartDom = document.getElementById("main")
  const chartBox = echarts.init(chartDom, "dark", {
    renderer: "svg"
  }) // 主要

  const option = {
    backgroundColor: '#070b40',//背景色
    dataset: {
      source: [
        ["score", "amount", "product"],
        [89.3, 58212, "党员"],
        [57.1, 78254, "军人"],
        [74.4, 41032, "低保户"],
        [50.1, 12755, "孤寡老人"],
        [89.7, 20145, "残疾人"],
        [89.7, 20145, "烈属"]
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: "" },
    yAxis: { type: "category" },
    visualMap: {
      orient: "horizontal",
      left: "center",
      height: "10",
      min: 10,
      max: 100,
      text: ["High Score", "Low Score"],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ["#65B581", "#FFCE34", "#FD665F"]
      }
    },
    series: [
      {
        realtimeSort: true,
        name: "X",
        type: "bar",
        encode: {
          // Map the "amount" column to X axis.
          x: "amount",
          // Map the "product" column to Y axis
          y: "product"
        },
        label: {
          show: true,
          position: "right",
          valueAnimation: true
        }
      }
    ],
    tooltip: {
      // 鼠标是否可以进入悬浮框
      enterable: true,
      // 触发方式 mousemove, click, none, mousemove|click
      triggerOn: "click",
      // item 图形触发， axis 坐标轴触发， none 不触发
      trigger: "item",
      // 浮层隐藏的延迟
      hideDelay: 800,
      // 背景色
      backgroundColor: "rgba(0,0,0,0)",
      formatter: function (params: any) {
        console.log("弹窗")
        return console.log(params)
      }
    }
  }
  chartBox.setOption(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    chartBox.resize()
  })
}
</script>

<style scoped lang="less">
#main {
  padding-bottom: 20px;
  min-width: 100%;
  min-height: 500px;
}
</style>
 