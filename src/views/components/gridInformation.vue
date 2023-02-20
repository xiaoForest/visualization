<template>
  <div class="grid-information">
    <!-- 展示内容:序号、姓名、网格、级别，鼠标悬停显示联系方式（电话、 邮箱）;  -->
    <div class="nav">
      <div class="item item1">序号</div>
      <div class="item item2">姓名</div>
      <div class="item item3">网格</div>
      <div class="item item4">级别</div>
    </div>
    <ul>
      <li v-for="(item, index) in TheList" :key="index">
        <div class="item item1">{{ index + 1 }}</div>
        <div class="item item2">{{ item.name }}</div>
        <div class="item item3">{{ item.grid }}</div>
        <div class="item item4">{{ item.rank }}</div>
        <div class="info">
          <h4>{{ item.name }}</h4>
          <span>网格：{{ item.grid }}</span>
          <span>级别：{{ item.rank }}</span>
          <span>电话：{{ item.phone }}</span>
          <span>邮箱：{{ item.email }}</span>
        </div>
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
.grid-information {
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
  .item1 {
    margin-right: 5%;
    width: 6%;
    text-align: center;
    justify-content: center;
  }
  .item2 {
    width: 30%;
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
      .info {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #1732b2;
        border-radius: 4px;
        padding: 16px;
        z-index: 5;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        box-shadow: -10px -12px 12px -12px rgb(0 0 0 / 20%);
        word-break: break-all;
        transition: all 1s ease;
        opacity: 0;
        transform: translateX(200px);
        h4 {
          font-weight: bold;
        }
        h4,
        span {
          color: #fff;
          display: block;
          font-size: 16px;
          line-height: 1.6;
        }
      }
      &:hover {
        .info {
          opacity: 1;
          transform: scale(1) translateX(0);
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
