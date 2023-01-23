//variaveis das imagens do jogo
let imagemDaEstrada;
let carros = [1, 2, 3, 4, 5, 6];
let imagemDoAtor;
let trilhaSonora;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("src/img/estrada.png");
  imagemDoAtor = loadImage("src/img/ator-1.png");
  carros[1] = loadImage("src/img/carro-1.png");
  carros[2] = loadImage("src/img/carro-2.png");
  carros[3] = loadImage("src/img/carro-3.png");
  carros[4] = loadImage("src/img/carro-4.png");
  carros[5] = loadImage("src/img/carro-5.png");
  carros[6] = loadImage("src/img/carro-6.png");

  trilhaSonora = loadSound("src/audio/trilha.mp3");
  somDaColisao = loadSound("src/audio/colidiu.mp3");
  somDoPonto = loadSound("src/audio/pontos.wav");
}
