let numero = Math.floor(Math.random() * 11); // número aleatório entre 0 e 10
let tentativas = 0;

while (tentativas < 3) {
  let chute = prompt("Adivinhe um número entre 0 e 10:");
  if (chute == numero) {
    alert("Parabéns, você acertou!");
    break;
  } else {
    tentativas++;
    alert("Você errou! Você ainda tem " + (3 - tentativas) + " tentativas.");
  }
}

if (tentativas == 3) {
  alert("Suas tentativas acabaram. O número era " + numero + ".");
}