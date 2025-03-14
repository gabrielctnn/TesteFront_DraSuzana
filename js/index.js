// botao consulta nav
function scrollParaBaixo() {
    document.getElementById("consulta").scrollIntoView({ behavior: "smooth" });
}

// interação na pagina de perguntas e respostas
function toggleResposta(elemento) {
    let resposta = elemento.nextElementSibling;
    let estaVisivel = resposta.style.display === "block";

    resposta.style.display = estaVisivel ? "none" : "block";
    elemento.classList.toggle("verde", !estaVisivel);


    elemento.classList.toggle("verde", !estaVisivel);
    elemento.classList.toggle("ativa", !estaVisivel);
}

// slide home 

const imagens = ["/img/index/img1.png", "/img/index/img2.png"];
let index = 0;

function trocarImagem() {
    index = (index + 1) % imagens.length; 
    document.getElementById("slide").src = imagens[index];
}

setInterval(trocarImagem, 5000);
