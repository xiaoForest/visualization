<template>
  <div class="grid-opinions">
    <div class="nav">
      <div class="item item0">序号</div>
      <div class="item item1">标题</div>
      <div class="item item2">反馈人</div>
      <div class="item item3">反馈时间</div>
      <div class="item item4">处理状态</div>
    </div>
    <ul>
      <li v-for="(item, index) in TheList" :key="index">
        <div class="item item0">{{ index + 1 }}</div>
        <div class="item item1">{{ item.title }}</div>
        <div class="item item2">{{ item.name }}</div>
        <div class="item item3">{{ item.time }}</div>
        <div class="item item4">{{ item.type }}</div>
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

onMounted(() => {})
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
