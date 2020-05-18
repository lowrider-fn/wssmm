import {
    helpers,
    required,
    email,
    minLength,
    maxLength,
} from 'vuelidate/lib/validators'

const vuelidate = {
    email,
    required,
    minLength,
    maxLength,
    checked  : val => !!val,
    transport: (msgs, call) => helpers.withParams(msgs, () => (call ? call() : true)),
    errEmail() {
        return this.transport({
            required : 'Введите E-mail',
            email    : 'Введите коректный E-mail',
            maxLength: 'Введите не более 60 символов',
        })
    },
    errPhone() {
        return this.transport({
            required : 'Введите телефон',
            minLength: 'Введите не менее 6 символов',
            maxLength: 'Введите не более 32 символов',
            phone    : 'Введите коректный телефон',
        })
    },

    errLogin() {
        return this.transport({
            required : 'Заполните поле',
            minLength: 'Введите не менее 4 символов',
            maxLength: 'Введите не более 32 символов',
        })
    },

    errPwd() {
        return this.transport({
            required : 'Введите пароль',
            minLength: 'Введите не менее 8 символов',
            pwd      : 'Обязательно наличие цифр и символов',
        })
    },

    errChb() {
        return this.transport({
            required: 'Необходимо согласие',
        })
    },

    errKeys(v) {
        const isNotHave = (el, substr) => !el.includes(substr)
        return Object.keys(v).filter(el => isNotHave(el, '$') && isNotHave(el, 'required'))
    },

    errText(v) {
        if (this.isError(v)) {
            const { required, $params } = v
            if (!required) {
                return $params.$err.required
            }

            const keys = this.errKeys(v)
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
                if (!v[key]) {
                    return $params.$err[key]
                }
            }
            return ''
        }
        return ''
    },
    isError(v) {
        if (v) {
            const { $invalid, $dirty } = v
            return $invalid && $dirty
        }
        return false
    },
}

export default vuelidate
