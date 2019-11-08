$(document).ready(function(){
  if($('.amen-main-slider1').length) {
    $('.amen-main-slider1').slick({
      /*slidesToShow: 1,
      slidesToScroll: 1*/
      arrows: false
    });
  }
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
  $(document).on('click', '.header-search', function () {
    if(!$('.header-linklist-search').hasClass('header-linklist-search_active')){
      $(this).css('visibility', 'hidden');
      $(this).closest('.header').find('.header-linklist-search').fadeIn('fast').css('display', 'flex').addClass('header-linklist-search_active');
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
      }
    });
  });


  $(document).on('click', '.amen-aside__title', function () {
    $(this).closest('.amen-aside').find('.amen-aside-wrap').fadeToggle('fast');
    $(this).find('svg').toggleClass('arrow-top');
  });
  $(function($){
    $(document).on('click touchend', function (e){
      let div = $('.amen-aside');
      if ((!div.is(e.target) && div.has(e.target).length === 0)) {
        div.find('.amen-aside-wrap').fadeOut('fast');
        $(this).find('svg').removeClass('arrow-top');
      }
    });
  });

});