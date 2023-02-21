<template>
  <div class="grid-opinions">
    <div class="tableTitle" :class="{ change: TheList.length > 10 }">
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
            <td>{{ TheList[0].title }}</td>
            <td>{{ TheList[0].name }}</td>
            <td>{{ TheList[0].time }}</td>
            <td>{{ TheList[0].type }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableScroll cp" style="height: 400px">
      <table class="tableStyle two">
        <thead>
          <tr>
            <th :width="item.width" v-for="(item, index) in TheTabs">
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in TheList" @click="onTcMod(item)">
            <td>{{ index + 1 }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.type }}</td>
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
const onTabFun: any = (i: Number, index: Number) => {
  tabNum.value = i
  tabMainId.value = index
}
let TheTabs = ref([
  {
    name: "序号",
    width: "12%"
  },
  {
    name: "标题",
    width: "20%"
  },
  {
    name: "反馈人",
    width: "20%"
  },
  {
    name: "反馈时间",
    width: "30%"
  },
  {
    name: "处理状态",
    width: "18%"
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

const onTcMod = (i: any) => {
  popupShow.value = true
  tcTitle.value = i.title
  tcText.value = i.details
}
</script>

<style scoped lang="less">
.grid-opinions {
  padding: 30px 0;
  .item {
    position: relative;
    color: #9ec7ff;
    font-size: 14px;
    height: 34px;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .item0 {
    width: 2em;
    margin-right: 5%;
    text-align: center;
    justify-content: center;
  }
  .item1 {
    width: 25%;
  }
  .item2 {
    width: 15%;
  }
  .item3 {
    width: 30%;
  }
  .item4 {
    width: 20%;
  }
  .nav {
    display: flex;
    align-items: center;
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    background: #1732b2;
  }
  ul {
    width: 100%;
    height: 34px * 10;
    overflow-x: hidden;
    overflow-y: auto;
    li {
      position: relative;
      display: flex;
      cursor: pointer;
      &:nth-child(2n + 1) {
        background: #0a135b;
      }
      &:after {
        position: absolute;
        z-index: 1;
        content: "";
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #1732b2 50%, #0a135b);
        opacity: 0;
        transition: all 0.3s ease;
      }
      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }
  }
  .nav,
  ul li {
    padding: 0 20px;
  }
}
</style>
