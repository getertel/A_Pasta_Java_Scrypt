function avisar() {
  alert("Opa, disparei!");
}

// Configuração do botão
let botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  avisar();
});
