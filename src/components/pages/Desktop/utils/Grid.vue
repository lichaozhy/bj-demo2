<template>
	<div class="desktop-grid">
		<div class="desktop-object"
			v-for="(rendererObject, index) in rendererList"
			:key="index"
			@drop="setPosition($event, rendererObject, index)"
			:style="rendererObject.style">
			<draggable :is-prevented="!isSetting">
				<component :is="rendererObject.component"
					:object="rendererObject" />
			</draggable>
		</div>
	</div>
</template>

<script>
import Draggable from './Draggable';
import fromDesktopOptions from './renderer/index';

export default {
	data() {
		return {
		}
	},
	computed: {
		isSetting() {
			return this.$store.state.desktop.isSetting;
		},
		rendererList() {
			const options = this.$store.state.desktop.options;

			return fromDesktopOptions(options);
		}
	},
	components: {
		Draggable
	},
	methods: {
		setPosition(event, rendererObject, index) {
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

			const { origin, step } = rendererObject.grid;
			const offset = { x: null, y: null };

			if (origin.x === 'left') {
				offset.x = Math.floor((point.left - field.left) / step);
			}

			if (origin.x === 'right') {
				offset.x = Math.floor((field.width + field.left - point.left) / step);
			}
			
			if (origin.y === 'top') {
				offset.y = Math.floor((point.top - field.top) / step);
			}

			if (origin.y === 'bottom') {
				offset.y = Math.floor((field.height + field.top - point.top) / step);
			}

			this.$store.dispatch('desktop/setObjectOffset', {
				index, offset
			});
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
