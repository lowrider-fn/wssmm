<template>
    <section id="app">
        <Header :links="links"
                :isAuth="IS_AUTH"
                @logout="logout()"
        />
        <main class="main">
            <nuxt />
        </main>
        <NotifList />
        <Footer :links="links"
                :isAuth="IS_AUTH"
                @logout="logout()"
        />
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
                    event : 'click',
                    isShow: true,
                    action: () => {},
                },
                {
                    href  : '/auth',
                    text  : 'Авторизация',
                    isShow: !this.IS_AUTH,
                    event : 'click',
                    action: () => {},
                },
                {
                    href  : '/auth/register',
                    text  : 'Регистрация',
                    isShow: !this.IS_AUTH,
                    event : 'click',
                    action: () => {},
                },
                {
                    href  : '/auth',
                    text  : 'Выйти',
                    event : '',
                    isShow: this.IS_AUTH,
                    action: e => this.logoutHanler(e),
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
                .then(res => this.$router.push('/auth'))
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
