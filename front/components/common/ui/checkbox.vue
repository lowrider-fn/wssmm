
<template>
    <div class="checkbox">
        <div class="checkbox__container">
            <span class="checkbox__wrap"
                  :class="{'error':isErr}"
            >
                <input :id="id"
                       class="checkbox__inp"
                       type="checkbox"
                       :checked="checked"
                       @input="$emit('input', $event.target.checked)"
                >
                <span class="checkbox__icon-wrap">
                    <Icon name="checked" class="checkbox__icon" />

                </span>
            </span>
            <label :for="id"><slot></slot></label>
        </div>
        <p v-if="isErr"
           class="checkbox__error"
        >
            {{ errText }}
        </p>
    </div>
</template>

<script>

export default {
    name : 'Checkbox',
    props: {
        checked: {
            type    : Boolean,
            required: true,
        },
        isErr: {
            type   : Boolean,
            default: false,
        },
        errText: {
            type   : String,
            default: '',
        },
    },
    data() {
        return {
            id: `chb${(~~(Math.random() * 1e8)).toString(18)}`,
        }
    },
}
</script>
<style lang="scss" scoped>
.checkbox {
    margin-bottom: 1.5rem;
}

.checkbox__container {
    display: flex;
    align-items: flex-start;
    align-items: center;
}

label {
    margin-left: 1.5rem;
}

.checkbox__wrap {
    position: relative;

    width: 2.5rem;
    height: 2.5rem;

    background: $white;
    border: solid $bw $blue;
    border-radius: 3px;

    box-shadow: 0px 0px 0px #299CB4;
    cursor: pointer;

    transition: all 0.3s linear;

    @include hover {
        box-shadow: 0 0 0.5rem #299CB4;

        .checkbox__icon {
            opacity: 0.5;
        }
    }
}

.checkbox__inp {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    border: none;
    outline: none;
    visibility: visible;
    cursor: pointer;
    opacity: 0;
}

.checkbox__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    transition: all 0.3s linear;

}

.checkbox__icon {

    position: absolute;
    z-index: 1;

    width: 2rem;
    height: 2rem;

    color: transparent;

    cursor: pointer;
    opacity: 0;

    transition: all 0.3s linear;

    pointer-events: none;
}

.checkbox__inp:checked + .checkbox__icon-wrap {
    background: $blue;
}

.checkbox__inp:checked + .checkbox__icon-wrap .checkbox__icon {
    opacity: 1;
}

.checkbox__error {
    margin: 0.5rem 0 0 0.5rem;

    color: $red;

    font-size: 1.3rem;
}

.error {
    border: solid $bw $red;

    @include hover {
        box-shadow: 0 0 0.5rem $red;
    }

    &:focus {
        box-shadow: 0 0 0.5rem $red;
    }
}
</style>
