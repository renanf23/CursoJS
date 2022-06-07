let num = [3,5,40,7,]
num.push(2)
num.sort((a, b) => a - b);


console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(3)

if (pos == -1){
    console.log('Valor não encontrado!')
} else{
    console.log(`O valor ${3} está na posição ${pos}`)
}


