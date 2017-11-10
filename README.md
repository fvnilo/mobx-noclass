[![npm version](https://badge.fury.io/js/mobx-noclass.svg)](https://badge.fury.io/js/mobx-noclass)

# mobx-noclass

Utility function to create a mobx store without the use of es6 classes.

## Why?

I tend to stay away from ES6 classes. They do are convenient, but I have some issues with them:

* They favor classical inheritance over prototypal inheritance.
* They favor inheritance over composition.
* They re-introduce the `new` keyword which comes from languages that works with classical inheritance and I feel that it strays away from JavaScript's true nature to make developers coming from Java, C++ and other similar languages more comfortable.
* Creating private fields is either hacky or not elegant.

For more information, consult this [awesome list](https://github.com/joshburgess/not-awesome-es6-classes).

## Usage

### createMobxStore(observables, actions)

Creates a new mobx store by passing the observables and the actions on the observables as objects.

Having the actions defined in objects will allow you to have closures that will serve as private fields.

### Example

    import { createMobxStore } from 'mobx-noclass';

    let store = createMobxStore({
      value: 0,
      next() {
        return this.value + 1;
      },
      previous() {
        return this.value - 1;
      }
    },
    {
      inc() {
        return this.value++;
      },
      dec() {
        return this.value--;
      }
    });
