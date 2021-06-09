const readlineSync = require("readline-sync");

/**
 * Retourne la liste des n premier nombres de Fibonacci
 * @param n, n premier nombres de Fibonacci
 */
function fibonacci(n) {
    let suite = [0,1]

    if (n <= 2) return suite.slice(0,n)

    n-=2
    for (let i = 1; i <= n; i++) {
        suite.push(suite[i-1] + suite[i])
    }

    return suite
}

let n = new Number(readlineSync.question("Combien de nombres de Fibonacci voulez-vous ? : "))
console.log(fibonacci(n))



