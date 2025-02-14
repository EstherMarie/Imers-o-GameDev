class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0; // começa no ponto 0
    this.x2 = width; // começa logo após o fim da 1ª img
  }

  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;

    if (this.x1 < -width) {
      this.x1 = width;
    } else if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}
