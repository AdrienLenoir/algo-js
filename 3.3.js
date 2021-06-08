// --- Ex 3.3

let arr = [1, 2, 3, 4, 5]
let arrCopy = []
let arrCopyBis = []

for (let n of arr) {
    arrCopy.push(n)
}

arrCopyBis.push(...arr)

console.log("arrCopy : " + arrCopy)
console.log("arrCopyBis : " + arrCopyBis)