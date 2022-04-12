res = document.getElementById('resu')
function continuar(){
   var radio = document.getElementsByName('radiof')
   if (radio[0].checked) {
      alert('1 ok')
   } else{
      document.getElementById('pergunta').innerHTML= 'De onde você conhece o Renan?'
      document.getElementById('lsim').innerText= 'Academia'
      
   }
}

