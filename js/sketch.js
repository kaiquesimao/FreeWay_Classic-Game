function setup() {
  createCanvas(400, 400);
  userStartAudio(trilhaSonora.loop());
}

function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  movimentoAtor();
  mostrarCarros();
  velocidadeCarros();
  loopDosCarros();
  verificarColisao();
  pontuacao();
  addPonto();
}
