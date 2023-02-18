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

            <EchartsTeamSpecial></EchartsTeamSpecial>
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
        <div class="content-box">
          <!-- https://echarts.apache.org/examples/zh/editor.html?c=pie-borderRadius -->
        </div>
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

import EchartsTeamSpecial from "./components/EchartsTeamSpecial.vue"

const store = useHomeStore()
const storeTitle = computed(() => store.getFuncTitle)
// keep proxy
const { count } = storeToRefs(store)
const newCount = computed(() => `count: ${count.value}`)

const stateAdd = () => {
  console.log(666)

  store.increment()
}

onMounted(() => {})
</script>

<style scoped lang="less">
@import "@/styles/style.less";
</style>
 