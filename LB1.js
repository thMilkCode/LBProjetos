// // CÁLCULO IMC

const name = "Thiago"
const peso = 90
const altura = 1.76
const IMC = peso / (altura*altura)

if (IMC >= 30)
console.log (`${name} você está acima do peso, seu IMC deu ${IMC}.`)
else (IMC < 29.9)
console.log (`${name} você não está acima do peso, seu IMC deu ${IMC}, parabens!`)

// CÁLCULO DE APOSENTADORIA

const name1 = "Thiago"
const name2 = "Sarah"
const sexo1 = "M"
const sexo2 = "F"
const idade = 32
const contriM = 35
const contriF = 30
const somaM = idade + contriM
const somaF = idade + contriF
const homemaposenta = sexo1 == "M" && contriM >= 35 && somaM >= 95
const mulheraposenta = sexo2 == "F" && contriF >= 30 && somaF >= 85

if (homemaposenta)
console.log (`${name1}, você pode aposentar!`)
else
console.log (`${name1}, você não pode aposentar!`)

if (mulheraposenta)
console.log (`${name2}, você pode aposentar!`)
else
console.log (`${name2}, você não pode aposentar!`)

