<template>
	<div class="draggable"
		:class="{
			active: isDragging,
			setting:isSetting
		}"
		@click="cancel()"
		@mouseup="drop($event)"
		@mousedown="drag($event)"
		@mousemove="move($event)">
		<slot />
	</div>
</template>

<script>
export default {
	computed: {
		isSetting() {
			return this.$store.state.desktop.isSetting;
		},
	},
	data() {
		return {
			isDragging: false,
			start: { x: 0, y: 0 },
		}
	},
	props: {
		isPrevented: {
			default: false,
			type: Boolean
		}
	},
	methods: {
		drag(event) {
			if (this.isPrevented) {
				return;
			}
			
			this.isDragging = true;

			this.start.x = event.clientX;
			this.start.y = event.clientY;

			this.$emit('drag');
		},
		move(event) {
			if (!this.isDragging) {
				return;
			}

			this.$el.style.left = `${event.clientX - this.start.x}px`;
			this.$el.style.top = `${event.clientY - this.start.y}px`;
		},
		drop(event) {
			if (!this.isDragging) {
				return;
			}

			this.isDragging = false;
			this.start.x = 0;
			this.start.y = 0;
			this.$el.style.left = 0;
			this.$el.style.top = 0;

			this.$el.dispatchEvent(new MouseEvent('drop', {
				cancelable: true,
				bubbles: true,
				clientX: event.clientX,
				clientY: event.clientY
			}));
		},
		cancel() {
			this.isDragging = false;
		}
	}
	
}
</script>

<style lang="less">
.draggable {
	position: relative;
	top: 0;
	left: 0;
	height: 100%;

	&.setting::before {
		content: "";
		cursor: move;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 10;
		top:0;
		left: 0;
	}

	&.active::after {
		position: fixed;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		cursor: move;
	}
}
</style>
