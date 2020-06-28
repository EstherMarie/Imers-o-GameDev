function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font);
  frameRate(25);
  music.loop();

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPress(key);
}

function mousePressed() {
  jogo.mouseClick(key)
}

function draw() {
  cenas[cenaAtual].draw();
}
