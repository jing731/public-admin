import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout/'
import Article from '@/views/article/'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login', // 登录
    name: 'login',
    component: Login
  },
  {
    path: '/', // 布局
    name: 'layout', // 如果有子路由 父路由则不用起名字了，没有意义
    component: Layout,
    // 设置子路由 就一个children  children是一个数组[] 里面放字路由的配置对象
    children: [
      {
        path: '', // 子路由默认没有名字  一开始定义的
        name: 'home',
        component: Home
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      }
    ]
  }
]
const router = new VueRouter({
  routes
})
// 使用路由导航进行用户的登陆与否
// 里面的回调函数 有三个参数 to from next
router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  // 非登陆的页面
  if (to.path !== '/login') {
    if (user) {
      next()
    } else {
      next('/login')
    }
    // 进入登陆的页面
  } else {
    next()
  }
})
export default router
