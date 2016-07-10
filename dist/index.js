'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createMobxStore = createMobxStore;

var _mobx = require('mobx');

function createMobxStore() {
  var observables = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var actions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var store = Object.create(actions);

  (0, _mobx.extendObservable)(store, observables);

  return store;
}
