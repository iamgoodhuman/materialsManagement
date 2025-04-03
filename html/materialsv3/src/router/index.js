import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../page/home'
import welcome from '../components/wel.vue'
import budgetDisplay  from '../page/budget/budgetDisplay.vue'
import budgetEnter  from '../page/budget/budgetEnter.vue'
import bmiDisplay from '../page/bmi/bmiDisplay.vue'
import Login from '../Login.vue'
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录"
    }
  },
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
        component: welcome,
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
      },
      {
        path: "/budgetEnter",
        name: "budgetEnter",
        component: budgetEnter,
        meta: {
          title: "预算-录入"
        }
      },
      {
        path: "/bmiDisplay",
        name: "bmiDisplay",
        component: bmiDisplay,
        meta: {
          title: "BMI-展示"
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
