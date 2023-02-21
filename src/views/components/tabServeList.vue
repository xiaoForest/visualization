<template>
  <div class="serve-box">
    <div class="serve-nav">
      <div
        class="item"
        :class="{ on: tabNumber == index }"
        v-for="(item, index) in TheList"
        :key="index"
        @click="onTabFun(index)"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="tableTitle change">
      <table class="tableStyle one">
        <thead>
          <tr v-if="tabNumber == 2">
            <th :width="item.width" v-for="(item, index) in TheTabs1">
              {{ item.name }}
            </th>
          </tr>
          <tr v-else>
            <th :width="item.width" v-for="(item, index) in TheTabs2">
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ TheList[0].id }}</td>
            <td>{{ TheList[0].text }}</td>
            <td>{{ TheList[0].time }}</td>
            <td>{{ TheList[0].value }}人</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableScroll cp" style="height: 400px">
      <table class="tableStyle two">
        <thead>
          <tr v-if="tabNumber == 2">
            <th :width="item.width" v-for="(item, index) in TheTabs1">
              {{ item.name }}
            </th>
          </tr>
          <tr v-else>
            <th :width="item.width" v-for="(item, index) in TheTabs2">
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody v-show="tabNumber == 0">
          <tr
            v-for="(item, index) in TheList[0].list"
            @click="onTcMod(item, index)"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ item.text }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.value }}人</td>
          </tr>
        </tbody>
        <tbody v-show="tabNumber == 1">
          <tr
            v-for="(item, index) in TheList[1].list"
            @click="onTcMod(item, index)"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ item.text }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.value }}人</td>
          </tr>
        </tbody>
        <tbody v-show="tabNumber == 2">
          <tr
            v-for="(item, index) in TheList[2].list"
            @click="onTcMod(item, index)"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.text }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="tc_mod" :class="{ show: popupShow == true }">
    <div class="bg" ref="divRef"></div>
    <div class="tc-information">
      <div class="title">{{ tcTitle }}</div>
      <div class="text" v-html="tcText"></div>
    </div>
    <div class="icon-close" @click="popupShow = false">
      <svg class="icon-svg"><use xlink:href="#svg-close"></use></svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Strong } from "mdast"
import { defineComponent, onMounted, inject, computed, ref } from "vue"
import { useEventListener } from "vue-hooks-plus"
const props = defineProps({
  TheList: {
    type: Object,
    default: []
  }
})
let tabNum = ref<Number>(0)
let tabMainId = ref<Number>(0)
const tabNumber = computed<any>(() => {
  return tabNum.value
})
const onTabFun: any = (i: Number, index: number) => {
  tabNum.value = i
  tabMainId.value = index
}

let TheTabs1 = ref([
  {
    name: "序号",
    width: "12%"
  },
  {
    name: "号码",
    width: "38%"
  },
  {
    name: "说明",
    width: ""
  }
])
let TheTabs2 = ref([
  {
    name: "序号",
    width: "12%"
  },
  {
    name: "标题",
    width: "28%"
  },
  {
    name: "发布时间",
    width: "30%"
  },
  {
    name: "已读人数",
    width: "30%"
  }
])
onMounted(() => {})

let popupShow = ref<boolean>(false)
let tcTitle = ref<String>("")
let tcText = ref<String>("")

const divRef = ref()
useEventListener(
  "click",
  () => {
    popupShow.value = false
  },
  { target: divRef }
)

const onTcMod = (i: any, index: Number) => {
  popupShow.value = true
  tcTitle.value = i.title
  tcText.value = i.details
}
</script>

<style scoped lang="less">
.serve-box {
  padding: 30px 0;

  .serve-nav {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    .item {
      position: relative;
      width: 33.33%;
      text-align: center;
      font-size: 20px;
      color: #20cefa;
      cursor: pointer;
      &:after {
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        content: "";
        margin: 0 auto;
        width: 0;
        height: 2px;
        background: #20cefa;
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
      &.on {
        &:after {
          opacity: 1;
          width: 50%;
        }
      }
    }
  }
}
</style>
