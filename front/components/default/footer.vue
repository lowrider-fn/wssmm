<template>
    <footer class="footer">
        <div class="footer__inner">
            <nav class="footer__nav">
                <ul class="footer__list">
                    <li v-for="(link,i) in links"
                        :key="i"
                        class="footer__item"
                    >
                        <Ref :event="link.event"
                             :to="link.to"
                             :text="link.text"
                             @click.native="link.action ? link.action() : null"
                        />
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
                <p>
                    Телефон для связи
                    <Ref type="a"
                         href="tel:+7 (999) 999-99-99"
                         text='+7 (999) 999-99-99'
                    />
                </p>
                <p>
                    Почта
                    <Ref type="a"
                         href="mailto:wssmm@gmail.com"
                         text='wssmm@gmail.com'
                    />
                </p>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name : 'Footer',
    props: {
        isAuth: {
            type: [Boolean, null],
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
    box-shadow: $shadow;
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
