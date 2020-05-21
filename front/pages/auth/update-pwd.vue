<template>
    <form class="auth__form">
        <Field v-model="$v.form.email.$model"

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
            <Btn type="button"
                 :disabled="$v.form.$invalid"
                 @click="emitHandler()"
            >
                Войти
            </Btn>
        </div>
    </form>
</template>

<script>

import { required, email, helpers } from 'vuelidate/lib/validators'

export default {
    name: 'UpdatePwd',
    beforeRouteEnter(to, from, next) {
        to.meta.title = 'Введите новый пароль'
        next()
    },
    data() {
        return {
            form: {
                email: '',
                pwd  : '',
            },
        }
    },
    validations: {

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
