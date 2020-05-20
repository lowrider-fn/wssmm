<template>
    <h1>
        Профиль
    </h1>
</template>

<script>
export default {
    name      : 'Profile',
    layout    : 'profile',
    middleware: 'auth',
    head() {
        return {
            title: 'Профиль',
        }
    },
}
</script>

// <style lang="scss" scoped>

// </style>
