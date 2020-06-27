let bg_clouds;
let bg_mountains;
let bg_trees;
let ground;
let sprite;
let inimigo;
let music;
let jumpSound;
let itemSound;
let hurtSound;
let points;
// let gamestart;
// let pressEnter;
let GameOver;
let font;

let inimigoAtual = 0;

const matrizPersonagem = [
  [10, 10],
  [10, 70],
  [10, 130],
  [10, 190],
  [10, 250],
  [10, 310],
];

const matrizPulo = [
  [110, 10],
  [110, 70],
  [110, 130],
  [110, 190],
];

const matrizAnt = [
  [350, 10],
  [350, 50],
  [350, 90],
  [350, 130],
  [350, 170],
  [350, 210],
  [350, 250],
  [350, 190],
];

const matrizGator = [
  [400, 10],
  [400, 60],
  [400, 110],
];

const matrizGrasshopper = [
  [520, 10],
  [520, 60],
  [520, 110],
  [520, 160],
  [580, 10],
  [580, 60],
  [460, 10],
  [460, 60]
];

const matrizHurt = [
  [210, 10],
  [210, 70],
];

const matrizAccorn = [
  [310, 10],
  [310, 30],
  [310, 50],
];

const cenario = [];

const inimigos = [];

function preload() {
  bg_clouds = loadImage('assets/images/background/large-bg-clouds.png');
  bg_mountains = loadImage('assets/images/background/large-bg-mountains.png');
  bg_trees = loadImage('assets/images/background/large-bg-trees.png');
  bg_ground = loadImage('assets/images/background/ground-large.png');
  sprite = loadImage('assets/images/player/sprites.png');
  inimigo = loadImage('assets/images/enemies/enemies.png');
  // gamestart = loadImage('assets/images/sprites/title-screen.png');
  // pressEnter = loadImage('assets/images/sprites/press-enter.png');
  gameOver = loadImage('assets/images/sprites/game-over-text.png');
  music = loadSound('assets/sounds/the_valley.ogg');
  jumpSound = loadSound('assets/sounds/jump.ogg');
  itemSound = loadSound('assets/sounds/item.ogg');
  hurtSound = loadSound('assets/sounds/hurt.ogg');
  font = loadFont('assets/font/04B_03__.TTF');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clouds = new Cenario (bg_clouds, .1);
  mountains = new Cenario (bg_mountains, .15);
  trees = new Cenario (bg_trees, .5);
  ground = new Cenario (bg_ground, 10);
  points = new Pontuacao();
  player = new Personagem (matrizPersonagem, sprite, 10, 30, 180, 116, 90, 58);
  // playerJump = new Personagem (matrizPulo, sprite, 10, 180, 116, 90, 58);
  const ant = new Inimigo (matrizAnt, inimigo, width, 50, 55, 47, 37, 31, 13, 100);
  const grasshopper = new Inimigo (matrizGrasshopper, inimigo, width, 26, 104, 90, 52, 45, 16, 100);
  const gator = new Inimigo (matrizGator, inimigo, width, 170, 92, 98, 46, 49, 19, 100);
  accorn = new Item (matrizAccorn, sprite, width - 20, 180, 32, 28, 16, 14);
  textFont(font);

  inimigos.push(ant);
  inimigos.push(grasshopper);
  inimigos.push(gator);

  cenario.push(clouds);
  cenario.push(mountains);
  cenario.push(trees);

  frameRate(25)
  music.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    player.pula();
    jumpSound.play();
  } 
}

function mousePressed() {
player.pula();
jumpSound.play();
}

function draw() {
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
  
  pulo();


  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < -inimigo.largura;

  inimigo.exibe();
  inimigo.move();

  if(inimigoVisivel) {
    inimigoAtual++;
    if(inimigoAtual > inimigos.length-1) {
      inimigoAtual = 0;
    }
    inimigo.velocidade = parseInt(random(15,40));
  }

  if (player.estaColidindo(inimigo)) {
    // console.log('colidiu');
    player.matriz = matrizHurt
    hurtSound.play();
    
    image(gameOver, width/2 - 200, height/3)
    noLoop();
    
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