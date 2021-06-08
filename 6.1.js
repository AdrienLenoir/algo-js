// --- Ex. 6.1

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos
        this.yPos = yPos
        this.radius = radius
    }

    get surface() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    move(xOffset, yOffset) {
        this.xPos += xOffset
        this.yPos += yOffset
    }

    print() {
        console.log(" xPos : " + circle.xPos + " yPos : " + circle.yPos + " radius : " + circle.radius + " surface : " + circle.surface)
    }
}

let circle = new Circle(0,0,2)

circle.print()
circle.move(1,1)
circle.print()
circle.move(-1,5)
circle.print()
circle.move(2,-2)
circle.print()
