<template>
    <div id="layout-header" :class="{'fixed':fixed,'hidden':hidden}">
        <div class="site-logo">
            <router-link to="/">
                <img src="../../assets/site-logo.svg" alt="">
                <p class="site-name">Gblog</p>
            </router-link>
        </div>
        <div class="site-menus">
            <div class="menu-item header-search"><header-search/></div>
            <div class="menu-item"><router-link to="/">首页</router-link></div>
            <div class="menu-item hasChild">
                <a href="#">文章</a>
                <div class="childMenu" v-if="category.length">
                    <div class="sub-menu" v-for="item in category" :key="item.title"><router-link :to="`/category/${item.title}`">{{item.title}}</router-link></div>
                </div>
            </div>
            <div class="menu-item"><router-link to="/friend">友链</router-link></div>
            <div class="menu-item"><router-link to="/about">关于</router-link></div>
        </div>
    </div>
</template>

<script>
    import HeaderSearch from '@/components/header-search'
    import {fetchCategory} from '../../api'

    export default {
        name: "layout-header",
        components: {HeaderSearch},
        props: {
            fixed: {
                type: Boolean,
                default: false
            },
            hidden: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                category: []
            }
        },
        created() {
            // this.fetchCategory()
            console.log('created header')
        },
        mounted(){
            this.fetchCategory()
        },
        methods: {
            fetchCategory() {
                fetchCategory().then(res => {
                    this.category = res.data
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #layout-header {
        position: fixed;
        top: 0;
        z-index: 9;
        width: 100%;
        height: 80px;
        padding: 0 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: .3s all ease;
        -webkit-transition: .3s all ease;
        -moz-transition: .3s all linear;
        -o-transition: .3s all ease;
        -ms-transition: .3s all ease;
        &.hidden{
            /*position: fixed;*/
            top: -100px;
        }
        &.fixed{
            /*position: fixed;*/
            /*z-index: 9;*/
            /*top: 0;*/
            background-color: #FFFFFF;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
    }
    @media (max-width: 960px){
        #layout-header{
            padding: 0 20px;
        }
    }
    @media (max-width: 600px){
        #layout-header{
            padding: 0 10px;
        }
    }

    .site-logo {
        text-align: center;

        img {
            width: 60px;
            height: 60px;
        }

        p.site-name {
            font-size: 15px;
            font-weight: bold;
            position: relative;
            top: -10px;
        }
    }

    .site-menus {
        display: flex;
        align-items: center;

        .menu-item {
            min-width: 60px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            position: relative;
            a{
                padding: 12px 10px;
                color: #545454;
                font-weight: 500;
                font-size: 16px;
                &:hover {
                    color: #ff6d6d;
                }
            }
            &:not(:last-child) {
                margin-right: 15px;
            }
            &.hasChild:hover .childMenu{
                opacity:1;
                visibility: visible;
                transform: translateY(-5px);
            }
        }
        .childMenu{
            width: 130px;
            background-color: #FDFDFD;
            border-radius: 3px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 55px;
            z-index: 2;
            opacity: 0;
            visibility: hidden;
            transition: .7s all ease;
            -webkit-transition: .6s all ease;
            -moz-transition: .6s all linear;
            -o-transition: .6s all ease;
            -ms-transition: .6s all ease;
            &:before,&:after{
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-bottom: 8px solid white;
                top: -8px;
                left: 20px;
            }
            &:before {
                top: -9px;
                border-bottom: 8px solid #ddd;
            }
            .sub-menu{
                height: 40px;
                line-height: 40px;
                position: relative;
                &:not(:last-child):after{
                    /*position: absolute;*/
                    content: '';
                    width: 50%;
                    height: 1px;
                    color: #ff6d6d;
                    bottom: 0;
                    left: 25%;
                    z-index: 99;
                }
            }
        }
    }
</style>