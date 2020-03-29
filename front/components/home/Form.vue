<template>
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
</template>

<script>
export default {
    name: 'Form',

}
</script>

<style lang="scss" scoped>

.form {
    //
}

form {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 300px;
}

input,textarea {
    border: 1px solid #000;
}
</style>
