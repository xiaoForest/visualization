<template>
  <div class="home">
    <!-- <Hearder title="Vite + Vue3" />1 -->
    1
  </div>
</template>
 
<script lang="ts" setup>
import { useHomeStore } from "@/store/modules/home"
import { storeToRefs } from "pinia"
import { getName } from "./services"
import Hearder from "./Hearder.vue"

/**
 * global
 */
console.log(`${import.meta.env.VITE_APP_ENV}`)

//  mock request
// auto import vue-hooks-plus
const { data } = useRequest(() => getName(123))
watchEffect(() => {
  console.log(data?.value)
})

/**
 * pinia store
 */
const store = useHomeStore()
const storeTitle = computed(() => store.getFuncTitle)
// keep proxy
const { count } = storeToRefs(store)
const newCount = computed(() => `count: ${count.value}`)

const stateAdd = () => {
  console.log(666)

  store.increment()
}
</script>

<style scoped lang="less">
.home {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
