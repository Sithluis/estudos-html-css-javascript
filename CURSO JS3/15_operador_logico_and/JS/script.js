let idade = 16;

let nome = "João";

if (nome == "João" && idade == 16) {
    console.log("O joão pode entrar na sala de esgrima");
} else {
    console.log("Este não é o João");
}

if ((1 == 1 && 3 > 2) && true) {
    console.log("Passou");
}

if (1 == 1 && 3 > 3 && true) {
    console.log("passou");
} else if (nome === "João" && idade >= 14) {
    console.log("Aqui passa!");
}