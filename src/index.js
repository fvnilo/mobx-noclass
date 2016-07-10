import { extendObservable } from 'mobx';

export function createMobxStore(observables = {}, actions = {}) {
  let store = Object.create(actions);

  extendObservable(store, observables);

  return store;
}
