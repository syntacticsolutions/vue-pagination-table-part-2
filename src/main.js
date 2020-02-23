import Vue from 'vue'
import axios from 'axios'
import '@fortawesome/fontawesome-pro/css/all.css'

import App from './App.vue'


Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
