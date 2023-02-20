import { createApp } from 'vue'
import App from './App.vue'
import { setupGlobDirectives } from './directives'
import { routers } from './routers'
import store from './store'
// import echarts from './utils/echarts';

import './styles/tailwindcss.css'


const app = createApp(App)

// app.config.globalProperties.$echarts = echarts

app.use(routers)
app.use(store)

setupGlobDirectives(app)

// 挂载应用
app.mount('#app')
