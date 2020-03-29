<template>
    <div class="video">
        <iframe src="https://www.youtube.com/embed/c3l54aa4Nn8"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    name: 'Video',
}
</script>

<style lang="scss" scoped>
.video {
    //
}

iframe {
    width: 100%;
    height: 300px;
}
</style>
