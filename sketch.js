let bg_clouds;
let bg_mountains;
let bg_trees;
let ground;
let sprite;
let inimigo;
let cenario;
let music;
let jumpSound

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
  [10, 10],
  [10, 50],
  [10, 90],
  [10, 130],
  [10, 170],
  [10, 210],
  [10, 250],
  [10, 190],
];

const matrizGator = [
  [60, 10],
  [60, 60],
  [60, 110],
]

function preload() {
  bg_clouds = loadImage('assets/images/background/large-bg-clouds.png');
  bg_mountains = loadImage('assets/images/background/large-bg-mountains.png');
  bg_trees = loadImage('assets/images/background/large-bg-trees.png');
  bg_ground = loadImage('assets/images/background/ground-large.png');
  sprite = loadImage('assets/images/player/sprites.png');
  inimigo = loadImage('assets/images/enemies/enemies.png');
  music = loadSound('assets/sounds/the_valley.ogg');
  jumpSound = loadSound('assets/sounds/jump.ogg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clouds = new Cenario (bg_clouds, .1);
  mountains = new Cenario (bg_mountains, .15);
  trees = new Cenario (bg_trees, .5);
  ground = new Cenario (bg_ground, 5);
  player = new Personagem (matrizPersonagem, sprite, 10, 180, 116, 90, 58);
  // playerJump = new Personagem (matrizPulo, sprite, 10, 180, 116, 90, 58);
  Ant = new Inimigo (matrizAnt, inimigo, width - 50, 55, 47, 37, 31);
  // enemyGator = new Inimigo (matrizGator, inimigo, width - 50, 92, 98, 46, 49);
  frameRate(25)
  music.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    player.pula();
    jumpSound.play();
  } 
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
  Ant.exibe();
  Ant.move();
  // enemyGator.exibe();
  // enemyGator.move();

  pulo();

  if (player.estaColidindo(Ant)) {
    console.log('colidiu');
    noLoop();
  }

  function pulo() {
    if (player.y === 507) {
      player.matriz = matrizPersonagem;
    } else if (key = true) {
      player.matriz = matrizPulo;
    }
  }
  
}

