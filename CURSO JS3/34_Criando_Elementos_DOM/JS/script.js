// Inserir elementos no body
let novoParagrafo = document.createElement("p");

let texto = document.createTextNode("Este é o conteúdo do parágrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

let body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// Inserir em um container

let container = document.getElementById("container");

console.log(container);

let el = document.createElement("span");

el.appendChild(document.createTextNode("Texto do span"));

console.log(el);

container.appendChild(el);