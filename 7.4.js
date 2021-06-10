const readlineSync = require("readline-sync");

let pizza = []

function clearConsole() {
    for (let i = 0; i < 50; i++) {
        console.log("")
    }
}

function gui() {
    console.log(
        "\x1b[36mHello! Welcome to the Pizza Flavors Manager.\n" +
        "\n" +
        "Please choose your actions:\n" +
        "\n" +
        "\x1b[34m1\x1b[37m - List all the pizza flavors\n" +
        "\x1b[34m2\x1b[37m - Add a new pizza flavor\n" +
        "\x1b[34m3\x1b[37m - Remove a pizza flavor\n" +
        "\x1b[34m4\x1b[37m - Exit this program\n\x1b[0m"
    )

    let chose = new Number(readlineSync.question("\x1b[34mEnter your action's number: \x1b[0m"))

    clearConsole()

    if (chose == 1) {
        listPizza()
    } else if (chose == 2) {
        addPizza()
    } else if (chose == 3) {
        removePizza()
    } else if (chose == 4) {
        process.exit(0)
    }

    console.log("")
    gui()
}

function listPizza() {
    if (pizza.length === 0) {
        console.log("\x1b[31mAucune pizze disponible :/ \x1b[0m")
        return;
    }

    for (let i = 0; i < pizza.length; i++) {
        console.log("" + i + " \x1b[33m- " + pizza[i] + " \x1b[0m")
    }
    console.log("\n\x1b[34mNombre de pizza actuellement enregistrer : \x1b[32m" + pizza.length + "\x1b[0m")
}

function addPizza() {
    pizza.push(readlineSync.question("\x1b[34mQuel goût de pizza voulez-vous ajouter ? : \x1b[0m"))
}

function removePizza() {
    listPizza()

    if (pizza.length == 0)
        return;

    let id = new Number(readlineSync.question("\x1b[34mQuel est l'id de la pizza que vous souhaitez supprimer ? : \x1b[0m"))
    pizza.splice(id, 1)
}

clearConsole()
gui()