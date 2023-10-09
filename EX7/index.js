
let loginCorreto = "usuario";
let senhaCorreta = "senha123";

let login = prompt("Digite o login:");
let senha = prompt("Digite a senha:");

if (login === loginCorreto && senha === senhaCorreta) {
    alert("Login bem-sucedido!");
} else {
    alert("Login e/ou senha incorretos. Tente novamente.");
}