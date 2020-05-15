<template>
    <div id="layout-footer">
        <div class="footer-main">
            <div class="footer-item"><a target="_blank" class="out-link" href="http://www.beian.miit.gov.cn">渝ICP备17015355号-1</a></div>
            <div class="footer-item">2</div>
            <div class="footer-item">3</div>
        </div>
        <div class="copyright">Copyright © 2020 by <a target="_blank" class="out-link" href="https://www.fengziy.cn">fengziy.cn</a> . All rights reserved. | <a target="_blank" class="out-link" href="https://zhebk.cn/Web/Akina.html">Theme: Akina For Typecho</a>.</div>
    </div>
</template>

<script>
    export default {
        name: "layout-footer"
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
        }
    }
    .copyright{
        text-align: center;
    }
}
</style>