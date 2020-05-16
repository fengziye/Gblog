<template>
    <div class="home">
        <banner></banner>
        <div class="site-content">
            <!--通知栏-->
            <div class="notify" @click="isSearch=!isSearch">
                <div class="search-result" v-if="hideSlogan">
                    <span v-if="isSearch">搜索结果："Web" 相关文章</span>
                    <span v-if="isCategory">分类 "Web" 相关文章</span>
                </div>
                <div class="slogan" v-else>
                    向上的路并不拥挤，大多数选择了安逸！
                </div>
            </div>

            <!--焦点图-->
            <div class="top-feature" v-if="!hideSlogan">
                <section-title>聚焦<small-ico></small-ico></section-title>
                <div class="feature-content">
                    <div class="feature-item" v-for="item in features" :key="item.title">
                        <Feature :data="item"></Feature>
                    </div>
                </div>
            </div>
            <!--文章列表-->
            <main class="site-main" :class="{'search':hideSlogan}">
                <section-title v-if="!hideSlogan">推荐</section-title>
                <template v-for="item in postList">
                    <post :post="item" :key="item.id"></post>
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
    import SmallIco from '@/components/small-ico'
    import {fetchFocus,fetchList} from '../api'
    export default {
        name: 'Home',
        data() {
            return {
                isSearch: false,
                isCategory: false,
                features: [],
                postList: []
            }
        },
        components: {
            Banner,
            Feature,
            sectionTitle,
            Post,
            SmallIco
        },
        computed: {
          hideSlogan(){
            return this.isSearch || this.isCategory
          }
        },
        methods: {
            fetchFocus(){
                fetchFocus().then(res => {
                    this.features = res.data || []
                }).catch(err => {
                    console.log(err)
                })
            },
            fetchList(){
                fetchList().then(res=>{
                    this.postList = res.data.items || []
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        mounted() {
            this.fetchFocus();
            this.fetchList();
        }
    }
</script>
<style scoped lang="less">

    .site-content {
        .notify {
            margin: 60px 0;
            border-radius: 3px;

            & > div {
                padding: 20px;
            }
        }

        .slogan {
            background-color: #FBFBFB;
        }

        .search-result {
            padding: 15px 20px;
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            border: 1px dashed #ddd;
            color: #828282;
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
        padding-top: 80px;

        &.search {
            padding-top: 0;
        }
    }
    /******/
    @media (max-width: 800px) {
        .top-feature {
            display: none;
        }
        .site-main {
            padding-top: 40px;
        }
        .site-content {
            .notify {
                margin: 30px 0 0 0;
            }
            .search-result {
                margin-bottom: 20px;
                font-size: 16px;
            }
        }
    }
    /******/
</style>