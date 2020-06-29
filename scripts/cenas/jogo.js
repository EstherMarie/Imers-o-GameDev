class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    clouds = new Cenario(bg_clouds, 0.1);
    mountains = new Cenario(bg_mountains, 0.15);
    trees = new Cenario(bg_trees, 0.5);
    ground = new Cenario(bg_ground, 8);
    points = new Pontuacao();
    player = new Personagem(matrizPersonagem, sprite, 10, 30, 180, 116, 90, 58);
    accorn = new Item(matrizAccorn, sprite, width - 20, 150, 32, 28, 16, 14, 0);
    life = new Vida(
      fita.configuracoes.vidaMaxima,
      fita.configuracoes.vidaInicial
    );

    const ant = new Inimigo(matrizAnt, inimigo, width, 50, 55, 47, 37, 31, 13);
    const grasshopper = new Inimigo(
      matrizGrasshopper,
      inimigo,
      width,
      26,
      104,
      90,
      52,
      45,
      16
    );
    const gator = new Inimigo(
      matrizGator,
      inimigo,
      width,
      170,
      92,
      98,
      46,
      49,
      19
    );

    inimigos.push(ant);
    inimigos.push(grasshopper);
    inimigos.push(gator);

    cenario.push(clouds);
    cenario.push(mountains);
    cenario.push(trees);
  }

  keyPress(key) {
    if (key === "ArrowUp") {
      player.pula();
      jumpSound.play();
    }
  }

  mouseClick(key) {
    player.pula();
    jumpSound.play();
  }

  draw() {
    clouds.exibe();
    clouds.move();
    mountains.exibe();
    mountains.move();
    trees.exibe();
    trees.move();
    ground.exibe();
    ground.move();
    life.draw();
    points.exibe();
    points.adicionarPontos();
    player.exibe();
    player.aplicaGravidade();
    accorn.exibe();
    accorn.move();

    pulo();

    const linhaAtual = this.mapa[this.indice];

    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (player.estaColidindo(inimigo)) {
      // console.log('colidiu');
      player.matriz = matrizHurt;
      hurtSound.play();
      life.perdeVida();
      player.tornarInvencivel();
      points.colisaoPontos();

      if (life.vidas === 0) {
        image(gameOver, width / 2 - 200, height / 3);
        noLoop();
        player.matriz = matrizHurt;
        
        btnNovoJogo = createButton('Jogar Novamente');
        btnNovoJogo.position(width/2 - btnNovoJogo.width/2, height / 8 * 5);
        btnNovoJogo.mousePressed(() => {
          btnNovoJogo.remove();
          loop();
          inimigos.pop();
          inimigos.x = width;
          this.indice = 0;
          jogo.setup();
          jogo.draw();
        });
        btnNovoJogo.addClass("botao-novo-jogo");
      }
    }

    if (player.coletaItens(accorn)) {
      // console.log('coletou');
      accorn.x = width + 550;
      itemSound.play();
      points.itemPontos();

      if (item === 5) {
        life.ganhaVida();
      }
    }

    function pulo() {
      if (player.y != player.yInicial) {
        player.matriz = matrizPulo;
      } else {
        player.matriz = matrizPersonagem;
      }
      // if (player.y === 507)  else if (keyIsPressed === true || mouseIsPressed === true) {
      //   player.matriz = matrizPulo;
      // }
    }
  }
}
