function verificar() {
    let pla = document.getElementById("textpla").value.toLowerCase(); 
    let resDiv = document.getElementById("res");
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (pla === "terra") {
        resDiv.textContent = "A terra é o único planeta conhecido a abrigar vida. composto por oceanos, continentes e uma atmosfera rica em oxigênio e nitrogênio.uma lua que se chama LUA e que órbita a Terra"
        img.setAttribute('src', 'imagens/terra.png'); // foto do planeta terra
    } 
    
    else if (pla === "mercurio") {
        resDiv.textContent = "O planeta mais próximo do sol, Sem atmosfera significativa, Variações extremas de temperatura, com calor extremo no lado iluminado e frio intenso no lado escuro, Sem luas conhecidas";
        img.setAttribute('src', 'imagens/mercurio.png'); // foto do planeta mercurio
    } 
    
    else if (pla === "venus") {
        resDiv.textContent = "Similar em tamanho e composição à terra. Atmosfera densa e tóxica, principalmente de dióxido de carbono. Superfície quente devido ao efeito estufa, tornado-a o planeta mais quente do Sistema Solar, Sem luas conhecidas"
        img.setAttribute('src', 'imagens/venus.png'); // foto do planeta venus
    }

    else if (pla === "marte") {
        resDiv.textContent = "Conhecido como o 'Planeta Vermelho' devido à sua cor característica, possui uma fina atmosfera, principalmente de dióxido de carbono, Tem características geológicas semelhante às da terra, incluindo vales e montanhas, tem duas luas conhecidas: fobos e Deimos.";
        img.setAttribute('src', 'imagens/marte.png') // foto do planeta marte
    }

    else if (pla === "saturno") {
        resDiv.textContent = "Conhecido pelos seus anéis espetaculares, compostos princpalmente de partículas de gelo e poeira, Também é um gigante gasoso, com atmosfera ica em hidrogênio e hélio, Possui dezenas de luas, incluindo Titã, que possui uma atmosfera espessa e lagos de metano e etano."
        img.setAttribute('src', 'imagens/saturno.png') // foto do planeta saturno
    }

    else if (pla === "jupter") {
        resDiv.textContent = "O maior planeta do Sistema Solar, composto principalmente de hidrogênio e hélio, possui uma atmosfera turbulenta com faixas de nuvens e a Grande Mancha Vermelha, uma gifantesca tempestaden tem mais de 80 luas conhecidas, incluindo as quatro luas galieanas: lo, europa, ganimedes e calisto."
        img.setAttribute('src', 'imagens/jupiter.png') // foto do planeta jupter
    }

    else if (pla === "netuno") {
        resDiv.textContent = "O último planeta do sistema solar, similar a urano em tamanho e composição, tem uma atmosfera com ventos extremamente velozes e uma mancha escura chamada de grande mancha escura, possui anéis tênues e 14 luas conhecidas."
        img.setAttribute('src', 'imagens/netuno.png') // foto do planeta netuno
    }  

    else if (pla === "urano") {
        resDiv.textContent = "Um gigante gasoso com uma atmosfera principalmente de hidrogênio e hélio, tem um eixo de rotação inclinado, resultando em um movimento de rotação quase deitado, possui anéis estreitos e 27 luas conhecidas."
        img.setAttribute('src', 'imagens/urano.png') // foto do planeta urano
    }  

    else {
        resDiv.textContent = "[ERRO]! Seu planeta não faz parte do sistema solar ou o nome está incorreto! VERIFIQUE!"
        img.setAttribute('src', 'imagens/erro.png')
    }



    resDiv.appendChild(img);
}