<template>
	<b-card no-body
		style="height:400px"
		class="rounded-0 w-100">
		<b-tabs card class="h-100">
			<b-tab class="desktop-apps">
				<template slot="title">
					<font-awesome-icon icon="cubes" fixed-width />所有应用
				</template>
				<b-btn v-for="service in remainingService"
					class="service-icon"
					@click="addToDesktop(service)"
					variant="link"
					:key="service.id">
					<div :id="`app-icon-${service.id}`"></div>
					{{service.name}}
				</b-btn>
			</b-tab>
			<b-tab>
				<template slot="title">
					<font-awesome-icon icon="rss-square" fixed-width />RSS挂件
				</template>
				<b-input v-model="url" placeholder="RSS地址"></b-input>
				<b-btn @click="addRSSWidget()">生成</b-btn>
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
export default {
	data() {
		return {
			url: 'http://rss.news.sohu.com/rss/focus.xml',
		}
	},
	computed: {
		isSetting() {
			return this.$store.state.desktop.isSetting;
		},
		remainingService() {
			return this.$store.getters['desktop/remainingService'];
		}
	},
	methods: {
		activeSetting() {
			this.$store.dispatch('desktop/settingOn');
		},
		deactiveSetting() {
			this.$store.dispatch('desktop/settingOff');
		},
		addToDesktop(service) {
			this.$store.dispatch('desktop/appendObject', {
				type: 'icon',
				meta: {
					id: service.id,
				},
				offset: {
					x: 4,
					y: 3
				}
			});
		},
		addRSSWidget() {
			this.$store.dispatch('desktop/appendObject', {
				type: 'widget',
				meta: {
					widget: 'RSS',
					url: this.url
				},
				size: {
					width: 6,
					height: 8
				},
				offset: {
					x: 4,
					y: 3
				}
			});
		}
	}
}
</script>

<style lang="less">
.desktop-apps {
	.service-icon {
		text-align: center;
		height: 100px;
		width: 100px;
		margin: 0 15px;
		font-size: 12px;
		color: #000;
		
		div {
			height: 60px;
			width: 100%;
			background-position: center;
			background-repeat: no-repeat;
		}
	}
}
</style>
