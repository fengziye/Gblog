<template>
    <div id="layout-header">
        1
    </div>
</template>

<script>
    import {fetchCategory} from '../../api'
    export default {
        name: "layout-header",
        data(){
            return {
                category: []
            }
        },
        created() {
            this.fetchCategory()
        },
        methods:{
            fetchCategory(){
                fetchCategory().then(res => {
                    this.category=res.data
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>