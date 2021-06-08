// --- Ex. 3.2

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [100, 101, 102]
let resultArr1 = 0
let resultArr2 = 0
let averageArr1 = 0
let averageArr2 = 0

for (let n of arr1)
    resultArr1 += n

for (let n of arr2)
    resultArr2 += n

averageArr1 = resultArr1 / arr1.length
averageArr2 = resultArr2 / arr2.length

console.log("averageArr1 = " + averageArr1)
console.log("averageArr2 = " + averageArr2)