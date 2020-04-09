// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// Endereço:
// Rua: Rua Guilherme Gembala
// Número: 260
// Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados

const empresa = {
    nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação"
} 

const endereço = {
    Rua: "Rua Guilherme Gembala",
    Número: 260
}

// Imprima na tela a seguinte frase A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

console.log (`A ${empresa.nome} está localizada em ${endereço.Rua}, ${endereço.Número}.`)


// VETORES E OBJETOS

// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }

const programadores = [
   {
       name: "Thiago",
       age: 32
   },
   {
       name: "Sarah",
       age: 31
   },
   {
       name: "Valentina",
       age: 3
   }  
]

const tecnologias = [

   {
       name: "C++",
       especialidade: "Desktop"
   },
   {
       name: "Python",
       especialidade: "Data Science"
   },
   {
       name: "JavaScript",
       especialidade: "Web/Mobile"
   }
]

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const Thiago = (`O usuário ${programadores[0].name} tem ${programadores[0].age} anos e usa a tecnologia ${tecnologias[0].name} com especialidade em ${tecnologias[0].especialidade}.`)
const Sarah =  (`O usuário ${programadores[1].name} tem ${programadores[1].age} anos e usa a tecnologia ${tecnologias[1].name} com especialidade em ${tecnologias[1].especialidade}.`)
const Valentina =  (`O usuário ${programadores[2].name} tem ${programadores[2].age} anos e usa a tecnologia ${tecnologias[2].name} com especialidade em ${tecnologias[2].especialidade}.`)

const programadores1 = [Thiago, Sarah, Valentina]

console.log (programadores1)