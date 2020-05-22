<template>
    <h1>
        Мои курсы
    </h1>
</template>

<script>
export default {
    name      : 'Courses',
    layout    : 'profile',
    middleware: 'auth',
    head() {
        return {
            title: 'Мои курсы',
        }
    },
}
</script>

// <style lang="scss" scoped>

// </style>
