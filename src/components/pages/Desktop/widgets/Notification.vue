<template>
	<widget :object="object">
		<b-alert :show="isShow" dismissible
			@dismissed="restart()">
			具有良好的用户使用体验(UI设计)，包括但不限于上述模块。
		</b-alert>
	</widget>
</template>

<script>
import Widget from '../utils/renderer/Widget.vue';

export default {
	components: {
		Widget
	},
	props: ['object'],
	data() {
		return {
			isShow: true
		};
	},
	methods: {
		restart() {
			this.isShow = false;
			setTimeout(() => {
				this.isShow = true;
			}, 3000);
		}
	}
}
</script>


<style lang="less">

</style>
