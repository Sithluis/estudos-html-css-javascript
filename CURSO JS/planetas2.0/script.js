function verificar() {
    var pla = document.getElementById("textpla").value.toLowerCase(); 
    var resDiv = document.getElementById("res");
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (pla === "terra") {
        resDiv.textContent = "Você nasceu na Terra! Olá Terráqueo(a).";
        img.setAttribute('src', 'imagens/terra.png'); // foto do planeta terra
    } 
    
    else if (pla === "mercurio") {
        resDiv.textContent = "Você nasceu em Mercúrio! Olá Mercuriano(a).";
        img.setAttribute('src', 'imagens/mercurio.png'); // foto do planeta mercurio
    } 
    
    else if (pla === "venus") {
        resDiv.textContent = "Você nasceu em Venús! Olá Venusiano(a).";
        img.setAttribute('src', 'imagens/venus.png'); // foto do planeta venus
    }

    else if (pla === "marte") {
        resDiv.textContent = "Você nasceu em Marte! Olá Marciano(a).";
        img.setAttribute('src', 'imagens/marte.png') // foto do planeta marte
    }

    else if (pla === "saturno") {
        resDiv.textContent = "Você nasceu em Saturno! Olá Saturnisiano(a)."
        img.setAttribute('src', 'imagens/saturno.png') // foto do planeta saturno
    }

    else if (pla === "jupter") {
        resDiv.textContent = "Você nasceu em Júpter! Olá Jupteriano(a)."
        img.setAttribute('src', 'imagens/jupiter.png') // foto do planeta jupter
    }

    else if (pla === "netuno") {
        resDiv.textContent = "Você nasceu em Netuno! Olá Netuniano(a)."
        img.setAttribute('src', 'imagens/netuno.png') // foto do planeta netuno
    }  

    else if (pla === "urano") {
        resDiv.textContent = "Você nasceu em urano! Olá Uraniano(a)."
        img.setAttribute('src', 'imagens/urano.png') // foto do planeta urano
    }  

    else {
        resDiv.textContent = "[ERRO]! Seu planeta não faz parte do sistema solar ou o nome está incorreto! VERIFIQUE!"
        img.setAttribute('src', 'imagens/erro.png')
    }



    resDiv.appendChild(img);
}

document.getElementById("button").addEventListener("click", verificar)