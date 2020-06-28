class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    clouds = new Cenario(bg_clouds, 0.1);
    mountains = new Cenario(bg_mountains, 0.15);
    trees = new Cenario(bg_trees, 0.5);
    ground = new Cenario(bg_ground, 10);
    points = new Pontuacao();
    player = new Personagem(matrizPersonagem, sprite, 10, 30, 180, 116, 90, 58);
    vida = new Vida(vida)
    // playerJump = new Personagem (matrizPulo, sprite, 10, 180, 116, 90, 58);
    const ant = new Inimigo(
      matrizAnt,
      inimigo,
      width,
      50,
      55,
      47,
      37,
      31,
      13
    );
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
    accorn = new Item(matrizAccorn, sprite, width - 20, 180, 32, 28, 16, 14);

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
    points.exibe();
    points.adicionarPontos();
    player.exibe();
    player.aplicaGravidade();
    accorn.exibe();
    accorn.move();
    vida.draw();

    pulo();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > inimigos.length - 1) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(15, 40));
    }

    if (player.estaColidindo(inimigo)) {
      // console.log('colidiu');
      player.matriz = matrizHurt;
      hurtSound.play();
      vida.perdeVida();

      image(gameOver, width / 2 - 200, height / 3);
      // noLoop();
    }

    if (player.coletaItens(accorn)) {
      // console.log('coletou');
      accorn.x = width + 550;
      // console.log(accorn.y)
      itemSound.play();
      // points.adicionarPontos(100);
      // noLoop();
      // points += 100
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
