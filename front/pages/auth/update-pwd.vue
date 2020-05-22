<template>
    <form class="auth__form" @submit.prevent>
        <Field v-model="$v.form.pwd.$model"
               label="Новый пароль"
               :type="'password'"
               :value="'$v.form.pwd.$model'"
               :isErr="vuelidate.isError($v.form.pwd)"
               :errText="vuelidate.errText($v.form.pwd)"
               :placeholder="'Введите новый пароль'"
               :isPwd="true"
        />
        <Field v-model="$v.form.pwdConfirm.$model"
               label="Подтверждение пароля"
               :type="'password'"
               :value="$v.form.pwdConfirm.$model"
               :isErr="vuelidate.isError($v.form.pwdConfirm)"
               :errText="vuelidate.errText($v.form.pwdConfirm)"
               :placeholder="'Повторите пароль'"
               :isPwd="true"
        />
        <Field v-model="$v.form.code.$model"
               placeholder="Введите код из письма"
               label="Код из письма"
               :value="$v.form.code.$model"
               :isErr="vuelidate.isError($v.form.code)"
               :errText="vuelidate.errText($v.form.code)"
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
    name      : 'UpdatePwd',
    middleware: 'non-auth',
    data() {
        return {
            vuelidate,
            form: {
                pwd       : '',
                pwdConfirm: '',
                code      : '',
            },
        }
    },
    beforeRouteEnter(to, from, next) {
        to.meta.title = 'Обновление пароля'
        next()
    },
    validations() {
        return {
            form: {
                required: vuelidate.required,
                pwd     : {
                    required : vuelidate.required,
                    minLength: vuelidate.minLength(8),
                    pwd      : vuelidate.checkPwd,
                    $err     : vuelidate.errPwd(),
                },
                pwdConfirm: {
                    required: vuelidate.required,
                    equal   : (val) => val === this.form.pwd,
                    $err    : vuelidate.errConfirmPwd(),
                },
                code: {
                    required: vuelidate.required,
                    $err    : vuelidate.errCode(),
                },
            },
        }
    },
    computed: {
        ...mapGetters('auth', [
            'isRestore',
            'IS_LOAD',
        ]),
    },
    methods: {
        ...mapActions('auth', [
            'update',
        ]),
        send() {
            this.$v.form.$touch()
            if (!this.$v.form.$invalid) {
                this.update(this.form)
                    .then(() => this.$router.push({ name: 'auth' }))
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.restore {
    display: grid;
    grid-row-gap: 30px;
    grid-template-rows: repeat(2,min-content);
    justify-content: center;
    width: 100%;
}
</style>
