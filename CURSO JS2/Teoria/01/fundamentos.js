//Fundamentos

let minhaVariavel = "olá, javascript"

console.log(minhaVariavel)

let meuNumero = 10;

console.log(meuNumero)

console.log(meuNumero + 5)

console.log("10" + 5)

console.log(typeof meuNumero)

console.log(typeof minhaVariavel)

let booleano = true; // or false

console.log(typeof booleano)

let meuObjeto = {};
let meuArray = [];
let meuNull = null;
let meuUndefined = undefined;

console.log(typeof meuObjeto)
console.log(typeof meuArray)
console.log(typeof meuNull)
console.log(typeof meuUndefined)

// let e const
// novas formas de declarar variáveis
let x = 10;
const y = 5;

console.log(typeof x)

console.log(x, y)

// Operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparação
console.log(x == y);
console.log(x != y);

console.log("5" == 5);
console.log("5" != 5);
console.log("5" === 5);

// Operadores lógicos
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

// conversão de tipos
const meuNumero2 = "123"

const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)

// Estrutura de condição - if, else, else if

const idade = 17

if (idade < 13) {
    console.log("crinça")
} else if (idade < 20) {
    console.log("adolescente")
} else {
    console.log("adulto")
}

if (false) {
    console.log("isso executa")
}
else {
    console.log("isso agora executa")
}

// Switch
const fruta = "Maçã"

switch (fruta) {
    case "Banana":
        console.log("banana é a fruta")
        break;
    case "Maçã":
        console.log("Maçã é a fruta")
        break;
    default:
        console.log("fruta não encontrada")    
}

// Estruturas de repetição
// 1, 2, 3, 4, 5, 6... => dependendo de uma condição

// contador, condição de limite, incremento

// For

for (let i = 0; i < 6; i++) {
    console.log("O valor de i é: " + i);
}

// while

let k = 0;

while (k < 6) {
    console.log("O valor de k é: " + k);
    k++;
}

// do while 

let j = 0;

do {
    console.log("O valor de j é: " + j)

    j++;
} while(j < 6);

// Funções
//function nome(arg1, agr2) {corpo}
function cumprimentar(nome) {
    console.log("olá! " + nome)
}

// Invocação = nome()
cumprimentar("matheus")

// Escopo de variáveis
let cor = "azul"

function mostrarCor() {
    let cor = "verde"

    console.log(cor)
}

console.log(cor);

mostrarCor();

// hoisting = içamento
testeHoisting();

function testeHoisting() {
    console.log("Deu certo!")
}

// Arrow function
const testeArrow = () => console.log("isso também é uma função.")

testeArrow()

// truthy e falsy
const minhaVariavel1 = "" // falsy
const minhaVariavel2 = "Eu existo" // truthy

if (minhaVariavel1) {
    console.log("É verdadeiro")
} else {
    console.log("É falso")
}

if (minhaVariavel2) {
    console.log("É verdadeiro")
} else {
    console.log("É falso")
}

// Array, listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros)

console.log(numeros[0])

console.log(numeros[2])

numeros.push(6)
console.log(numeros)

// prototype => OBJETO -> objeto2
// Array => nossos arrays
numeros.pop()
console.log(numeros)

// strings 
const minhaStringNova = "olá, Mundo"

console.log(minhaStringNova)

// Concatenação = + 
const minhaString3 = minhaStringNova + " como você está?"

console.log(minhaString3)

// Interpolação
const minhaString4 = `${minhaStringNova} como você está?`
console.log(minhaString4)

console.log(minhaString4.length) //qtd de caracteres
console.log(minhaString4[5]) //encontra letra especifica 
console.log(minhaString4.toUpperCase()) //caixa alta em todas as letras

// Data e Hora
const agora = Date()
console.log(agora)

const natal = new Date(2023, 11, 25)
console.log(natal)

// Math
console.log(Math.PI) // valor de pi

console.log(Math.round(5.6)) // arredonda numero(para cima)

console.log(Math.sqrt(16)) // raiz quadrada (sqrt)

console.log(Math.pow(2, 3)) // Potencia

// FIM DOS FUNDAMENTOS