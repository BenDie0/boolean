let _false = false
let projectile: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    _false = false
    projectile.setVelocity(Math.randomRange(-10, 0), 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _false = true
    projectile.setVelocity(Math.randomRange(10, 0), 0)
})
game.onUpdateInterval(100, function () {
    if (_false) {
        projectile = sprites.createProjectileFromSide(img`
f f . . . . . . . . . . . . . . 
b b f f f . . . . . . . . . . . 
b b b b b f . . . . . . . . . . 
b b b b b b f . . . . . . . . . 
b b b b b b f . . . . . . . . . 
b b b b b b b f . . . . . . . . 
b b b b b b b f . . . . . . . . 
b b b b b b b f . . . . . . . . 
b b b b b b b f . . . . . . . . 
b b b b b b b f . . . . . . . . 
b b b b b b b f . . . . . . . . 
b b b b b b f . . . . . . . . . 
b b b b b b f . . . . . . . . . 
b b b b b f . . . . . . . . . . 
b b f f f . . . . . . . . . . . 
f f . . . . . . . . . . . . . . 
`, Math.randomRange(0, 100), 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . f f 
. . . . . . . . . . . f f f b b 
. . . . . . . . . . f b b b b b 
. . . . . . . . . f b b b b b b 
. . . . . . . . . f b b b b b b 
. . . . . . . . f b b b b b b b 
. . . . . . . . f b b b b b b b 
. . . . . . . . f b b b b b b b 
. . . . . . . . f b b b b b b b 
. . . . . . . . f b b b b b b b 
. . . . . . . . f b b b b b b b 
. . . . . . . . . f b b b b b b 
. . . . . . . . . f b b b b b b 
. . . . . . . . . . f b b b b b 
. . . . . . . . . . . f f f b b 
. . . . . . . . . . . . . . f f 
`, Math.randomRange(0, -100), 0)
    }
    projectile.setPosition(80, 60)
})
