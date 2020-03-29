<template>
    <footer class="footer">
        <div>logo</div>
        <div class="nav">
            <a href="/">ОБУЧЕНИЕ</a>
            <a href="/">ПРОДВИЖЕНИЕ</a>
            <a href="/">ДИЗАЙН

            </a>
            <a href="/">РАЗРАБОТКА</a>
            <a href="/">Портфолио</a>
            <a href="/">Кейсы</a>
            <a href="/">Отзывы</a>
            <a href="/">О компании</a>
        </div>
        <div class="btns">
            <button>Рассчитать стоимость</button>
            <button>Оставить заявку</button>
        </div>
        <div class="contacts">
            <div>
                <p>для связи</p>
                <a href="">432143241312</a>
            </div>
            <div>
                <p>почта</p>
                <a href="">pisya@com</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    display: grid;
    grid-template-columns: repeat(4,max-content);
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
}

.nav {
    display: grid;
    grid: repeat(4,auto)/repeat(2,auto);
    grid-gap: 2rem;
}

.btns {
    display: grid;
    grid: repeat(2,auto)/auto;
    grid-gap: 2rem;
}

p {
    margin: 0;
}

.contacts {
    display: grid;
    grid: repeat(2,auto)/auto;
    grid-gap: 2rem;
}
</style>
