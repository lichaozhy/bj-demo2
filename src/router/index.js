import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/pages/Home';
import Desktop from '@/components/pages/Desktop';
import Todo from '@/components/pages/Todo';
import Audit from '@/components/pages/Audit';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/desktop',
			name: 'desktop',
			component: Desktop
		},
		{
			path: '/todo',
			name: 'todo',
			component: Todo
		},
		{
			path: '/audit',
			name: 'audit',
			component: Audit
		},
	]
});
