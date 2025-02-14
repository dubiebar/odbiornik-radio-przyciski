radio.onReceivedNumber(function (receivedNumber) {
    light2 = receivedNumber
    time = 12
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    B = !(B)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    A = !(A)
})
let time = 0
let light2 = 0
let B = false
let A = false
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setFrequencyBand(83)
radio.setTransmitPower(7)
A = true
B = true
light2 = 0
time = 0
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
loops.everyInterval(1000, function () {
    if (time > 0) {
        time += -1
    }
})
basic.forever(function () {
    if (!(A) && !(B)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (A && !(B)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (!(A) && B) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (light2 > 235) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (light2 > 222) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (light2 > 200) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.showString("" + (light2))
    if (time < 1) {
        light2 = 0
    }
})
