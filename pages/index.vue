<template>
    <div class="home">
        <div class="video">
            <iframe src="https://www.youtube.com/embed/c3l54aa4Nn8"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            ></iframe>
        </div>
        <div class="work">
            <div class="work__box">
                <h3>ОБУЧЕНИЕ</h3>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
            <div class="work__box">
                <h3>ПРОДВИЖЕНИЕ</h3>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
            <div class="work__box">
                <h3>ДИЗАЙН</h3>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
            <div class="work__box">
                <h3>РАЗРАБОТКА</h3>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
        </div>
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
        <div class="form">
            <h2>Обсудить проект</h2>
            <form>
                <input type="text" placeholder="имя">
                <input type="text" placeholder="телефон">
                <input type="text" placeholder="эмейл">
                <textarea placeholder="расскажите об идее"></textarea>
                <button type="button">
                    отправить
                </button>
            </form>
        </div>
        <div class="command">
            <h2>
                Команда
            </h2>
            <div class="command__container">
                <figure v-for="(user,i) in users" :key="i"
                        class="command__box"
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
    </div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
    components: {
    },
    async asyncData() {
        const { data } = axios.get('/api/users');
        return { users: dataaaaa };
    },
    head() {
        return {
            title: 'Users',
        };
    },
};
</script>

<style lang="scss" scoped>
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

.video {

    iframe {
        width: 100%;
        height: 300px;
    }
}

.work {
    display: grid;
    grid-gap: 3%;
    grid-template-columns: repeat(4,1fr);

    .work__box {
        display: grid;

        grid-gap: 1.5rem;
    }
}

.portfolio {
    display: grid;
    grid-gap: 2rem;

    .portfolio__box {
        display: grid;
        grid-gap: 3rem;
        grid-template: 'img img' auto 'img img' auto;
    }

    .portfolio__img {
        width: 100%;
        object-fit: cover;
    }
}

.why__container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(4,1fr);
}

.why__box {
    text-align: center;
}

.form {

    form {
        display: grid;
        grid-gap: 1.5rem;
        grid-template-columns: 300px;
    }

    input,textarea {
        border: 1px solid black;
    }
}

.command {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-rows: repeat(3,auto);
}

.command__container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(4,1fr);
}

.command__box {
    text-align: center;
}

.reviews {

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

        border: 0.1rem solid black;
    }

    p {
        margin: 0;
    }

    div {
        display: grid;
        grid-gap: 1rem;
    }
}

</style>
