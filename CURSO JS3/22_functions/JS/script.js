function primeiraFuncao() {
    console.log("Hello world of the functions");
}

primeiraFuncao("Matheus");

function dizerNome(nome) {
    console.log("Oi meu nome é: " + nome);
}

dizerNome("Matheus");
dizerNome("Luis Carlos");
dizerNome("Pedro");

let nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    let soma = a + b;
    return soma;
}

let somaUm = soma(2, 5);

console.log(somaUm);

let somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4, 5));
