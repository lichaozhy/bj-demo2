<template>
	<div class="desktop-grid" @click="cancelSelected()">
		<div class="desktop-object"
			v-for="(rendererObject, index) in rendererList"
			:key="index"
			@click.stop="select(index)"
			@dblclick="remove(index)"
			@drop="setPosition($event, rendererObject, index)"
			:style="rendererObject.style">
			<draggable :is-prevented="!isSetting">
				<component :is="rendererObject.component"
					:selected="index === activeIndex"
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
			activeIndex: -1
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
		remove(index) {
			this.$store.dispatch('desktop/removeObject', index);
			
			this.cancelSelected();
		},
		select(index) {
			this.activeIndex = index;
		},
		cancelSelected() {
			this.activeIndex = -1;
		},
		setPosition(event, rendererObject, index) {
			const field = this.$el.getBoundingClientRect();
			const target = event.target.getBoundingClientRect();

			const { origin, step } = rendererObject.grid;
			const offset = { x: null, y: null };

			if (origin.x === 'left') {
				offset.x = Math.floor((target.left + step / 2 - field.left) / step);
			}

			if (origin.x === 'right') {
				offset.x =
					Math.floor((field.right - target.right + step / 2) / step);
			}
			
			if (origin.y === 'top') {
				offset.y = Math.floor((target.top + step / 2 - field.top) / step);
			}

			if (origin.y === 'bottom') {
				offset.y = Math.floor((field.bottom - target.bottom + step / 2) / step);
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

		.object-toolbar {
			button {
				line-height: 12px;
				padding: 5px;
				font-size: 12px;
			}
			position: absolute;
			z-index: 99999;
			top: 0;
			right: 0;
		}
	}
}
</style>
