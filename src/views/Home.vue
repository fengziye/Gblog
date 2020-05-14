<template>
    <div class="home">
        <banner></banner>
        <div class="site-content">
            <div class="slogan">
                向上的路并不拥挤，大多数选择了安逸！
            </div>
            <!--焦点图-->
            <div class="top-feature">
                <section-title>聚焦</section-title>
                <div class="feature-content">
                    <div class="feature-item" v-for="item in features" :key="item.title">
                        <Feature :data="item"></Feature>
                    </div>
                </div>
            </div>
            <!--文章列表-->
            <main class="site-main">
                <section-title>推荐</section-title>
                <template v-for="item in postList">
                  <post :key="item"></post>
                </template>
            </main>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/banner'
    import Feature from '@/components/feature'
    import sectionTitle from '@/components/section-title'
    import Post from '@/components/post'

    export default {
        name: 'Home',
        data() {
            return {
                features: [
                    {
                        title: 'Akina',
                        img: 'https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature1.jpg',
                        href: 'https://zhebk.cn/Web/Akina.html'
                    },
                    {
                        title: '使用说明',
                        img: 'https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature2.jpg',
                        href: 'https://zhebk.cn/userAkina.html'
                    },
                    {
                        title: '文章归档',
                        img: 'https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature3.jpg',
                        href: 'https://zhebk.cn/archives.html'
                    }
                ],
                postList: 5
            }
        },
        components: {
            Banner,
            Feature,
            sectionTitle,
            Post
        }
    }
</script>
<style scoped lang="less">
    @media (max-width: 800px) {
        .top-feature {
            display: none;
        }
    }

    .site-content {
        .slogan {
            padding: 20px;
            margin: 60px 0;
            background-color: #FBFBFB;
            border-radius: 3px;
        }
    }

    .top-feature {
        width: 100%;
        height: auto;
        margin-top: 30px;

        .feature-content {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            position: relative;

            .feature-item {
                width: 32.9%;
            }
        }
    }

    .site-main {
        padding: 80px 0 0 0;
    }
</style>