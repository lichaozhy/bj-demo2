<template>
	<b-navbar
		id="app-navbar"
		toggleable="md"
		type="dark"
		variant="dark">

		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		<b-navbar-brand to="/">计算机学院统一门户</b-navbar-brand>

		<b-collapse is-nav id="nav_collapse">

			<b-navbar-nav>
				<b-nav-item
					to="/home"><font-awesome-icon
						class="mr-2"
						icon="home" />欢迎
				</b-nav-item>
				<b-nav-item
					to="/desktop"><font-awesome-icon
						class="mr-2"
						icon="desktop" />我的桌面</b-nav-item>
				<b-nav-item
					to="/todo"><font-awesome-icon
						class="mr-2"
						icon="briefcase" />待办工作</b-nav-item>
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
							id="retrieve-bottom"
							autocomplete="off"
							v-model="keyword"
							@input.native="showHistory()"
							@focus.native="showHistory()"
							@blur.native="hideHistory()"
							placeholder="全文检索"></b-form-input>
							<b-input-group-append>
								<b-btn size="sm" type="submit">
									<font-awesome-icon icon="search" />
								</b-btn>
							</b-input-group-append>
					</b-input-group>
					
				</b-nav-form>
				
				<b-popover
					ref="popover"
					no-fade
					placement="bottom"
					target="retrieve-bottom" :title="`历史查询`">
					<p v-for="word in filteredHistory"
						:key="word"
						@click="keyword=word">{{word}}</p>
				</b-popover>

				<b-nav-item-dropdown right>
					<!-- Using button-content slot -->
					<template slot="button-content">
						<font-awesome-icon icon="user" />
					</template>
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
	data() {
		return {
			keyword: '',
			isHistoryShow: false,
			history: [
				'检察院', '公检法', '国务院', '党中央', '统战部',
				'检察机关', '检验真理', '例行检查', '消防安检', '检查站',
				'反腐倡廉', '万众创新', '公诉刑事案件', '朝阳区人民群众',
				'举报', '人民群众', '庞氏骗局', '互联网+', '检查线路',
				'中央巡视组', '城投集团', '融创', '宝能', '央行',
				'英雄机长', '普京', '俄罗斯', '张召忠', '清华控股',
				'军队', '土改', '改革开放', '十九大', '台湾',
			]
		}
	},
	computed: {
		isSidebarShow() {
			return this.$store.state.page.isSidebarShow;
		},
		filteredHistory() {
			const keyword = this.keyword.replace(/\s/g, '').split('');

			const set = {};

			keyword.forEach(char => {
				this.history.forEach(history => {
					if (history.indexOf(char) !== -1) {
						set[history] = true;
					}
				});
			});

			const list = Object.keys(set);
			if (list.length > 5) {
				list.length = 5;
			}

			return list;
		}
	},
	methods: {
		openSidebar() {
			this.$store.dispatch('page/openSidebar');
		},
		closeSidebar() {
			this.$store.dispatch('page/closeSidebar');
		},
		showHistory() {
			this.$refs.popover.$emit('close');
			this.$refs.popover.$emit('open');
		},
		hideHistory() {
			this.$refs.popover.$emit('close');
		}
	}
};
</script>
