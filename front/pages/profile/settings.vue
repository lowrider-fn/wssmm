<template>
    <h1>
        Настройки
    </h1>
</template>

<script>
export default {
    name      : 'Settings',
    layout    : 'profile',
    middleware: 'auth',
    head() {
        return {
            title: 'Настройки',
        }
    },
}
</script>

// <style lang="scss" scoped>

// </style>
