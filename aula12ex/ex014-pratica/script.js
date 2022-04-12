hora = new Date().getHours()
document.getElementById('hora').innerHTML= `Agora são ${hora} horas.    `
if (hora < 12){
    document.body.style.backgroundColor = 'rgb(220, 210, 116)'
    document.getElementById('img').innerHTML='    <img src="manha.png" alt="">'

} else if (hora < 18){
    document.body.style.backgroundColor = 'rgb(154, 104, 57)'
    document.getElementById('img').innerHTML='    <img src="tarde.png" alt="">'
} else {
    document.body.style.backgroundColor = 'rgb(30, 36, 39)'
    document.getElementById('img').innerHTML='    <img src="noite.png" alt="">'
}

