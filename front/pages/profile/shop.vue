<template>
    <h1>
        Магазин
    </h1>
</template>

<script>
export default {
    name      : 'Shop',
    layout    : 'profile',
    middleware: 'auth',
    head() {
        return {
            title: 'Магазин',
        }
    },
}
</script>

// <style lang="scss" scoped>

// </style>
