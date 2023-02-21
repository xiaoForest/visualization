<template>
  <div id="echartsEvent"></div>
  <div class="tc_mod" :class="{ show: popupShow == true }">
    <div class="bg" ref="divRef"></div>
    <div class="tc-information">
      <div class="title">{{ tcTitle }}</div>

      <div class="tableTitle" :class="{ change: tcList.length > 10 }">
        <table class="tableStyle one">
          <thead>
            <tr>
              <th :width="item.width" v-for="(item, index) in tcTabs">
                {{ item.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ tcList[0].id }}</td>
              <td>{{ tcList[0].title }}</td>
              <td>{{ tcList[0].name }}</td>
              <td>{{ tcList[0].time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tableScroll" style="height: 400px">
        <table class="tableStyle two">
          <thead>
            <tr>
              <th :width="item.width" v-for="(item, index) in tcTabs">
                {{ item.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tcList">
              <td>{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="icon-close" @click="popupShow = false">
      <svg class="icon-svg"><use xlink:href="#svg-close"></use></svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts"
import { Strong } from "mdast"
import { defineComponent, onMounted, inject, ref } from "vue"
import { useEventListener } from "vue-hooks-plus"
const props = defineProps({
  TheList: {
    type: Array,
    default: []
  }
})

let tcTabs = ref([
  {
    name: "序号",
    width: "10%"
  },
  {
    name: "标题",
    width: ""
  },
  {
    name: "处理人",
    width: ""
  },
  {
    name: "处理时间",
    width: ""
  }
])
let tcList = ref([
  {
    id: 1,
    title: "坏了",
    name: "张三丰",
    time: "2023-05-05 12:32"
  }
])
onMounted(() => {
  change()
})

// let echarts = inject<any>("echarts") // 主要
// 基本柱形图
const change = () => {
  var chartDom: any = document.getElementById("echartsEvent")
  const chartBox = echarts.init(chartDom, "dark", {
    renderer: "svg"
  }) // 主要

  let arr = props.TheList
  let data = ["score", "amount", "product"]
  let colorStyle: number[] = [22.1, 33.2, 44.3]
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
      height: "1",
      min: 210,
      max: 10,
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
        popupShow.value = true
        tcMainId.value = params.dataIndex
        tcTitle.value = params.data[2]
      }
    }
  }
  chartBox.setOption(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    chartBox.resize()
  })
}

let popupShow = ref<boolean>(false)
let tcMainId = ref<string>("")
let tcTitle = ref<string>("")
const divRef = ref()
useEventListener(
  "click",
  () => {
    popupShow.value = false
  },
  { target: divRef }
)
</script>

<style scoped lang="less">
#echartsEvent {
  min-width: 100%;
  min-height: 300px;
}
</style>
