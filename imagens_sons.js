//variaveis das imagens do jogo
let imagemDaEstrada;
let carros = [1, 2, 3, 4, 5, 6];
let imagemDoAtor;
let trilhaSonora;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  carros[1] = loadImage("imagens/carro-1.png");
  carros[2] = loadImage("imagens/carro-2.png");
  carros[3] = loadImage("imagens/carro-3.png");
  carros[4] = loadImage("imagens/carro-4.png");
  carros[5] = loadImage("imagens/carro-5.png");
  carros[6] = loadImage("imagens/carro-6.png");

  trilhaSonora = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
}
