<template>
    <section id="app">
        <Header :links="links"
                :isAuth="IS_AUTH"
        />
        <main class="main">
            <nuxt />
        </main>
        <NotifList />
        <Confirm :isShow="isShow"
                 :isHide.sync="isShow"
                 title="Вы действительно хотите выйти?"
                 @accept="logout()"
        />
        <Footer :links="links"
                :isAuth="IS_AUTH"
        />
    </section>
</template>
<script>
import Header from '~/components/blocks/header'
import Footer from '~/components/blocks/footer'
import NotifList from '~/components/common/notif/notif-list'
import Confirm from '~/components/common/confirm'
import { mapGetters, mapActions } from 'vuex'

export default {
    name      : 'DefaultLayout',
    components: {
        Header,
        Footer,
        NotifList,
        Confirm,
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
                    action: this.showConfirm,
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
                .then(() => this.$router.push('/auth'))
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
