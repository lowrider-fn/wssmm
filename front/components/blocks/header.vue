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
                                 @click.native="link.action();"
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
    padding: 1.5rem;

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
