class Personagem {
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = [
      [0, 0],
      [0, 36],
      [1, 72],
      [1, 107],
      [1, 137],
      [1, 164],
    ];
    this.frameAtual = 0;
  }
  
  exibe() {
    image(this.imagem, 0, (height - 109), 90, 57, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 57, 27);
    this.anima();
  }
  
  anima() {
    this.frameAtual++;
    
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}