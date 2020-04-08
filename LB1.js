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
const idade = 55
const contriM = 35
const contriF = 30
const somaM = idade + contriM
const somaF = idade + contriF

if (somaM >= 95 && sexo1 == "M")
console.log (`${name1}, você pode se aposentar!`)
else (somaM < 94.9 && sexo1 == "M")
console.log (`${name1}, você ainda não pode se aposentar!`)

if (somaF >= 85 && sexo2 == "F")
console.log (`${name2}, você pode se aposentar!`)
else (somaF < 84.9 && sexo2 == "F")
console.log (`${name2}, você ainda não pode se aposentar!`)

