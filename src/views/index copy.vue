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
            <div id="maychar"></div>
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
  changetype()
})
let echarts = inject("echarts") // 主要
// 基本柱形图
const change = () => {
  const chartBox = echarts.init(document.getElementById("main")) // 主要
  const option = {
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [23, 24, 18, 25, 27, 28, 25]
      }
    ]
  }
  chartBox.setOption(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    chartBox.resize()
  })
}
// 折线图
const changetype = () => {
  // 获取组件实例
  const machart = echarts.init(document.getElementById("maychar"))
  // 设置配置项
  const option = {
    xAxis: {
      data: ["A", "B", "C", "D", "E"]
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: "line",
        stack: "x"
      },
      {
        data: [5, 4, 3, 5, 10],
        type: "line",
        stack: "x"
      }
    ]
  }
  // 复制
  machart.setOption(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    machart.resize()
  })
}
</script>

<style scoped lang="less">
@import "@/styles/style.less";
#main {
  min-width: 31.25rem;
  min-height: 31.25rem;
  // max-height: 500px;
}

#maychar {
  max-height: 500px;
  // max-height: 400px;
  height: 500px;
}
</style>
 