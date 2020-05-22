<template>
    <section id="app">
        <Header :links="links"
                :isAuth="IS_AUTH"
        />
        <main class="main">
            <nuxt />
        </main>
        <Notifs />
        <Confirm :isShow="isShow"
                 :isHide.sync="isShow"
                 title="Вы действительно хотите выйти?"
                 @accept="logoutHanler()"
        />
        <Footer :links="links"
                :isAuth="IS_AUTH"
        />
    </section>
</template>
<script>
import Header from '~/components/default/header'
import Footer from '~/components/default/footer'
import Notifs from '~/components/common/blocks/notifs'
import Confirm from '~/components/common/blocks/confirm'
import { mapGetters, mapActions } from 'vuex'

export default {
    name      : 'ProfileLayout',
    components: {
        Header,
        Footer,
        Notifs,
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
                    to  : { name: 'profile' },
                    text: 'Мои курсы',
                },
                {
                    to  : { name: 'profile-shop' },
                    text: 'Магазин',
                },
                {
                    to  : { name: 'profile-settings' },
                    text: 'Настройки',
                },
                {
                    to  : { name: 'profile-feedback' },
                    text: 'Обратная связь',
                },
                {
                    to    : { name: 'auth' },
                    text  : 'Выйти',
                    event : '',
                    action: this.showConfirm,
                },
            ]
        },
    },
    methods: {
        ...mapActions('auth', [
            'logout',
        ]),
        logoutHanler() {
            this.logout()
                .then(() => this.$router.push({ name: 'auth' }))
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
