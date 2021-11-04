$(document).ready(function() {

    var owl = $('.owl-carousel');

    owl.owlCarousel({
        items: 4, /*Numero de items na tela*/
        loop: true, /*Loop infinito */
        margin: 10, /*Distancia entre os items */
        /*nav:true, Botão para girar */
        /*navText: ["Anterior", "Próximo"], Para por nome nos botões que giram */
        autoplay: false , /*Para o carousel se mover sozinho */
        autoplayHoverPause: true, /*Para o Slid quando para o mouse em cima*/
        autoplayTimeout: 10000, /*Escolhe o quantidade de tempo do carroseul, por em milisegundos */
        startPosition: 2, /*Escolhe qual Slid aparece primeiro. Tratar como um Array*/
        slideBy: 1, /*Escolhe de quantos em quantos slide vai passar */
        slideTransition: 'linear', /*Escolhe o tipo de transisção, que é do CSS3 */
        rtl: false, /*Muda da direita para esquerda */
        




        responsive:{ /*Decide a quantidade de items que aparece dependendo do tamanho da tela */
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        },
        dots:false /*Tira aquelas 2 bolinhas do final da página */
    });

    $("#botao_anterior").on('click', function(){

        owl.trigger('prev.owl.carousel')

    })
    $("#botao_proximo").on('click', function(){

        owl.trigger('next.owl.carousel')

    })

})
