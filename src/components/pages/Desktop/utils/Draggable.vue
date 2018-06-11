<template>
	<div class="draggable"
		:class="{
			active: isDragging,
		}"
		@mouseup="drop($event)"
		@mousedown="drag($event)"
		@mousemove="move($event)">
		<slot />
	</div>
</template>

<script>
export default {
	data() {
		return {
			throttle: null,
			isDragging: false,
			start: { x: 0, y: 0 },
			pointOnTarget: {x: 0, y: 0}
		};
	},
	props: {
		isPrevented: {
			default: false,
			type: Boolean
		}
	},
	methods: {
		cancel() {
			clearTimeout(this.throttle);
			this.throttle = null;
		},
		drag(event) {
			if (this.isPrevented) {
				return;
			}

			this.throttle = setTimeout(() => {
				this.isDragging = true;
	
				this.start.x = event.clientX;
				this.start.y = event.clientY;
				this.pointOnTarget = {
					x: event.offsetX,
					y: event.offsetY
				};
	
				this.$emit('drag');
			}, 150);
			
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
				return this.cancel();
			}

			this.isDragging = false;
			this.start.x = 0;
			this.start.y = 0;

			setTimeout(() => {
				const dropEvent = new MouseEvent('drop', {
					cancelable: true,
					bubbles: true,
					clientX: event.clientX,
					clientY: event.clientY
				});

				this.$el.dispatchEvent(dropEvent);

				this.$el.style.left = 0;
				this.$el.style.top = 0;
			}, 30);
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

	&.active::after {
		position: fixed;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
}
</style>
