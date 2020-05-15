<template>
    <div id="app" v-cloak>
        <loading></loading>
        <layout-header :fixed="fixed" :hidden="hidden"></layout-header>
        <layout-body></layout-body>
        <layout-footer></layout-footer>
    </div>
</template>
<script>
    import layoutHeader from '@/components/layout/layout-header'
    import layoutBody from '@/components/layout/layout-body'
    import layoutFooter from '@/components/layout/layout-footer'
    import Loading from '@/components/loading'
    export default {
        name: "app",
        data(){
          return {
              lastScrollTop: 0,
              fixed: false,
              hidden: false
          }
        },
        components: {
            layoutHeader,
            layoutBody,
            layoutFooter,
            Loading
        },
        methods: {
            watchScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop===0){
                    this.fixed = false;
                } else if (scrollTop>=this.lastScrollTop){
                    this.fixed = false;
                    this.hidden = true;
                } else {
                    this.fixed = true
                    this.hidden = false
                }
                this.lastScrollTop = scrollTop
            }
        },
        mounted() {
            window.addEventListener('scroll', this.watchScroll)
        },
        beforeDestroy () {
            window.removeEventListener("scroll", this.watchScroll);
        }
    }
</script>
<style lang="less">
    #app {
        font-size: 17px;
        color: #6f6f6f;
        &.sky{
            /**星空主题**/
            background: radial-gradient(200% 100% at bottom center,#f7f7b6,#e96f92,#1b2947);
            background: radial-gradient(220% 105% at top center,#1b2947 10%,#75517b 40%,#e96f92 65%,#f7f7b6);
            background-attachment: fixed;
            overflow: hidden;
            color: #FFFFFF;
        }
    }

    .gBlog-fish-md {
        .gBlog-fish(3vmin, 3);
    }

    .gBlog-fish-xs {
        .gBlog-fish(1vmin, 1);
    }

    .gBlog-fish-sm {
        .gBlog-fish(2vmin, 2);
    }

    .gBlog-fish-lg {
        .gBlog-fish(4vmin, 4);
    }

    .gBlog-fish(@size:3vmin,@c:3) {
        background-color: #f90;
        background-image: linear-gradient(90deg, #f90, #f60, #f90);
        border-radius: 50% 50% 0 0;
        color: #c00;
        font-size: @size;
        height: @size;
        left: calc(50% - 1.5vmin);
        position: fixed;
        text-align: center;
        top: -5%;
        transition: left, top ease-in-out;
        user-select: none;
        width: @size;
        &:before {
            background-color: #000;
            border: solid 1px #fff;
            border-radius: 50%;
            bottom: 60%;
            content: "";
            left: 30%;
            position: absolute;
            right: 30%;
            top: 5%;
        }

        &:after {
            border: solid @size/2 transparent;
            border-bottom-color: #f60;
            bottom: -40*@c/3%;
            content: "";
            height: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 40*@c/3%;
            width: 0;
        }
        &:hover {
            background-color: #fff;
            background-image: none;
            cursor: pointer;

            &:after {
                border-bottom-color: #fff;
            }
        }
    }
</style>
