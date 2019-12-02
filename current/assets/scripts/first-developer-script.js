document.addEventListener("DOMContentLoaded", function() {

  // MAIN-PAIGE-SLIDER START
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    appendDots:$(".slick-dots-wrap"),
  });
  // MAIN-PAIGE-SLIDER END
  
  
  
  
  
  // WOW FOR ANIMATE.CSS START
  new WOW().init();
  // WOW FOR ANIMATE.CSS END
  
  
  
  // MEDIA JAVASCRIPT START
  
  var mediaQueryUp1200 = window.matchMedia("screen and (min-width: 1200px)");
  mediaQueryUp1200.addListener(foo);
  foo(mediaQueryUp1200);
  
  var mediaQueryDown1200 = window.matchMedia("screen and (max-width: 1200px)");
  mediaQueryDown1200.addListener(foo2);
  foo2(mediaQueryDown1200);
  
  var mediaQueryDown991 = window.matchMedia("screen and (max-width: 991px)");
  mediaQueryDown991.addListener(foo);
  foo3(mediaQueryDown991);
  
  // MEDIA JAVASCRIPT END
  
  
  // MEDIA DOWN991 START ===========================================
  function foo3(mq) {
  // DESTROY LINK FOOTER START
  $('.footer-menu__link--has_sub').click(function(e){
    e.preventDefault();
  });
  // DESTROY LINK FOOTER END 
  }
  // MEDIA DOWN991 END ==========================================
  
  
  
  
  // MEDIA DOWN1200 START ===========================================
  function foo2(mq) {
    // MOBILE MOBILE MOBILE START 
    if(mq.matches){
      $('.tabs-menu__item').click(function(){
          $(this).find('.tabs-menu__submenu').slideToggle('slow');
          $(this).toggleClass('active');
      });
      $('.tabs-menu__item').removeClass('active');
      // MOBILE MOBILE MOBILE END 
      
      // MOBILE MENU TOGGLE_SLUG START
      $('.menu__item--hassubmenu__span').click(function(){
        $(this).next('.menu__submenu').slideToggle('slow');
        $(this).toggleClass('active');
      });
      // MOBILE MENU TOGGLE_SLUG SEND
      
      //DESTROY LINK FOR MOBILE MENU START
      $('.menu__list .menu__item--hassubmenu .menu__link').click(function(e){
        //e.preventDefault();
      });
      //DESTROY LINK FOR MOBILE MENU END
      
    }
  
  
  }
  // MEDIA DOWN1200 END ===========================================
  
  
  
  
  
  
  // MEDIA Up1200px START ===============================
  function foo(mq) {
  
  // TABS MENU START
    if(mq.matches){
      $(".tabs-menu-cont__div").not(":first").hide();
      $(".tabs-menu-wrapper .tabs-menu__item").click(function() {
        var itemAtr = $(this).attr('data-tabindex');
        $(".tabs-menu-wrapper .tabs-menu__item").removeClass("tabs-menu__item--active");
  
        $('*[data-tabindex="'+itemAtr+'"]').addClass('tabs-menu__item--active');
  
        $('.tabs-menu__dots li').removeClass('slick-active').eq(itemAtr).addClass('slick-active');
  
        $(".tabs-menu-cont__div").hide().eq(itemAtr).fadeIn();
      }).eq(0).addClass("active");
    } else{
      return false;
    }
  // TABS MENU START END
  
  // DESTROY LINK TABS START
  $('.tabs-menu .tabs-menu__link').click(function(e){
    e.preventDefault();
  });
  // DESTROY LINK TABS END
  
  
  }
  // MEDIA Up1200px END ====================================
  
  
  // TABS MENU START START
    //Вешаем обработчики
    var addListeners = function(slider) {
      var $buttons = $('.toggle-slick');
      
      $buttons.on('click', function() {
        var slide = $(this).attr('data-slide');
  
        $(".tabs-menu-cont__div").hide().eq(slide).fadeIn();
  
        $(".tabs-menu-wrapper .tabs-menu__item").removeClass("tabs-menu__item--active");
        $('*[data-tabindex="'+slide+'"]').addClass('tabs-menu__item--active');
  
        $buttons.removeClass('slick-active');
        $(this).addClass('slick-active');
        slider.slick('slickGoTo', slide);
  
  
  
        $('.tabs-menu__dots .toggle-slick').eq(8).click(function(){
          slider.slick('slickGoTo', 7);
        });
  
        $('.tabs-menu__dots .toggle-slick').eq(9).click(function(){
         slider.slick('slickGoTo', 7);
       });
  
  
  
      });
  
    };
  
  
  
  
    
    var addGoHash = function(slider) {
      var slide = window.location.hash.replace("#","");
  
      if (slide) {
        setTimeout(function() {
          slider.slick('slickGoTo', slide, true);
        });
      }
    };
    
    //Инициализируем слайдер
    var init = function() {
      var $slickContainer = $('.tabs-menu__slider');
  
      //Обработчик события init 
      $slickContainer.on('init', function(event, slick, currentSlide, nextSlide) {
        var $slider = $(this);
        
        addListeners($slider);
        addGoHash($slider);
      });
  
      //Инициализация слайдера
      $('.tabs-menu__slider').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       infinite: false,
       arrows: true,
       prevArrow: '<div class="y_prevArrow"><img src="assets/templates/csm/images/arrow_right--lightgray.svg" alt="" /></div>',
       nextArrow: '<div class="y_nextArrow"><img src="assets/templates/csm/images/arrow_right--lightgray.svg" alt="" /></div>',
       responsive: [
       {
        breakpoint: 1200,
        settings: "unslick"
      }
      ]
    });
  
    };
    
    init();
  
  // TABS LIDER END
  
  
  
  
  
  // CIRCLE PROCENT START
  let isAnimatePriceInitialized = false;
  if($('.sect-facts').length){
    var sectFactsHeight = ($('.sect-facts').offset().top) - 650;
  }
  
  $(window).scroll(function(){
    if($('.sect-facts').length){
      if($(window).scrollTop()>sectFactsHeight){
        $('.sect-facts').fadeIn(900); 
      } else {
        $('.sect-facts').fadeOut(700);
      }
    }
  });
  
  
  
  $(window).scroll(function(){
    if($(window).scrollTop()>sectFactsHeight){
     if (!isAnimatePriceInitialized) {
       numUp();
     }
   }
  });
  
  // CIRCLE PROCENT END
  function numUp(){
  
  
    $('.progress-circle span').each(function () {
     $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
     duration: 1900,
     easing: 'swing',
     step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
   });
  
    $('.facts-number span').each(function () {
     $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
     duration: 3000,
     easing: 'swing',
     step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
   });
  
  
    isAnimatePriceInitialized = true;
  }
  // NUMBERS UP END
  
  
  
  
  
  
  // MOBILE TABS END
  
  
  // MOBILE MENU START
  
  var link = $('.header__gumburger');
  var close = $('.menu-item--close');
  var menu = $('.header__menu');
  link.on('click', function(event){
    event.preventDefault();
    menu.slideDown();
      $(link).css('display', 'none');
  });
  close.on('click', function(event){
    event.preventDefault();
    menu.slideUp();
    setTimeout(function() {
      $(link).css('display', 'block');
    }, 400)
    
  });
  
  
  // MOBILE MENU END
  
  
  // FOOTER MOBILE TAB START
  
  $('.footer-menu__item').click(function(){
   $(this).find('.footer-menu__submenu').slideToggle('slow');
  });
  
  // FOOTER MOBILE TAB END
  
  
  // MAIN-PAIGE-MEWS-SLIDER START
  $('.sect-news__slider').slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    appendDots:$(".news-slick-dots-wrap"),
  });
  // MAIN-PAIGE-MEWS-SLIDER END
  
  
  // REINIT SLIDER MAIN-PAGE-NEWS START
  if($('#servers').length){
    var sectNewsHeight = $('#servers').offset().top - 100;
  }
  let isReinitSlider = false;


  $(window).scroll(function(){
    if($('#servers').length){
      if($(window).scrollTop()>sectNewsHeight){
        if (!isReinitSlider) {
          reinitSlider();
        }
      }
    }
  });
  
  function reinitSlider(){
    isReinitSlider = true;
    $('.sect-news__slider').slick({
      slidesToShow: 1,
      infinite: true,
      dots: true,
      arrows: false,
      appendDots:$(".news-slick-dots-wrap"),
    });
  }
  
  
  // REINIT SLIDER MAIN-PAGE-NEWS END
  
  
  });
  