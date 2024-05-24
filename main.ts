controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    bullet.setFlag(SpriteFlag.AutoDestroy, true)
    bullet.setPosition(player2.x, player2.y)
    bullet.setVelocity(120, 0)
    pause(100)
    bullet.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 20) {
        info.changeScoreBy(-20)
        laser = sprites.create(img`
            222222222222222222222222222222
            333333333333333333333333333333
            333333333333333333333333333333
            333333333333333333333333333333
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            333333333333333333333333333333
            333333333333333333333333333333
            222222222222222222222222222222
            `, SpriteKind.Projectile)
        laser.setPosition(player2.x, player2.y)
        laser.setFlag(SpriteFlag.AutoDestroy, true)
        laser.setVelocity(100, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player3, enemy) {
    game.gameOver(false)
})
info.onLifeZero(function () {
    console.log(info.highScore())
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    pause(200)
    bullet = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    bullet.setFlag(SpriteFlag.AutoDestroy, true)
    bullet.setPosition(player2.x, player2.y)
    bullet.setVelocity(120, 0)
    pause(100)
    bullet.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
let enemy: Sprite = null
let laser: Sprite = null
let bullet: Sprite = null
let player2: Sprite = null
player2 = sprites.create(img`
    c c . . . . . . . . . . . . . . 
    c c c . . . . . . . . . . . . . 
    c c c c . . . . . . . . . . . . 
    c c c f . . . . . . . . . . . . 
    c c c f e . . . . . . . . . . . 
    c c e f e c . . . . . . . . . . 
    e e e c 2 c e e . . . . . . . . 
    e e 2 c 2 c 2 e e f c f c c c c 
    2 2 2 e 2 e 4 4 2 f 2 f b d d d 
    2 2 2 e 4 e e e . . . . . . . . 
    2 2 2 f e e . . . . . . . . . . 
    2 4 4 f e . . . . . . . . . . . 
    4 2 2 e . . . . . . . . . . . . 
    2 2 e e . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
player2.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(player2, 100, 100)
game.onUpdateInterval(1000, function () {
    enemy = sprites.create(img`
        . . . . . . . . . . . . . . a a 
        . . . . . . . . . . . . . a a a 
        . . . . . . . . . . . . a a 3 3 
        . . . . . . . . . . . . a 3 3 1 
        . . . . . . . . . . . a f 1 1 3 
        . . . . . . . . . . a a f 3 3 3 
        . . . . . . . . a a a 1 a 3 3 3 
        d d d b f 3 f 3 1 1 a 3 a 3 3 3 
        c c c c f c f 8 8 3 c 3 c 3 a a 
        . . . . . . . . 8 8 c 3 c a a a 
        . . . . . . . . . . c 8 f a 8 8 
        . . . . . . . . . . . 8 f 8 8 8 
        . . . . . . . . . . . . f 8 8 8 
        . . . . . . . . . . . . 8 8 8 8 
        . . . . . . . . . . . . . 8 8 8 
        . . . . . . . . . . . . . . 8 8 
        `, SpriteKind.Enemy)
    enemy.setPosition(160, randint(0, 120))
    enemy.setVelocity(-100, 0)
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
})
