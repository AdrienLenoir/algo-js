// --- Ex. 6.2

/**
 * Génère un nombre aléatoire avec un maximum définit à 100 par défaut
 * @param {number} max
 * @param {boolean} zero,
 * @returns {number}
 */
function genRandom(max = 100, zero = true) {
    let min = zero ? 0 : 1
    return Math.floor(Math.random() * max + min)
}

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

let rectangles = []
let rectanglesCollide = []

for (let i = 0; i < 1000; i++) {
    rectangles.push(
        new Rectangle(
            genRandom(5000),
            genRandom(5000),
            genRandom(50, false),
            genRandom(50, false)
        )
    )
}

for (let rec of rectangles) {
    for (let rec_ of rectangles) {
        if (rec !== rec_ && rec.collides(rec_))
            rectanglesCollide.push([rec, rec_])
    }
}

console.log(rectanglesCollide)
console.log(rectanglesCollide.length + " rectangles en collision")
