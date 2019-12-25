// 路由配置    vue-router 路由管理器
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

// 导入login

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 登入
    { path: '/', component: Login },
    { path: '/login', component: Login }
  ]
})
export default router
