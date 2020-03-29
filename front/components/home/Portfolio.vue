<template>
    <div class="portfolio">
        <h2>ПОРТФОЛИО</h2>
        <div class="portfolio__box">
            <img class="portfolio__img" src="https://dummyimage.com/600x400/000/fff" alt="">
            <img class="portfolio__img" src="https://dummyimage.com/600x400/000/fff" alt="">
            <img class="portfolio__img" src="https://dummyimage.com/600x400/000/fff" alt="">
            <img class="portfolio__img" src="https://dummyimage.com/600x400/000/fff" alt="">
        </div>
        <a href="/">все работы</a>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',

}
</script>

<style lang="scss" scoped>

.portfolio {
    display: grid;
    grid-gap: 2rem;

}

.portfolio__box {
    display: grid;
    grid-gap: 3rem;
    grid-template: 'img img' auto 'img img' auto;
}

.portfolio__img {
    width: 100%;
    object-fit: cover;
}
</style>
