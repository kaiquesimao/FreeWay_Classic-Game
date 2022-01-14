function setup() {
  createCanvas(400, 400);
  trilhaSonora.loop();
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
