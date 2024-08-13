// tipos de variaveis:

let idade = 59       //tipo number
let nome = "boniec"  //tipo string
let logado = true    //tipo boolean

// array e objetos

let ingredientes = ["farinha!", "agua", "sal!", "açucar!", "ovos!"]
console.log(ingredientes[1])

let personagem = {
    nome: "Geter",
    condicao: "fase dificil,",
    oqueFazer: "Aguardando ajuda de Deus.",
    dores: "Ja imaginando oque há por vir!",
    vai: "mãos a obra!"  
}

console.log(personagem.dores, personagem.condicao, ingredientes[2], personagem.vai)

//criando funções

function sum(a, b) {
    let resultado = a + b;
    return resultado
   
}

//criando uma aero function
// let subtract = (a, b) => {
  //  let resultado = a - b;
   // return resultado
 //}
let x = sum(25, 60)
//let y = subtract(59, 30)

console.log(x)
console.log(y)