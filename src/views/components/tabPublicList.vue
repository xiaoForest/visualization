<template>
  <div class="public-box">
    <div class="public-nav">
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

    <ul class="public-list title">
      <li>
        <div class="num">序号</div>
        <div class="text">标题</div>
        <div class="time">发布时间</div>
        <div class="people">已读人数</div>
      </li>
    </ul>

    <ul class="public-list list" v-show="tabNumber == 0">
      <li v-for="(item, index) in TheList[0].list" :key="index">
        <div class="num">{{ index + 1 }}</div>
        <div class="text">{{ item.text }}</div>
        <div class="text">{{ item.time }}</div>
        <div class="people">{{ item.value }}人</div>
      </li>
    </ul>

    <ul class="public-list list" v-show="tabNumber == 1">
      <li v-for="(item, index) in TheList[1].list" :key="index">
        <div class="num">{{ index + 1 }}</div>
        <div class="text">{{ item.text }}</div>
        <div class="text">{{ item.time }}</div>
        <div class="people">{{ item.value }}人</div>
      </li>
    </ul>

    <ul class="public-list list" v-show="tabNumber == 2">
      <li v-for="(item, index) in TheList[2].list" :key="index">
        <div class="num">{{ index + 1 }}</div>
        <div class="text">{{ item.text }}</div>
        <div class="text">{{ item.time }}</div>
        <div class="people">{{ item.value }}人</div>
      </li>
    </ul>
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
let tabNum = ref<Number>(0)
const tabNumber = computed<any>(() => {
  return tabNum.value
})
const onTabFun: any = (i: Number) => {
  tabNum.value = i
}
onMounted(() => {})
</script>

<style scoped lang="less">
.public-box {
  padding: 30px 0;

  .public-nav {
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
  .public-list {
    padding: 0;
    margin: 0;

    position: relative;
    &.title {
      li {
        background: #1732b2 !important;
      }
    }
    &.list {
      overflow: auto;
      height: (34px) * 10;
      li {
        cursor: pointer;
      }
    }
    li {
      position: relative;
      padding: 10px 20px;
      color: #9ec7ff;
      font-size: 14px;

      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      &:nth-child(2n + 1) {
        background: #0a135b;
      }
      > div {
        position: relative;
        z-index: 10;
        line-height: 1.4;
        &:nth-child(1) {
          width: 6%;
          text-align: center;
        }
        &:nth-child(2) {
          padding: 0 20px;
          width: 47%;
        }
        &:nth-child(3) {
          width: 27%;
        }
        &:nth-child(4) {
          width: 14%;
        }
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
}
</style>
