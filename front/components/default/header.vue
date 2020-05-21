<template>
    <header class="header">
        <nav class="header__inner">
            <ul class="header__list">
                <li v-for="(link,i) in links"
                    :key="i"
                    class="header__item"
                >
                    <Ref :event="link.event"
                         :to="link.to"
                         :text="link.text"
                         @click.native="link.action ? link.action() : null"
                    />
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
            type: [Boolean, null],

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
    box-shadow: $shadow;
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
