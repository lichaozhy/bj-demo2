import WidgetRendererObject from '../utils/renderer/widget';

import Email from './Email';
import Statistics from './Statistics';
import Notification from './Notification';
import Warning from './Warning';
import RSS from './RSS';

WidgetRendererObject.register('email', Email);
WidgetRendererObject.register('statistics', Statistics);
WidgetRendererObject.register('notification', Notification);
WidgetRendererObject.register('warning', Warning);
WidgetRendererObject.register('RSS', RSS);