<template>
    <div id="layout-body" :style="{minHeight:minHeight+'px'}">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "layout-body",
        data(){
          return{
              minHeight: 600
          }
        },
        methods:{
          init(){
              let _this = this
              this.minHeight = document.documentElement.clientHeight
              window.onresize = function () {
                  _this.minHeight = document.documentElement.clientHeight
              }
          }
        },
        created() {
            this.init()
        }
    }
</script>

<style scoped>

</style>
