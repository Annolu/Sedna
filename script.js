$(document).ready(function(){

  preloaderFadeOutTime= 500;
  function hidePreloader(){
      var preloader= $('#spinnerWrapper');
      preloader.fadeOut(preloaderFadeOutTime)
  }
  hidePreloader();

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

  $('.navigation-tab').on('click', function(){
    closeMenu();
  });

  $('.right-buttons').on('click', function(){
    closeMenu();
  });

  $("#burgerContainer").on('click', function(){

    //burger icon animation
    $(this).toggleClass("open");

    //top menu black layer on small/medium devices
    $('#blackLayer').toggleClass("open");
    $('#navMenu').toggleClass("open");
    //no body scroll when black layer is visible
    $('body').toggleClass("no-scroll");
  });

  //columns order swap - on medium/small devices, the sliding-in devices images are positioned under the text content
  swapColumnOrder();

  function swapColumnOrder() {
    var windowWidth= $( window ).width();

    if (windowWidth<990){
      $('.violet-section .content-column').addClass('flex-first');
    }else{
      $('.violet-section .content-column').removeClass('flex-first');

      //on large devices, the black top menu if open it diseappears
    closeMenu();
    }
  }

  function closeMenu(){
    $('#blackLayer').removeClass("open");
    $('#navMenu').removeClass("open");
    $('#burgerContainer').removeClass("open");
    $('body').removeClass("no-scroll");
  }

  $(window).resize(swapColumnOrder);

  $(window).scroll(function() {
    let distanceFromTop= $(this).scrollTop();

    //fixed topmenu when scroll down
    if(distanceFromTop>20){
      $('#topMenu').addClass('topmenu-fixed');
      $('#topNavBack').addClass('bg-blue');
      $('#logo').addClass('logo-up');
      $('#burgerContainer').addClass('burger-up');
    }else{
      $('#topMenu').removeClass('topmenu-fixed');
      $('#topNavBack').removeClass('bg-blue');
      $('#logo').removeClass('logo-up');
      $('#burgerContainer').removeClass('burger-up');
    }

    var whiteSection= $('#whiteSection')[0];
    var violetSection= $('#violetSection')[0];

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

      $('html,body').stop().animate({
          'scrollTop': 1,
          behavior: 'smooth'
      }, 1200, 'swing');
    })
  })
});
