let bg_clouds;
let bg_mountains;
let bg_trees;
let ground;
let sprite;
let inimigo;
let cenario;
let music;
let jumpSound;
let itemSound;
let hurtSound;
let item

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

const matrizHurt = [
  [210, 10],
  [210, 70],
];

const matrizAccorn = [
  [310, 10],
  [310, 30],
  [310, 50],
];

const inimigos = [];

function preload() {
  bg_clouds = loadImage('assets/images/background/large-bg-clouds.png');
  bg_mountains = loadImage('assets/images/background/large-bg-mountains.png');
  bg_trees = loadImage('assets/images/background/large-bg-trees.png');
  bg_ground = loadImage('assets/images/background/ground-large.png');
  sprite = loadImage('assets/images/player/sprites.png');
  inimigo = loadImage('assets/images/enemies/enemies.png');
  music = loadSound('assets/sounds/the_valley.ogg');
  jumpSound = loadSound('assets/sounds/jump.ogg');
  itemSound = loadSound('assets/sounds/item.ogg');
  hurtSound = loadSound('assets/sounds/hurt.ogg');
  item = loadImage('assets/images/player/sprites.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clouds = new Cenario (bg_clouds, .1);
  mountains = new Cenario (bg_mountains, .15);
  trees = new Cenario (bg_trees, .5);
  ground = new Cenario (bg_ground, 5);
  player = new Personagem (matrizPersonagem, sprite, 10, 30, 180, 116, 90, 58);
  // playerJump = new Personagem (matrizPulo, sprite, 10, 180, 116, 90, 58);
  const ant = new Inimigo (matrizAnt, inimigo, width - 50, 50, 55, 47, 37, 31, 13, 100);
  const gator = new Inimigo (matrizGator, inimigo, width - 50, 230, 92, 98, 46, 49, 16, 500);
  accorn = new Item (matrizAccorn, sprite, width - 20, 110, 32, 28, 16, 14);

  inimigos.push(ant);
  inimigos.push(gator);

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
  player.exibe();
  player.aplicaGravidade();
  accorn.exibe();
  accorn.move();
  // ant.exibe();
  // ant.move();
  // gator.exibe();
  // gator.move();

  pulo();


  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (player.estaColidindo(inimigo)) {
      console.log('colidiu');
      player.matriz = matrizHurt
      hurtSound.play();
      // noLoop();
    }
  })
  

  if (player.coletaItens(accorn)) {
    console.log('coletou');
    accorn.x = width + 500;
    console.log(accorn.y)
    itemSound.play();
    // pontuação +100
    // noLoop();
    
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

