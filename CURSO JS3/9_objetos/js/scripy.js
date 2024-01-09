let obj = {
    nome: "Luis",
    idade: 20,
    profissão: "programador",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissão);
console.log(obj.estaTrabalhando);

console.log("O meu nome é " + obj.nome);

obj.nome = "Carlos";

console.log(obj.nome);

console.log(obj);

obj.graduação = true;

console.log(obj);