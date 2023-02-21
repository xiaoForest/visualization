<template>
  <div class="grid-information">
    <div class="tableTitle" :class="{ change: tcList.length > 10 }">
      <table class="tableStyle one">
        <thead>
          <tr>
            <th :width="item.width" v-for="(item, index) in TheTabs">
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ TheList[0].id }}</td>
            <td>{{ TheList[0].name }}</td>
            <td>{{ TheList[0].grid }}</td>
            <td>{{ TheList[0].rank }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableScroll" style="height: 400px">
      <table class="tableStyle two">
        <thead>
          <tr>
            <th :width="item.width" v-for="(item, index) in TheTabs">
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in TheList">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.grid }}</td>
            <td>{{ item.rank }}</td>
            <div class="info">
              <div>
                <h4>{{ item.name }}</h4>
                <span>网格：{{ item.grid }}</span>
                <span>级别：{{ item.rank }}</span>
                <span>电话：{{ item.phone }}</span>
                <span>邮箱：{{ item.email }}</span>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Strong } from "mdast"
import { defineComponent, onMounted, inject, computed, ref } from "vue"
const props = defineProps({
  TheList: {
    type: Object,
    default: []
  }
})

let TheTabs = ref([
  {
    name: "序号",
    width: "15%"
  },
  {
    name: "姓名",
    width: "35%"
  },
  {
    name: "网格",
    width: "25%"
  },
  {
    name: "级别",
    width: "25%"
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

onMounted(() => {})
</script>

<style scoped lang="less">
.grid-information {
  padding: 30px 0;
  
}
</style>
