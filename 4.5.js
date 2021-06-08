// --- Ex. 4.5

// returne la distance entre 2 points dans un espace 2D. formule : racine carré de (x1 - x2)^2 + (y1 - y2)^2
function calcDistance(pointA, pointB) {
    return Math.sqrt(Math.pow(pointA[0] - pointB[0],2) + Math.pow(pointA[1] - pointB[1],2))
}

console.log("Distance entre [1,1] et [2,2] : " + calcDistance([1,1], [2,2]))
console.log("Distance entre [1,1] et [3,1] : " + calcDistance([1,1], [3,1]))
console.log("Distance entre [4,1] et [1,1] : " + calcDistance([4,1], [1,1]))
console.log("Distance entre [-2,2] et [2,-2] : " + calcDistance([-2,2], [2,-2]))


