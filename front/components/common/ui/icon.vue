<template>
    <div class="icon" @click.prevent="$emit('click')" v-html="require(`~/static/icons/${name}.svg?raw`)"></div>
</template>

<script>
export default {
    name : 'Icon',
    props: {
        name: {
            type    : String,
            required: true,
        },
    },
}
</script>
<style lang="scss">
.icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
</style>
