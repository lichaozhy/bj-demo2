import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/pages/Home';
import Desktop from '@/components/pages/Desktop/index';
import Todo from '@/components/pages/Todo';
import Audit from '@/components/pages/Audit';
import Signin from '@/components/pages/Signin';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Signin
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
