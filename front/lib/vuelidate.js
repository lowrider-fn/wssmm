import {
    helpers,
    required,
    email,
    minLength,
    maxLength,
} from 'vuelidate/lib/validators'

const reg = {
    pwd  : /^(?=.*[0-9])(?=.*[-_()!@#$%^&*~])(?=.*[a-z])(?=.*[A-Z])/,
    num  : /^(?=.*[0-9])/,
    phone: /^[+]{1}[0-9]{1} [(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
}
const vuelidate = {
    email,
    required,
    minLength,
    maxLength,
    checked   : (val) => !!val,
    transport : (msgs, call) => helpers.withParams(msgs, () => (call ? call() : true)),
    checkPwd  : (val) => reg.pwd.test(val),
    checkPhone: (val) => reg.phone.test(val),
    checkEqual: (val1, val2) => val1 === val2,
    errEmail() {
        return this.transport({
            required : 'Введите E-mail',
            email    : 'Введите коректный E-mail',
            maxLength: 'Введите не более 60 символов',
        })
    },
    errPhone() {
        return this.transport({
            required : 'Введите номер телефона',
            maxLength: 'Длинна номера 11 символов',
            phone    : 'Введите коректный телефон',
        })
    },

    errBase({ max = 32, min = 4 }) {
        return this.transport({
            required : 'Заполните поле',
            minLength: `Введите не менее ${min} символов`,
            maxLength: `Введите не более ${max} символов`,
        })
    },
    errDate() {
        return this.transport({
            required: 'Заполните поле',
            date    : 'Введите корректную дату',
        })
    },
    errPwd() {
        return this.transport({
            required : 'Введите пароль',
            minLength: 'Введите не менее 8 символов',
            pwd      : 'Обязательно наличие цифр,символов и заглавных букв',
        })
    },
    errConfirmPwd() {
        return this.transport({
            required: 'Подтвердите пароль',
            equal   : 'Пароли не совпадают',
        })
    },
    errCode() {
        return this.transport({
            required: 'Введите код из письма',
        })
    },
    errChb() {
        return this.transport({
            checked: 'Необходимо согласие',
        })
    },

    errKeys(v) {
        const isNotHave = (el, substr) => !el.includes(substr)
        return Object.keys(v).filter((el) => isNotHave(el, '$') && isNotHave(el, 'required'))
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
                console.log(v)
                if (!v[key]) {
                    return v.$params.$err[key]
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
