// length
let arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// push
arr.push(6);
arr.push("Qualquer coisa");

console.log(arr);

// pop
arr.pop();

console.log(arr);

// unshift
arr.unshift(0);
arr.unshift("teste");

console.log(arr);

// shift
arr.shift();

console.log(arr);

// acessar o ultimo elemento
console.log(arr(arr.length - 1));

// isArray
console.log(Array.isArray(5));

console.log(Array.isArray(arr));

    //PARTE 2

// splice
let arr2 = [1, 2, 3, 4, 5,];

arr2.splice(2, 0, 999);

console.log(arr2);

arr.splice(4, 1);

console.log(arr2);

// indexOf

console.log(arr2.indexOf(5));

// join

let arr3 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr3.join(","));
