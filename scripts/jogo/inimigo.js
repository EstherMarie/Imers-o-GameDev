class Inimigo extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade
  ) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite,
      velocidade
    );

    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.velocidade = velocidade;
    this.x = width - this.delay;
  }

  move() {
    this.x = this.x - this.velocidade;

    if (this.x < -this.largura) {
      this.x = width;
    }
  }
}
