import { applyMixin } from './mixin';
import { assert } from './utils';

let Vue; // bind on install

let deferredPromises = {};

class Modals {
    constructor(options = {}) {
        // Auto install if it is not done yet and `window` has `Vue`.
        // To allow users to avoid auto-installation in some cases,
        // this code should be placed here. See #731
        if (!Vue && typeof window !== 'undefined' && window.Vue) {
            install(window.Vue);
        }

        if (process.env.NODE_ENV !== 'production') {
            assert(Vue, 'must call Vue.use(Modality) before creating a modals instance.');
            assert(this instanceof Modals, 'Modality must be called with the new operator.');
        }

        this._available = options.modals || options;

        // Modality internal state
        this._watcherVM = new Vue({
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
                    } else if (process.env.NODE_ENV === 'development') {
                        console.error('[Modality]: Invalid Modal Format');
                    }
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
        // Disabled background scrolling when modal is open
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';

        const opts = typeof _name === 'string'
            ? { ..._options, modal: _name }
            : _name

        const p = new Promise((resolve, reject) => {
            // defer resolution until Modal closes
            deferredPromises = {
                ...deferredPromises,
                [opts.modal]: { resolve, reject }
            }
        });

        this._watcherVM.add(opts);

        return p;
    }

    /**
     * Hides a modal
     *
     * @param {String} _name
     */
    hide(_name) {
        this._watcherVM.remove(_name);

        // grab & remove the modals promise
        const { [_name]: modalPromise, ...rest } = deferredPromises;

        // reset deferred without modal
        deferredPromises = rest;

        // Enable background scrolling if last model to close
        if (!rest.length) {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        // resolve promise
        modalPromise.resolve()
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
    if (Vue && _Vue === Vue) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(
                '[Modality] already installed. Vue.use(Modality) should be called only once.'
            );
        }
        return;
    }

    Vue = _Vue;

    applyMixin(Vue);
}

export default {
    Modals,
    install
};

export {
    Modals,
    install
};
