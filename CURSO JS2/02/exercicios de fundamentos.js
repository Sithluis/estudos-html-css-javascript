// Exercícios de fundamentos
//Exercício 1: Olá, mundo!
//Crie um script que imprima "Olá, mundo" no console

console.log("Olá, mundo!");

// Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234". converta-o em um número e exiba o tipo de variavel

const meuNumero = "1234"

console.log(meuNumero)

console.log(typeof meuNumero)

const meuNumeroCon = Number(meuNumero)

console.log(meuNumeroCon)

console.log(typeof meuNumeroCon)

// Exercício 3: Manipulação de strings
// Dado uma string "JavaScript é incrivel", Escreva um código que conte quantos caracteres tem e quantas palavras existem na frase.

const frase = "JavaScript é incrivel"

const numeroDePalavras = frase.trim().split(/\s+/).length;

console.log(frase)

console.log(frase.length)

console.log(numeroDePalavras)

// COMO O PROFESSOR FEZ
const minhaString = "JavaScript é incrivel"
const numeroDeCaracteres = minhaString.length;
const numeroDePalavras2 = minhaString.split(" ").length;

console.log(`O numero de caracteres é: ${numeroDeCaracteres}`)
console.log(`O numero de palavras é: ${numeroDePalavras2}`)

// exercicio 4: loops e Arrays
// Crie um array com cincos nomes. use um loop para imprimir cada nome no console.

const nomes = ["Ana", "Jude", "Yasmin", "Adriele", "Lívia"]

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

// Exercicio 5 : Mais dificil, nem tentei resolver

function converterHorario(horario24) {
    //jeito padrão
    //14:20 => hora = 14, minuto = 20 => split(":") => [0] = horario24
    //const hora = horario24.plit(":")[0]
    // const minuto = horario24.plit(":")[1]

    const [hora, minuto] = horario24.split(":");

    // teoria: 15 / 12 = 3, 23 % 12 = 11
    // falsy 12 % 12 = 0 => 12

    const hora12 = hora % 12 || 12

    let = periodo = "AM";

    if (hora > 12) {
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario("13:23");

converterHorario("20:30");

converterHorario("10:23");

// ++Exercicios
// Soma
let n1 = 9
let n2 = 7

const resM = n1 + n2

console.log(`A soma de ${n1} + ${n2} é igual a: ${resM}`)

// Subtração

let n3 = 230
let n4 = 121

const resS = n3 - n4 

console.log(`O resultado da subtração de ${n3} por ${n4} é: ${resS}`)

// Multiplicação

let n5 = 7
let n6 = 9

const resX = n5 * n6 

console.log(`O resultado da multiplicação de ${n5} x ${n6} é: ${resX}`)

// Divisão

let n7 = 72
let n8 = 3

const resD = n7 / n8

console.log(`A divisão de ${n7} por ${n8} é: ${resD}`)

// descrição Luis

const nome = "Luis Carlos"
let idade = 20
const sexo = "Masculino"

console.log(`Meu nome é ${nome} tenho ${idade} anos e sou do sexo ${sexo}`)

// Descrição jaqueline

const name = "Jaqueline"
let age = 20
const sex = "Feminino"

console.log(`Essa é a ${name} ela tem ${age} e é do sexo ${sex}`)

// descrição de Aluno

const nameA = "Lucas"
let ageA = 16
const sexA = "M"
const materia = "História"
let nota = 8.3

console.log(`O aluno ${nameA} de ${ageA} anos e do sexo ${sexA}, teve a nota de ${nota} em ${materia}`)