<template>
	<div class="app-service-icon">
		<b-btn class="icon-btn"
			variant="link"
			size="sm">
			<div>
				<img src="@/assets/apps/0.svg" />
			</div>
			{{service.name}}
		</b-btn>
	</div>
</template>

<script>
import serviceMock from '@/../mock/service.json';

export default {
	props: ['object'],
	computed: {
		service() {
			const serviceId = this.object.meta.id;

			return serviceMock.find(service => {
				return service.id === serviceId;
			});
		}
	}
}
</script>


<style lang="less">

.app-service-icon {
	text-align: center;
	width: 120px;
	height: 120px;
	position: relative;

	.icon-btn {
		width: 100%;
		height: 100%;

		div {
			height: 80px;
			width: 80px;
			margin: 0 auto;

			img {
				width: 80px;
			}
		}
	}
}
</style>