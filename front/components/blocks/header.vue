<template>
    <header class="header">
        <nav class="header__inner">
            <ul class="header__list">
                <li v-for="(link,i) in links"
                    :key="i"
                    class="header__item"
                >
                    <router-link v-if="link.isShow"
                                 class="link-nav"
                                 :to="link.href"
                                 @click.native="link.action($event);"
                    >
                        {{ link.text }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props: {
        isAuth: {
            type    : Boolean,
            requared: true,
        },
        links: {
            type    : Array,
            requared: true,
        },
    },

}
</script>
<style lang="scss" scoped>
.header {
    box-shadow: 0 0 1rem $overlay;
}

.header__inner {
    @include inner;

    display: flex;

    justify-content: flex-end;

    @include mobile {
        display: block;
    }

    padding-top: 2rem;
}

.header__list {
    display: flex;

    justify-content: flex-end;

    @include reset-list;

    @include mobile {
        display: block;
    }
}
</style>
