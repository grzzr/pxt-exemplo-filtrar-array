game.onUpdateInterval(100, function () {
    let foguinho = sprites.create(assets.image`foguinho`, SpriteKind.Projectile)
    foguinho.setPosition(
        Math.randomRange(64, scene.screenWidth()-64), -8)
    foguinho.ax = Math.randomRange(-64, 64)
    foguinho.ay = 32

    foguinho.setFlag(SpriteFlag.AutoDestroy, true)

    let foguinhos = sprites.allOfKind(SpriteKind.Projectile)

    foguinhos
        .filter(foguinho => foguinho.y > scene.screenHeight() / 4)
        .forEach(foguinho => foguinho.setScale(1.6))
    
        foguinhos
        .filter(foguinho => foguinho.y > scene.screenHeight() / 2)
        .forEach(foguinho => foguinho.setScale(2.2))

})

let nave = sprites.create(assets.image`nave`, SpriteKind.Player)
nave.setPosition(scene.screenWidth()/2, 100)
controller.moveSprite(nave,200,0)
