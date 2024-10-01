/* retangulo 1
let  altura = 10
let  base = 20
let area = altura * base 
console.log(area)

retangulo 2
let  altura2 = 5
let  base2 = 6
let area2 = altura2 * base2 
console.log(area2)

retangulo 3
let  altura3 = 9
let  base3 = 7
let area3 = altura3 * base3
console.log(area3) 

function calculaRetangilo (base,altura){
    let area = base * altura 
    console.log(area)
}

calculaRetangilo(5,10)

//função sem parâmetros
function Opa (){
    
    console.log('Opa bom ?')
}
Opa()

//função com parâmetros
function Ola (nome){
    
    console.log(nome)
}
Ola ('Abiner') //aqui eu chamo a função que eu criei, mas com parâmetros*/


function soma (a,b){
    let suma = a + b 
    console.log(suma)
}

soma(5,10)


function Nome (nome){
    
    console.log(`Olá eu sou ${nome} `)
}

Nome('Abiner e tenho 17 anos')


function filme(filme){

    
    console.log(`O filme ${filme} é o meu filme favorito`)
}

filme('Django Livre')