// Para criar objetos, coloca-se dentro de uma const as chaves {}
// Os objetos são uma coleção de propriedades e para acessá-las é preciso digitar a variável seguido de . (ponto).
// No caso abaixo temos objetos de alunos (nome e nota)
// Para agrupar objetos é só colocar colchetes [] e o nome disso é Array

const aluno01 =     {
    nome: "Thiago",
    nota: 6
}

const aluno02 = {
    nome: "Sarah",
    nota: 8
}

const aluno03 = {
    nome:"Valentina",
    nota: 9.5
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log (media)

//  Agrupando objetos (Arrays)

const alunos = [

    {
        name: "Thiago",
        nota: 6
    },
    {
        name: "Sarah",
        nota: 8
    },
    {
        name: "Valentina",
        nota: 9.5
    }
]

const nomeDeAlunos = ["Thiago", "Sarah", "Valentina"]

console.log (nomeDeAlunos)

const media1 = alunos[0].nota + alunos[1].nota + alunos[1].nota / 3

console.log (media1)