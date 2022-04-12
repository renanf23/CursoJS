function clicar() {
    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    
    var res = document.getElementById('resu')
    
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0  ){
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else{
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        var c = inicio
        document.getElementById('resu').innerHTML = 'Contando:'
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        
        if (inicio < fim) {
            while (c <= fim) {
                //contagem crescente
                res.innerHTML += ` ${c} \u{1F449}`
                c += passo
            }
        } else {
                //contagem decrescente
            for( var c = inicio ; c >= fim; c -= passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        
        res.innerHTML +='\u{1f3c1}'
    }
    
}

