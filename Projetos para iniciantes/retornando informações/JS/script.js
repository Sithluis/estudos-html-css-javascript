function verificar() {

let nome = document.querySelector("#nomeU").value;
let idade = document.querySelector("#idadeU").value.toString();
let profissão = document.querySelector("#profU").value;
let curso = document.querySelector("#cursoU").value;

let resDiv = document.querySelector("#res");

if (nome !== "" && idade !== "" && profissão !== "" && curso !== "" ) {
    resDiv.textContent = `Olá ${nome}, aparentemente sua idade é ${idade}, sua profissão é ${profissão} e cursa ${curso}.`;
}

else if (nome !== "" && idade !== "" && profissão !== "") {
    resDiv.textContent = `Olá ${nome}, aparentemente sua idade é ${idade}, sua profissão é ${profissão}.`;
}

else {
    resDiv.textContent = "Falta informações" ;
}

}

document.querySelector("#ve").addEventListener("click", verificar);