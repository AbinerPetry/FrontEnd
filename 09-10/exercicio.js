// exercício 

let jogos = ['Paper Mario','Blasphemous','Cuphead','Enigma do Medo','Call of Duty:Mobile']

console.log(jogos[0])

console.log(jogos[2])

console.log(jogos[4])

jogos.push('Terraria') // adiciona um item

jogos.push('Undertale') 

jogos.pop()

console.log(jogos)



let numero = [5,10,15,20,25,30]
let soma = 0;

for (let i = 0; i < numero.length; i++){
    soma += numero[i];
}

let media = soma / numero.length;

console.log('soma:',soma)
console.log('media:',media)