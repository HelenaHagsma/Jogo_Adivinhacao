const numeroSecreto = Math.floor(Math.random() * 100) + 1; /*Gera um numero aleatorio */ /*essa linha cria e guarda um número aleatório entre 1 e 100 na variável numeroSecreto*/

const input = document.getElementById("guessInput");
const button = document.getElementById("guessButton");
const message = document.getElementById("message");

/*getElementById busca no HTML um elemento que tenha o id indicado. */
  
  if (palpite < 1 || palpite > 100 || !palpite) {
    alert("Digite um número entre 1 e 100!")
    return;
}

  if (palpite< numeroSecreto){
    alert("Muito baixo!")
  }
  else if(palpite>numeroSecreto){
    alert("Muito alto!")
  }
  else{
    alert("Voce acertou!")
    button.disabled = true;
    input.disabled = true;
  }

};