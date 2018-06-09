import RendererObject from './base';
import Widget from './Widget.vue';

const WIDGET_GRID = {
	step: 50,
	origin: {
		x: 'right',
		y: 'top'
	}
};

export default class IconRendererObject extends RendererObject {
	get component() {
		return Widget;
	}

	get grid() {
		return WIDGET_GRID;
	}
}