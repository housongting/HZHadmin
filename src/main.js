import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://work.08321.org/'; //配置统一的请求地址

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.axios = axios;
Vue.prototype.$baseurl = 'http://work.08321.org/';
Vue.prototype.qs = qs;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')