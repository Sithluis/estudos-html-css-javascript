function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem' 
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'kidboy.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'teenboy.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultman.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldman.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'kidgirl.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'teengirl.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultwoman.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}