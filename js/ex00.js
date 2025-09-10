// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function analisarAdivinhacao() { // Função chamada quando o jogador clica no botão de verificar o palpite
  const input = document.getElementById("adivinharInput"); // Obtém o campo de input onde o usuário digita o palpite
  const feedback = document.getElementById("feedback"); // Obtém o elemento onde o feedback será exibido (mensagens de acerto ou erro)
  const palpite = Number(input.value); // Converte o valor digitado pelo usuário (string) para número

  if (palpite < 1 || palpite > 100) {
    alert ("Por favor, digite um número entre 1 e 100.")
    return;
  }

  if (palpite < numeroSecreto) {
    feedback.textContent = "Muito baixo!👀";
    feedback.style.color = "darkblue";

  } else if (palpite > numeroSecreto) {
    feedback.textContent = "Muito alto!👀";
    feedback.style.color = "darkred";
   
  } else {
    feedback.textContent = "🎉 Você acertou!";
    feedback.style.color = "green";
    
  }

  input.value = ""; // Limpa o campo para nova tentativa
  input.focus(); // Foca novamente no campo de input
}
