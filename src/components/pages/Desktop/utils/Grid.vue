<template>
	<div class="desktop-grid">
		<div class="desktop-object"
			v-for="(rendererObject, index) in rendererList"
			:key="index"
			@drop="setPosition($event, rendererObject)"
			:style="rendererObject.style">
			<draggable>
				<component :is="rendererObject.component"
					:object="rendererObject" />
			</draggable>
		</div>
	</div>
</template>

<script>
import desktopMock from '@/../mock/desktop.json';
import Draggable from './Draggable';
import fromDesktopOptions from './renderer/index';

export default {
	data() {
		return {
			rendererList: [],
		}
	},
	components: {
		Draggable
	},
	mounted() {
		this.rendererList = fromDesktopOptions(desktopMock);
	},
	methods: {
		setPosition(event, rendererObject) {
			const point = {
				left: event.clientX,
				top: event.clientY
			};

			const field = {
				left: 15,
				top: 71,
				height: this.$el.offsetHeight,
				width: this.$el.offsetWidth
			};

			rendererObject.updateOffset(point, field);
		}
	}
}
</script>

<style lang="less">
.desktop-grid {
	position: relative;
	height: 100%;
	width: 100%;

	.desktop-object {
		position: absolute;
	}
}
</style>
