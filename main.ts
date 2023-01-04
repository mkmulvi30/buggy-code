// This triggers code inside to run when A is pressed.
input.onButtonPressed(Button.A, function () {
    // while loop will run and not stop because triggered by A is true
    while (true) {
        basic.showString("Hello @ 3")
        basic.pause(500)
    }
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        # . # . #
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        # # # # #
        `)
})
