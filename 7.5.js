/**
 * Trie un tableau de nombre
 * @param {Array} arr
 * @param {Number} index
 */
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr.length; y++) {
            if (arr[y] > arr[y+1]) {
                let temp = arr[y]
                arr[y] = arr[y+1]
                arr[y+1] = temp
            }
        }
    }

    return arr
}

function genRandomArray(n) {
    let arr = []

    for (let i = 0; i < n; i++)
        arr.push(Math.trunc(Math.random() * 10) + 1)

    return arr
}

let array = genRandomArray(50)

console.log(array)
console.log(sort(array))

