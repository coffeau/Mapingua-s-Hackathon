import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import VueSweetalert2 from "vue-sweetalert2"; //importa a lib
import "sweetalert2/dist/sweetalert2.min.css"; //configura css
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

import swal from 'sweetalert2';
window.Swal = swal;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
