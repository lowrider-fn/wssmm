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
    name      : 'NotifList',
    components: {
        Notif,
    },
    computed: {
        ...mapGetters('notif', ['NOTIFS']),
    },
    methods: {
        ...mapMutations('notif', ['CLOSE']),
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
