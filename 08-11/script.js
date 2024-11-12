function responder (correta) {
    if(correta) {
        alert('Resposta correta! Indo para a próxima pergunta...')
    }

    else{
        setInterval(() => {
            goFullScreen();
            exibirErro();
        },2000)
    }
}

function exibirErro() {
    const telaCheiaErro = Document.getElementById('telaCheiaErro');
    const somErro = Document.getElementById('somErro');

    telaCheiaErro.style.display = 'flex';

    somErro.play();

    telaCheiaErro.addEventlistener('click', () => {
        telaCheiaErro.style.display = 'none';
        sairTelaCheia();
    })
}

function goFullScreen() {
    const elem = document.documentElement;
    if(elem.requestFullscreen) {
        elem.requestFullscreen();
    }else if (elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }else if (elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen();
    }else if (elem.msRequestFullScreen){
        elem.msRequestFullScreen();
    }
}

function sairTelaCheia() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    }else if (document.mozCancelFullScreen){
        document.mozCancelFullScreen();
    }else if (document.webkiExitFullScreen){
        document.webkiExitFullScreen();
    }else if (document.msExitFullScreen){
        document.msExitFullScreen();
    }
}
