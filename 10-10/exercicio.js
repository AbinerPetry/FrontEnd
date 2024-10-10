/// exercicio 1

let moto = {
    marca: 'Harle Davidson',
    modelo: 'RoadG lide Limited',
    cor: 'preta',
    andar: function(){
        console.log(` ${moto.marca} ${moto.modelo} está andando.`)
    },
    buzinar: function(){
        console.log(`${moto.marca} ${moto.modelo} está buzinando.`)
    }
}
console.log(moto)
moto.andar()
moto.buzinar()

moto.marca = 'Kawasaki'
moto.modelo = 'Ninja 400'
console.log(moto)
moto.andar()
moto.buzinar()

/// exercicio 2

let personagem = {
    nome: 'Kaiser',
    idade: 30,
    altura: 1.85,
    atirar: function(){
        console.log(`${personagem.nome} Da um tiro`)
    },
    ritual: function(){
        console.log(`${personagem.nome} Usa seu ritual`)
    }
}
console.log(personagem)
personagem.ritual ()
personagem.atirar ()

personagem.nome = 'Arthur'
personagem.idade = 35
personagem.altura = 1.70

console.log(personagem)

personagem.ritual ()
personagem.atirar ()