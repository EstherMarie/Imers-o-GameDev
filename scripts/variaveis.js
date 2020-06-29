let bg_clouds;
let bg_mountains;
let bg_trees;
let clouds;
let mountains;
let trees;
let ground;

let sprite;
let player;
let accorn;
let inimigo;
let vida;
let life;

let music;
let jumpSound;
let itemSound;
let hurtSound;
let points;
let startScreen;
let title;
// let pressEnter;
let GameOver;
let font;

let jogo;
let telaInicial;
let cenaAtual = 'telaInicial';
let cenas;
let botaoGerenciador;


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
  [460, 60],
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
