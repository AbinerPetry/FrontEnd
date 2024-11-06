//alterando elementos

//chamanto pela id
const a = document.getElementById('aa')

//chamanto pela class
const m = document.getElementsByClassName('l')

for (let i = 0; i < m.length; i++) {
    m[i].style.color = 'blue'
}

const u = document.querySelector('.l') // pega o primeiro elemento que ele achar com essa classe

u.style.color='blue'


const ui = document.querySelectorAll('.l')// pega todos os elementos de classe (é um array). é parecido com getElementsByClassName
ui[1].style.color='blue'


//muda o css
a.style.color = 'red'


//muda o texto
//a.textContent = 'iiiiiiiiiiiii' 

a.innerText = 'rrrrrrrrr'


//criando elementos novos
const novoParagrafo = document.createElement('p');//createElemen significa criar elemento

novoParagrafo.textContent = 'Este é um novo parágrafo!';

document.body.appendChild(novoParagrafo); // appendChild significa adicione um filho. aqui eu estou dizendo: dentro do documento HTML , lá no body, adicione o novo paragrafo que criei


//remover elemento
const paragrafo = document.getElementById('bb');

paragrafo.remove();//remove significa remover, e remove o elemento da minha página





