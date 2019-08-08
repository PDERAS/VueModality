module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "062d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWrapper_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("49b7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWrapper_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWrapper_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_0_0_node_modules_css_loader_index_js_ref_8_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_0_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWrapper_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "49b7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modalWrapper":"ModalWrapper_modalWrapper_3-f5r","activeModal":"ModalWrapper_activeModal_hFfA2"};

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ModalWrapper.vue?vue&type=script&lang=js&

const getModal = (name, component, createElement, { $style, parent }) => {
    if (parent.$modals.getters.has(name)) {
        const className = $style && $style.activeModal;
        const modalProps = parent.$modals.getters.props(name);
        const modalEvents = parent.$modals.getters.on(name);

        return createElement(
            component,
            {
                key: name,
                class: className,
                props: modalProps,
                on: {
                    ...modalEvents,

                    // 'injected' event, now $emit('close-modal') simply works
                    'close-modal': _ => parent.$modals.hide(name)
                }
            }
        );
    }
};

const mapComponent = (h, { $style, parent}) => {
    return ([key, component]) => getModal(key, component, h, { $style, parent });
};

/* harmony default export */ var ModalWrappervue_type_script_lang_js_ = ({
    functional: true,
    render(h, { $style, parent, props }) {
        const allModals = Object.entries(parent.$modals._available || {})
            .map(mapComponent(h, { $style, parent }));

        const transitionName = props.transitionName || 'default-modal-transition';

        return h(
            'transition-group',
            { class: $style.modalWrapper, attrs: { name: transitionName } },
            allModals
        );
    }
});

// CONCATENATED MODULE: ./src/ModalWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ModalWrappervue_type_script_lang_js_ = (ModalWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/ModalWrapper.vue?vue&type=style&index=0&lang=scss&module=true&
var ModalWrappervue_type_style_index_0_lang_scss_module_true_ = __webpack_require__("062d");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/ModalWrapper.vue
var render, staticRenderFns







function injectStyles (context) {
  
  this["$style"] = (ModalWrappervue_type_style_index_0_lang_scss_module_true_["default"].locals || ModalWrappervue_type_style_index_0_lang_scss_module_true_["default"])

}

/* normalize component */

var component = normalizeComponent(
  src_ModalWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  
)

/* harmony default export */ var ModalWrapper = (component.exports);
// CONCATENATED MODULE: ./src/mixin.js


/**
 * Injects this.$modals into every component
 *
 * @param {Vue} Vue
 */
function applyMixin(Vue) {
    // Globalize the $modals option
    Vue.mixin({ beforeCreate: VueModalityInit });

    // Register global helper component
    Vue.component('VueModality', ModalWrapper);

    /**
     * Modality init hook, injected into each instances init hooks list.
     */
    function VueModalityInit () {
        const options = this.$options;

        // $modals injection
        if (options.modals) {
            this.$modals = typeof options.modals === 'function'
                ? options.modals()
                : options.modals;
        } else if (options.parent && options.parent.$modals) {
            this.$modals = options.parent.$modals;
        }
    }
}

// CONCATENATED MODULE: ./src/utils.js
function assert (condition, msg) {
    if (!condition) throw new Error(`[Modality] ${msg}`);
}

// CONCATENATED MODULE: ./src/index.js



let src_Vue; // bind on install

class Modals {
    constructor(options = {}) {
        // Auto install if it is not done yet and `window` has `Vue`.
        // To allow users to avoid auto-installation in some cases,
        // this code should be placed here. See #731
        if (!src_Vue && typeof window !== 'undefined' && window.Vue) {
            install(window.Vue);
        }

        if (false) {}

        this._available = options.modals || options;

        // Modality internal state
        this._watcherVM = new src_Vue({
            computed: {
                /**
                 * All active modals
                 *
                 * @return {Array}
                 */
                keys() {
                    return Object.keys(this.active);
                },
            },

            data: _ => ({
                /**
                 * All currently active modals
                 *
                 * @var {Object} active
                 */
                active: {}
            }),

            methods: {

                /**
                 * Gets all the available props for a given modal
                 *
                 * @param {String} modal
                 *
                 * @return {Object}
                 */
                props(modal) {
                    return this.active[modal].props;
                },

                /**
                 * Gets all the available events for a given modal
                 *
                 * @param {String} modal
                 *
                 * @return {Object}
                 */
                on(modal) {
                    return this.active[modal].on;
                },

                /**
                 * Checks if a given modal is currently shown
                 *
                 * @param {String} modal
                 *
                 * @return {Boolean}
                 */
                has(modal) {
                    return this.keys.some(m => m === modal);
                },

                /**
                 * Adds a modal to the visible list
                 *
                 * @param {String} modal
                 */
                add(modal) {
                    if (typeof modal === 'object' && typeof modal.modal === 'string') {
                        this.active = {
                            ...(this.active || {}),
                            [modal.modal]: {
                                props: modal.props,
                                on: modal.on
                            }
                        };
                    } else if (false) {}
                },

                /**
                 * Removes a modal from the visible list
                 *
                 * @param {String} modal
                 */
                remove(modal) {
                    // eslint-disable-next-line no-unused-vars
                    const { [modal]: removed, ...rest } = this.active;
                    this.active = rest;
                }
            }
        });
    }

    /**
     * returns all currently active (shown) modals
     *
     * @return {Array}
     */
    get active() {
        return this._watcherVM.keys;
    }

    /**
     * Returns all available modals
     *
     * @return {Array}
     */
    get available() {
        return Object.keys(this._available);
    }

    /**
     * Returns various getters and utility functions
     *
     * @return {Object}
     */
    get getters() {
        return {
            ...this._watcherVM.$options.computed,
            has: this._watcherVM.has,
            visible: this._watcherVM.visible,
            props: this._watcherVM.props,
            on: this._watcherVM.on
        };
    }

    /**
     * Shows a modal
     *
     * @param {String} _name
     * @param {Object?} _options
     */
    show(_name, _options) {
        const opts = typeof _name === 'string'
            ? { ..._options, modal: _name }
            : _name

        this._watcherVM.add(opts);
    }

    /**
     * Hides a modal
     *
     * @param {String} _name
     */
    hide(_name) {
        this._watcherVM.remove(_name);
    }

    /**
     * Checks to see if a specific modal is visible
     *
     * @param {String} _name name of modal in question
     *
     * @return {Boolean}
     */
    has(_name) {
        return this._watcherVM.has(name)
    }
}

/**
 * Installs the Modality package
 *
 * @param {Vue} _Vue
 */
function install(_Vue) {
    if (src_Vue && _Vue === src_Vue) {
        if (false) {}
        return;
    }

    src_Vue = _Vue;

    applyMixin(src_Vue);
}

/* harmony default export */ var src = ({
    Modals,
    install
});



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Modals */__webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return install; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=modality.common.js.map