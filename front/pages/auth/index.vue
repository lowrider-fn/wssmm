<template>
    <form
        class="auth__form"
    >
        <Field v-model="$v.form.login.$model"
               placeholder="Имя"
               label="Имя"
               :value="$v.form.login.$model"
               :isErr="vuelidate.isError($v.form.login)"
               :errText="vuelidate.errText($v.form.login)"
        />
        <Field v-model="$v.form.pwd.$model"
               :label="'Your password'"
               :type="'password'"
               :value="$v.form.pwd.$model"
               :isErr="vuelidate.isError($v.form.name)"
               :errText="vuelidate.errText($v.form.name)"
               :placeholder="'Password'"
        />
        <div class="auth__btn">
            <Btn :disabled="$v.form.$invalid"
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
import { mapActions } from 'vuex'

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
                login: '',
                pwd  : '',
            },
        }
    },
    validations: {
        form: {
            required: vuelidate.required,
            login   : {
                required : vuelidate.required,
                maxLength: vuelidate.maxLength(32),
                minLength: vuelidate.minLength(4),
                $err     : vuelidate.errLogin(),
            },
            pwd: {
                required : vuelidate.required,
                minLength: vuelidate.minLength(8),
                $err     : vuelidate.errPwd(),
            },
        },

    },
    methods: {
        emitHandler() {
            if (!this.$v.form.$invalid) this.$emit('send', this.form)
        },
        ...mapActions([
            'login',
        ]),
        send(form) {
            if (!this.$v.form.$invalid) {
                this.login(form)
                    .then((data) => {
                        this.err = ''
                        this.$route.redirect('/')
                    })
                    .catch((err) => {
                        this.err = err
                        console.error(`${err}`)
                    })
            }
        },
    },
}
</script>

// <style lang="scss" scoped>
// </style>
