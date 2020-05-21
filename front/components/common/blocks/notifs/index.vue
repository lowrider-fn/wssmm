<template>
    <div class="notifs">
        <Notif v-for="notif in NOTIFS"
               :key="notif.id"
               :notif="notif"
               @close="CLOSE(notif.id)"
        />
    </div>
</template>

<script>
import Notif from './notif.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
    name      : 'Notifs',
    components: {
        Notif,
    },
    computed: {
        ...mapGetters('notifs', ['NOTIFS']),
    },
    methods: {
        ...mapMutations('notifs', ['CLOSE']),
    },
}
</script>

<style lang="scss" scoped>
.notifs {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: $ziMax;

    display: grid;
}
</style>
