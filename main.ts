game.onUpdateInterval(200, function () {
    let foguinho = sprites.create(assets.image`foguinho`, SpriteKind.Projectile)
    foguinho.setPosition(
        Math.randomRange(0, scene.screenWidth()), 0)
    foguinho.setVelocity(0, 50)    
    foguinho.setFlag(SpriteFlag.AutoDestroy, true)

    let foguinhos = sprites.allOfKind(SpriteKind.Projectile)

    foguinhos
        .filter(foguinho => foguinho.y > scene.screenHeight() / 4)
        .forEach(foguinho => foguinho.setScale(1.6))
    
        foguinhos
        .filter(foguinho => foguinho.y > scene.screenHeight() / 2)
        .forEach(foguinho => foguinho.setScale(2.2))

})


