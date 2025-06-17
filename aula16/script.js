//carrossel automático sem botões ou interações

const swiper = new Swiper('.swiper', {//inicializa o carrossel na classe" .swiper" usando a biblioteca swiper
    loop: true,// faz ocarrossel repetir infinitamente (loop contínuo)
    autoplay: {//configura a reprodução automática
        delay: 1500, //tempo de espera entre os slides (1500ms = 2 segundos)
        disableOnInterection: false,//continua o autoplay msm se o usuário interagir (ex: tentar arrastar)
        },

effect: 'fade',//define o tipo de transição entre as imagens (fade = dissolver)
fadeEffect: { crossFade: true },//faz com que o slide anterior desapareça suavemente enquento o novo aparece.

allowTouchMove: true, //impede que o usuário use o toque (arraste) para mudar o slide.
})