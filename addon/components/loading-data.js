import Component from '@ember/component';
import layout from '../templates/components/loading-data';

export default Component.extend({
  layout,
  classNames: ['component-loading-data'],
	classNameBindings: ['isEnabled::d-none'],
	isEnabled: false
});
