function avisar() {
  alert("Opa, disparei!");
}

// Configuração do botão
let botao = document.querySelector("#botao");

//utilizando o "mouseover"
botao.addEventListener("mouseover", () => {
  avisar();
});
