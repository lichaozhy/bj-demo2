import IconRendererObject from './icon';
import WidgetRendererObject from './widget';

const typeMapping = {
	icon: IconRendererObject,
	widget: WidgetRendererObject
};

export default function fromDesktopOptions({ list }) {
	const rendererList = [];

	list.forEach(object => {
		rendererList.push(new typeMapping[object.type](object));
	});

	return rendererList;
}