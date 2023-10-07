let peso = Number(prompt(`Digite seu peso: `))

let altura = Number(prompt(`Digite sua altura: `))


let imc = peso/(altura*altura)

if(imc < 18.5 ){
    alert(`Você esta abaixo do peso`)
}else if(imc >= 18.5 && imc <= 24.99){
    alert('Parabens você está no peso ideal')
} else if(imc > 24.99){
    alert('Obesidade, cuidado!')
}
