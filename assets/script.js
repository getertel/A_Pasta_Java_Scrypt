let dolar = 5.48

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {

})

brlInput.addEventListener("keyup", () => {

})

usdInput.value = "1000,00"
convert("usd-to-brl")

//funções
function formatCurrency(value) {
   // ajustar o valor
   let fixedValue = fixValue(value)
   //atulizar função de formatar 
   let options = {
       useGrouping: false,
       minimumFractionDigits: 2
      
      }
      let formatter = new Intl.NumberFormat("pt-BR", options)
   // retorna o valor formatado
      return formatter.format(fixedValue)

}

function fixValue(value) {
     let fixedValue = value.replace(",", ".")
     let floatValue = parseFloat(fixedValue)
     if(floatValue == NaN) {
      floatValue = 0
     }
     return floatValue 
}

function convert(type) {
    if(type == "usd-to-brl") {
      // ajustar o valor
      // converter o valor
      // mostra no campo de real
      
    }
    if(type == "brl-to-usd") {
     // ajustar o valor
      // converter o valor
      // mostra no campo de dolar

    }
  }