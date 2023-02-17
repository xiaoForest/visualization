<template>
  <div class="home">
    <div class="boxes">
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>住户信息</h4>
              <span>Household information</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box">
          <div class="team-information">
            <ul>
              <li>
                <span class="text">设备状态</span>
                <span class="hint">正常</span>
              </li>
              <li>
                <span class="text">设备状态</span>
                <span class="hint">正常</span>
              </li>
              <li>
                <span class="text">设备状态</span>
                <span class="hint fault">故障</span>
              </li>
              <li>
                <span class="text">设备状态</span>
                <span class="hint fault">故障</span>
              </li>
              <li>
                <span class="text">房屋数量</span>
                <span class="hint">54884</span>
              </li>
              <li>
                <span class="text">居民数量</span>
                <span class="hint">54884</span>
              </li>
              <li>
                <span class="text">房主数量</span>
                <span class="hint">54884</span>
              </li>
              <li>
                <span class="text">租户数量</span>
                <span class="hint">54884</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>特殊人群</h4>
              <span>special crowd</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box">
          <div class="team-special">
            <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
            <div id="main"></div>
          </div>
        </div>
      </div>
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>社区保修</h4>
              <span>Community warranty</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box"></div>
      </div>

      <!-- tab 社区公告 政府通知 用户信息 -->
    </div>
    <div class="boxes">
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>视频流</h4>
              <span>video streaming</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box"></div>
      </div>
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>社区生活服务</h4>
              <span>Community living service</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box"></div>
      </div>
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>党建板块</h4>
              <span>Party building plate</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box"></div>
      </div>
    </div>
    <div class="boxes">
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>网格员数据</h4>
              <span>Grid member data</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box"></div>
      </div>
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { useHomeStore } from "@/store/modules/home"
import { storeToRefs } from "pinia"
import { getName } from "./services"

import { defineComponent, onMounted, inject } from "vue" // 主要

/**
 * global
 */
// console.log(`${import.meta.env.VITE_APP_ENV}`)

//  mock request
// auto import vue-hooks-plus
// const { data } = useRequest(() => getName(123))
// watchEffect(() => {
//   console.log(data?.value)
// })

/**
 * pinia store
 */
const store = useHomeStore()
const storeTitle = computed(() => store.getFuncTitle)
// keep proxy
const { count } = storeToRefs(store)
const newCount = computed(() => `count: ${count.value}`)

const stateAdd = () => {
  console.log(666)

  store.increment()
}

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
@import "@/styles/style.less";
#main {
  min-width: 100%;
  min-height: 500px;
}
</style>
 