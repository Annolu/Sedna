$(document).ready(function(){
    
    //slider
    
    $('.slider').slick({
       dots: true,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       cssEase: 'ease',
       adaptiveHeight: true,
       nextArrow: '<button type="button" class="arrows arrow-next"><img src="img/next.svg"></button>',
       prevArrow: '<button type="button" class="arrows arrow-prev"><img src="img/back.svg"></button>'
    });
    
    
    //tootip
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
    
    $("#burger-container").on('click', function(){
        
            //burger icon animation

            $(this).toggleClass("open");
        
            //top menu black layer on small/medium devices
        
            $('.black-layer').toggleClass("open");
        $('.movidas').toggleClass("open");
        });
       
    //on medium/small devices, the sliding-in devices images are positioned under the text content
    
    function swapColumnOrder() {

        var windowWidth= $( window ).width();
        
        if (windowWidth<990){
            $('.violet-section .content-column').addClass('flex-first');
        }else{
            $('.violet-section .content-column').removeClass('flex-first');
        }
    }
    
    swapColumnOrder();
    
    $(window).resize(swapColumnOrder);
    
    
    $(window).scroll(function() {  
        
        //show/hide fixed top-menu

        let distanceFromTop= $(this).scrollTop();
                
        if(distanceFromTop>1){
            $('.nav-main-container').addClass('topmenu-fixed');
        }else{
            $('.nav-main-container').removeClass('topmenu-fixed');
        }
        
        //topmenu background turns darker on scroll
        
        
        if(distanceFromTop>1){
            $('.top-nav-back').addClass('bg-blue');
        }else{
            $('.top-nav-back').removeClass('bg-blue');
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
        
        //img devices slide in 
                
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
    })
});
   