<template>
    <div id="loading" v-show="loading">

    </div>
</template>

<script>
    export default {
        name: "loading",
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            loading: {
                immediate: true,
                handler: function(n,o){
                    let elementsByTagName = document.getElementsByTagName('body');
                    // elementsByTagName.style.overflowY = 'hidden';
                }
            }
        }
    }
</script>

<style scoped>
#loading{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f7f7b6;
}
</style>