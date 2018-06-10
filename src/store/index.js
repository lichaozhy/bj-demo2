import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import account from './modules/account';
import page from './modules/page';
import desktop from './modules/desktop';

const store = new Vuex.Store({
	strict: true,
	modules: {
		account, page, desktop
	},
	state: {
		
	}
});

export default store;

/**
 * DEBUG
 */
import desktopMock from '@/../mock/desktop.json';

store.dispatch('desktop/loadDesktopOptions', desktopMock);