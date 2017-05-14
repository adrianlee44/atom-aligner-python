'use strict';

let provider = require('./provider');
module.exports = {
  config: provider.config,
  activate: function() {
    console.log('activate aligner-python');
  },
  getProvider: function() {
    return provider;
  }
};
