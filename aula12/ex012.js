var hora = new Date().getHours()

console.log(`Agora são exatamentes ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else if (hora < 24 ) {
    console.log('Boa noite!')
} else{
    console.log('Erro: Hora errada')
}