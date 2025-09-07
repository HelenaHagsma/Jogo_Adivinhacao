// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function analisarAdivinhacao() {
  const input = document.getElementById("adivinharInput");
  const feedback = document.getElementById("feedback");
  const palpite = Number(input.value);

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