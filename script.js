$(document).ready(function(){
    
    $('.slider').slick({
       dots: true,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       cssEase: 'ease',
       adaptiveHeight: true,
       nextArrow: '<button type="button" class="arrow arrow-next"><img src="img/next.svg"></button>',
       prevArrow: '<button type="button" class="arrow arrow-prev"><img src="img/back.svg"></button>'
    });
    
    
    $(window).scroll(function() {  
        
        //show/hide fixed top-menu

        let distanceFromTop= $(this).scrollTop();
        
        if(distanceFromTop>1){
            $('.nav-main-container').addClass('top-menu-down');
        }else{
            $('.nav-main-container').removeClass('top-menu-down');
        }
            
        //smooth scroll to top when click on footer box-arrow
            
        $('.arrow-box').on('click',function (e) {
            e.preventDefault();
            
            $('body').animate({
                'scrollTop': 1,
                behavior: 'smooth'
            }, 1200, 'swing');
        })
    })
});
   