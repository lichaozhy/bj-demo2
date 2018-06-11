<template>
	<div class="app-service-icon"
		:class="{selected:selected}">
		<b-btn class="icon-btn"
			@dblclick="launch()"
			variant="link"
			size="sm">
			<div :id="`app-icon-${service.id}`">
			</div>
			{{service.name}}
		</b-btn>
	</div>
</template>

<script>
import serviceMock from '@/../mock/service.json';

export default {
	props: ['object', 'selected'],
	computed: {
		service() {
			const serviceId = this.object.meta.id;

			return serviceMock.find(service => {
				return service.id === serviceId;
			});
		}
	},
	methods: {
		launch() {
			this.$root.$emit('bv::show::modal','launch');
		}
	}
}
</script>

<style lang="less">

.app-service-icon {
	text-align: center;
	width: 100px;
	height: 100px;
	position: relative;

	&.selected {
		background: rgba(200, 200, 255, 0.4);
		box-shadow: 0 0 0 1px inset rgb(146, 146, 255);
		border-radius: 5px;
	}

	.icon-btn {
		width: 100%;
		height: 100%;
		color: #fff;
		text-shadow: 1px 1px 1px #000;
		font-size: 12px;
		font-weight: 300;

		div {
			height: 64px;
			width: 64px;
			margin: 0 auto;
			background-position: center;
			background-repeat: no-repeat;
		}
	}
}
</style>