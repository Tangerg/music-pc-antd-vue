import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from './store'
import Use from '../use'
import 'vue-slider-component/theme/default.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
