// if, else, else if

const idade = 21 

if (idade < 12 )
{
    console.log("Criança")
}  else if (idade < 18){
    console.log("Adolescente")
}
else {
    console.log("Adulto")
}
//switch

const fruta = "mamão"
switch (fruta) {
    case("banana"):
    console.log("banana é a fruta")
    break;

    case("laranja"):
    console.log("laranja é a fruta")
    break;

    case("maçã"):
    console.log("maçã é a fruta")
    break;

    default:
        console.log("fruta não encontrada !");
}


//estruturas de repetição
for (let H = 0; H < 10; H++) {
    console.log ("O valor de H é: " + H)
}

//Funções

function cumprimentar(nome) {
    console.log(`Olá ${nome}`)
}

cumprimentar("Lucas")