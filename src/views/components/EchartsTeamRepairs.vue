<template>
  <div id="echartsRepairs"></div>
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
              <td>{{ tcList[0].describe }}</td>
              <td>{{ tcList[0].name }}</td>
              <td>{{ tcList[0].type }}</td>
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
              <td>{{ item.describe }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
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
import { defineComponent, onMounted, inject } from "vue"
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
    width: "30"
  },
  {
    name: "描述",
    width: "60%"
  },
  {
    name: "上报人",
    width: ""
  },
  {
    name: "处理状态",
    width: ""
  }
])

let tcList = ref([
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "待处理"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "处理中"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "已处理"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "待处理"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "处理中"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "已处理"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "待处理"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "处理中"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "已处理"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "已处理"
  },
  {
    id: 1,
    describe: "三单元门口了路灯损坏 丁老头",
    name: "张三峰",
    type: "已处理"
  }
])
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
            fontSize: 18,
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: true
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c} }",
          minMargin: 10,
          edgeDistance: 100,
          lineHeight: 25,
          rich: {
            time: {
              fontSize: 14,
              color: "#fff"
            }
          }
        },
        data: props.TheList
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
        tcTitle.value = params.data.name
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
#echartsRepairs {
  padding-top: 30px;
  min-width: 100%;
  height: 300px;
}


</style>
