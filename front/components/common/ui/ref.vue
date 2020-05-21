
<script>
import Icon from './icon'

export default {
    name      : 'Ref',
    components: {
        Icon,
    },
    props: {
        type: {
            type   : String,
            default: 'nuxt-link',
        },
        text: {
            type   : String,
            default: '',
        },
        href: {
            type   : String,
            default: '',
        },
        to: {
            type   : [String, Object],
            default: '',
        },
        event: {
            type   : String,
            default: 'click',
        },
    },
    render(createElement) {
        return createElement(this.type, {
            class: this.type,
            attrs: {
                href: this.href,
            },
            props: {
                to   : this.to,
                event: this.event,
            },
            on: {
                click: () => this.$emit('click'),
            },
        }, this.text)
    },
}
</script>

<style lang="scss" scoped>
@mixin link {
    color: $blue;
    font-size: 1.6rem;
    line-height: 1.2;

    @include hover-focus {
        opacity: 0.6;
    }
}

.a {
    @include link;
}

.nuxt-link {
    @include link;
    display: inline-block;
    padding: 1.5rem;

    color: $blue;
    font-weight: 500;
    text-transform: uppercase;

    @include mobile {
        padding: 1rem;
    }

    &:active {
        opacity: 0.6;
    }
}

</style>
