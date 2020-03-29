<template>
    <div class="why">
        <h2>
            Почему выбирают нас
        </h2>
        <div class="why__container">
            <figure class="why__box">
                <img src="https://dummyimage.com/50x50/000/fff" alt="">
                <figcaption>Преимущество</figcaption>
            </figure>
            <figure class="why__box">
                <img src="https://dummyimage.com/50x50/000/fff" alt="">
                <figcaption>Преимущество</figcaption>
            </figure>
            <figure class="why__box">
                <img src="https://dummyimage.com/50x50/000/fff" alt="">
                <figcaption>Преимущество</figcaption>
            </figure>
            <figure class="why__box">
                <img src="https://dummyimage.com/50x50/000/fff" alt="">
                <figcaption>Преимущество</figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Why',

}
</script>

<style lang="scss" scoped>
.why__container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(4,1fr);
}

.why__box {
    text-align: center;
}
</style>
