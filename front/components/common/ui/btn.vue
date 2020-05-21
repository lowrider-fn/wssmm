<template>
    <button type="button" class="btn-blue"
            @click="$emit('click')"
    >
        <slot>
            {{ text }}
        </slot>
    </button>
</template>

<script>
export default {
    name : 'Btn',
    props: {
        text: {
            type   : String,
            default: '',
        },
    },

}
</script>

<style lang="scss" scoped>
@mixin button {

    display: inline-block;
    margin: 0;
    padding: 0;

    background: transparent;
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;

    transition: all 0.3s linear;

    appearance: none;
}

@mixin btn {
    @include button;
    padding: 7px 15px;

    font-weight: 700;

    font-size: 14px;
    text-transform: uppercase;

    border: solid $bw transparent;

    &:disabled {
        @include hover-focus {
            color: $grey;

            background: $white;
            border: solid $bw $grey;
        }

        color: $grey;

        background: $white;
        border: solid $bw $grey;
    }
}

.btn-blue {
    @include btn;
    @include hover-focus {
        color: $white;

        background: $blue;
        border: solid $bw $blue;
    }

    color: $blue;

    border: solid $bw $blue;

    &:active {
        color: $white;

        background: $blue;
        border: solid $bw $blue;
    }
}

.btn-red {
    @include btn;
    @include hover-focus {
        color: $white;

        background: $red;
        border: solid $bw $red;
    }

    color: $red;

    border: solid $bw $red;

    &:active {
        color: $white;

        background: $red;
        border: solid $bw $red;
    }
}

.btn-green {
    @include btn;
    @include hover-focus {
        color: $white;

        background: $green;
        border: solid $bw $green;
    }

    color: $green;

    border: solid $bw $green;

    &:active {
        color: $white;

        background: $green;
        border: solid $bw $green;
    }
}

@mixin btn-link {
    @include button;
    padding: 10px;

    font-size: 13px;

    border: solid $bw transparent;

}

.btn-link-orange {
    @include btn-link;
    @include hover-focus {
        border: solid $bw $orange;
    }

    color: $orange;

    &:active {
        border: solid $bw $orange;
    }
}

.btn-link-red {
    @include  btn-link;
    @include hover-focus {
        border: solid $bw $red;
    }

    color: $red;

    &:active {
        border: solid $bw $red;
    }
}

.btn-link-green {
    @include  btn-link;
    @include hover-focus {
        border: solid $bw $green;
    }

    color: $green;

    &:active {
        border: solid $bw $green;
    }
}
</style>
