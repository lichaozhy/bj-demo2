<template>
	<div class="app-service-icon">
		<b-btn class="icon-btn"
			variant="link"
			size="sm">
			<div></div>
			{{object.meta.id}}
		</b-btn>
	</div>
</template>

<script>
import serviceMock from '@/../mock/service.json';

export default {
	props: ['object'],
}
</script>


<style lang="less">

.app-service-icon {
	text-align: center;
	width: 120px;
	height: 120px;

	.icon-btn {
		width: 100%;
		height: 100%;

		div {
			height: 80px;
			width: 80px;
			margin: 0 auto;
		}
	}
}
</style>