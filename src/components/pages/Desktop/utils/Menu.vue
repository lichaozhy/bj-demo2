<template>
	<b-card no-body
		class="rounded-0 w-100 h-100 border-top">
		<b-tabs pills card vertical class="h-100">
			<b-tab active>
				<template slot="title">
					<font-awesome-icon icon="cog" fixed-width />控制面板
				</template>
				<b-btn v-if="isSetting"
					variant="primary"
					@click="deactiveSetting()">确认布局</b-btn>
				<b-btn v-if="!isSetting"
					variant="success"
					@click="activeSetting()">开始布局</b-btn>
			</b-tab>
			<b-tab class="desktop-apps">
				<template slot="title">
					<font-awesome-icon icon="cubes" fixed-width />所有应用
				</template>
				<b-btn v-for="service in remainingService"
					class="service-icon"
					@click="addToDesktop(service)"
					variant="outline-primary"
					:key="service.id">
					<div class="mb-3"><img src="@/assets/apps/2.svg" /></div>
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
			url: '',
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
		height: 120px;
		width: 120px;
		margin: 0 15px;
		img {
			height: 60px;
		}
	}
}
</style>
