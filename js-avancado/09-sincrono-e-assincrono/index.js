// const colocarAguaPraFerver = () => {
//   console.log('colocar água pra ferver');
// }

// const prepararPraPassarCave = () => {
//   console.log('pegar o pó de café');
//   console.log('pegar o filtro de café');
//   console.log('colocar o café no filtro');
//   console.log('colocar o filtro em cima da xícara');
// }

// const passarOCafe = () => {
//   console.log('passando o café');
// }

// colocarAguaPraFerver();
// prepararPraPassarCave();
// passarOCafe();

const colocarAguaPraFerver = () => {
  console.log('colocar água pra ferver');

  setTimeout(() => {
    passarOCafe();
  }, 5 * 1000);
}

const prepararPraPassarCave = () => {
  console.log('pegar o pó de café');
  console.log('pegar o filtro de café');
  console.log('colocar o café no filtro');
  console.log('colocar o filtro em cima da xícara');
}

const passarOCafe = () => {
  console.log('passando o café');
}

colocarAguaPraFerver();
prepararPraPassarCave();
