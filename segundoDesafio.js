nivelDoHeroi(20, 3);

function nivelDoHeroi(vitorias, derrotas) {
  let calculoDeVitorias = vitorias - derrotas;
  let calculodeNivel;

  if (calculoDeVitorias <= 10) {
    calculodeNivel = "Ferro";
  } else if (calculoDeVitorias <= 20) {
    calculodeNivel = "Bronze";
  } else if (calculoDeVitorias <= 50) {
    calculodeNivel = "Prata";
  } else if (calculoDeVitorias <= 80) {
    calculodeNivel = "Ouro";
  } else if (calculoDeVitorias <= 90) {
    calculodeNivel = "Diamante";
  } else if (calculoDeVitorias <= 100) {
    calculodeNivel = "Lendario";
  } else {
    calculodeNivel = "Imortal";
  }
  console.log(
    "O Herói tem saldo de " +
      calculoDeVitorias +
      " está no nível de " +
      calculodeNivel
  );
}

//Não conseguir usar com return, vou continuar tentando outra forma
