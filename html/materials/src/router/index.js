import Vue from 'vue'
import VueRouter from 'vue-router'
// import Query from '../page/insure/query.vue'
// import Enter from '../page/insure/enter.vue'
import Xbw from '../page/xbw/index.vue'
// import BmiEnter from '../page/bmi/enter.vue'
// import BmiIndex from '../page/bmi/index.vue'
// import Tool from '../page/index.vue'

import Login from '../page/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // {
        //     path: '/tool', component: Tool, name: "Tool",   children: [
        //             { path: '/insure/insure', component: Query },
        //             { path: '/insure/enter', component: Enter },
        //             { path: '/bmi/enter', component: BmiEnter },
        //             { path: '/tool/bmi/index', component: BmiIndex },
        //         ]
        // },
      
        { path: '/xbw', component: Xbw },
        { path: '/login' , component:Login}

    ]
})

export default router