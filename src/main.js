import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import smoothScroll from 'vue-smoothscroll'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// about fontawesome---
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSpinner, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// -------------------
import App from './App.vue'
import router from './router'
import store from './store'

library.add(faCoffee, faSpinner, faAngleDoubleUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(smoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
