function filtrarSprites() {
    for (let i = 0; i < 50; i++) {
        sprites
            .create(assets.image`foguinho`, SpriteKind.Projectile)
            .setPosition(
                Math.randomRange(0, scene.screenWidth()),
                Math.randomRange(0, scene.screenHeight())
            )
    }
    
    let foguinhos = sprites.allOfKind(SpriteKind.Projectile)
    
    
    foguinhos
        .filter(foguinho => foguinho.y > scene.screenHeight() / 4)
        .forEach(foguinho => foguinho.setScale(1.5))
    
        foguinhos
        .filter(foguinho => foguinho.y > scene.screenHeight() / 2)
        .forEach(foguinho => foguinho.setScale(1.8))
    
}

function circulosAleatorios() {
    let largura = scene.screenWidth()
    let altura = scene.screenHeight()

    let imagem = image.create(largura, altura)
    let r = 4
    let x = r
    let y = r
    let c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    for (let i = 0; i < 20; i++) {
        imagem.drawCircle(
            Math.randomRange(r, largura - r),
            Math.randomRange(r, altura - r),
            r,
            Math.pickRandom(c)
        )
    }


    scene.setBackgroundImage(imagem)
}

function filtrarArrayDeNomes() {
    console.log("Testes com filtros")

    let lista = [
        "Amanda",
        "Berenice",
        "Clarissa",
        "Daniel",
        "Emanuele",
        "Iracema Nova",
        "Fabiana",
        "Gustavo",
        "Henrique",
        "Iracema Antiga",
        "José",
        "Kerlin",
        "Luis"
    ]

    console.log(lista)
    lista.filter(item => item.toUpperCase().includes('IRACEMA'))
        .sort()
        .forEach(item => console.log(item))
    '   '
}