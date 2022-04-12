function verificar() {
   var ano = new Date().getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
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
           if (idade >=0 && idade < 10){
               //Criança
               img.setAttribute('src', 'menino.png')
               gênero = 'Menino'
           } else if (idade < 21){
               //Jovem
               img.setAttribute('src', 'homemj.png')
               gênero = 'Jovem'
           } else if( idade < 50){
               //Adulto
               img.setAttribute('src', 'homem.png')
           } else {
               //Idoso
               img.setAttribute('src', 'idoso.png')
               gênero = 'Senhor'
           }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'menina.png')
               gênero = 'Menina'
            } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'mulherj.png')
               gênero = 'Jovem'
            } else if( idade < 50){
            //Adulto
            img.setAttribute('src', 'mulher.png')
            } else {
            //Idoso
            img.setAttribute('src', 'idosa.png')
               gênero = 'Senhora'
            }
       }
       res.style.textAlign='center'
       res.innerHTML= `Detectamos um(a) ${gênero} com ${idade} anos.`
       res.appendChild(img)
   }
}

