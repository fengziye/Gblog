<template>
    <div class="article">
        <banner></banner>
        <div class="site-content">
            <main id="main" class="site-main">

            </main>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/banner'

    export default {
        name: 'article',
        components: {
            Banner
        }
    }
</script>
<style scoped lang="less">
    .site-content{
        .main{
            padding: 80px 0 0 0;
        }
    }
</style>