<template>
    <div class="home">
        <h1 class="h1">
            Продукты
        </h1>
    </div>
</template>

<script>

export default {
    name      : 'Index',
    middleware: 'non-auth',
    head() {
        return {
            title: 'GMW продукты',
        }
    },
}
</script>

<style lang="scss" >
.home {
    @include inner;
}
</style>
