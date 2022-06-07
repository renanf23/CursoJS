console.log('###Seja bem vindo ao Hortifruti 1.0####')
let prompt = require('prompt-sync')()

console.log('|------------------------|')
console.log('      Hortifruti 1.0      ')
console.log('|------------------------|')

let carrinhov = []
let preco = 0
function menu(){
    let c = 0
    while(c == 0){
        console.log('Digite 1 para ver catálogo')
        console.log('Digite 2 para ver meu carrinho')
        let menuv = prompt('')
        if (Number(menuv) == 1){
            catalogo()
            c++
        } else if(Number(menuv) == 2){
            carrinho()
            c++
        }else {
            console.log('ERRO: Número digitado inválido digite outro número')
            }

    }
}
console.log(menu())

function inLista(i, l){
    if(l.indexOf(String(i)) != -1){
        return true
    }else{
        return false
    }
}

function catalogo(){
    console.log('|------------------------|')
    console.log('         Catálogo        ')
    console.log('|------------------------|')
    console.log('1. Adicionar Maçã R$2kg')
    console.log('2. Adicionar Banana R$0,50')
    console.log('3. Adicionar Abacaxi R$3')
    console.log('9. Ver meu carrinho')
    let compras = 0
    while(compras == 0){
        let add = prompt('')
        if(Number(add) == 1){
          
            carrinhov.push('Maçã')
            console.log('Digite a quantidade *em Kg:')
            let peso = prompt('')
            preco += 2* peso
            console.log(`${peso}Kg de Maçã adicionada`)
        }
        if(Number(add) == 2){
            carrinhov.push('Banana')
            preco += 0.50
            console.log('Banana adicionada')
        }
        if(Number(add) == 3){
            carrinhov.push('Abacaxi')
            preco += 3
            console.log('Abacaxi adicionado')
        }
        if(Number(add) == 4){
            carrinhov.push('Melancia')
            preco += 5
            console.log('Melancia adicionada')
        }
            
        if(Number(add) == 9){
            carrinho()
            compras++
        }
    }
    
}


function carrinho(){
    console.log('|------------------------|')
    console.log('       Meu carrinho       ')
    console.log('|------------------------|')
    console.log('')

    if(inLista('Maçã', carrinhov)){
        let m = 0
        for(let pos in carrinhov){
            if(String(carrinhov[pos]) == 'Maçã' ){
                m++
            }
        }
        console.log(`Maçã x${m}`)
    }
    if(inLista('Banana', carrinhov)){
        let m = 0
        for(let pos in carrinhov){
            if(String(carrinhov[pos]) == 'Banana' ){
                m++
            }
        }
        console.log(`Banana x${m}`)
    }
    if(inLista('Abacaxi', carrinhov)){
        let m = 0
        for(let pos in carrinhov){
            if(String(carrinhov[pos]) == 'Abacaxi' ){
                m++
            }
        }
        console.log(`Abacaxi x${m}`)
    }
    if(inLista('Melancia', carrinhov)){
        let m = 0
        for(let pos in carrinhov){
            if(String(carrinhov[pos]) == 'Melancia' ){
                m++
            }
        }
        console.log(`Melancia x${m}`)
    }


    console.log('')
    console.log(`Total R$${preco}`)
    console.log('|------------------------|')
    console.log('Para comprar digite 1')
    console.log('Para voltar ao catálogo digite 2')
    console.log('Para voltar ao menu digite 3')
    console.log('Para cancelar compra digite 4')
    fim = prompt('')
    if (Number(fim) == 1){
        console.log('|Compra efetuada com sucesso|')
        console.log('|------------FIM------------|')
    } else if(Number(fim) == 2){
        catalogo()
    }else if(Number(fim) == 3){
        menu()
    }else if(Number(fim) == 4){
        console.log('|------Compra cancelada-----|')
        console.log('|------------FIM------------|')
    }
}