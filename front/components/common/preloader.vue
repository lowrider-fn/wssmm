<template functional>
    <div class="preloader">
        <Icon name="preloader" class="preloader__icon" />
    </div>
</template>
<script>
import Icon from './icon'

export default {
    name      : 'Preeloader',
    components: {
        Icon,
    },
}
</script>
<style lang="scss" scoped>
.preloader {

    position: fixed;

    top: 0;

    left: 0;

    z-index: $ziMax;

    display: flex;

    align-items: center;

    justify-content: center;

    width: 100vw;

    height: 100vh;
    overflow: hidden;

    background: $white;

    transition: all 0.3 linear;
}

.preloader__icon {
    width: 20%;
    height: 20%;
}
</style>
