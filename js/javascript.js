var body = document.querySelector('.bodyMain')
/* Definição da Id do fundo escuro e do posicionamento da imagem após ser colocada em foco com o clique feito pelo usuário. */
var foco = document.querySelector('.foco')
/* Definir a Id que permitirá com que a função "de clique" seja atribuída à imagem solicitada. */
var img = document.querySelectorAll('.imagem')
/* Definir a Id de qual imagem aparecerá ao coloca-la em foco após o clique. */
var imgModelo = document.querySelector('.focoImg') 

/* Função que irá permitir com que a imagem em foco seja exibida após o usuário clicar na imagem. */
function abrirFoco() {
    foco.style.display = "flex";
    imgModelo.src = this.src; /*Comando que escolhe a imagem que aparecerá após o clique. */
    imgModelo.alt = this.alt; /* Comando que definirá também a mesma "alt" da imagem que for selecionada na página principal */
    if ('click') {
        body.style.overflow = "hidden";
    }
}
/* Função que fechará a imagem quando o usuário clicar fora da imagem em foco. */
function fecharFoco(event) {
    if (event.target == foco) {
        foco.style.display = "none";
        body.style.overflow = "auto";
    }
}
/* Código que aplicará as funções acima nas demais imagens, possibilitando que as mesmas sejam clicáveis também. */
for(let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', abrirFoco);
    foco.addEventListener('click', fecharFoco);
}
