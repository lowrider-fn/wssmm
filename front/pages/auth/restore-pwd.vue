<template>
    <form class="auth__form" @submit.prevent>
        <Field v-model="$v.form.email.$model"
               placeholder="Введите email"
               label="Email"
               :value="$v.form.email.$model"
               :isErr="vuelidate.isError($v.form.email)"
               :errText="vuelidate.errText($v.form.email)"
        />
        <div class="auth__btn">
            <Btn :disabled="IS_LOAD"
                 @click="send()"
            >
                Отправить
            </Btn>
        </div>
    </form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import vuelidate from '~/lib/vuelidate'

export default {
    name      : 'RestorePwd',
    middleware: 'non-auth',
    data() {
        return {
            vuelidate,
            form: {
                email: '',
            },
        }
    },
    beforeRouteEnter(to, from, next) {
        to.meta.title = 'Востановление пароля'
        next()
    },
    validations: {
        form: {
            required: vuelidate.required,
            email   : {
                required: vuelidate.required,
                email   : vuelidate.email,
                $err    : vuelidate.errEmail(),
            },
        },
    },
    computed: {
        ...mapGetters('auth', [
            'IS_LOAD',
        ]),
    },
    methods: {
        ...mapActions('auth', [
            'restore',
        ]),
        send() {
            this.$v.form.$touch()
            if (!this.$v.form.$invalid) {
                this.restore(this.form)
                    .then(() => this.$router.push({ name: 'auth-update-pwd' }))
            }
        },
    },
}
</script>
