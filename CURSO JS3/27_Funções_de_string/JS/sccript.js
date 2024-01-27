// length : Conta o número de strings

let nome = "Matheus";

console.log(nome.length);

let obj = "bola";

console.log(obj.length);

// indexOf : Localiza a string/palavra

console.log(nome[2]);

let frase = "O rato roeu a roupa do rei de Roma";

console.log(frase.indexOf("roeu"));

// slice : Separa a String/Palavra

let roeu = frase.slice(7, 11);

console.log(roeu);

// Replace : Substitui a string por outra

let NewFrase = frase.replace("roeu", "teste");

    // PARTE 2

// toLowerCase e toUpperCase

let frase2 = "Esta é a frase que vamos manipular";

let fraseCaixaAlta = frase.toLowerCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

// trim

let nome2 = "      Matheus      ";

let nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

let frase3 = "Eu quero a ultima palavra teste para o teste final";

console.log(frase3.indexOf("teste"));

console.log(frase3.lastIndexOf("teste"));

