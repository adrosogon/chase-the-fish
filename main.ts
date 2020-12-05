sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pez.setPosition(randint(10, 150), randint(20, 100))
    info.startCountdown(10)
})
let pez: Sprite = null
scene.setBackgroundColor(4)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f . . . . . . . . . 
    . . . f 1 1 1 f . . . . . . . . 
    . f f 1 1 f 1 1 f . . . . . . . 
    f 5 5 5 1 1 1 1 1 f f f f f f f 
    . f f 1 1 1 1 1 1 1 1 b b b 1 f 
    . . . f 1 1 1 1 1 1 b b b f 1 f 
    . . . . f 1 1 f 1 b b b f 1 d f 
    . . . . f d 1 1 f f f f 1 1 f . 
    . . . . . f d 1 1 1 1 1 1 d f . 
    . . . . . . f d 1 1 1 1 d f . . 
    . . . . . . . f f f f f f . . . 
    . . . . . . . . 5 . . 5 . . . . 
    . . . . . . . 5 5 . 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pez = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 . . . . 8 8 . 
    . . 8 9 9 9 9 9 9 8 8 8 8 6 8 . 
    . 8 9 9 8 9 9 9 9 9 9 9 9 6 8 . 
    . 8 9 9 9 9 6 6 9 9 9 9 9 6 8 . 
    . . 8 9 9 9 9 9 9 8 8 8 8 6 8 . 
    . . . 8 8 8 8 8 8 . . . . 8 8 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
