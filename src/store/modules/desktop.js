import serviceList from '@/../mock/service.json';

export default {
	namespaced: true,
	state: {
		isSetting: false,
		options: {},
		serviceList: [],
		widgetList: []
	},
	getters: {
		remainingService(state) {
			return serviceList.filter(service => {
				return !state.options.list.find(object => {
					return object.type === 'icon' &&
						object.meta.id === service.id;
				});
			});
		}
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
		},
		removeObject({ commit }, index) {
			commit('removeObject', index);
		},
		appendObject({ commit }, object) {
			commit('appendObject', object);
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
		},
		removeObject(state, index) {
			state.options.list.splice(index, 1);
		},
		appendObject(state, object) {
			state.options.list.push(object);
		}
	}
};