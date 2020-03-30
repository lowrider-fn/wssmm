
<script>

export default {
    props: {
        type: {
            type   : String,
            default: 'text',
        },
        tag: {
            type   : String,
            default: 'input',
        },
        isErr: {
            type   : Boolean,
            default: false,
        },
        errText: {
            type   : String,
            default: '',
        },
        label: {
            type   : [Number, String],
            default: '',
        },
        value: {
            type   : [Number, String],
            default: '',
        },
        placeholder: {
            type   : String,
            default: '',
        },
    },
    render(createElement) {
        return createElement('div', {
            class: [
                'field',
                { error: this.isErr },
            ],
        },
        [
            createElement('label', {
                class: 'field__label ',
            },
            this.label),

            createElement(this.tag, {
                class: ['field__area', `field__${this.tag}`],
                attrs: {
                    value      : this.value,
                    type       : this.type,
                    placeholder: this.placeholder,
                },
                on: {
                    input: event => this.$emit('input', event.target.value),

                },
            }),

            this.isErr && createElement('p', {
                class: 'field__error',
            },
            this.errText),
        ])
    },
}
</script>

<style lang="scss" scoped
>
.field {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-bottom: 15px;
}

.field__label {
    padding: 4px;

    color: $black;
    font-weight: 400;
    font-size: 16px;
}

.field__area {
    @include hover {
        box-shadow: 0 0 5px #299CB4;
    }

    padding: 7px 5px;

    font-weight: 300;
    font-size: 16px;

    border: solid 1px $blue;
    border-radius: 4px;

    transition: all 0.3s linear;

    &:focus {
        box-shadow: 0 0 5px #299CB4;
    }
}

.field__textarea {
    resize: none;
}

.field__error {
    margin: 5px 0 0 5px;

    color: $red;
    font-size: 13px;
}
</style>
