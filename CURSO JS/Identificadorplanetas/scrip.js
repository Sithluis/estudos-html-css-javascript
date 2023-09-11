/*Esse código eu aplico um pouco do que aprendi nas aulas extras de exercicios no curso introdutorio de javascript.
abaixo eu fiz um site que mosttra para o individuo o planeta onde ele nasceu, usando a function verificar.
ao digitar o nome do planeta onde nasceu, aparecera uma mensagem dizendo o nome do planeta e o cumprimentando e em
seguida mostrará uma imagem desse planeta, esse código se limita aos planetas do nosso sistema solar.
planetas esses são: mercurio, venus, terra, marte, jupter, saturno, urano e netuno.
e no final do codigo tem uma mensagem de erro caso o nome digitado não seja de nenhum desses planetas!*/ 



function verificar() {
    var pla = document.getElementById("textpla").value.toLowerCase(); 
    var resDiv = document.getElementById("res");
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (pla === "terra") {
        resDiv.textContent = "Você nasceu na Terra! Olá Terráqueo(a).";
        img.setAttribute('src', 'terra.png'); // foto do planeta terra
    } 
    
    else if (pla === "mercurio") {
        resDiv.textContent = "Você nasceu em Mercúrio! Olá Mercuriano(a).";
        img.setAttribute('src', 'mercurio.png'); // foto do planeta mercurio
    } 
    
    else if (pla === "venus") {
        resDiv.textContent = "Você nasceu em Venús! Olá Venusiano(a).";
        img.setAttribute('src', 'venus.png'); // foto do planeta venus
    }

    else if (pla === "marte") {
        resDiv.textContent = "Você nasceu em Marte! Olá Marciano(a).";
        img.setAttribute('src', 'marte.png') // foto do planeta marte
    }

    else if (pla === "saturno") {
        resDiv.textContent = "Você nasceu em Saturno! Olá Saturnisiano(a)."
        img.setAttribute('src', 'saturno.png') // foto do planeta saturno
    }

    else if (pla === "jupter") {
        resDiv.textContent = "Você nasceu em Júpter! Olá Jupteriano(a)."
        img.setAttribute('src', 'jupiter.png') // foto do planeta jupter
    }

    else if (pla === "netuno") {
        resDiv.textContent = "Você nasceu em Netuno! Olá Netuniano(a)."
        img.setAttribute('src', 'netuno.png') // foto do planeta netuno
    }  

    else if (pla === "urano") {
        resDiv.textContent = "Você nasceu em urano! Olá Uraniano(a)."
        img.setAttribute('src', 'urano.png') // foto do planeta urano
    }  

    else {
        resDiv.textContent = "[ERRO]! Seu planeta não faz parte do sistema solar ou o nome está incorreto! VERIFIQUE!"
        img.setAttribute('src', 'erro.png')
    }



    resDiv.appendChild(img);
}

document.getElementById("button").addEventListener("click", verificar)