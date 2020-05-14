<template>
    <div class="main-body">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
    import gsap from '../js/Peep'
    import Peep from '../js/Peep'
    const config = {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png',
        rows: 15,
        cols: 7
    }
    const randomRange = (min, max) => min + Math.random() * (max - min)
    const randomIndex = (array) => randomRange(0, array.length) | 0

    const removeFromArray = (array, i) => array.splice(i, 1)[0]

    const removeItemFromArray = (array, item) => removeFromArray(array, array.indexOf(item))

    const removeRandomFromArray = (array) => removeFromArray(array, randomIndex(array))

    const getRandomFromArray = (array) => (
        array[randomIndex(array) | 0]
    )
    const walks = [
        this.normalWalk
    ]
    const img = document.createElement('img')
    img.src = config.src

    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    const stage = {
        width: 0,
        height: 0,
    }

    const allPeeps = []
    const availablePeeps = []
    const crowd = []
    export default {
        name: "people",
        methods: {
            resetPeep: ({stage, peep}) => {
                const direction = Math.random() > 0.5 ? 1 : -1
                // using an ease function to skew random to lower values to help hide that peeps have no legs
                const offsetY = 100 - 250 * gsap.parseEase('power2.in')(Math.random())
                const startY = stage.height - peep.height + offsetY
                let startX
                let endX

                if (direction === 1) {
                    startX = -peep.width
                    endX = stage.width
                    peep.scaleX = 1
                } else {
                    startX = stage.width + peep.width
                    endX = 0
                    peep.scaleX = -1
                }

                peep.x = startX
                peep.y = startY
                peep.anchorY = startY

                return {
                    startX,
                    startY,
                    endX
                }
            },
            normalWalk: ({peep, props}) => {
                const {
                    // startX,
                    startY,
                    endX
                } = props

                const xDuration = 10
                const yDuration = 0.25

                const tl = gsap.timeline()
                tl.timeScale(randomRange(0.5, 1.5))
                tl.to(peep, {
                    duration: xDuration,
                    x: endX,
                    ease: 'none'
                }, 0)
                tl.to(peep, {
                    duration: yDuration,
                    repeat: xDuration / yDuration,
                    yoyo: true,
                    y: startY - 10
                }, 0)

                return tl
            },
            init() {
                this.createPeeps()

                // resize also (re)populates the stage
                this.resize()

                gsap.ticker.add(this.render)
                window.addEventListener('resize', this.resize)
            },
            createPeeps() {
                const {
                    rows,
                    cols
                } = config
                const {
                    naturalWidth: width,
                    naturalHeight: height
                } = img
                const total = rows * cols
                const rectWidth = width / rows
                const rectHeight = height / cols

                for (let i = 0; i < total; i++) {
                    allPeeps.push(new Peep({
                        image: img,
                        rect: [
                            (i % rows) * rectWidth,
                            (i / rows | 0) * rectHeight,
                            rectWidth,
                            rectHeight,
                        ]
                    }))
                }
            },
            resize() {
                stage.width = canvas.clientWidth
                stage.height = canvas.clientHeight
                canvas.width = stage.width * devicePixelRatio
                canvas.height = stage.height * devicePixelRatio

                crowd.forEach((peep) => {
                    peep.walk.kill()
                })

                crowd.length = 0
                availablePeeps.length = 0
                availablePeeps.push(...allPeeps)

                this.initCrowd()
            },

            initCrowd() {
                while (availablePeeps.length) {
                    // setting random tween progress spreads the peeps out
                    this.addPeepToCrowd().walk.progress(Math.random())
                }
            },

            addPeepToCrowd() {
                const peep = removeRandomFromArray(availablePeeps)
                const walk = getRandomFromArray(walks)({
                    peep,
                    props: this.resetPeep({
                        peep,
                        stage,
                    })
                }).eventCallback('onComplete', () => {
                    this.removePeepFromCrowd(peep);
                    this.addPeepToCrowd()
                })

                peep.walk = walk

                crowd.push(peep)
                crowd.sort((a, b) => a.anchorY - b.anchorY)

                return peep
            },

            removePeepFromCrowd(peep) {
                removeItemFromArray(crowd, peep)
                availablePeeps.push(peep)
            },

            render() {
                // canvas.width = canvas.width
                ctx.save()
                ctx.scale(devicePixelRatio, devicePixelRatio)

                crowd.forEach((peep) => {
                    peep.render(ctx)
                })

                ctx.restore()
            }
        },
        mounted() {
            img.onload = this.init()
        }
    }


</script>

<style scoped>
    .main-body {
        height: 100%;
        margin: 0;
    }

    #canvas {
        width: 100%;
        height: 100%;
    }
</style>