<template>
    <Popup v-if="isShow"
           @close="close()"
    >
        <div class="confirm">
            <h3 class="h3">
                {{ title }}
            </h3>
            <slot></slot>
            <slot name="actions">
                <div class="confirm__btns">
                    <Btn class="btn-red"
                         @click="close()"
                    >
                        Отмена
                    </Btn>
                    <Btn class="btn-green"
                         @click="accept()"
                    >
                        Да
                    </Btn>
                </div>
            </slot>
        </div>
    </Popup>
</template>

<script>
import Popup from './popup'

export default {
    name      : 'Confirm',
    components: {
        Popup,
    },
    props: {
        isShow: {
            type   : Boolean,
            default: false,
        },
        title: {
            type    : String,
            required: true,
        },
    },
    methods: {
        accept() {
            this.$emit('accept')
            this.close()
        },
        close() {
            this.$emit('update:isHide', false)
        },
    },
}
</script>
<style lang="scss" scoped>
.confirm {
    display: grid;
    grid-row-gap: 3rem;
    grid-template-rows: repeat(2,auto);
    width: 30rem;
}

.h3 {
    text-align: center;
}

.confirm__btns {
    display: flex;
    justify-content: space-between;}
</style>
