const DEFAULT_GRID = {
	step: 100,
	origin: {
		x: 'right',
		y: 'top'
	}
};

export default class RendererObject {
	constructor(offset) {
		this.$offset = Object.assign({}, offset);
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
}