//variaveis das imagens do jogo
let imagemDaEstrada;
let carros = [1, 2, 3, 4, 5, 6];
let imagemDoAtor;
let trilhaSonora;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("estrada.png");
  imagemDoAtor = loadImage("ator-1.png");
  carros[1] = loadImage("carro-1.png");
  carros[2] = loadImage("carro-2.png");
  carros[3] = loadImage("carro-3.png");
  carros[4] = loadImage("carro-4.png");
  carros[5] = loadImage("carro-5.png");
  carros[6] = loadImage("carro-6.png");

  trilhaSonora = loadSound("trilha.mp3");
  somDaColisao = loadSound("colidiu.mp3");
  somDoPonto = loadSound("pontos.wav");
}
