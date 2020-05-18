<template>
    <section class="error">
        <h1 class="error__title">
            {{ error.statusCode }}
        </h1>
        <div class="error__info">
            <h2 class="h2 error__text">
                {{ error.statusCode === 404 ? 'Страница не найдена!' :'Ошибка!' }}
            </h2>
            <p class="text error__text">
                {{ error.message }}
            </p>
            <nuxt-link class="link-nav"
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
}
</script>

<style lang="scss" scoped>
.error {
    @include inner;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: min-content 40rem;
    justify-content: center;
    padding: 10% 1.5rem;
}

// .error__inner {

// }

.error__info {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-rows: repeat(3,min-content);
    align-content: space-between;
    justify-content: start;
}

.error__title {
    font-size: 15rem;
    line-height: 0.8;
}

.error__text {
    color: $grey;

    &.text {
        margin-bottom: 20px;
    }
}

@mixin link {
    color: $blue;
    font-size: 1.6rem;
    line-height: 1.2;

    @include hover-focus {
        opacity: 0.6;
    }
}

.link {
    @include link;

}

.link-nav {
    @include link;
    display: inline-block;

    color: $blue;
    font-weight: 500;
    text-transform: uppercase;

    @include mobile {
        padding: 1rem;
    }

    &:active {
        opacity: 0.6;
    }
}
</style>
