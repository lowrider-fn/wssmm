<template>
    <transition name="modal">
        <div class="modal__mask">
            <div class="modal__wrapper">
                <div v-on-clickaway="close"
                     class="modal__container"
                >
                    <div class="modal__inner">
                        <slot>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { directive as onClickaway } from 'vue-clickaway'

export default {
    name      : 'Popup',
    directives: {
        onClickaway,
    },
    props: {
        isShow: {
            type   : Boolean,
            default: false,
        },
    },
    methods: {
        close() {
            this.$emit('close')
        },
    },

}
</script>

<style lang="scss" scoped>
.modal__mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;

    width: 100%;
    height: 100%;

    background-color: $overlay;

    transition: opacity 0.5s ease;
}

.modal__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.modal__container {
    display: inline-block;
    padding: 3rem;

    background-color: $white;
    border-radius: $br;
    box-shadow: $shadow;

    transition: all 0.5s ease;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal__container,
.modal-leave-active .modal__container {
    transform: scale(1.2);
}
</style>
