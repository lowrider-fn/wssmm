<template>
    <section id="app">
        <Header :links="links" :isAuth="IS_AUTH" />
        <main class="main">
            <nuxt />
        </main>
        <NotifList />
        <Footer :links="links" :isAuth="IS_AUTH" />
    </section>
</template>
<script>
import Header from '~/components/blocks/header'
import Footer from '~/components/blocks/footer'
import NotifList from '~/components/common/notif/notif-list'

import { mapGetters, mapActions } from 'vuex'

export default {
    name      : 'DefaultLayout',
    components: {
        Header,
        Footer,
        NotifList,
    },
    computed: {
        ...mapGetters('auth', [
            'IS_AUTH',
        ]),
        links() {
            return [
                {
                    href  : '/',
                    text  : 'Продукты',
                    isShow: true,
                    action: () => {},
                },
                {
                    href  : '/auth',
                    text  : 'Авторизация',
                    isShow: !this.IS_AUTH,
                    action: () => {},
                },
                {
                    href  : '/auth/register',
                    text  : 'Регистрация',
                    isShow: !this.IS_AUTH,
                    action: () => {},
                },
                {
                    href  : '/auth',
                    text  : 'Выйти',
                    isShow: this.IS_AUTH,
                    action: e => this.$emit('logout'),
                },
            ]
        },
    },
    methods: {
        ...mapActions([
            'logout',
        ]),
        logoutHanler() {
            this.logout()
                .then((res) => {
                    this.$router.push({ name: 'Auth' })
                })
                .catch((err) => {
                    console.error(`${err}`)
                })
        },

    },
}
</script>
<style lang="scss" scoped>
.main {
    min-height: 100vh;
}
</style>
