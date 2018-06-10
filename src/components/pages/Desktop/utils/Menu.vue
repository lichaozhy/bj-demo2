<template>
	<b-card no-body
		class="rounded-0 w-100 h-100 border-top">
		<b-tabs pills card vertical class="h-100">
			<b-tab active>
				<template slot="title">
					<font-awesome-icon icon="cog" fixed-width />
				</template>
				<b-btn v-if="isSetting"
					variant="primary"
					@click="deactiveSetting()">确认布局</b-btn>
				<b-btn v-if="!isSetting"
					variant="success"
					@click="activeSetting()">开始布局</b-btn>
			</b-tab>
			<b-tab title="Tab 2">
				<template slot="title">
					<font-awesome-icon icon="cubes" fixed-width />
				</template>
			Tab Contents 2
			</b-tab>
			<b-tab title="Tab 3">
				<template slot="title">
					<font-awesome-icon icon="window-maximize" fixed-width />
				</template>
			Tab Contents 3
			</b-tab>
			<b-tab title="Tab 3">
				<template slot="title">
					<font-awesome-icon icon="rss-square" fixed-width />
				</template>
			Tab Contents 4
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
export default {
	computed: {
		isSetting() {
			return this.$store.state.desktop.isSetting;
		}
	},
	methods: {
		activeSetting() {
			this.$store.dispatch('desktop/settingOn');
		},
		deactiveSetting() {
			this.$store.dispatch('desktop/settingOff');
		}
	}
}
</script>

