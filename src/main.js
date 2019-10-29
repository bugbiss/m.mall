import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VScroll from './components/v-scroll'
import './service/http'
import './styles/main.less'

Vue.config.productionTip = false

Vue.use(VScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
