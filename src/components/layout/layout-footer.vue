<template>
    <div id="layout-footer">
        <div class="footer-main">
            <div class="footer-item">
                <div><a target="_blank" class="out-link" href="http://wpa.qq.com/msgrd?v=3&amp;uin=122497566&amp;site=qq&amp;menu=yes"><i class="iconfont iconqq"></i>QQ</a></div>
                <div><a target="_blank" class="out-link" href="https://gitee.com/fengziy"><i class="iconfont icongitee"></i>Gitee</a></div>
                <div><a target="_blank" class="out-link" href="https://github.com/fengziye"><i class="iconfont icongithub"></i>GitHub</a></div>
                <div><a target="_blank" class="out-link" href="https://blog.csdn.net/feng_zi_ye"><i class="iconfont iconcsdn"></i>CSDN</a></div>
            </div>
            <div class="footer-item">
                <div style="font-size:17px;font-weight: bold;">资源</div>
                <div><a target="_blank" class="out-link" href="https://segmentfault.com/weekly?utm_source=sf-footer">每周精选</a></div>
                <div><a target="_blank" class="out-link" href="https://www.jmjc.tech/">简明教程</a></div>
                <div><a target="_blank" class="out-link" href="https://www.liaoxuefeng.com/">廖雪峰的官方网站</a></div>
            </div>
            <div class="footer-item">
                <div>本站已稳定运行 123 天 4 时 36 分 22 秒</div>
                <div><a target="_blank" class="out-link" href="http://www.beian.miit.gov.cn">渝ICP备17015355号-1</a></div>
            </div>
        </div>
        <div class="copyright">Copyright © 2020 by <a target="_blank" class="out-link" href="https://www.fengziy.cn">fengziy.cn</a> . All rights reserved. | <a target="_blank" class="out-link" href="https://zhebk.cn/Web/Akina.html">Theme: Akina For Typecho</a>.</div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/section-title'
    export default {
        name: "layout-footer",
        components:{
            sectionTitle
        }
    }
</script>

<style scoped lang="less">
#layout-footer{
    padding: 2%;
    border-top: 1px solid #F7F7F7;
    font-size: 13px;
    color: #9c9c9c;
    a.out-link:hover{
        color: #d82e16;
    }
    .footer-main{
        max-width: 800px;
        margin: 0 auto 20px auto;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        .footer-item{
            flex: 1;
            & > div:not(:last-child){
                margin-bottom: 10px;
            }
            i{
                margin-right: 10px;
            }
        }
    }
    .copyright{
        text-align: center;
    }
}
</style>