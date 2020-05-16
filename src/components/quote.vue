<template>
    <div class="quote"><slot></slot></div>
</template>

<script>
    export default {
        name: "quote"
    }
</script>

<style scoped>
.quote{
    border-left: 3px solid #d82e16;
    background-color: #FBFBFB;
    padding: 15px 20px;
}
</style>
