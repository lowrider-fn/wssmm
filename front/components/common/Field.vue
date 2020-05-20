
<script>
const sprite = {
    show: '<svg fill="currentColor" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="nonzero" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>',
    hide: '<svg fill="currentColor" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>',
}
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
                this.isPwd && createElement('div', {
                    class   : 'field__icon',
                    domProps: { innerHTML: (this.isShow && sprite.hide) || sprite.show },
                    on      : {
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
