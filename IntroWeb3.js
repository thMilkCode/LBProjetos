// ESTRUTURA DE REPETIÇÃO
// Estr Rep "for" junto com variável "let" que ao contrário da variável const, autoriza a alteração da variável.

const turmaA = [
    {
        name: "Thiago",
        nota: 8
    },
    {
        name: "Sarah",
        nota: 9
    },
    {
        name: "Valentina",
        nota: 10
    }  
]

const turmaB = [
    {
        name: "Danilo",
        nota: 7
    },
    {
        name: "Camila",
        nota: 4
    },
    {
        name: "Danilinho",
        nota: 2
    }  
]

function calculaMedia (alunos) {

    for (let i = 0; i < alunos.length; i++) { 
        console.log (i)
    }

}

// const media1 = calculaMedia (turmaA)
// const media2 = calculaMedia (turmaB)

function enviaMensagem (media, turma) {
    
    //  Se a média for maior que 5, parabenizar a turma.
    if (media > 5) {
        console.log (`A média da ${turma} foi de ${media}. Parabens!`)
    }
    else { 
        console.log (`A média da ${turma} é menor que 5.`)
    } 
}

// enviaMensagem (media1, `turmaA`)
// enviaMensagem (media2, `turmaB`)