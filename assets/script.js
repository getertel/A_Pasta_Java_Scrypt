function avisar() {
  alert("Opa, disparei!")
}
//configuração de botão
let botao = document.querySelector("#bota")

documento.addEventListenner("click", ()=> {
  avisar()
})


//criando alert
//alert("opa aqui esta um aviso")




// tipos de variaveis:
/*
let idade = 18       //tipo number
let nome = "boniec"  //tipo string
let logado = true    //tipo boolean
 */

//Novo Tema: Criando condicionais de execução
//if (idade == 18) {
  //  console.log("Parabéns, agora vc pode ser preso!")
//}

//Tema: executando looping
/*let lista = [10, 20, 30, 40]

for(let item of lista)
{
  console.log(item)
}*/

// outro exemplo:
/*let lista = ["Farinha", "Fubá", "Açucar", "Sal"]

for(let item of lista)
{
  console.log("- ingrediente: olha ai- " + item)
} 
*/

//outro exemplo:
/*if(nome == "bonieco") {
  console.log("mensagem especial")
} else {
  console.log("mensagem normal")
}*/


 //alguns tipos de condicionais
 /* ==
    !=
    >
    <
    >=
    <=
*/




//Tema: array e objetos

/* let ingredientes = ["farinha!", "agua", "sal!", "açucar!", "ovos!"]
 console.log(ingredientes[1])

 let personagem = {
    nome: "Geter",
    condicao: "fase dificil,",
    oqueFazer: "Aguardando ajuda de Deus.",
    dores: "Ja imaginando oque há por vir!",
    vai: "mãos a obra!"  
}

console.log(personagem.dores, personagem.condicao, ingredientes[2], personagem.vai)

//Tema: criando funções

function sum(a, b) {
    let resultado = a + b;
    return resultado
   
}

//Tema: criando uma aero function
// let subtract = (a, b) => {
  //  let resultado = a - b;
   // return resultado
 //}
let x = sum(25, 60)
//let y = subtract(59, 30)

console.log(x)
//console.log(y) */
