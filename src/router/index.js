import Vue from 'vue';
import Router from 'vue-router';
import Desktop from '@/components/pages/Desktop';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			alias: '/desktop',
			name: 'desktop',
			component: Desktop
		},
		{
			path: '/audit'
		}
	]
});
