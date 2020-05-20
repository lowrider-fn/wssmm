<template>
    <div class="auth">
        <h1 class="h1">
            {{ title }}
        </h1>
        <nuxt-child />
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name      : 'Auth',
    middleware: 'non-auth',
    data() {
        return {
            isLogin: true,
        }
    },
    computed: {
        title() {
            return this.$route.meta.title
        },
    },
    head() {
        return {
            title: this.title,
        }
    },
    methods: {
        ...mapActions([
            'login',
            'registration',
            'adminLogin',
        ]),
    },
}
</script>
<style lang="scss">
.auth {
    @include inner;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}

.auth__form {
    width: 100%;
    max-width: 500px;
    padding: 30px 40px 20px;

    border: solid $bw $blue;
    border-radius: $br;
    box-shadow: $shadow;
}

.auth__btn {

    display: flex;
    justify-content: flex-end;
    padding: 1rem;
}

.h1 {
    margin-bottom: 3rem;
}
</style>
