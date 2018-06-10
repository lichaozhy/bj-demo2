<template>
	<div class="desktop-grid"
		:class="{setting:isSetting}">
		<div class="desktop-object"
			v-for="(rendererObject, index) in rendererList"
			:key="index"
			@drop="setPosition($event, rendererObject, index)"
			:style="rendererObject.style">
			<draggable :is-prevented="!isSetting">
				<component :is="rendererObject.component"
					:object="rendererObject" />
			</draggable>
			<b-button-group
				v-if="isSetting"
				class="object-toolbar"
				size="sm">
				<b-button
					@click="remove(index)"
					variant="danger"><font-awesome-icon icon="trash" /></b-button>
			</b-button-group>
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
		remove(index) {
			this.$store.dispatch('desktop/removeObject', index);
		},
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

	&.setting .desktop-object{
		box-shadow: 0 0 1px 1px inset #f0f0f0 ;
	}

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
