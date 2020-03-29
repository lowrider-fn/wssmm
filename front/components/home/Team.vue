<template>
    <div class="team">
        <h2>
            Команда
        </h2>
        <div class="team__container">
            <figure v-for="(user,i) in users" :key="i"
                    class="team__box"
            >
                <img src="https://dummyimage.com/100x200/000/fff" alt="">
                <figcaption>
                    <p>{{ user.name }}</p>
                    <p>Сырок</p>
                </figcaption>
            </figure>
        </div>
        <a href="/">все работы</a>
    </div>
</template>

<script>
export default {
    name : 'Team',
    props: {
        users: {
            type    : Array,
            required: true,
        },
    },

}
</script>

<style lang="scss" scoped>

.team {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-rows: repeat(3,auto);
}

.team__container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(4,1fr);
}

.team__box {
    text-align: center;
}
</style>
