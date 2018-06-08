<template>
	<div id="app-sidebar"
		class="border-left">
		<b-card no-body 
			class="rounded-0 h-100 border-0">
			<b-tabs card class="h-100" small>
				<b-tab>
					<template slot="title"><font-awesome-icon
						icon="exclamation-circle"
						class="mr-1"
						fixed-width />通知
					</template>

					Colleague
				</b-tab>
				<b-tab active>
					<template slot="title"><font-awesome-icon
						icon="calendar"
						class="mr-1"
						fixed-width />日历
					</template>
					
					<b-btn size="sm">今天</b-btn>
					<b-btn size="sm">明天</b-btn>
					<b-btn size="sm">昨天</b-btn>
					<hr>
					<datepicker
						:language="datepickerLangPack"
						:inline="true"
						v-model="selected" /><hr>

					<h5>行程安排</h5>
				</b-tab>
				<b-tab>
					<template slot="title"><font-awesome-icon
						icon="user-friends"
						class="mr-1"
						fixed-width />同事
					</template>

					Colleague
				</b-tab>
			</b-tabs>

			<b-card-footer>
				<font-awesome-icon icon="bell" />
				<font-awesome-icon icon="check" />
			</b-card-footer>
		</b-card>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {zh} from 'vuejs-datepicker/dist/locale';

export default {
	data() {
		return {
			selected: new Date()
		}
	},
	components: {
		Datepicker
	},
	computed: {
		datepickerLangPack() {
			return zh;
		},
		isShow() {
			return this.$store.state.page.isSidebarShow;
		}
	}
}
</script>

<style lang="less">
#app-sidebar {
	position: absolute;
	top: 56px;
	bottom: 0;
	right: 0;
	width: 340px;
	background-color: #f0f0f0;
}

.vdp-datepicker__calendar {
	border: none;
}
</style>

