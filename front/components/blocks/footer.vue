<template>
    <footer class="footer">
        <div class="footer__inner">
            <nav class="footer__nav">
                <ul class="footer__list">
                    <li v-for="(link,i) in links"
                        :key="i"
                        class="footer__item"
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
            <div class="footer__btns">
                <Btn>
                    Рассчитать стоимость
                </Btn>
                <Btn>
                    Оставить заявку
                </Btn>
            </div>
            <div class="footer__contacts">
                <p>Телефон для связи <a class="link" href="tel:+7 (999) 999-99-99">+7 (999) 999-99-99</a></p>
                <p>Почта <a class="link" href="mailto:gmw@gmail.com">gmw@gmail.com</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
import Btn from '~/components/common/btn'

export default {
    name      : 'Footer',
    components: {
        Btn,
    },
    props: {
        isAuth: {
            type    : Boolean,
            required: true,
        },
        links: {
            type    : Array,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.footer {
    box-shadow: 0 0 1rem $overlay;
}

.footer__inner {
    @include inner;

    display: flex;

    justify-content: space-between;

    @include mobile {
        display: block;
    }
}

.footer__btns {
    display: grid;
    grid-row-gap: 2rem;
    grid-template-rows: repeat(2,min-content);
    justify-content: top;
}

</style>
