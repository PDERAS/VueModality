import { applyMixin } from './mixin';
import { assert } from './utils';

let Vue; // bind on install

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
                anyVisible() {
                    return this.keys.length;
                },

                keys() {
                    return Object.keys(this.all);
                },
            },

            data: _ => ({
                all: {}
            }),

            methods: {

                props(modal) {
                    return this.all[modal].props;
                },

                on(modal) {
                    return this.all[modal].on;
                },

                visible(name) {
                    return this.keys.includes(name);
                },

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
                        this.all = {
                            ...(this.all || {}),
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
                    const { [modal]: removed, ...rest } = this.all;
                    this.all = rest;
                }
            }
        });
    }

    get all() {
        return this._watcherVM.all;
    }

    get available() {
        return this._available;
    }

    get getters() {
        return {
            ...this._watcherVM.$options.computed,
            has: this._watcherVM.has,
            visible: this._watcherVM.visible,
            props: this._watcherVM.props,
            on: this._watcherVM.on
        };
    }

    show(_name, _options) {
        let opts = {};
        if (typeof _name === 'string') {
            opts = {
                ..._options,
                modal: _name
            };
        } else {
            opts = _name;
        }

        this._watcherVM.add(opts);
    }

    hide(_name) {
        this._watcherVM.remove(_name);
    }
}

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
