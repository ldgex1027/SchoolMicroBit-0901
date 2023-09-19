radio.onReceivedNumber(function (receivedNumber) {
    if (blinkLED == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
        blinkLED = 0
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        blinkLED = 1
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, randint(0, 1))
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 70)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 35)
    } else if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 35)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    }
})
let blinkLED = 0
serial.redirectToUSB()
DFRobotMaqueenPlus.I2CInit()
radio.setGroup(19)
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
basic.showString("fu")
radio.sendString("")
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) <= 10) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 80)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
    }
})
