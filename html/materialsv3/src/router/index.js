import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../page/home'
 import Welcome from '../components/wel.vue'
import budgetDisplay from '../page/fund'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    redirect: {name: "Welcome"}, 
    redirect: '/welcome',
    children:   [
      {
        path: "/welcome",
        name: "Welcome",
        component: Welcome,
        meta: {
          title: "首页"
        }
      },
      {
        path: "/budgetDisplay",
        name: "budgetDisplay",
        component: budgetDisplay,
        meta: {
          title: "预算-展示"
        }
      }
    ]
  }
]
 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 
// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })
 
export default router
