import { test } from 'tape';

import { createMobxStore } from '../src';

test('store', assert => {
  assert.plan(4);

  let store = createMobxStore(
    {
      value: 0,
      next() {
        return this.value + 1;
      }
    },
    {
      inc() {
        this.value++;
      }
    });

  assert.equal(store.value, 0, 'store value must equal 0');
  assert.equal(store.next, 1, 'store\'s next computed value must equal 1');

  store.inc();

  assert.equal(store.value, 1, 'store value must equal 1');
  assert.equal(store.next, 2, 'store\'s next computed value must equal 2');
});

test('store with private fields', assert => {
  assert.plan(2);

  const createStore = () => {
    let value = 0;

    return createMobxStore(
      {
        isOdd: false
      },
      {
        inc() {
          value++;

          this.isOdd = value % 2 === 0;
        }
      });
  };

  let store = createStore();

  assert.equal(store.isOdd, false, 'store isOdd value must be false');

  store.inc();
  store.inc();

  assert.equal(store.isOdd, true, 'store isOdd value must be true');
});
