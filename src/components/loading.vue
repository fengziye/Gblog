<template>
    <div id="loading" v-show="loading">
        <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="150px"
             viewBox="0 0 24 30" style="enable-background:new 0 0 50 50" xml:space="preserve">
            <rect x="0" y="0" width="4" height="10" fill="#FF6700" transform="translate(0 9.4336)">
                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
                                  begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform>
            </rect>
                    <rect x="10" y="0" width="4" height="10" fill="#FF6700" transform="translate(0 17.2331)">
                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
                                  begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform>
            </rect>
                    <rect x="20" y="0" width="4" height="10" fill="#FF6700" transform="translate(0 3.89973)">
                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
                                  begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform>
            </rect>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "loading",
        computed: {
            loading() {
                return this.$store.state.loading
            }
        },
        watch: {
            loading: {
                immediate: true,
                handler: (n,o) => {
                    let htmlBodyElement = document.querySelector('body');
                    htmlBodyElement.style.overflowY= n ? 'hidden':'auto';
                }
            }
        }
    }
</script>

<style scoped>
    #loading {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #F9F9F9;
    }
</style>