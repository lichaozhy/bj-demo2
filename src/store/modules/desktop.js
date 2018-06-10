export default {
	namespaced: true,
	state: {
		isSetting: false,
		options: {},
		serviceList: [],
		widgetList: []
	},
	actions: {
		loadDesktopOptions({ commit }, options) {
			commit('fetchOptions', options);
		},
		settingOn({ commit }) {
			commit('setSetting', true);
		},
		settingOff({ commit }) {
			commit('setSetting', false);
		},
		setObjectOffset({ commit }, payload) {
			commit('updateObjectOffset', payload);
		}
	},
	mutations: {
		setSetting(state, onOrOff = false) {
			state.isSetting = onOrOff;
		},
		fetchOptions(state, options = {}) {
			state.options = options;
		},
		updateObjectOffset(state, {
			index,
			offset
		}) {
			state.options.list[index].offset = offset;
		}
	}
};