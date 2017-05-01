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
        $('.nav-menu').toggleClass("open");
        blockBackgroundScroll();

    });

    //no body scroll when black layer is visible

    function blockBackgroundScroll(){

        if($('.black-layer').hasClass('open')){
            $('body').addClass("fixed-position");
        }else{
            $('body').removeClass("fixed-position");
        }
    }

    //columns order swap - on medium/small devices, the sliding-in devices images are positioned under the text content

    function swapColumnOrder() {

        var windowWidth= $( window ).width();

        if (windowWidth<990){
            $('.violet-section .content-column').addClass('flex-first');
        }else{
            $('.violet-section .content-column').removeClass('flex-first');

            //on large devices, the black top menu if open it diseappears

            $('.black-layer').removeClass("open");
            $('.nav-menu').removeClass("open");
            $("#burger-container").removeClass("open");
        }
    }

    swapColumnOrder();

    $(window).resize(swapColumnOrder);

    $(window).scroll(function() {

        let distanceFromTop= $(this).scrollTop();

        if(distanceFromTop>1){
            $('.nav-main-container').addClass('topmenu-fixed');
            $('.top-nav-back').addClass('bg-blue');
            $('.logo').addClass('logo_open');
            $('.burger-container').addClass('burger-open');
        }else{
            $('.nav-main-container').removeClass('topmenu-fixed');
            $('.top-nav-back').removeClass('bg-blue');
            $('.logo').removeClass('logo_open');
            $('.burger-container').removeClass('burger-open');
        }

        var whiteSection= $('.white-section')[0];
        var violetSection= $('.violet-section')[0];

        var ipadFadeInPoint= whiteSection.offsetHeight + whiteSection.clientHeight/2;
        var iphoneFadeInPoint= ipadFadeInPoint + 200;
        var macbookFadeInPoint= violetSection.offsetHeight + violetSection.clientHeight/2;

        //img devices slide-in

        if(distanceFromTop>ipadFadeInPoint){
            $('#ipad').addClass('fade-in');
        }

        if(distanceFromTop>iphoneFadeInPoint){
            $('#iphone').addClass('fade-in');
        }

        if(distanceFromTop>macbookFadeInPoint){
            $('#macbook').addClass('slide-in');
        }

        //smooth scroll to top when click on footer box-arrow

        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            $('body').stop().animate({
                'scrollTop': 1,
                behavior: 'smooth'
            }, 1200, 'swing');
        })
    })
});
