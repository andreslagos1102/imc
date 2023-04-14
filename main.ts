input.onButtonPressed(Button.A, function () {
    Peso += 1
    basic.showNumber(Peso)
})
input.onGesture(Gesture.Shake, function () {
    Peso = 74
    basic.showNumber(Peso)
})
input.onButtonPressed(Button.AB, function () {
    Estado = Peso * 1000 / (Altura * Altura)
    basic.showNumber(Peso)
    while (Estado < 0 && Estado > 18.4) {
        basic.showString("DELGADA")
        basic.showNumber(Estado)
    }
    while (Estado > 0 && Estado < 18.4) {
        basic.showString("SOBREPESO")
        basic.showNumber(Estado)
        break;
    }
    while (Estado > 18.5 && Estado > 25) {
        basic.showString("NORMAL")
        basic.showNumber(Estado)
        break;
    }
})
input.onButtonPressed(Button.B, function () {
    Peso += -1
    basic.showNumber(Peso)
})
let Estado = 0
let Altura = 0
let Peso = 0
Peso = 74
Altura = 1.8
