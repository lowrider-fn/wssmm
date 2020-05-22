<template>
    <form class="auth__form">
        <Field v-model="$v.form.name.$model"
               placeholder="Имя"
               label="Введите имя"
               :value="$v.form.name.$model"
               :isErr="vuelidate.isError($v.form.name)"
               :errText="vuelidate.errText($v.form.name)"
        />
        <Field v-model="$v.form.surname.$model"
               placeholder="Фамилия"
               label="Введите фамилию"
               :value="$v.form.surname.$model"
               :isErr="vuelidate.isError($v.form.surname)"
               :errText="vuelidate.errText($v.form.surname)"
        />
        <Field v-model="$v.form.phone.$model"
               v-mask="'+# (###) ###-##-##'"
               placeholder="Телефона"
               label="Введите номер телефона"
               :value="$v.form.phone.$model"
               :isErr="vuelidate.isError($v.form.phone)"
               :errText="vuelidate.errText($v.form.phone)"
        />
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
               :value="'$v.form.pwd.$model'"
               :isErr="vuelidate.isError($v.form.pwd)"
               :errText="vuelidate.errText($v.form.pwd)"
               :placeholder="'Введите пароль'"
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
        <Checkbox v-model="$v.form.accept.$model"
                  :checked="$v.form.accept.$model"
                  :isErr="vuelidate.isError($v.form.accept)"
                  :errText="vuelidate.errText($v.form.accept)"
        >
            Я ознакомился с
            <Ref href="#" target="_blank" text="политикой"
                 type="a"
            />
        </Checkbox>
        <div class="auth__btn">
            <Btn :disabled="IS_LOAD"
                 @click="send()"
            >
                Registration
            </Btn>
        </div>
    </form>
</template>

<script>
import Field from '~/components/common/ui/field'
import Checkbox from '~/components/common/ui/checkbox'
import Btn from '~/components/common/ui/btn'

import { mapActions, mapGetters } from 'vuex'
import vuelidate from '~/lib/vuelidate'

export default {
    name      : 'Register',
    middleware: 'non-auth',
    components: {
        Field, Btn, Checkbox,
    },
    beforeRouteEnter(to, from, next) {
        to.meta.title = 'Регистрация'
        next()
    },
    data() {
        return {
            vuelidate,
            form: {
                name      : '',
                surname   : '',
                phone     : '',
                email     : '',
                pwd       : '',
                pwdConfirm: '',
                accept    : false,
            },
        }
    },
    validations() {
        return {
            form: {
                required: vuelidate.required,
                name    : {
                    required : vuelidate.required,
                    maxLength: vuelidate.maxLength(32),
                    minLength: vuelidate.minLength(4),
                    $err     : vuelidate.errBase({ max: 32, min: 2 }),
                },
                surname: {
                    required : vuelidate.required,
                    maxLength: vuelidate.maxLength(32),
                    minLength: vuelidate.minLength(2),
                    $err     : vuelidate.errBase({ max: 32, min: 2 }),
                },
                phone: {
                    required: vuelidate.required,
                    phone   : vuelidate.checkPhone,
                    $err    : vuelidate.errPhone(),
                },
                email: {
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
                pwdConfirm: {
                    required: vuelidate.required,
                    equal   : (val) => val === this.form.pwd,
                    $err    : vuelidate.errConfirmPwd(),
                },
                accept: {
                    required: vuelidate.required,
                    checked : vuelidate.checked,
                    $err    : vuelidate.errChb(),
                },
            },
        }
    },
    computed: {
        ...mapGetters('auth', [
            'IS_LOAD',
        ]),
    },
    methods: {
        ...mapActions('auth', [
            'register',
        ]),
        send() {
            this.$v.form.$touch()
            if (!this.$v.form.$invalid) {
                const form = { ...this.form }
                delete form.pwdConfirm
                this.register(form)
                    .then(() => this.$router.push({ name: 'profile' }))
            }
        },
    },
}
</script>
