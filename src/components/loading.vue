<template>
    <div id="loading" v-show="loading">
        <!--        <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="150px"-->
        <!--             viewBox="0 0 24 30" style="enable-background:new 0 0 50 50" xml:space="preserve">-->
        <!--            <rect x="0" y="0" width="4" height="10" fill="#FF6700" transform="translate(0 9.4336)">-->
        <!--                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"-->
        <!--                                  begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform>-->
        <!--            </rect>-->
        <!--                    <rect x="10" y="0" width="4" height="10" fill="#FF6700" transform="translate(0 17.2331)">-->
        <!--                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"-->
        <!--                                  begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform>-->
        <!--            </rect>-->
        <!--                    <rect x="20" y="0" width="4" height="10" fill="#FF6700" transform="translate(0 3.89973)">-->
        <!--                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"-->
        <!--                                  begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform>-->
        <!--            </rect>-->
        <!--        </svg>-->
        <div class="loader">
            <div class="loader-inner pacman">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <section>
            <div class="loader-s loader-7">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </div>
        </section>
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
                handler: (n, o) => {
                    let htmlBodyElement = document.querySelector('body');
                    htmlBodyElement.style.overflowY = n ? 'hidden' : 'auto';
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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        max-width: 25%;
        height: 200px;
        align-items: center;
        justify-content: center;
    }

    .pacman {
        position: relative;
    }

    .pacman > div:nth-child(2) {
        -webkit-animation: pacman-balls 1s 0s infinite linear;
        animation: pacman-balls 1s 0s infinite linear;
    }

    .pacman > div:nth-child(3) {
        -webkit-animation: pacman-balls 1s 0.33s infinite linear;
        animation: pacman-balls 1s 0.33s infinite linear;
    }

    .pacman > div:nth-child(4) {
        -webkit-animation: pacman-balls 1s 0.66s infinite linear;
        animation: pacman-balls 1s 0.66s infinite linear;
    }

    .pacman > div:nth-child(5) {
        -webkit-animation: pacman-balls 1s 0.99s infinite linear;
        animation: pacman-balls 1s 0.99s infinite linear;
    }

    .pacman > div:first-of-type {
        width: 0;
        height: 0;
        border-right: 25px solid transparent;
        border-top: 25px solid #d81e06;
        border-left: 25px solid #d81e06;
        border-bottom: 25px solid #d81e06;
        border-radius: 25px;
        -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
        animation: rotate_pacman_half_up 0.5s 0s infinite;
    }

    .pacman > div:nth-child(2) {
        width: 0;
        height: 0;
        border-right: 25px solid transparent;
        border-top: 25px solid #d81e06;
        border-left: 25px solid #d81e06;
        border-bottom: 25px solid #d81e06;
        border-radius: 25px;
        -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
        animation: rotate_pacman_half_down 0.5s 0s infinite;
        margin-top: -50px;
    }

    .pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
        background-color: #d81e06;
        border-radius: 100%;
        margin: 2px;
        width: 10px;
        height: 10px;
        position: absolute;
        -webkit-transform: translate(0, -6.25px);
        -ms-transform: translate(0, -6.25px);
        transform: translate(0, -6.25px);
        top: 25px;
        left: 100px;
    }

    @keyframes rotate_pacman_half_down {
        0% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
        }

        50% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
        }
    }

    @keyframes rotate_pacman_half_up {
        0% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
        }

        50% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }

        100% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
        }
    }

    @keyframes pacman-balls {
        75% {
            opacity: 0.7;
        }

        100% {
            -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px);
        }
    }
</style>