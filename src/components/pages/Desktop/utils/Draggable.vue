<template>
	<div class="draggable"
		@click="cancel()"
		@mouseup="drop($event)"
		@mousedown="drag($event)"
		@mousemove="move($event)">
		<slot />
		<div v-if="enabled"
			class="draggable-mask"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			throttle: null,
			enabled: false,
			start: { x: 0, y: 0 },
		}
	},
	methods: {
		drag(event) {
			this.throttle = setTimeout(() => {
				this.enabled = true;
	
				this.start.x = event.clientX;
				this.start.y = event.clientY;

				this.throttle = null;
				
				this.$emit('drag');
			}, 1000);
		},
		move(event) {
			if (!this.enabled) {
				return;
			}

			this.$el.style.left = `${event.clientX - this.start.x}px`;
			this.$el.style.top = `${event.clientY - this.start.y}px`;
		},
		drop(event) {
			if (!this.enabled) {
				return;
			}

			this.enabled = false;
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
			clearTimeout(this.throttle);
			this.throttle = null;
			this.enabled = false;
		}
	}
	
}
</script>

<style lang="less">
.draggable {
	position: relative;
	top: 0;
	left: 0;
	background-color: rgba(255, 0, 0, .1);

	.draggable-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10000;
		background-color: rgba(0,0,0, 0.2);
	}
}
</style>
