function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoDigitado = document.getElementById('txtano')
    var res = document.querySelector('div#res')

        //Verificando se o que foi digitado é válido
    if (anoDigitado.value == 0 || anoDigitado.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {  
        var idade = ano - Number(anoDigitado.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (document.getElementById('masc').checked){ 
            genero = 'Homem'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/criança-m.png')
            } else if (idade < 27){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 60){
                // adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if(document.getElementById('fem').checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/criança-f.png')
            } else if (idade < 27){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 60){
                // adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}


