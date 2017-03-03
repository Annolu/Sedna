$(document).ready(function(){
    $('.slider').slick({
       dots: true,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       adaptiveHeight: true,
       nextArrow: '<button type="button" class="arrow arrow-next"><img src="img/next.svg"></button>',
       prevArrow: '<button type="button" class="arrow arrow-prev"><img src="img/back.svg"></button>'
    });
});
   