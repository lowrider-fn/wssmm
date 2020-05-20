<template>
    <form class="auth__form">
        <Field v-model="$v.form.email.$model"
               placeholder="Введите email"
               label="Email"
               :value="$v.form.email.$model"
               :isErr="vuelidate.isError($v.form.email)"
               :errText="vuelidate.errText($v.form.email)"
        />
        <Field v-model="$v.form.pwd.$model"
               label="Пароль"
               :type="'password'"
               :value="$v.form.pwd.$model"
               :isErr="vuelidate.isError($v.form.pwd)"
               :errText="vuelidate.errText($v.form.pwd)"
               :placeholder="'Введите пароль'"
               :isPwd="true"
        />
        <div class="auth__btn">
            <Btn :disabled="$v.form.$invalid || IS_LOAD"
                 @click="send()"
            >
                Войти
            </Btn>
        </div>
    </form>
</template>

<script>
import Field from '~/components/common/field'
import Btn from '~/components/common/btn'

import { mapActions, mapGetters } from 'vuex'
import vuelidate from '~/lib/vuelidate'

export default {
    name      : 'Login',
    components: {
        Field, Btn,
    },
    beforeRouteEnter(to, from, next) {
        to.meta.title = 'Авторизация'
        next()
    },
    data() {
        return {
            vuelidate,
            form: {
                email: '',
                pwd  : '',
            },
        }
    },

    validations: {
        form: {
            required: vuelidate.required,
            email   : {
                required: vuelidate.required,
                email   : vuelidate.email,
                $err    : vuelidate.errEmail(),
            },
            pwd: {
                required : vuelidate.required,
                minLength: vuelidate.minLength(8),
                pwd      : vuelidate.checkPwd,
                $err     : vuelidate.errPwd(),
            },
        },

    },
    computed: {
        ...mapGetters('auth', [
            'IS_LOAD',
        ]),
    },
    methods: {
        emitHandler() {
            if (!this.$v.form.$invalid) this.$emit('send', this.form)
        },
        ...mapActions('auth', [
            'login',
        ]),
        send() {
            if (!this.$v.form.$invalid) {
                this.login(this.form)
                    .then(() => this.$router.push({ name: 'profile' }))
            }
        },
    },
}
</script>

// <style lang="scss" scoped>
// </style>
