//variaveis universais dos carros
let larguraCarro = 50;
let alturaCarro = 30;
let posicaoXcarros = [0, 450, -50, 450, -50, 450, -50];
let posicaoYcarros = [0, 50, 100, 150, 215, 265, 320];
let movimentoXcarros = [0, 7, -6, 6, -4, 5, -3];

//carros enfileirados do 1 ao 6

function mostrarCarros() {
  image(
    carros[1],
    posicaoXcarros[1],
    posicaoYcarros[1],
    larguraCarro,
    alturaCarro
  );

  image(
    carros[4],
    posicaoXcarros[2],
    posicaoYcarros[2],
    larguraCarro,
    alturaCarro
  );

  image(
    carros[3],
    posicaoXcarros[3],
    posicaoYcarros[3],
    larguraCarro,
    alturaCarro
  );

  image(
    carros[4],
    posicaoXcarros[4],
    posicaoYcarros[4],
    larguraCarro,
    alturaCarro
  );

  image(
    carros[1],
    posicaoXcarros[5],
    posicaoYcarros[5],
    larguraCarro,
    alturaCarro
  );

  image(
    carros[6],
    posicaoXcarros[6],
    posicaoYcarros[6],
    larguraCarro,
    alturaCarro
  );
}

function velocidadeCarros() {
  for (let i = 0; i < posicaoXcarros.length; i = i + 1)
    posicaoXcarros[i] -= movimentoXcarros[i];
}

function loopDosCarros() {
  if (posicaoXcarros[1] < -50) {
    posicaoXcarros[1] = 450;
  }
  if (posicaoXcarros[3] < -50) {
    posicaoXcarros[3] = 450;
  }
  if (posicaoXcarros[5] < -50) {
    posicaoXcarros[5] = 450;
  }
  if (posicaoXcarros[2] > 450) {
    posicaoXcarros[2] = -50;
  }
  if (posicaoXcarros[4] > 450) {
    posicaoXcarros[4] = -50;
  }
  if (posicaoXcarros[6] > 450) {
    posicaoXcarros[6] = -50;
  }
}
