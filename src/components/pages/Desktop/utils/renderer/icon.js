import RendererObject from './base';
import Icon from './Icon.vue';

const ICON_GRID = {
	step: 120,
	origin: {
		x: 'left',
		y: 'top'
	}
};

export default class IconRendererObject extends RendererObject {
	constructor({ meta, offset }) {
		super(offset);

		this.meta = meta;
	}

	get component() {
		return Icon;
	}

	get grid() {
		return ICON_GRID;
	}
}