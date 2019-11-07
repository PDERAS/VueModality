<script>
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

export default {
    functional: true,
    render(h, { $style, parent, props }) {
        const allModals = Object.entries(parent.$modals._available || {})
            .reverse()
            .map(mapComponent(h, { $style, parent }));

        const transitionName = props.transitionName || 'default-modal-transition';

        return h(
            'transition-group',
            { class: $style.modalWrapper, attrs: { name: transitionName } },
            allModals
        );
    }
};
</script>

<style lang="scss" module>
.modalWrapper {
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    touch-action: none;
    z-index: 9001;
}

.activeModal {
    pointer-events: auto;
    touch-action: auto;
}

:global {
    .default-modal-transition-enter-active,
    .default-modal-transition-leave-active {
        transition: opacity 0.5s;
    }

    .default-modal-transition-enter,
    .default-modal-transition-leave-to {
        opacity: 0;
    }
}
</style>
