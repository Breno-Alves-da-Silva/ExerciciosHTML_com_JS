
let valorProduto = parseFloat(prompt("Digite o valor do produto: "));
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto: "));

let valorDesconto = (valorProduto * porcentagemDesconto) / 100;

let valorFinal = valorProduto - valorDesconto;

alert("Valor final do produto com desconto: R$" + valorFinal.toFixed(2));