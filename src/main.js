// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// elementui依赖
import ElementUI from 'element-ui'
//样式文件，需单独引入
import 'element-ui/lib/theme-chalk/index.css'
// 加入axios
import axios from 'axios'
// 加入mock
import './api/mock'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http =axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
