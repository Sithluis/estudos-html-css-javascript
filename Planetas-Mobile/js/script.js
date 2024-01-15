function verificar() {
    let pla = document.getElementById("textpla").value.toLowerCase();
    let resDiv = document.getElementById("res");
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (pla === "terra") {
        resDiv.textContent = 'A terra é o único planeta conhecido a abrigar vida. composto por oceanos, continentes e uma atmosfera rica em oxigênio e nitrogênio. Uma lua que se chama "lua", que orbita a Terra.'
        img.setAttribute('src', 'imagens/terra.png'); // informações e foto da terra
    }

    else if (pla === "mercurio") {
        resDiv.textContent = "O planeta mais próximo do sol, sem atmosfera significativa, variações extremas de temperatura, com calor extremo no lado iluminado e frio intenso no lado escuro. sem luas conhecidas.";
        img.setAttribute('src', 'imagens/mercurio.png'); // informações e foto de mercurio
    }

    else if (pla === "venus") {
        resDiv.textContent = "Similar em tamanho e composição à terra. Atmosfera densa e tóxica, principalmente de dióxico de carbono. Superfície quente devido ao efeito estufa, tornando-a o planeta mais quente do Sistema Solar, sem luas conhecidas."
        img.setAttribute('src', 'imagens/venus.png'); // informações de venus e foto
    }

    else if (pla === "marte") {
        resDiv.textContent = 'conhecido como o "Planeta Vermelho" devido à sua cor característica, possui uma fina atmosfera, principalmente de dióxido de carbono, tem características geológicas semelhante às da terra, incluindo vales e montanhas, tem duas luas conhecidas: fobos e deimos.' 
        img.setAttribute('src', 'imagens/marte.png');
    }

    else if (pla === "saturno") {
        resDiv.textContent = "conhecidos pelos seus anéis espetaculares, composto principalmente de partículas de gelo e poeira, também é um gigante gasoso, com atmosfera rica em hidrogênio e hélio, possui uma atmosfera espessa e lagos de metano e etano."
        img.setAttribute('src', 'imagens/saturno.png')
    }

    else if (pla === "jupter") {
        resDiv.textContent = "O maior planeta do Sistema Solar, composto principalmente de hidrogênio e hélio possui uma atmosfera turbulenta com faixas de nuvens e a grande Mancha Vermelha, gigantesca tempestade, tem mais de 80 luas conhecidas, incluindo as quatro luas galienas: lo, europa, ganimedes e calisto."
        img.setAttribute('src', 'imagens/jupiter.png');
    }

    else if (pla === "urano") {
        resDiv.textContent = "Um gigante gasoso com uma atmosfera principalmente de hidrogênio e hélio, tem um eixo de rotação inclinado, resultando em um movimento de rotação quase deitado, possui anéis estreitos e 27 luas conhecidas."
        img.setAttribute('src', 'imagens/urano.png') // foto do planeta urano
    }  

    else if (pla === "netuno") {
        resDiv.textContent = "O último planeta do Sistema Solar, similar a urano em tamanho e composição, tem atmosfera com ventos extremamente velozes e uma mancha escura chamada de grande mancha escura, possui anéis tênues e 14 luas conhecidas."
        img.setAttribute('src', 'imagens/netuno.png' )
    }

    else {
        resDiv.textContent = "[ERRO]! seu planeta não faz parte do sistema solar ou nome está incorreto. VERIFIQUE NOVAMENTE!"
        img.setAttribute('src', 'imagens/erro.png') // Mensagem de erro, Alerta ao usuario.
    };

    resDiv.appendChild(img);

    resDiv.style.fontSize = "16px"; 
}

document.getElementById("button").addEventListener("click", verificar);