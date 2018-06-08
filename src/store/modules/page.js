export default {
	namespaced: true,
	state: {
		isSidebarShow: false,
		lastNotification: null
	},
	actions: {
		openSidebar({ commit }) {
			commit('setSidebarShow', true);
		},
		closeSidebar({ commit }) {
			commit('setSidebarShow', false);
		}
	},
	mutations: {
		setSidebarShow(state, display = false) {
			state.isSidebarShow = display;
		}
	}
};