<template>
    <div id="banner" :class="{'home-banner':isHome}">
        <div class="banner-img" :style="{'background-image': `url(${src})`}">
            <template v-if="isHome">
                <!--博主信息-->
                <div class="focusinfo">
                    <!-- 头像 -->
                    <div class="header-tou">
                        <a href="https://zhebk.cn/"><img src="//q.qlogo.cn/g?b=qq&amp;nk=945203919&amp;s=160"></a>
                    </div>
                    <!-- 简介 -->
                    <div class="header-info">
                        <p>The way up is not crowded, and most chose ease.</p>
                    </div>
                    <!-- 社交信息 -->
                    <div class="top-social">
                        <li class="qq"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=945203919&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/qq.png"></a></li>
                        <li><a href="https://github.com/Zisbusy" target="_blank" rel="nofollow noopener noreferrer" class="social-github"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/github.png"></a></li>
                        <li><a href="https://space.bilibili.com/86455197" target="_blank" rel="nofollow noopener noreferrer" class="social-bilibili"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/bilibili.png"></a></li>
                    </div>
                </div>
                <!--左右倾斜-->
                <div class="slant-left"></div>
                <div class="slant-right"></div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:{
            src:{
                // https://s1.ax1x.com/2020/05/14/YDfxNd.jpg
                type: String,
                default: 'https://cdn.zhebk.cn/usr/themes/Akina/images/headerbg.jpg'
            },
            isHome:{
                type: [Boolean,String],
                default: false
            }
        },
        methods:{
        }
    }
</script>

<style scoped lang="less">

    #banner {
        position: relative;
        margin-top: 80px;
        width: 100%;
        height: 500px;
        .banner-img{
            width: inherit;
            height: inherit;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
        &.home-banner {
            height: 550px;
            .banner-img{
                background-position: center center;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
                z-index: -1;
            }
            .slant-left {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                border-bottom: 100px solid #FFF;
                border-right: 800px solid transparent;
                left: 0;
                bottom: 0;
            }
            .slant-right {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                border-bottom: 100px solid #FFF;
                border-left: 800px solid transparent;
                right: 0;
                bottom: 0;
            }
        }
    }
    .focusinfo {
        position: relative;
        max-width: 800px;
        padding: 0 10px;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        text-align: center;
        img {
            width: 80px;
            height: auto;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.3);
        }
        .header-info {
            width: 60%;
            font-size: 14px;
            color: #EAEADF;
            background: rgba(0, 0, 0, 0.66);
            padding: 20px 30px;
            margin: 30px auto 0 auto;
            font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
            letter-spacing: 1px;
            line-height: 30px;
        }
        .top-social {
            height: 32px;
            margin-top: 30px;
            margin-left: 10px;
            list-style: none;
            display: inline-block;
            font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
            li {
                float: left;
                margin-right: 10px;
            }
            img {
                height: 32px;
                width: 32px;
                background: white;
            }
        }
    }
    @media (max-width: 960px){
        #banner {height: 400px;}
    }
    @media (max-width: 800px){
        #banner {display: none;}
    }
</style>