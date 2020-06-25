class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){ 
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.imagem = imagem;
    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - variacaoY;//height - 147;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  pula() {
    this.velocidadeDoPulo = - 30;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    

    if(this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }

  estaColidindo(inimigo) {
    /* Para futuros debugs de hitbox:
    noFill();
    rect(this.x, this.y, this.largura, this.altura)
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura); 
    */
    const precisao = .59;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao,
      this.altura * precisao, 
      inimigo.x, 
      inimigo.y, 
      inimigo.largura * precisao,
      inimigo.altura * precisao
      );

    return colisao;
  }

  coletaItens(item) {
    /* Para futuros debugs de hitbox:
    noFill();
    rect(this.x, this.y, this.largura, this.altura)
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura); 
    */
    const precisao = .59;
    const coleta = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao,
      this.altura * precisao, 
      item.x, 
      item.y, 
      item.largura * precisao,
      item.altura * precisao
      );

    return coleta;
  }
}