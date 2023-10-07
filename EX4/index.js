let quant = Number(prompt(`Digite quantos produtos você quer: `))

let qualProduto = Number(prompt(`Digite qual produto você quer: `))

let produtoUm = 15; 

let produtoDois = 25; 

let produtoTres = 37; 

let produtoQuatro = 5; 

switch (qualProduto) {
    case 1:
        if (produtoUm < quant) {
            alert("Você não tem os itens suficientes")
        }else if(produtoUm > quant){
            alert('Obrigado por comprar nosso site')
        }
        break;
    case 2:
       if (produtoDois < quant) {
            alert("Você não tem os itens suficientes")
        }else if(produtoDois > quant){
            alert('Obrigado por comprar nosso site')
        }
        break;
        case 3:
       if (produtoTres < quant) {
            alert("Você não tem os itens suficientes")
        }else if(produtoTres > quant){
            alert('Obrigado por comprar nosso site')
        }
        break;
        case 4:
       if (produtoQuatro < quant) {
            alert("Você não tem os itens suficientes")
        }else if(produtoQuatro > quant){
            alert('Obrigado por comprar nosso site')
        }
        break;
   
}