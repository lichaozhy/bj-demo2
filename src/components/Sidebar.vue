<template>
	<div id="app-sidebar"
		class="border-left">
		<b-card no-body 
			class="rounded-0 h-100 border-0">
			<b-tabs card class="h-100" small>
				<b-tab>
					<template slot="title"><font-awesome-icon
						icon="exclamation-triangle"
						class="mr-1"
						fixed-width />预警
					</template>
					
					<b-alert show dismissible variant="warning">
						<b-card header="来自：待办任务"
							footer="2018-06-07">
							#104 接收鉴定表 待办工作即将超时
						</b-card>
					</b-alert>
					
					<b-alert show dismissible variant="warning">
						<b-card header="来自：待办任务"
							footer="2018-06-07">
							#103 接收鉴定表 待办工作即将超时
						</b-card>
					</b-alert>
					
					<b-alert show dismissible variant="warning">
						<b-card header="来自：待办任务"
							footer="2018-06-07">
							#102 接收鉴定表 待办工作即将超时
						</b-card>
					</b-alert>

				</b-tab>
				<b-tab>
					<template slot="title"><font-awesome-icon
						icon="envelope"
						class="mr-1"
						fixed-width />通知
					</template>
					
					<b-alert show dismissible>
						<b-card header="来自：研发部"
							footer="2018-06-07">
							具有良好的用户使用体验(UI设计)，包括但不限于上述模块。
						</b-card>
					</b-alert>
					
					<b-alert show dismissible>
						<b-card header="来自：XX系统"
							footer="2018-06-07">
							发射目标：大犬座-VY
						</b-card>
					</b-alert>
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
				<!-- <b-tab>
					<template slot="title"><font-awesome-icon
						icon="user-friends"
						class="mr-1"
						fixed-width />同事
					</template>

					Colleague
				</b-tab> -->
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
	transition: opacity 500ms;
	opacity: .75;
	position: absolute;
	top: 0;
	height: 100%;
	right: 0;
	width: 340px;
	background-color: #f0f0f0;
	z-index: 10;

	&:hover {
		opacity: 1;
	}
}

.vdp-datepicker__calendar {
	border: none;
}
</style>

