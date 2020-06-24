let bg_clouds;
let bg_mountains;
let bg_trees;
let ground;
let sprite;
let ant;
let cenario;
let music;
let player;

const matrizPersonagem = [
  [0, 0],
  [0, 36],
  [1, 72],
  [1, 107],
  [1, 137],
  [1, 164],
];

const matrizPulo = [
  [104, 3],
  [100, 48],
  [105, 93],
  [108, 141],
];


const matrizInimigo = [
  [5, 3],
  [6, 40],
  [8, 79],
  [8, 116],
  [8, 153],
  [8, 185],
  [6, 218],
  [7, 252],
];

function preload() {
  bg_clouds = loadImage('assets/images/background/large-bg-clouds.png');
  bg_mountains = loadImage('assets/images/background/large-bg-mountains.png');
  bg_trees = loadImage('assets/images/background/large-bg-trees.png');
  bg_ground = loadImage('assets/images/background/ground-large.png');
  sprite = loadImage('assets/images/player/sprites.png');
  ant = loadImage('assets/images/enemies/ant.png');
  music = loadSound('assets/sounds/the_valley.ogg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clouds = new Cenario (bg_clouds, .1);
  mountains = new Cenario (bg_mountains, .15);
  trees = new Cenario (bg_trees, .5);
  ground = new Cenario (bg_ground, 5);
  player = new Personagem (matrizPersonagem, sprite, 10, 90, 57, 57, 27);
  playerJump = new Personagem (matrizPulo, sprite, 10, 60, 67, 57, 37);
  enemyAnt = new Inimigo (matrizInimigo, ant, width - 50, 97, 47, 97, 35);
  frameRate(25)
  music.loop();
}

function keyPressed() {
  if(key === 'ArrowUp') {
    player.pula()
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
  enemyAnt.exibe();
  enemyAnt.move();

}
  
