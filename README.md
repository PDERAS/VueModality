# Vue Modals

## Install.

Installing `@pderas/modality` follows a similar pattern to other Vue libraries such as [Vuex](https://vuex.vuejs.org/), or [Vue-Router](https://router.vuejs.org/). First installation from npm is recommended `npm install @pderas/modality` or `yarn add @pderas/modality`. Then Modality must be explicitly installed via `Vue.use()`
```js
import Vue from 'vue'
import Modality from '@pderas/modality'

Vue.use(Modality)
```

Optionally, If you choose to apply the default (minimal) styling, The compiled css file can be added to the lines above.
```js
import '@pderas/modality/dist/modality.css';
```

Next we register a new "Modals" object which declares every available modal in the system. Below are 4 different of registering the components, any of which work fine, however if you have many modals to be included, the last option may help reduce your overall bundle size by grouping all of the modals javascript into a separate .js file that will get loaded dynamically when the first modal opens.

```js
import OtherModal from './modals/OtherModal'

const modals = new Modality.Modals({
  // Locks the background while a modal is open
  scrollLock: true,

  modals: {
    // modal declaration format:
    // Modal-Identifier: component

    // 'classic' imports
    'second-modal': require('./modals/SecondModal'),
    'other-modal': OtherModal,

    // dynamic imports
    MyNeatoModal: _ => import('./modals/ExampleModal')

    // code split & chunked imports
    ChunkModal: _ => import(/* webpackChunkName: modality */ './modals/ExampleModal2'),
  }
});
```

2. Provide your modals to your root `Vue` instance, this will inject `this.$modals` into all child components.
```js
new Vue({
  el: '#app',
  modals: modals,
  // ...store, render, template, components, etc
})
```

3. Add the base modal component to your app (likely in App.vue so that modals are visible from everywhere). This component was registered earlier, so you don't need to worry about importing it from anywhere.

```html
<template>
<div>
    <!-- <your-app /> -->

    <!-- Controls All The Modals -->
    <vue-modality />
    <!-- or <vue-modality /> -->
</div>
</template>
```


---

## Usage.

There are three main ways to display the modal. (available options are listed in the next section)
```js
this.$modals.show('MyNeatoModal')

this.$modals.show('MyNeatoModal', options)

this.$modals.show(options)
```

To close the modal
```js
this.$modals.hide('MyNeatoModal')
```

A modal can also close itself by simply emitting a 'close-modal' event.
```js
this.$emit('close-modal')
```

If you wish to run an action on modal close, the `show` function returns a Promise which is resolved when the Modal closes.
```js
this.$modals.hide('MyNeatoModal', 'World!');


let returnVal = await this.$modals.show('MyNeatoModal')
console.log(`Hello, ${returnVal}`) // Hello, World!
```
---

## Options.
A default fade transition is applied, however the transition name can be overriden using the `transition-name` property on the component. For more information on vue transitions, visit: [vuejs.org/v2/guide/transitions](https://vuejs.org/v2/guide/transitions.html)

```html
<vue-modality transition-name="fade" />
```

available options:

| Key       | Type    | Description  |
| --------- | ------- | ----- |
| modal     | String  | modal identifier (if the first argument passed to `.show` is a string, this property is ignored/overridden) |
| props     | Object  | props to be passed to the modal component |
| on        | Object  | event listeners. functions will get called when modal `$emits('event-name') |

---

## Examples.

```js
this.$modals.show({
  modal: 'MyNeatoModal',

  // Props supplied to the modal component
  props: {
    number: 5,
    testString: 'This is passed to the modal'
  },

  // @events. these will respond when the modal $emit's
  on: {
    someEvent: _ => { console.log('Some Event Occurred'); }
  }
})


// this does the same
this.$modals.show('MyNeatoModal', {
  props: {
    number: 5,
    testString: 'This is passed to the modal'
  },
  on: {
    someEvent: _ => { console.log('Some Event Occurred'); }
  }
})
```

and then use these as usual in your modal...
```html
<template>
<div>
  {{ number }}
  {{ testString }}
</div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
    testString: {
      type: String,
      default: 'blank'
    }
  },

  mounted() {
    setTimeout(_ => {
      // will log 'Some Event Occurred' from the component which
      // called this.$modals.show
      this.$emit('someEvent')
    }, 1000)

    setTimeout(_ => {
      // the 'close-modal' event is always
      // available from within modal components
      // automatically closes the modal after 5 seconds
      this.$emit('close-modal')
    }, 5000)
  }
}
</script>
```
