radio.onReceivedNumber(function (receivedNumber) {
    music.playTone(262, music.beat(BeatFraction.Half))
})
// plays a sound //
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
