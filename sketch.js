let bg_clouds;
let bg_mountains;
let bg_trees;
let ground;
let sprite;
let cenario;
let music;
let player;

function preload() {
  bg_clouds = loadImage('assets/images/background/bg-clouds.png');
  bg_mountains = loadImage('assets/images/background/bg-mountains.png');
  bg_trees = loadImage('assets/images/background/bg-trees.png');
  bg_ground = loadImage('assets/images/background/ground.png');
  sprite = loadImage('assets/images/player/sprites.png');
  music = loadSound('assets/sounds/the_valley.ogg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clouds = new Cenario (bg_clouds, .1);
  mountains = new Cenario (bg_mountains, .15);
  trees = new Cenario (bg_trees, .5);
  ground = new Cenario (bg_ground, 5);
  player = new Personagem (sprite);
  frameRate(25)
  music.loop();
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
}
  
