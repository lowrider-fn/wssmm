<template>
    <div class="form">
        <h2>Обсудить проект</h2>
        <form>
            <Field v-model="$v.form.name.$model"
                   placeholder="Имя"
                   label="Имя"
                   :value="$v.form.name.$model"
                   :isErr="vuelidate.isError($v.form.name)"
                   :errText="vuelidate.errText($v.form.name)"
            />
            <Field v-model="$v.form.phone.$model"
                   placeholder="Телефон"
                   label="Телефон"
                   :value="$v.form.phone.$model"
                   :isErr="vuelidate.isError($v.form.phone)"
                   :errText="vuelidate.errText($v.form.phone)"
            />

            <Field v-model="$v.form.email.$model"
                   placeholder="Почта"
                   label="Почта"
                   :value="$v.form.email.$model"
                   :isErr="vuelidate.isError($v.form.email)"
                   :errText="vuelidate.errText($v.form.email)"
            />
            <Field v-model="$v.form.message.$model"
                   placeholder="Расскажите об идее"
                   tag="textarea"
                   label="Расскажите об идее"
                   :value="$v.form.message.$model"
                   :isErr="vuelidate.isError($v.form.message)"
                   :errText="vuelidate.errText($v.form.message)"
            />
            <button type="button" @click="sendHandler()">
                отправить
            </button>
        </form>
    </div>
</template>

<script>
import Field from '@/components/common/Field'

import vuelidate from '@/lib/vuelidate'

export default {
    name      : 'Form',
    components: {
        Field,
    },
    data() {
        return {
            vuelidate,
            default: {
                name   : '',
                phone  : '',
                email  : '',
                message: '',
            },
            form: {
                name   : '',
                phone  : '',
                email  : '',
                message: '',
            },
        }
    },
    validations: {
        form: {
            required: vuelidate.required,
            name    : {
                required : vuelidate.required,
                maxLength: vuelidate.maxLength(32),
                // minLength: vuelidate.minLength(4),
                $err     : vuelidate.errTexts(),
            },
            phone: {
                required : vuelidate.required,
                maxLength: vuelidate.maxLength(32),
                // minLength: vuelidate.minLength(6),
                $err     : vuelidate.errPhone(),
            },
            email: {
                required : vuelidate.required,
                maxLength: vuelidate.maxLength(60),
                // email    : vuelidate.email,
                $err     : vuelidate.errEmail(),
            },
            message: {
                required: vuelidate.required,
                // minLength: vuelidate.minLength(6),
                $err    : vuelidate.errTexts(),
            },
        },
    },
    methods: {
        async sendHandler() {
            await this.$v.$touch()
            if (!this.$v.form.$invalid) {
                this.$emit('login', this.form)
            }
        },
    },
}
</script>

<style lang="scss" scoped>

.form {
    //
}

form {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 300px;
}

input,textarea {
    border: 1px solid #000;
}
</style>
