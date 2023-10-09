
let listaCompras = prompt("Digite a lista de compras (separe os itens por vírgula):");

let itens = listaCompras.split(",");

alert("Lista de compras: " + itens.join(", "));