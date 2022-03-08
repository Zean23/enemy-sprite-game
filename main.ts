input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    player.change(LedSpriteProperty.Y, -1)
})
let player: game.LedSprite = null
game.setScore(0)
let enemy = game.createSprite(randint(0, 10), randint(10, 0))
player = game.createSprite(0, 0)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.Yes)
    }
})
