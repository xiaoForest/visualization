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
    name: "??????",
    width: "12%"
  },
  {
    name: "??????",
    width: "20%"
  },
  {
    name: "?????????",
    width: "20%"
  },
  {
    name: "????????????",
    width: "30%"
  },
  {
    name: "????????????",
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
}
</style>
