const DEFAULT_GRID = {
	step: 100,
	origin: {
		x: 'left',
		y: 'top'
	}
};

export default class RendererObject {
	constructor(object) {
		this.$object = object;

		console.log(object)
	}

	get offset() {
		return Object.assign({}, this.$object.offset);
	}

	get type() {
		return 'icon';
	}

	get grid() {
		return DEFAULT_GRID;
	}

	get style() {
		const { origin, step } = this.grid;
		const { x, y } = this.offset;

		return {
			[origin.x]: `${x * step}px`,
			[origin.y]: `${y * step}px`
		};
	}

	updateOffset(point, field) {
		const { origin, step } = this.grid;

		if (origin.x === 'left') {
			this.$object.offset.x =
				Math.floor((point.left - field.left) / step);
		}

		if (origin.x === 'right') {
			this.$object.offset.x =
				Math.floor((field.width + field.left - point.left) / step);
		}
		
		if (origin.y === 'top') {
			this.$object.offset.y =
				Math.floor((point.top - field.top) / step);
		}

		if (origin.x === 'bottom') {
			this.$object.offset.y =
				Math.floor((field.height + field.top - point.top) / step);
		}
	}
}