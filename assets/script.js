function avisar() {
  alert("Opa, disparei!");
}

// Configuração do botão
let botao = document.querySelector("#botao");

//utilizando o "click"
botao.addEventListener("click", () => {
  avisar();
});
