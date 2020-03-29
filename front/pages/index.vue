<template>
    <div class="home">
        <Video />
        <Work />
        <Portfolio />
        <Why />
        <Form />
        <Team :users="users" />
        <Reviews />
    </div>
</template>

<script>
import {
    Form, Portfolio, Work, Team, Why, Video, Reviews,
} from '@/components/home'

export default {
    components: {
        Form, Portfolio, Work, Team, Why, Video, Reviews,
    },
    async asyncData(context) {
        try {
            const res = await context.store.dispatch('users')
            return { users: res.data }
        } catch (err) {
            return { users: [] }
        }
    },
    head() {
        return {
            title: 'SMM агенство полного цикла',
        }
    },
    async mounted() {
        try {
            const res = await this.$store.dispatch('users')
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    },
}
</script>

<style lang="scss" >
.home {
    display: grid;grid-gap: 5rem;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
}

h2 {
    text-align: center;
}
</style>
