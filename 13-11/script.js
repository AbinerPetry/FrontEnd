const img = document.querySelectorAll('.pequeno')
const botao = document.getElementById('botao')

function mudarClasse(){
    if(img[0].classList === 'pequeno'){
        img[0].classList.remove('pequeno')
        img[0].classList.toggle('grande')
    }else{
        img[0].classList.remove('grande')
        img[0].classList.toggle('pequeno')
    }
}


botao.addEventListener("click", mudarClasse)

const img2 = document.getElementById('imagem2')
const botao2 = document.getElementById('botao2')

function mudarClasse2 (
){
    if(img2.classList === 'desativado'){
    img2.classList.remove("desativado")    
}
else{
    img2.classList.toggle("desativado") 
}
}

botao2.addEventListener('click',mudarClasse2)
