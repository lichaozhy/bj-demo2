const DEFAULT_GRID = {
	step: 100,
	origin: {
		x: 'right',
		y: 'top'
	}
};

export default class RendererObject {
	constructor(offset) {
		this.$offset = offset;
	}

	get offset() {
		return Object.assign({}, this.$offset);
	}

	get component() {
		return null;
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

		if (origin.y === 'bottom') {
			this.$object.offset.y =
				Math.floor((field.height + field.top - point.top) / step);
		}
	}
}