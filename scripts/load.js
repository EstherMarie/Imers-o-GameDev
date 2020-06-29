function preload() {
  bg_clouds = loadImage("assets/images/background/large-bg-clouds.png");
  bg_mountains = loadImage("assets/images/background/large-bg-mountains.png");
  bg_trees = loadImage("assets/images/background/large-bg-trees.png");
  bg_ground = loadImage("assets/images/background/ground-large.png");
  sprite = loadImage("assets/images/player/sprites.png");
  inimigo = loadImage("assets/images/enemies/enemies.png");
  vida = loadImage("assets/images/sprites/life.png");
  title = loadImage("assets/images/sprites/title-screen.png");
  startScreen = loadImage("assets/images/sprites/start-screen.png");
  // pressEnter = loadImage('assets/images/sprites/press-enter.png');
  gameOver = loadImage("assets/images/sprites/game-over-text.png");
  music = loadSound("assets/sounds/the_valley.ogg");
  jumpSound = loadSound("assets/sounds/jump.ogg");
  itemSound = loadSound("assets/sounds/item.ogg");
  hurtSound = loadSound("assets/sounds/hurt.ogg");
  fita = loadJSON("cartucho/fita.json");
  font = loadFont("assets/font/04B_03__.TTF");
}
