function verificar() {
    var fel = document.getElementById('textfel').value.toLowerCase();
    var resDiv = document.getElementById('res');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fel === "leao") {
        resDiv.textContent = "O leão [feminino: leoa] é uma espécie de mamífero carnívoro do gênero Panthera e da família Felidae. A espécie é atualmente encontrada na África subsaariana e na Ásia, com uma única população remanescente em perigo, no Parque Nacional da Floresta de Gir, Gujarat, Índia.!";
        img.setAttribute('src', 'leao.png');
    } 
    
    else if (fel === "tigre") {
        resDiv.textContent = "O Tigre [feminino: tigresa] é um mamífero carnívoro da família dos felídeos, que habita o continente asiático. Dentre suas subespécies é o maior entre todos os felinos selvagens do mundo. São animais extremamente territoriais e solitários."
        img.setAttribute('src', 'tigre.png')
    }  

    else if (fel === "lince") {
        resDiv.textContent = "O Lince é um mamífero da ordem Carnivora, família Felidae. O nome [Lince] originou-se da palavra grega λύγξ, via latim lynx derivada da raiz protoindo-europeia leuk-, em referência à luminescência de seus olhos refletores. O género tem distribuição geográfica vasta mas presente apenas no Hemisfério Norte!"
        img.setAttribute('src', 'lince.png')
    } 

    else if (fel === "onça pintada") {
        resDiv.textContent = "A onça  Pintada ou jaguar, também conhecida como onça-preta, é uma espécie de mamífero carnívoro da família dos felídeos encontrada nas Américas. É o terceiro maior felino do mundo, após o tigre e o leão, e o maior do continente americano."
        img.setAttribute('src', 'onça.png')
    }

    else if (fel === "leopardo") {
        resDiv.textContent = "o Leopardo é uma espécie de felídeo nativo da África e da Ásia. É, com o tigre, o leão, o leopardo-das-neves e a onça-pintada, um dos cinco grandes felinos do gênero Panthera. A espécie apresenta cerca de catorze subespécies regionais distribuídas pela África e Ásia, embora haja controvérsias quanto ao número."
        img.setAttribute('src', 'leo.png')
    } 

    else if (fel === "guepardo") {
        resDiv.textContent = "O Guepardo ou chita é um animal da família dos felídeos, ainda que de comportamento atípico, se comparado com outros da mesma família. É a única espécie vivente do gênero Acinonyx. Tendo como habitat a savana, vive na África, península Arábica e no sudoeste da Ásia. " 
        img.setAttribute('src', 'xita.png')
    }

    else if (fel === "leopardo das neves") {
        resDiv.textContent = "O Leopardo das Neves é um felino do gênero Panthera que habita as grandes altitudes da Ásia central. Apesar do nome, trata-se de uma espécie diferente do leopardo"
        img.setAttribute('src', 'lneve.png')
    } 

    else if (fel === "puma") {
        resDiv.textContent = "A Puma ou onça-parda, também conhecida no Brasil por suçuarana e leão-baio, é um mamífero carnívoro da família dos felídeos e gênero Puma, nativo da América. Foi originalmente classificada no gênero Felis, mas estudos genéticos demonstram que a espécie evoluiu em uma linhagem próxima à chita e ao gato-mourisco."
        img.setAttribute('src', 'puma.png')
    }

    else {
        resDiv.textContent = "[ERRO] Nome Inválido ou Animal inexistente!"
        img.setAttribute('src', 'erro.png')
    }

    resDiv.appendChild(img);
}

document.getElementById('button').addEventListener("click", verificar);