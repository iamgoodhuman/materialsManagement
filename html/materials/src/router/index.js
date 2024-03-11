import Vue from 'vue'
import VueRouter from 'vue-router'
import Query from '../page/insure/query.vue'
import Enter from '../page/insure/enter.vue'
import Xbw from '../page/xbw/index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/insure/insure',component:Query},
        {path:'/insure/enter',component:Enter},
        {path:'/',component:Query},
        {path:'/xbw', component:Xbw}
    ]
})

export default router