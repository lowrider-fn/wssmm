<template>
    <main id="app">
        <Header :links="links" />
        <nuxt />
        <Footer />
    </main>
</template>
<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
    name      : 'DefaultLayout',
    components: {
        Header,
        Footer,
    },

    data() {
        return {
            links: [
                { text: 'Услуги', to: '/services' },
                { text: 'Портфолио', to: '/portfolio' },
                { text: 'О компании', to: '/about' },
                { text: 'Блог', to: '/blog' },
                { text: 'Контакты', to: '/contact' },
            ],
        };
    },
};
</script>
