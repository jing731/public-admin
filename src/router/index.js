import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout/'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login', // 登录
    name: 'login',
    component: Login
  },
  {
    path: '/', // 布局
    // name: 'layout', 如果有子路由 父路由则不用起名字了，没有意义
    component: Layout,
    // 设置子路由 就一个children  children是一个数组[] 里面放字路由的配置对象
    childred: [
      {
        path: '', // 子路由默认没有名字  一开始定义的
        name: 'home',
        component: Home
      }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
