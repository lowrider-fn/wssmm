<template>
    <form class="auth__form">
        <Field v-model="$v.form.name.$model"
               :value="$v.form.name.$model"
               :validate="$v.form.name"
               :label="'Your name'"
               :placeholder="'Name'"
        />
        <Field v-model="$v.form.email.$model"
               :value="$v.form.email.$model"
               :validate="$v.form.email"
               :label="'Your email'"
               :placeholder="'Email'"
        />
        <Field v-model="$v.form.pwd.$model"
               :value="$v.form.pwd.$model"
               :validate="$v.form.pwd"
               :label="'Your password'"
               :type="'password'"
               :placeholder="'Password'"
        />
        <Field v-model="$v.form.pwd_confirm.$model"
               :value="$v.form.pwd_confirm.$model"
               :validate="$v.form.pwd_confirm"
               :label="'Confirm your password'"
               :type="'password'"
               :placeholder="'Password confirmation'"
        />
        <div class="auth__btn">
            <Btn :disabled="$v.form.$invalid"
                 @click="emitHandler()"
            >
                Registration
            </Btn>
        </div>
    </form>
</template>

<script>
import Field from '~/components/common/field'
import Btn from '~/components/common/btn'

import { required, email, helpers } from 'vuelidate/lib/validators'

const err = text => helpers.withParams({ text }, () => true)
const checkDouble = text => helpers.withParams({ text },
    (val, form) => (val && form.pwd) && val === form.pwd)
export default {
    name      : 'Register',
    components: {
        Field, Btn,
    },
    beforeRouteEnter(to, from, next) {
        to.meta.title = 'Регистрация'
        next()
    },
    data() {
        return {
            form: {
                name       : '',
                email      : '',
                pwd        : '',
                pwd_confirm: '',
            },
        }
    },
    validations: {
        form: {
            required,
            name: {
                required,
            },
            email: {
                required,
                email,
                err: err('Email not valid'),
            },
            pwd: {
                required,
            },
            pwd_confirm: {
                required,
                err: checkDouble('Passwords do not match'),
            },
        },
    },
    methods: {
        emitHandler() {
            if (!this.$v.form.$invalid) this.$emit('send', this.form)
        },
    },
}
</script>
