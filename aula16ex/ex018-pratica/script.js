let num = document.getElementById('num')
let tab = document.getElementById('selreg')
let tabn = []
let resu = document.getElementById('resu')

function adicionar(){
    let n = Number(num.value)
    let item = document.createElement('option')
    tem_lista = tabn.indexOf(n) 
    if(n > 100 || tem_lista != -1 || num.value.length == 0){
        alert(`Valor inválido ou já encontrado na lista`)
    } else{
        item.innerHTML= `Valor ${n} adicionado.`
        tab.appendChild(item)
        tabn.push(n)
        

    }
    resu.innerHTML = ''
    num.value = ''
    num.focus()
    
}


function finalizar(){ 
    tabn.sort((a, b) => a - b)
    let tc = tabn.length
    let contar = 0
    
    if(tabn.length == 0){
        alert(`Adicione valores antes de finalizar!`)
    }else{
        for(let c = 0;c < tc;c++) {
            contar = contar + tabn[c]
    
        }
    
        let media = contar / tc
    
        resu.innerHTML=`
        <p>Ao todo, temos ${tc} números cadastrados. </p>
        <p>O maior valor informado foi ${tabn[tc-1]}.</p>
        <p>O menor valor informado foi ${tabn[0]}. </p>
        <p>Somando todos os valores, temos ${contar}.</p>
        <p>A média dos valores digitados é ${media}.</p>`
    }

    
}
