/* eslint-env node */
'use strict';

module.exports = {
  name: 'blog-loading',
  contentFor: function(type, config){
    if (type === 'head'){
      return '';
    } else if (type === 'head-footer'){
      return '';
    } else if (type === 'body'){
      return '';
    } else if (type === 'body-footer'){
      if (config.environment === 'test') {
        return '';
      } else {
        return '';
      }
    }
  }
};