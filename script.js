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
    
    //positions at which it shows/hides the fixed top-menu
    
        $(window).scroll(function() {  

        let distanceFromTop= $(this).scrollTop();
        
        switch(true){
            case (distanceFromTop<1):
                $('.nav-main-container').removeClass('top-menu-down');            
                break;   
            case (distanceFromTop>1):
                $('.nav-main-container').addClass('top-menu-down');
                break;
        }
            
            
            
    })
});
   