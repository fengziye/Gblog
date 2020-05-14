<template>
    <div class="main-body" ref="fishBody">
        <div class="instructions">Click or tap a fish to get a new fish</div>
        <div class="counter" ref="counter">1</div>
    </div>
</template>

<script>
    let vw = window.innerWidth * .97;
    let vh = window.innerHeight * .97;
    // const fish = document.querySelector('.fish');
    export default {
        name: "fishy",
        data() {
            return{
                count: 0,
                speed: 5,
                fishCount: {
                    xs: 15,
                    sm: 10,
                    md: 5,
                    lg: 2,
                }
            }
        },
        methods:{
            getAngle(cx, cy, ex, ey) {
                let dy = ey - cy;
                let dx = ex - cx;
                let theta = Math.atan2(dy, dx); // range [-PI, PI]
                theta *= 180 / Math.PI; // rads to degs, range [-180, 180]
                theta += 90; // set 0 as top, range [-90, 270]
                if (theta > 180) theta = theta - 360; // range [-180, 180]
                theta = Math.floor(theta);
                return theta;
            },
            setPos(el, x, y) {
                // old coords
                const a = window.scrollX + el.getBoundingClientRect().left;
                const b = window.scrollY + el.getBoundingClientRect().top;
                // distance
                const ax = Math.abs(a - x);
                const by = Math.abs(b - y);
                const dur = Math.floor(Math.sqrt((ax*ax) + (by*by))) * this.speed;
                // set new coords
                el.style.left = x + 'px';
                el.style.top = y + 'px';
                // set duration
                el.style.transitionDuration = dur + 'ms';
                // set angle
                el.style.transform = 'rotate(' + this.getAngle(a, b, x, y) + 'deg)';
                setTimeout(() =>{
                    this.setRandomPos(el);
                }, dur);
            },
            setRandomPos(el) {
                const randomX = Math.floor(Math.random() * vw);
                const randomY = Math.floor(Math.random() * vh);
                this.setPos(el, randomX, randomY);
            },
            updateCount() {
                const counter = this.$refs.counter;
                counter.innerHTML = this.count;
            },
            createFish(size) {
                const fish = document.createElement('a');
                fish.setAttribute('href','#');
                fish.className = 'gBlog-fish-'+size;
                fish.textContent = '=';
                fish.style.filter = 'hue-rotate(' + Math.floor(Math.random() * 360) + 'deg)';
                this.$refs.fishBody.appendChild(fish);
                this.setRandomPos(fish);
                fish.addEventListener('click', this.createFish);
                this.count++;
                this.updateCount();
            },
            init() {
                Object.keys(this.fishCount).forEach(size => {
                    for(let i=0;i<this.fishCount[size];i++) {
                        setTimeout(() =>{
                            this.createFish(size)
                        },2000+~~(Math.random()*5000));
                    }
                });
            },
        },
        mounted() {
            window.onresize = function() {
                vw = window.innerWidth * .97;
                vh = window.innerHeight * .97;
            };
            this.init();
            // this.createFish();
        }
    }
</script>

<style scoped lang="less">
    .main-body {
        background-image: linear-gradient(#339, #09f 85%, #339);
        height: 100vh;
        margin: 0;
    }

    .instructions {
        bottom: 3vh;
        color: #09f;
        font-family: sans-serif;
        font-size: 5vmin;
        left: 0;
        position: fixed;
        right: 0;
        text-align: center;
    }

    .counter {
        color: #f90;
        font-family: sans-serif;
        font-size: 5vmin;
        position: fixed;
        right: 3vmin;
        top: 3vmin;
    }
</style>