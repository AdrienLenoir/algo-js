// --- Ex. 6.2

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos
        this.topLeftYPos = topLeftYPos
        this.width = width
        this.length = length
    }

    /**
     * Vérifie s'il y a une collision entre 2 rectangles
     * @param {Rectangle} otherRectangle
     */
    collides(otherRectangle) {
        let xMin = this.topLeftXPos
        let xMax = this.topLeftXPos + this.width
        let yMin = this.topLeftYPos
        let yMax = this.topLeftYPos + this.length

        let xMin_ = otherRectangle.topLeftXPos
        let xMax_ = otherRectangle.topLeftXPos + this.width
        let yMin_ = otherRectangle.topLeftYPos
        let yMax_ = otherRectangle.topLeftYPos + this.length

        return (
            xMin < xMax_ &&
            xMax > xMin_ &&
            yMin < yMax_ &&
            yMax > yMin_
        )
    }

    print() {
        console.log(
            "topLeftXPos : " + this.topLeftXPos
            + " topLeftYPos : " + this.topLeftYPos
            + " width : " + this.width
            + " length : " + this.length
            + " xMin : " + this.topLeftXPos
            + " xMax : " + (this.topLeftXPos + this.width)
            + " yMin : " + this.topLeftYPos
            + " yMax : " + (this.topLeftYPos + this.length)
        )
    }
}

let rectangle = new Rectangle(2,1,2,4)
let rectangle2 = new Rectangle(1,4,6,3)
let rectangle3 = new Rectangle(5,5,1,10)

rectangle.print()
rectangle2.print()
rectangle3.print()

console.log("rectangle est en collision avec rectangle2 ? " + rectangle.collides(rectangle2))
console.log("rectangle est en collision avec rectangle3 ? " + rectangle.collides(rectangle3))
console.log("rectangle2 est en collision avec rectangle3 ? " + rectangle2.collides(rectangle3))
