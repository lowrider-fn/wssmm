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
                 @accept="logoutHanler()"
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
    name      : 'ProfileLayout',
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
                    href  : '/auth',
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
