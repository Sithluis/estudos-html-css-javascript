// Exercício de manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro iten da lista usando shift().
// Imprima a lista final no console.


// Como eu fiz!
const nomes = []

nomes.push("Arroz", "Feijão", "Sabão", "Açucar", "Carne")

nomes.shift()

console.log(nomes)

// Execício de Manipulação de Array - find

// Você tem um Arrays de números: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número que é divisivel por 7
// e maior que 10.

const numeros = [3, 7, 14, 21, 29, 36, 42]

const numeroET = numeros.find((num) => num / 7 && num > 10 )

console.log(numeroET)

// Exercicio de Manipulão de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 40].
// Use a função filter() para criar um novo array que contenha apenas os números 
// que são maiores que 20.

const numbers = [5, 10, 15, 20, 25, 30, 40]

const numbers2 = numbers.filter((num) => num > 20)

console.log(numbers2)

// Execício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo ".
// Remova os espaços em branco no ínicio e no final da string
// Em seguida, divida a string em palavras
const frase = " bom dia, mundo "

const palavras = frase.trim().split(" ")

console.log(frase)
console.log(palavras)

// Exercício de Manipulação de string - startWith(), endesWith().
// Dada a string: "O rato roeu a roupa do rei de Roma"
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma"

const frase2 = "O rato roeu a roupa do rei de Roma"

console.log(frase2)
console.log(frase2.startsWith("O"))
console.log(frase2.endsWith("Roma"))
