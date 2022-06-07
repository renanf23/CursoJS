console.log('###Seja bem vindo ao Hortifruti 1.0####')
let prompt = require('prompt-sync')()

console.log('|------------------------|')
console.log('      Hortifruti 2.0      ')
console.log('|------------------------|')

let carrinhov = []
let pesocarrinho =[]
let preco = []  
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


function catalogo(){
    console.log('')
    console.log('')
    console.log('')
    console.log('|------------------------|')
    console.log('         Catálogo        ')
    console.log('|------------------------|')
    console.log('1. Adicionar Maçã 3.19 kg')
    console.log('2. Adicionar Banana 1.99 Kg')
    console.log('3. Adicionar Melancia 0.95 Kg')
    console.log('4. Adicionar Abacaxi R$3 cada')
    console.log('9. Ver meu carrinho')
    let compras = 0
    while(compras == 0){
        let add = prompt('')
        if (Number(add) >= 1 && Number(add) <= 3){
            console.log('Digite a quantidade *em Kg:')
            let peso = prompt('')
            switch (Number(add)){
                case 1:
                    carrinhov.push('Maçã')
                    pesocarrinho.push(Number(peso)+'Kg')
                    preco.push(peso *3.19)
                    console.log(`${peso}Kg de Maçã adicionado`) 
                    break
                case 2:
                    carrinhov.push('Banana')
                    pesocarrinho.push(Number(peso)+'Kg')
                    preco.push(peso *1.99)
                    console.log(`${peso}Kg de Banana adicionado`)
                    break
                case 3:
                    carrinhov.push('Melancia')
                    pesocarrinho.push(Number(peso)+'Kg')
                    preco.push(peso *0.95)
                    console.log(`${peso}Kg de Melancia adicionado`)
                    break

                default:
                    console.log('[ERRO] Opção inválida, escolha outra opção')
                    break
            }
        }else if(Number(add) == 4){
            console.log('Digite a quantidade *em und:')
            let und = prompt('')
            carrinhov.push('Abacaxi')
            pesocarrinho.push(Number(und)+'x')
            preco.push(3*und)
            console.log('Abacaxi adicionado')
        }else if (Number(add) == 9){
            carrinho()
            compras++
        }else{
            console.log('[ERRO] Opção inválida, escolha outra opção')
        }

    }
    
}

function carrinho(){
    console.log('')
    console.log('')
    console.log('')
    console.log('|------------------------|')
    console.log('       Meu carrinho       ')
    console.log('|------------------------|')
    console.log('')
    for (item in carrinhov){
        console.log(`${Number(item) +1 }. ${carrinhov[item]} ${pesocarrinho[item]} R$${preco[item].toFixed(2)}`)
    }

    let total = 0
    for(item in preco){
        total += preco[item]
    }

    console.log('')
    console.log('')
    console.log('')
    console.log(`Total R$${total.toFixed(2)}`)
    console.log('')
    console.log('|------------------------|')
    console.log('')
    console.log('Para comprar digite 1')
    console.log('Para excluir um item digite 2')
    console.log('Para voltar ao catálogo digite 3')
    console.log('Para voltar ao menu digite 4')
    console.log('Para cancelar compra digite 5')

    fim = prompt('')
    if (Number(fim) == 1){
        console.log('')
        console.log('')
        console.log('')
        console.log('|Compra efetuada com sucesso|')
        console.log('|------------FIM------------|')
    } else if(Number(fim) == 3){
        catalogo()
    }else if(Number(fim) == 4){
        menu()
    }else if(Number(fim) == 5){
        console.log('')
        console.log('')
        console.log('')
        console.log('|------Compra cancelada-----|')
        console.log('|------------FIM------------|')
    }else if(Number(fim) == 2){
        console.log('')
        console.log('')
        console.log('')
        console.log('Digite o numero do item que deseja excluir')
        excluir = Number(prompt(''))
        carrinhov.splice(excluir-1,1)
        pesocarrinho.splice(excluir-1,1)
        preco.splice(excluir-1,1)
        console.log('Item Excluido.')
        carrinho()

    }
}