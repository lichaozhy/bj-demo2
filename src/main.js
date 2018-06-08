import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(brands, solid, regular);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'animate.css';

import App from './App';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});
