<template>
    <div
        class="notif"
        @click="$emit('close')"
    >
        <div class="notif__icon"
             v-html="icon"
        ></div>
        <p class="text notif__msg">
            {{ notif.msg }}
        </p>
    </div>
</template>

<script>

import { sprite } from './sprite'

export default {
    props: {
        notif: {
            type    : Object,
            required: true,
        },
    },
    computed: {
        icon() {
            return sprite[this.notif.icon]
        },
    },
}
</script>

 <style lang="scss" scoped>
.notif {
    display: grid;
    grid-column-gap: 1.5rem;
    grid-template-columns: 3rem auto;
    align-items: center;
    width: 30rem;
    margin-bottom: 1.5rem;
    padding: 1rem;

    color: $white;

    background: $overlay;
    border-radius: $br;
    cursor: pointer;
}

.notif__icon {
    display: inline-flex;
    align-items: center;

    justify-content: center;
    width: 3rem;
    height: 3rem;
}
</style>
