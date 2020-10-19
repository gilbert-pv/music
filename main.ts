input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
	
})
