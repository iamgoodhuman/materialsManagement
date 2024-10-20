import { createRouter, createWebHashHistory } from 'vue-router'
// import Login from '../components/Login.vue'
import Home from '../page/home'
// import Welcome from '../components/Welcome.vue'
import Fund from '../page/fund'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
//   {
//     path: '/login',
//     component: Login
//   },
  {
    path: '/home',
    component: Home,
    redirect: '/fund',
    children: [
      { path: '/fund', component: Fund },
    
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
