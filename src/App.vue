<template>
	<div id="app" class="h-100" v-cloak
		:class="{
			'no-select': isSetting
		}">
		<app-navbar />

		<div id="app-container">
			
			<transition name="fade">
				<router-view class="app-workbench container-fluid" />
			</transition>

			<transition
				enter-active-class="animated slideInRight"
				leave-active-class="animated slideOutRight">
				<keep-alive>
					<app-sidebar v-if="isSidebarShow" />
				</keep-alive>
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
		},
		isSetting() {
			return this.$store.state.desktop.isSetting;
		},
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

#app.no-select {
	user-select: none;
}

#app-container {
	overflow: hidden;
	position: fixed;
	top: 56px;
	bottom: 0;
	width: 100%;

	.app-workbench {
		position: absolute;
		height: 100%;
		width: 100%;
	}
}

[v-cloak] {
    display: none;
}
</style>
