class Inimigo extends Animacao {
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite)

        this.yInicial = height - this.altura - 49;
        this.y = this.yInicial;
        this.velocidade = 13;
    }

    move() {
        this.x = this.x - this.velocidade;

        if (this.x < -this.largura) {
            this.x = width
        }
    }
}