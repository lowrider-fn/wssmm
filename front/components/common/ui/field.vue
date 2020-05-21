
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
        isPwd: {
            type   : Boolean,
            default: false,
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
    data() {
        return {
            isShow: false,
            id    : `field${(~~(Math.random() * 1e8)).toString(18)}`,
        }
    },
    computed: {
        setType() {
            if (this.isPwd) {
                return (this.isShow && 'text') || this.type
            }
            return this.type
        },
    },
    render(createElement) {
        return createElement('div', {
            class: ['field', { error: this.isErr }],
        },
        [
            createElement('label', {
                class: 'field__label ',
                attrs: { for: this.id },
            }, this.label),
            createElement('div', {
                class: 'field__box',
            }, [
                createElement(this.tag, {
                    class: ['field__area', `field__${this.tag}`, { pr: this.isPwd }],
                    attrs: {
                        id         : this.id,
                        type       : this.setType,
                        placeholder: this.placeholder,
                    },
                    domProps: {
                        value: this.value,
                    },
                    on: {
                        input: (e) => this.$emit('input', e.target.value.trim()),
                    },
                }),
                this.isPwd && createElement('Icon', {
                    class: 'field__icon',
                    props: {
                        name: (this.isShow && 'eye-hide') || 'eye',
                    },
                    on: {
                        click: () => this.isShow = !this.isShow,

                    },
                }),
            ]),

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
    margin-bottom: 1.5rem;
}

.field__label {
    padding: 0.4rem;

    color: $black;
    font-weight: 400;
}

.field__box {
    position: relative;

    display: flex;
    align-items: center;
}

.field__icon {
    position: absolute;
    right: 0.7rem;

    display: flex;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;

    cursor: pointer;
    @include hover {
        opacity: 0.5;
    }
}

.field__area {
    @include hover {
        box-shadow: 0 0 0.5rem #299CB4;
    }
    width: 100%;

    padding: 1rem 0.7rem;

    font-weight: 300;
    font-size: 1.6rem;

    background: $white;

    border: solid $bw $blue;
    border-radius: $br;

    transition: all 0.3s linear;

    &:focus {
        box-shadow: 0 0 0.5rem #299CB4;
    }
}

.pr {
    padding-right: 3.5rem;
}

.field__textarea {
    resize: none;
}

.field__error {
    margin: 0.5rem 0 0 0.5rem;

    color: $red;

    font-size: 1.3rem;

}

.error {

    .field__area {
        border: solid $bw $red;

        @include hover {
            box-shadow: 0 0 0.5rem $red;
        }

        &:focus {
            box-shadow: 0 0 0.5rem $red;
        }

    }
}
</style>
