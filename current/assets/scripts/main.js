$(document).ready(function(){

  /*слайдер1 на странице услуг*/
  if($('.amen-main-slider1').length) {
    $('.amen-main-slider1').slick({
      /*slidesToShow: 1,
      slidesToScroll: 1*/
      arrows: false
    });
  }
  /*слайдер1 на странице услуг конец*/


  /*слайдер2 на странице услуг*/
  if($('.amen-main-slider2').length){
    $('.amen-main-slider2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '.amen-main-slider2__next',
      prevArrow: '.amen-main-slider2__prev',
      asNavFor: '.amen-main-slider1'
    });
  }
  /*слайдер2 на странице услуг конец*/


  /*Поиск в шапке*/
  $(document).on('click', '.header-search', function () {
    if(!$('.header-linklist-search').hasClass('header-linklist-search_active')){
      $(this).css('visibility', 'hidden');
      $(this).closest('.header').find('.header-linklist-search').fadeIn('slow').css('display', 'flex').addClass('header-linklist-search_active');
      if($(window).width() < 1023 && $(window).width() > 767){
        $('.header-contacts__link:nth-child(2)').fadeOut('fast');
      }
      if($(window).width() < 768){
        $('.header-logo').fadeOut('fast');
        $('.header-burger').css('margin-left', '-20px');
      }
    }
  });

  $(function($){
    $(document).on('click touchend', function (e){
      let div = $('.header-linklist-search_active');
      if (!div.is(e.target) && div.has(e.target).length === 0 && !$('.header-search').is(e.target) && $('.header-search').has(e.target).length === 0) {
        div.fadeOut('fast');
        setTimeout(() => {
          div.removeClass('header-linklist-search_active');
        }, 200);

        $('.header-search').css('visibility', 'visible');
        if($(window).width() < 1023 && $(window).width() > 767){
          $('.header-contacts__link:nth-child(2)').fadeIn('fast');
        }
        if($(window).width() < 768){
          $('.header-logo').fadeIn('fast');
          $('.header-burger').css('margin-left', '20px');
        }
      }
    });
  });
  /*Поиск в шапке конец*/


  /*селектор с ссылками услуги*/
  
  $(document).on('click', '.amen-aside__title', function () {
    if($(window).width() < 1023){
      $(this).closest('.amen-aside').find('.amen-aside-wrap').fadeToggle('fast');
      $(this).find('svg').toggleClass('arrow-top');
    }
  });
  $(function($){
    $(document).on('click touchend', function (e){
      if($(window).width() < 1023){
        let div = $('.amen-aside');
        if ((!div.is(e.target) && div.has(e.target).length === 0)) {
          div.find('.amen-aside-wrap').fadeOut('fast');
          $(this).find('svg').removeClass('arrow-top');
        }
      }
    });
  });
  /*селектор с ссылками услуги конец*/

  $(document).on('click', '.header-burger', function () {
    $('.header-linklist-wrap').toggleClass('active');
    $(this).toggleClass('active');
  })


  $(function($){
    $(document).on('click touchend', function (e){
      let div = $('.header-burger');
      if ((!div.is(e.target) && div.has(e.target).length === 0) && (!$('.header-linklist-wrap').is(e.target) && $('.header-linklist-wrap').has(e.target).length === 0)) {
        $('.header-linklist-wrap').removeClass('active');
        div.removeClass('active');
      }
    });
  });

  $(document).on('click', '.amen-aside-wrap-block__title', function () {
    $(this).closest('.amen-aside-wrap-block').toggleClass('amen-aside-wrap-block_active');
  })

});