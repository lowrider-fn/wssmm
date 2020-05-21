<template>
    <section id="app">
        <Header :links="links"
                :isAuth="IS_AUTH"
        />
        <main class="main">
            <nuxt />
        </main>
        <Notifs />
        <Footer :links="links"
                :isAuth="IS_AUTH"
        />
    </section>
</template>
<script>
import Header from '~/components/default/header'
import Footer from '~/components/default/footer'
import Notifs from '~/components/common/blocks/notifs'
import { mapGetters, mapActions } from 'vuex'

export default {
    name      : 'DefaultLayout',
    components: {
        Header,
        Footer,
        Notifs,
    },
    data() {
        return {
            isShow: false,
        }
    },
    computed: {
        ...mapGetters('auth', [
            'IS_AUTH',
        ]),
        links() {
            return [
                {
                    to  : { name: 'index' },
                    text: 'Продукты',
                },
                {
                    to  : { name: 'auth' },
                    text: 'Авторизация',
                },
                {
                    to  : { name: 'auth-register' },
                    text: 'Регистрация',
                },
            ]
        },
    },
    methods: {
        ...mapActions('auth', [
            'logout',
            'checkAuth',
        ]),
        logoutHanler() {
            this.logout()
                .then(() => this.$router.push({ name: 'Auth' }))
        },
        showConfirm() {
            this.isShow = true
        },
    },
}
</script>
<style lang="scss" scoped>
.main {
    height: 100%;
    min-height: 100vh;
}
</style>
