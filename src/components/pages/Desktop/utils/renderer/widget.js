import RendererObject from './base';
import Widget from './Widget.vue';

const WIDGET_GRID = {
	step: 50,
	origin: {
		x: 'right',
		y: 'top'
	}
};

const widgetMapping = {};

export default class WidgetRendererObject extends RendererObject {
	constructor({ meta, offset, size }) {
		super(offset);

		this.size = size;
		this.meta = meta;
	}

	get component() {
		return widgetMapping[this.meta.widget];
	}

	get style() {
		const { step } = this.grid;

		return Object.assign({
			height: `${this.size.height * step}px`,
			width: `${this.size.width * step}px`
		}, super.style);
	}

	get grid() {
		return WIDGET_GRID;
	}

	static register(name, componentOptions) {
		widgetMapping[name] = componentOptions;
	}
}