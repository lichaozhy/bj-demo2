<template>
	<div class="desktop-grid">
		<div class="desktop-object"
			v-for="(rendererObject, index) in rendererList"
			:key="index"
			@drop="setPosition($event, rendererObject)"
			:style="rendererObject.style">
			<draggable>
				<component :is="typeMapping[rendererObject.type]" />
			</draggable>
		</div>
	</div>
</template>

<script>
import AppServiceIcon from './Icon';
import AppWidget from './Widget';
import Draggable from './Draggable';

import RendererObject from './renderer';

export default {
	data() {
		return {
			typeMapping: {
				icon: AppServiceIcon,
				widget: AppWidget
			},
			rendererList: [],
			iconGroup: {
				grid: {
					step: 100,
					origin: {
						x: 'left',
						y: 'top'
					}
				},
				data: [
					{
						offset: { x: 0, y: 0 }
					},
					{
						offset: { x: 1, y: 1 }
					},
					{
						offset: { x: 3, y: 2 }
					},
					{
						offset: { x: 0, y: 3 }
					},
					{
						offset: { x: 0, y: 4 }
					},
					{
						offset: { x: 0, y: 5 }
					},
				]
			},
		}
	},
	components: {
		Draggable
	},
	mounted() {
		this.rendererList = this.renderGroup(this.iconGroup);
	},
	methods: {
		renderGroup({ grid, data }) {
			const rendererList = [];

			data.forEach(object => {
				rendererList.push(new RendererObject(object));
			});

			return rendererList;
		},
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
