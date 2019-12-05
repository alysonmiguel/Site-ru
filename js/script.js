let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let assunto = document.getElementById("assunto").value;
let textarea = document.getElementById("textarea").value;

let erro = [];

function verificar() {
  let ready = true;
  username = document.getElementById("username").value;
  email = document.getElementById("email").value;
  assunto = document.getElementById("assunto").value;
  textarea = document.getElementById("textarea").value;

  if (!username || !email || !assunto || !textarea) {
    ready = false;
    erro.push("Os campos são obrigatórios");
  }

  if (username.length < 4) {
    ready = false;
    document.getElementById("erroNome").innerText =
      "Usuario deve ter pelo menos de 4 letras";
  }
  if (!email.includes("@")) {
    ready = false;
    document.getElementById("erroEmail").innerText =
      "Esse não é um email valido";
  }
  if (assunto.length < 5) {
    ready = false;
    document.getElementById("erroAssunto").innerText =
      "O assunto deve possuir mais de 5 caracteres";
  }
  if (textarea.length <= 20) {
    document.getElementById("erroMsg").innerText =
      "A mensagem deve possuir no mínimo 20 caracteres";
    ready = false;
  }

  sendForm(ready);
}

function satisfacao() {
  let ready = true;
  username = document.getElementById("username").value;
  textarea = document.getElementById("textarea").value;

  if (!username || !textarea) {
    ready = false;
    erro.push("Os campos são obrigatórios");
  }

  if (username.length < 4) {
    ready = false;
    document.getElementById("erroNome").innerText =
      "Usuario deve ter pelo menos de 4 letras";
  }
  if (textarea.length <= 20) {
    document.getElementById("erroMsg").innerText =
      "A mensagem deve possuir no mínimo 20 caracteres";
    ready = false;
  }

  sendForm(ready);
}

function sendForm(ready) {
  document.getElementById("formulario")
    .addEventListener("click", function(event) {
      event.preventDefault();
    });
  if (ready) {
    alert("Envio bem sucedido!");
  } else {
    console.log(erro);
    alert("Algo ta errado");
    erro = [];
  }

}
