<template>
    <section class="error">
        <div class="error__inner">
            <h1 class="error__title">
                {{ error.statusCode }}
            </h1>
            <h2 class="error__info">
                {{ error.message }}
            </h2>
            <nuxt-link v-if="error.statusCode === 404"
                       class="error__link"
                       to="/"
            >
                На главную
            </nuxt-link>
        </div>
    </section>
</template>
<script>
export default {
    name : 'ErrorLayout',
    props: {
        error: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.error {
    width: 100%;
    max-width: 120rem;
    height: 100%;
    margin: 0 auto;
    padding: 10% 1.5rem;
}

.error__inner {
    display: grid;
    justify-content: center;
}

.error__title {
    margin-bottom: 3rem;

    font-size: 10rem;
}

.error__info {
    color: #9AABB1;
    font-weight: 300;
}

.error__link {
    cursor: pointer;
}
</style>
