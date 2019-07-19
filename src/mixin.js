import ModalWrapper from './ModalWrapper';

export function applyMixin(Vue) {
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
