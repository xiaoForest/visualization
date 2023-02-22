<template>
  <div class="videoStreaming">
    <!-- PC端可以自动播放，但要静音播放即video的muted属性设置为true -->
    <ul>
      <li v-for="(item, index) in TheList" :key="index">
        <video
          :src="item.src"
          muted="muted"
          x5-playsinline
          webkit-playsinline="true"
          playsinline="true"
          autoplay
          loop
        ></video>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
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
.videoStreaming {
  height: 495px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0;
  video {
    width: 100%;
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 1%;
      width: 30%;
    }
  }
}
</style>
