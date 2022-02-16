//codigos do ator
let posicaoXator = 190;
let posicaoYator = 370;
let larguraAtor = 25;
let alturaAtor = 25;
let colisao = false;
let meusPontos = 0;

function mostrarAtor() {
  image(imagemDoAtor, posicaoXator, posicaoYator, larguraAtor, alturaAtor);
}

function movimentoAtor() {
  if (keyIsDown(UP_ARROW)) {
    posicaoYator -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMoverY()) {
      posicaoYator += 2;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    posicaoXator += 2;
  }

  if (keyIsDown(LEFT_ARROW)) {
    posicaoXator -= 2;
  }
}

function podeSeMoverY() {
  return posicaoYator < 370;
}

function verificarColisao() {
  for (let i = 0; i < carros.length; i = i + 1) {
    colisao = collideRectCircle(
      posicaoXcarros[i],
      posicaoYcarros[i],
      alturaCarro - 15,
      larguraCarro - 25,
      posicaoXator,
      posicaoYator,
      larguraAtor
    );
    
    if (colisao) {
      colidiu();
      somDaColisao.play();

      if (meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}

function colidiu() {
  posicaoYator = 370;
  posicaoXator = 180;
}

function pontuacao() {
  textAlign(CENTER);
  textSize(16);
  fill(255, 40, 0);
  rect(180, 8, 40, 20);
  fill(255);
  text(meusPontos, 200, 24);
}

function addPonto() {
  if (posicaoYator < 15) {
    meusPontos += 1;
    somDoPonto.play();
    colidiu();
  }
}
