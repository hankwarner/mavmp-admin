import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Vuelidate from 'vuelidate';

// Css framworks
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

// Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false;

library.add(faFacebook, faLinkedin, faQuoteLeft, faPencilAlt);

// Global components
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Buefy);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
