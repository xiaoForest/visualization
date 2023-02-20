<template>
  <div id="echartsSpecial"></div>
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
  var chartDom: any = document.getElementById("echartsSpecial")
  const chartBox = echarts.init(chartDom, "dark", {
    renderer: "svg"
  }) // 主要

  let arr = props.TheList
  let data = ["score", "amount", "product"]
  let colorStyle: number[] = [22.1, 33.2, 44.3, 55.4, 66.5, 77.6]
  arr.map((e: any, idx) => e.unshift(colorStyle[idx]))
  let dataSource = [data, ...arr]
  const option = {
    backgroundColor: "#070b40", //背景色
    dataset: {
      source: dataSource
    },
    grid: { containLabel: true },
    xAxis: { name: "" },
    yAxis: { type: "category" },
    visualMap: {
      show: false,
      orient: "horizontal",
      left: "center",
      height: "10",
      min: 10,
      max: 100,
      // Map the score column to color
      dimension: 0
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
#echartsSpecial {
  min-width: 100%;
  min-height: 500px;
}
</style>
