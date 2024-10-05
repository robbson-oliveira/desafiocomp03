// Exemplo 1: Solicitar a quantidade de parcelas e exibir o valor de cada uma, caso sejam parcelas simples.
let valorTotal = 50;
alert("Valor Total da sua Compra: " + valorTotal);

let parcelas = parseInt(prompt("Em quantas parcelas você quer dividir?"));
let valorParcela = valorTotal / parcelas;

for (let i = 1; i <= parcelas; i++) {
  alert("Parcela: " + i + " / " + parcelas + ": valor de R$ " + valorParcela.toFixed(2));
}

// Exemplo 2: Simular um empréstimo e exibir o valor de parcelas decrescentes.
function simuladorEmprestimo() {
  let valorTotalEmprestimo = parseFloat(prompt("Digite o valor do Empréstimo"));
  let numeroParcelas = parseInt(prompt("Em quantas parcelas quer pagar?"));
  let taxaJuros = 0.5; // Escolhi taxa de juros fixa 
  let totalEmprestimoComJuros = (numeroParcelas * taxaJuros) + valorTotalEmprestimo;
  let valordaParcela = totalEmprestimoComJuros / numeroParcelas;
  alert("Valor da parcela com juros: R$ " + valordaParcela);

  for (let i = 1; i <= numeroParcelas; i++) {
    alert("Parcela " + i + ": R$ " + valordaParcela);
    console.log("Parcela " + i + ": R$ " + valordaParcela);
    valordaParcela -= 0.05; // exemplo de parcelas decrescentes
  }
}

simuladorEmprestimo();

// Exemplo 3: Solicitar uma entrada através de prompt, manipular o valor a cada repetição, até que digite "sair".
let entrada = prompt("Digite seu nome");

while (entrada != "Sair") {
  switch (entrada) {
    case "João":
      alert("Bem Vindo João");
      break;
    case "Maria":
      alert("Bem Vindo Maria");
      break;
    case "Carlos":
      alert("Bem Vindo Carlos");
      break;
    default:
      alert("Quem é você?");
      break;
  }
  entrada = prompt("Digite um nome");
}


