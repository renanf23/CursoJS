function clicar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    var ate = document.getElementById('txtate')
    var passo = document.getElementById('txtpasso')
    var v = 1

    if(num.value.length == 0){
        //Caso 1: campo numero vazio
        alert('Por favor, digite um número!')
    } else if(ate.value.length == 0 && passo.value.length == 0){
        // Caso 2: campo ate e campo passo vazios
        alert('Passo e até vazios considerando passo 1 e até 10')
        var n = Number(num.value)
        var c = 0 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n * c} `
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }  else if(ate.value.length == 0){
        // Caso 3: campo ate vazio
        alert('Até vazio, considerando até 10')
        let p = Number(passo.value)
        var n = Number(num.value)
        
        if(p <=0){
            alert('Passo inválido considerando passo 1')
            p = 1
        }
        tab.innerHTML = ''

        for(var c = 0;c <=10 ;c+=p){
            let item = document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n*(c)} `
            item.value = `tab${v}`
            tab.appendChild(item)
            v++
            
        }

    }  else if(passo.value.length == 0 ){
        // Caso 4 : campo passo vazio
        alert('Passo vazio, considerando passo 1')
        let n = Number(num.value)
        let a = Number(ate.value)
        tab.innerHTML = ''

        if(a <=0){
            alert('Até inválido considerando até 10')
            a = 10
        }

        for(let c=0;c <= a; c++){
            let item = document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n*c}`
            item.value = `tab${v}`
            tab.appendChild(item)
            v++
        }

    } else{
        //Caso 5 : Todos os campos preenchidos
        let n = Number(num.value)
        let a = Number(ate.value)
        let p = Number(passo.value)
        tab.innerHTML = ''
        if(a <= 0){
            alert('Até inválido considerando até 10')
            a = 10
        }
        if(p <= 0) {
            alert('passo inválido considerando passo 1')
            p = 1
        }

        for(let c = 0; c <= a; c += p){
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${v}`
            v++ 
        }
    }
}

