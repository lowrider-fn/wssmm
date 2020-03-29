<template>
    <div class="reviews">
        <h2>Отзывы</h2>
        <div class="reviews__container">
            <figure class="reviews__box">
                <img src="https://dummyimage.com/50x50/000/fff" alt="">
                <div>
                    <p>Б.Ю.Флександров</p>
                    <p>Сырок</p>
                    <a href="/">Ссылка на сырок</a>
                </div>
            </figure>
            <figure class="reviews__box">
                <img src="https://dummyimage.com/50x50/000/fff" alt="">
                <div>
                    <p>Б.Ю.Флександров</p>
                    <p>Сырок</p>
                    <a href="/">Ссылка на сырок</a>
                </div>
            </figure>
        </div>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Corporis, aliquam velit. Ab veniam praesentium error temporibus
            repellat, dicta vero sequi laborum nemo sint incidunt eaque dolore
            eveniet suscipit, voluptate recusandae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero tempora esse expedita dolorum aut at
            laborum fuga a corrupti odit consequuntur animi quibusdam, fugit dolor maiores
            quia ipsa autem sit!
        </p>
    </div>
</template>

<script>
export default {
    name: 'Reviews',

}
</script>

<style lang="scss" scoped>

.reviews {
    //
}

.reviews__container {
    display: grid;
    grid: max-content/repeat(2,1fr);
    grid-gap: 3rem;
}

.reviews__box {
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    padding: 1rem;

    border: 0.1rem solid #000;
}

p {
    margin: 0;
}

div {
    display: grid;
    grid-gap: 1rem;
}
</style>
