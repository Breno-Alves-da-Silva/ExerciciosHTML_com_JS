 let notaUm = Number(prompt(`Digite a primeira nota: `))

 let pesoUm = Number(prompt(`Digite o peso da primeira nota: `))

 let notaDois = Number(prompt(`Digite a segunda nota: `))

 let pesoDois = Number(prompt(`Digite o peso da segunda nota: `))

 let notaTres = Number(prompt(`Digite a terceira nota: `))

 let pesoTres = Number(prompt(`Digite o peso da terceira nota: `))


 let notaPesadaUm = notaUm * pesoUm;
 
 let notaPesadaDois = notaDois * pesoDois;
 
 let notaPesadaTres = notaTres * pesoTres;

let media = (notaPesadaUm + notaPesadaDois + notaPesadaTres)/3;

alert("A média é " + media);