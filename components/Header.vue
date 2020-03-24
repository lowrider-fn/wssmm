<template>
    <header class="nav">
        <div class="nav__inner">
            <div class="nav__logo-wrap">
                <nuxt-link to="/" class="nav__logo">
                    LOGO
                </nuxt-link>
            </div>
            <nav class="nav__menu">
                <ul class="nav__list">
                    <li v-for="link in links"
                        :key="link.href"
                        class="nav__item"
                    >
                        <NuxtLink class="nav__link" :to="link.to">
                            {{ link.text }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        links: {
            type    : Array,
            required: true,
        },
    },
};
</script>
<style lang="scss" scoped>
.nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;

    width: 100%;

    background: white;
}

.nav__inner {

    display: flex;

    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
}

.nav__logo-wrap {
}

.nav__logo {
}

.nav__menu {

}

.nav__list {
    display: flex;

    justify-content: space-between;

}

.nav__item {
    padding: 15px 20px;
}

.nav__link {
}

</style>
