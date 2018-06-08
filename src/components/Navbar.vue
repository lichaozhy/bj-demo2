<template>
	<b-navbar
		id="app-navbar"
		toggleable="md"
		type="dark"
		variant="dark"
		fixed="top">

		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		<b-navbar-brand to="/">计算机学院统一门户</b-navbar-brand>

		<b-collapse is-nav id="nav_collapse">

			<b-navbar-nav>
				<b-nav-item
					to="/home">
					<font-awesome-icon icon="home" />
				</b-nav-item>
				<b-nav-item
					to="/desktop">我的桌面</b-nav-item>
				<b-nav-item
					to="/todo">待办工作</b-nav-item>
				<b-nav-item-dropdown
					text="更多">
					<b-dropdown-item to="/audit">审计</b-dropdown-item>
				</b-nav-item-dropdown>
				
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-form class="mr-5">
					<b-input-group size="sm">
						<b-form-input
							type="text"
							placeholder="全文检索"></b-form-input>
							<b-input-group-append>
								<b-btn size="sm" type="submit">
									<font-awesome-icon icon="search" />
								</b-btn>
							</b-input-group-append>
					</b-input-group>
				</b-nav-form>

				<b-nav-item-dropdown right>
					<!-- Using button-content slot -->
					<template slot="button-content">
						<font-awesome-icon icon="user" />
					</template>
					<b-dropdown-item href="#">首选项</b-dropdown-item>
					<b-dropdown-divider />
					<b-dropdown-item href="#">退出</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-nav-item
					@click="isSidebarShow?closeSidebar():openSidebar()"
					:active="isSidebarShow"><font-awesome-icon
						icon="comment" /></b-nav-item>
			</b-navbar-nav>

		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	computed: {
		isSidebarShow() {
			return this.$store.state.page.isSidebarShow;
		}
	},
	methods: {
		openSidebar() {
			this.$store.dispatch('page/openSidebar');
		},
		closeSidebar() {
			this.$store.dispatch('page/closeSidebar');
		}
	}
};
</script>
