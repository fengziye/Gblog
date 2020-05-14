class Peep {
    constructor({
                    image,
                    rect,
                }) {
        this.image = image
        this.setRect(rect)

        this.x = 0
        this.y = 0
        this.anchorY = 0
        this.scaleX = 1
        this.walk = null
    }

    setRect (rect) {
        this.rect = rect
        this.width = rect[2]
        this.height = rect[3]

        this.drawArgs = [
            this.image,
            ...rect,
            0, 0, this.width, this.height
        ]
    }

    render (ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.scale(this.scaleX, 1)
        ctx.drawImage(...this.drawArgs)
        ctx.restore()
    }
}

export default Peep;