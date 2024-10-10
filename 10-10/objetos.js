let pessoa = {
    nome: 'lito',
    sobrenome: 'santos',
    idade: 27,
    altura: 1.87,
    dormir: function(){
        console.log(`${pessoa.nome} está dormindo. Rooooooonc!`)
    }
}

// aqui eu emprimo o objeto todo

console.log (pessoa)
console.log (pessoa.nome, pessoa.sobrenome)
console.log (pessoa ['nome'], pessoa ['sobrenome'])

//assim eu altero o valor de uma propriedade que esta dentro de um objeto

pessoa.nome = 'lirio'
console.log (pessoa.nome)
pessoa.idade = 36 
console.log (pessoa.idade)

//assim eu adiciono uma nova propriedade no meu objeto

pessoa.peso = 87
console.log (pessoa)
pessoa.dormir()

pessoa.comer = function (){
    console.log(`${pessoa.nome} Está com fome. Tá na hora do almoço`)
}

pessoa.comer()

