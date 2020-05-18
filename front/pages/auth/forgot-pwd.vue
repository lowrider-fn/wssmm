<template>
    <form v-if="$route.meta.title"
          class="auth__form"
    >
        <Field v-model="$v.form.login.$model"
               v-if="!$route.meta.admin"
               :value="$v.form.email.$model"
               :label="'Your login'"
               :validate="$v.form.email"
               :placeholder="'Login'"
        />
        <Field v-model="$v.form.pwd.$model"
               :label="'Your password'"
               :type="'password'"
               :value="$v.form.pwd.$model"
               :validate="$v.form.pwd"
               :placeholder="'Password'"
        />
        <div class="auth__btn">
            <Btn :disabled="$v.form.$invalid"
                 @click="emitHandler()"
            >
                Войти
            </Btn>
        </div>
    </form>
</template>

<script>
import Field from '~/components/common/field'
import Btn from '~/components/common/btn'

import { required, email, helpers } from 'vuelidate/lib/validators'

const err = text => helpers.withParams({ text }, () => true)
export default {
    name      : 'AuthLogin',
    components: {
        Field, Btn,
    },
    data() {
        return {
            form: {
                email: '',
                pwd  : '',
            },
        }
    },
    beforeRouteEnter(to, from, next) {
        to.meta.title = 'Востановление пароля'
        next()
    },
    validations() {
        if (this.$route.meta.admin) {
            return {
                form: {
                    required,
                    pwd: {
                        required,
                    },
                },
            }
        }
        return {
            form: {
                required,
                email: {
                    required,
                    email,
                    err: err('Email not valid'),
                },
                pwd: {
                    required,
                },
            },
        }
    },
    methods: {
        emitHandler() {
            if (!this.$v.form.$invalid) this.$emit('send', this.form)
        },
    },
}
</script>

// <style lang="scss" scoped>
// </style>
