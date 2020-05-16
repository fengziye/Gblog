<template>
    <div id="banner">
        <div class="banner-img" :style="{'background-image': `url(${src})`}"></div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:{
            src:{
                type: String,
                default: 'https://s1.ax1x.com/2020/05/14/YDfxNd.jpg'
            }
        },
        methods:{
        }
    }
</script>

<style scoped lang="less">

    #banner {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 500px;
        .banner-img{
            width: inherit;
            height: inherit;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
    @media (max-width: 960px){
        #banner {height: 400px;}
    }
    @media (max-width: 800px){
        #banner {display: none;}
    }
</style>