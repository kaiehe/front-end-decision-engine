import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { LayoutPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { VBScrollspyPlugin } from 'bootstrap-vue'

Vue.use(VBScrollspyPlugin)

Vue.use(ModalPlugin)
Vue.use(CardPlugin)

Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.use(LayoutPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')