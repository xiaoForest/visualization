<template>
  <div class="home">
    <!-- 社区管理可视化 -->
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
            <!-- 特殊人群 -->
            <EchartsTeamSpecial :TheList="TheSpecialList"></EchartsTeamSpecial>
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
          <div class="team-repairs">
            <EchartsTeamRepairs :TheList="TheRepairsList"></EchartsTeamRepairs>
          </div>
        </div>
      </div>

      <!-- tab 社区公告 政府通知 用户信息 -->
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>公告通知</h4>
              <span>Public notice</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box">
          <div class="team-public">
            <tabPublicList :TheList="ThePublicList"></tabPublicList>
          </div>
        </div>
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
        <div class="content-box">
          <tabServeList :TheList="TheServeList"></tabServeList>
        </div>
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
              <h4>网格员信息</h4>
              <span>Grid operator information</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box">
          <GridInformation :TheList="TheInformationList"></GridInformation>
        </div>
      </div>
      <div class="truck-area">
        <div class="top-title">
          <div class="case">
            <i class="icon-square">
              <img src="@/assets/icon-box1.png" alt="" />
            </i>
            <div class="text">
              <h4>上报事件统计</h4>
              <span>Report event statistics</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box">
          <div class="team-event">
            <!-- 上报事件统计 -->
            <EchartsTeamEvent :TheList="TheEventList"></EchartsTeamEvent>
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
              <h4>意见建议</h4>
              <span>opinions and suggestions</span>
            </div>
          </div>
          <div class="case">
            <i class="icon-diamond"></i>
          </div>
        </div>
        <div class="line"></div>
        <div class="content-box">
          <GridOpinions :TheList="TheOpinionsList"></GridOpinions>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/store/modules/home"
import { storeToRefs } from "pinia"
import { getName } from "./services"

import { defineComponent, onMounted, inject, ref } from "vue" // 主要
import EchartsTeamSpecial from "./components/EchartsTeamSpecial.vue"
import EchartsTeamRepairs from "./components/EchartsTeamRepairs.vue"
import tabPublicList from "./components/tabPublicList.vue"
import tabServeList from "./components/tabServeList.vue"
import GridInformation from "./components/gridInformation.vue"
import EchartsTeamEvent from "./components/EchartsTeamEvent.vue"
import GridOpinions from "./components/GridOpinions.vue"

const store = useHomeStore()
const storeTitle = computed(() => store.getFuncTitle)
// keep proxy
const { count } = storeToRefs(store)
const newCount = computed(() => `count: ${count.value}`)

const stateAdd = () => {
  console.log(666)
  store.increment()
}

// 特殊人群 统计数据
let TheSpecialList = ref([
  [58212, "党员"],
  [78254, "军人"],
  [41032, "低保户"],
  [12755, "孤寡老人"],
  [20145, "残疾人"],
  [20145, "烈属"]
])

// 社区保修 统计数据
let TheRepairsList = ref([
  { value: 1048, name: "社区报修" },
  { value: 735, name: "已处理" },
  { value: 580, name: "未处理" }
])

// 公告通知 列表数据
let ThePublicList = ref([
  {
    id: 1,
    name: "社区公告",
    list: [
      {
        id: 1,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 2,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 3,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 4,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 5,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 6,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 7,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 8,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 9,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 10,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      }
    ]
  },
  {
    id: 2,
    name: "政府通知",
    list: [
      {
        id: 1,
        text: "政府通知各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 2,
        text: "政府通知各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 3,
        text: "政府通知各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 4,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 5,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 6,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 7,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 8,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 9,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 10,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      }
    ]
  },
  {
    id: 3,
    name: "用户消息",
    list: [
      {
        id: 1,
        text: "用户消息各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 2,
        text: "用户消息政府通知用户消息各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 3,
        text: "用户消息各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 4,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 5,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 6,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 7,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 8,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 9,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 10,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      }
    ]
  }
])

// 社区生活服务 列表数据
let TheServeList = ref([
  {
    id: 1,
    name: "社区活动",
    list: [
      {
        id: 1,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 2,
        text: "各单元住户请于2-18上午",
        value: 9999,
        time: "2023-05-06 14:16"
      }
    ]
  },
  {
    id: 2,
    name: "家政服务",
    list: [
      {
        id: 1,
        text: "各单元住户请于",
        value: 9999,
        time: "2023-05-06 14:16"
      },
      {
        id: 2,
        text: "各单元住户请于",
        value: 9999,
        time: "2023-05-06 14:16"
      }
    ]
  },
  {
    id: 3,
    name: "便民电话",
    list: [
      {
        id: 1,
        phone: "16601174399",
        text: "专业扫地二十年"
      },
      {
        id: 2,
        phone: "16601174399",
        text: "专业扫地三十年"
      }
    ]
  }
])

// 网格员信息 列表数据
let TheInformationList = ref([
  {
    id: 1,
    name: "张三峰",
    grid: "网格A1",
    rank: "二级网格员",
    phone: "18500069812",
    email: "shan83@gmail.com"
  },
  {
    id: 1,
    name: "张三峰",
    grid: "网格A2",
    rank: "二级网格员",
    phone: "18500069812",
    email: "shan83@gmail.com"
  },
  {
    id: 1,
    name: "张三峰",
    grid: "网格A3",
    rank: "二级网格员",
    phone: "18500069812",
    email: "shan83@gmail.com"
  }
])

// 上报事件统计 统计数据
let TheEventList = ref([
  [980, "已处理"],
  [50, "处理中"],
  [1500, "未处理"]
])

// 意见建议 列表数据
let TheOpinionsList = ref([
  {
    id: 1,
    title: "过道美化",
    name: "丁大哥",
    time: "2023-05-25 12:43",
    type: "未处理"
  },
  {
    id: 1,
    title: "过道美化",
    name: "丁大哥",
    time: "2023-05-25 12:43",
    type: "未处理"
  },
  {
    id: 1,
    title: "过道美化",
    name: "丁大哥",
    time: "2023-05-25 12:43",
    type: "未处理"
  }
])

onMounted(() => {})
</script>

<style scoped lang="less">
@import "@/styles/style.less";
</style>
