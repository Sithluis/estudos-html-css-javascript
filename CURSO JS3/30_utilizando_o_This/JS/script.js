let teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "Luis Carlos",
    idade: 20,
    falar: function() {
        console.log("Olá tudo bem?" );
    },
    dizerNome: function(){
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    }
};

console.log(pessoa.idade);

pessoa.dizerNome();

pessoa.aniversario();

console.log(pessoa.idade);