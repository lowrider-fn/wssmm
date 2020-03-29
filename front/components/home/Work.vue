<template>
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
</template>

<script>
export default {
    name: 'Work',

}
</script>

<style lang="scss" scoped>
.work {
    display: grid;
    grid-gap: 3%;
    grid-template-columns: repeat(4,1fr);

}

.work__box {
    display: grid;

    grid-gap: 1.5rem;
}
</style>
