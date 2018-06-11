<template>
	<widget :object="object">
		<b-button variant="link"
			class="text-center position-relative">
			<img style="width:60px"
				src="../../../../assets/mailbox.svg" alt="">
			<b-badge variant="danger"
				class="position-absolute">9</b-badge>
			<p>进入邮箱</p>
		</b-button>
	</widget>
</template>

<script>
import Widget from '../utils/renderer/Widget.vue';

export default {
	components: {
		Widget
	},
	props: ['object']
}
</script>


<style lang="less">

</style>
