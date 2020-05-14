<template>
    <div class="main-body">
        <canvas id=q></canvas>
    </div>
</template>

<script>

    export default {
        name: "matrix",
        mounted() {
            const s = window.screen;
            const q = document.querySelector('#q')
            const w = (q.width = s.width);
            const h = (q.height = s.height);
            const ctx = q.getContext("2d");

            const p = Array(Math.floor(w / 10) + 1).fill(0);

            const random = (items) => items[Math.floor(Math.random() * items.length)];

            const hex = "0123456789ABCDEF".split("");
            setInterval(() => {
                ctx.fillStyle = "rgba(0,0,0,.05)";
                ctx.fillRect(0, 0, w, h);
                ctx.fillStyle = "#0f0";
                p.map((v, i) => {
                    ctx.fillText(random(hex), i * 10, v);
                    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
                });
            }, 1000 / 30);
        }
    }
</script>

<style scoped>
    .main-body {
        margin: 0;
        overflow: hidden;
    }
</style>