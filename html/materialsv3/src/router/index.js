import {createRouter,createMemoryHistory} from 'vue-router'
import Fund from '../page/fund'
import Home from '../page/home'
const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/fund',
        name:'fund',
        component:Fund
    }
]
const router = createRouter({
    history:createMemoryHistory(),
    routes
})

export default router