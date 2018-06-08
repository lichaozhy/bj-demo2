<template>
	<div id="app" class="h-100">
		<app-navbar />

		<div id="app-container">
			
			<transition name="fade" class="h-100">
				<router-view class="app-workbench container-fluid" />
			</transition>

			<transition
				enter-active-class="animated slideInRight"
				leave-active-class="animated slideOutRight">
				<app-sidebar v-if="isSidebarShow" />
			</transition>
		</div>
	</div>
</template>

<script>
import AppNavbar from '@/components/Navbar';
import AppSidebar from '@/components/Sidebar';

export default {
	name: 'App',
	computed: {
		isSidebarShow() {
			return this.$store.state.page.isSidebarShow;
		}
	},
	components: {
		AppNavbar,
		AppSidebar
	}
};
</script>

<style lang="less">
html, body {
	height: 100%;
}

#app-container {
	height: 100%;
	padding-top: 56px;
	overflow: hidden;
	position: relative;

	.app-workbench {
		position: absolute;
		top: 56px;
		bottom: 0;
		left: 0;
		width: 100%;
	}
}
</style>
