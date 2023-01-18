import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
// 路由守卫需要导入到这里
import '@/router/permission'

const app = createApp(App)
SvgIcon(app)
app.use(store).use(router).mount('#app')
