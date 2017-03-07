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
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
    $("#burger-container").on('click', function(){
            $(this).toggleClass("open");
        });
    
    $(window).scroll(function() {  
        
        //show/hide fixed top-menu

        let distanceFromTop= $(this).scrollTop();
                
        if(distanceFromTop>1){
            $('.nav-main-container').addClass('top-menu-down');
        }else{
            $('.nav-main-container').removeClass('top-menu-down');
        }
        
        
        if(distanceFromTop>1){
            $('.menu-background').addClass('bg-blue');
        }else{
            $('.menu-background').removeClass('bg-blue');
        }
                
        /*
        switch (true){
            case distanceFromTop>850:
                $('#ipad').addClass('fade-in');
                break;
            case distanceFromTop>950:
                $('#iphone').addClass('fade-in');
                break;
            case distanceFromTop>1200:
                $('#macbook').addClass('slide-in');
                break;
        }*/
                
        if(distanceFromTop>800){
            $('#ipad').addClass('fade-in');            
        }
        
        if(distanceFromTop>900){
            $('#iphone').addClass('fade-in');
        }
        
        if(distanceFromTop>1550){
            $('#macbook').addClass('slide-in');
        }
        
        
            
        //smooth scroll to top when click on footer box-arrow
        
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            $('html, body').stop().animate({
                'scrollTop': 1,
                behavior: 'smooth'
            }, 1200, 'swing');
        })
        
        /*    
        $('.arrow-box').on('click',function (e) {
            e.preventDefault();
            
            $('body').animate({
                'scrollTop': 1,
                behavior: 'smooth'
            }, 1200, 'swing');
        })*/
        
        $(window).resize(function() {
            
            
            var windowWidth= $( window ).width();
            
            if (windowWidth<990){
                $('.violet-section .content-column').addClass('flex-first');
            }else{
                $('.violet-section .content-column').removeClass('flex-first');
            }
        });        
    })
});
   