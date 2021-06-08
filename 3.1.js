// --- Ex. 3.1

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [100, 101, 102]
let resultArr1 = 0
let resultArr2 = 0

for (let n of arr1)
    resultArr1 += n

for (let n of arr2)
    resultArr2 += n

console.log("resultArr1 = " + resultArr1)
console.log("resultArr2 = " + resultArr2)