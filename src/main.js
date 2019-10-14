import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.less'
import VScroll from './components/v-scroll'

Vue.config.productionTip = false

Vue.use(VScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
