import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import account from './modules/account';
import page from './modules/page';

const store = new Vuex.Store({
	strict: true,
	modules: {
		account, page
	},
	state: {
		
	}
});

export default store;