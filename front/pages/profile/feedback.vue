<template>
    <h1>
        Обратная связь
    </h1>
</template>

<script>
export default {
    name      : 'Feedback',
    layout    : 'profile',
    middleware: 'auth',
    head() {
        return {
            title: 'Обратная связь',
        }
    },
}
</script>

// <style lang="scss" scoped>

// </style>
