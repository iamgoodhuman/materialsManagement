import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '@/router/index'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant);
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
