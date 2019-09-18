$(document).ready(function(){


  
  $(document).mouseup(function (e){ 
		var div = $(".selector_open"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.children('.selector-list').slideUp('fast');
			div.toggleClass('selector_open');
		}
  });
  $('.selector-view').click(function(){
    if($(this).parent().hasClass('selector_open')){
      $(this).parent().children('.selector-list').slideUp('fast');
    } else {
      $(this).parent().children('.selector-list').slideDown('fast');
    }
    $(this).parent().toggleClass('selector_open');
  })

  $(document).mouseup(function (e){ 
		var div = $(".search_active"); 
		if (!div.is(e.target) && $('.header-wrap-info-search').is(e.target) && div.has(e.target).length === 0) {
      div.slideUp('fast');
      div.toggleClass('search_active');
		}
	});

  /*header anim*/
  $('.header-wrap-linklist__link_more').children('a').append('<svg class="more-arrow" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L3 3L5 1" stroke="black" stroke-opacity="0.75" stroke-linecap="round"/></svg>');
  $('.header-wrap-info-search').click(function(){
    if($('.search').hasClass('search_active')){
      $('.search').slideUp('fast');
    } else {
      $('.search').slideDown('fast');
      if($(document).width() < 1200){
        $('.header-wrap-linklist').slideUp('fast');
        $('.header-wrap-hamburger_open').removeClass('header-wrap-hamburger_open');
      }
    }
    $('.search').toggleClass('search_active');
  });
  $('.search-form-top__close').click(function(){
    $('.search').slideUp('fast');
    $('.search').toggleClass('search_active');
  });

    $('.header-wrap-linklist__link_more').hover(
      function(){
        if($(document).width() > 1200){
          $(this).children('.header-wrap-linklist-block').slideDown('fast');
        }
      }, 
      function(){
        if($(document).width() > 1200){
        $(this).children('.header-wrap-linklist-block').slideUp('fast');
        }
    });

  /*картинки*/
  let k1 = 605 / 1440;
  $('.first').height($('.first').width() * k1);
  let k2 = 400 / 660;
  $('.second-block-images').height($('.second-block').width() / 2 * k2);
  let k3 = 384 / 243;
  $('.third-block-card-imgblock').each(function(){
    $(this).height($(this).width() * k3);
  });
  let k4 = 252 / 417;
  $('.house-wrap-item-imagebox').each(function(){
    $(this).height($(this).width() * k4);
  });
  let k5 = 240 / 427;
  $('.stock-wrap-item-top').each(function(){
    $(this).height($(this).width() * k5);
  });
  let k6 = 170 / 315;
  $('.galery-main-item-top').each(function(){
    $(this).height($(this).width() * k6);
  });





  $('.header-wrap-hamburger').click(function(){
    if($(this).hasClass('header-wrap-hamburger_open')){
      $('.header-wrap-linklist').slideUp('fast');
    } else {
      $('.header-wrap-linklist__link:not(.header-wrap-linklist__link_more)').each(function(index){
        let count = 33 + (index * 46);
        $(this).css('top', count + 'px');
        let heightList = count + 13;
        if($('.header-wrap-linklist').height() < heightList){
          $('.header-wrap-linklist').css('height', (heightList + 70) + 'px');
        }
      });

      $('.header-wrap-linklist').slideDown('fast');
    }
    $(this).toggleClass('header-wrap-hamburger_open');
  });
  


  if($(document).width() < 1200){
    $('.header-wrap-linklist').hide();
    $('.header-wrap-linklist__link:not(.header-wrap-linklist__link_more)').each(function(index){
      let count = 33 + (index * 46);
      $(this).css('top', count + 'px');
    });
    if(!($('.header-wrap-hamburger').hasClass('header-wrap-hamburger_open'))){
      $('.header-wrap-linklist').hide();
    }
  } else {
    $('.header-wrap-linklist').show();
    $('.header-wrap-hamburger_open').removeClass('header-wrap-hamburger_open');
  }


  /*ресайз*/
  $(window).resize(function(){
    $('.first').height($('.first').width() * k1);
    $('.second-block-images').height($('.second-block-images').width() * k2);
    $('.third-block-card-imgblock').each(function(){
      $(this).height($(this).width() * k3);
    });
    $('.house-wrap-item-imagebox').each(function(){
      $(this).height($(this).width() * k4);
    });
    $('.stock-wrap-item-top').each(function(){
      $(this).height($(this).width() * k5);
    });
    $('.galery-main-item-top').each(function(){
      $(this).height($(this).width() * k6);
    });

    if($(document).width() < 1200){
      $('.header-wrap-linklist__link:not(.header-wrap-linklist__link_more)').each(function(index){
        let count = 33 + (index * 46);
        $(this).css('top', count + 'px');
      });
      if(!($('.header-wrap-hamburger').hasClass('header-wrap-hamburger_open'))){
        $('.header-wrap-linklist').hide();
      }
    } else {
      $('.header-wrap-linklist').show();
      $('.header-wrap-hamburger_open').removeClass('header-wrap-hamburger_open');
    }
  });
  $('.galery-wrap .galery-main:not(.galery-main_active)').css('display', 'none');


  /* finnkoti swap*/
  

  /*checkbox */ 
  /*$('.check-item').click(function(){
    if($(this).attr('data-check') == "true"){
      $(this).attr('data-check', 'false');
    } else {
      $(this).attr('data-check', 'true');
    }
  });*/
  

 
  

  /*plus minus*/
  $('.complectation-tr_more').each(function(){
    $(this).find('.complectation-tr-wrap-left').prepend('<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><line class="line-svg" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="10" x2="5" y1="0" x1="5" stroke-width="1.5" stroke="#4479bc" fill="none"/><line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="5" x2="10" y1="5" x1="0" stroke-width="1.5" stroke="#4479bc" fill="none"/></svg>');
  });

  $('.complectation-tr_more').click(function(){
    $(this).find('.complectation-tr-wrap-left__text').slideToggle();
    $(this).find('.line-svg').toggleClass('line-svg_active');
  });



  /******************************slick********************************/
  $('.fourth-slider').slick({
    arrow: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.fourth-arrow__prev'),
    nextArrow: $('.fourth-arrow__next'),
    infinite: false
  });
  
  $('.fifth-review-wrap').slick({
    arrow: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.fifth-review-arrow__arr_prev'),
    nextArrow: $('.fifth-review-arrow__arr_next'),
    infinite: false
  });

  $('.stages-slider').slick({
    arrows: false,
    fade: true,
    cssEase: 'linear',
    dots: true,
    dotsClass: 'stages-slider-dots',
    infinite: false
  });

  $('.card-slider-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    infinite: false,
    asNavFor: '.card-slider-nav-wrap',
    arrows: true,
    prevArrow: $('.card-slider-prev'),
    nextArrow: $('.card-slider-next'),
  });
  $('.card-slider-nav-wrap').slick({
    arrows: false,
    slidesToScroll: 6,
    slidesToShow: 6,
    infinite: false,
    asNavFor: '.card-slider-wrap',
    focusOnSelect: true
  })


  /*stages dots*/
  $('.stages-slider-dots').children('li').each(function(index){
    let html1 = '0' + $(this).find('button').html();
    $(this).find('button').html(html1);
    $('.stages-slider-item[data-slick-index=' + index + ']').find('.stages-slider-item-desc__num').html(html1);
  });

  /* ********** contacts *********** */
  $('.contacts-wrap-right-toggle__btn').click(function(){
    if($(this).hasClass('contacts-wrap-right-toggle__btn_active')){ 
    } else {
      if($(this).hasClass('contacts-wrap-right-toggle__btn_l')) {
        $('.contacts-wrap-right-main-block_active').toggleClass('contacts-wrap-right-main-block_active');
        $('.contacts-wrap-right-main .contacts-wrap-right-main-block:first-child').toggleClass('contacts-wrap-right-main-block_active');
        $('.contacts-wrap-right-toggle__btn_active').toggleClass('contacts-wrap-right-toggle__btn_active');
        $(this).toggleClass('contacts-wrap-right-toggle__btn_active');
      }
      if($(this).hasClass('contacts-wrap-right-toggle__btn_r')){
        $('.contacts-wrap-right-main-block_active').toggleClass('contacts-wrap-right-main-block_active');
        $('.contacts-wrap-right-main .contacts-wrap-right-main-block:last-child').toggleClass('contacts-wrap-right-main-block_active');
        $('.contacts-wrap-right-toggle__btn_active').toggleClass('contacts-wrap-right-toggle__btn_active');
        $(this).toggleClass('contacts-wrap-right-toggle__btn_active');
      }
    }
  });
  /****************** galery ******************* */
  $('.galery-swap__item').click(function(){
    if($(this).hasClass('galery-swap__item_active')){ 

    } else {
      if($(this).hasClass('galery-swap__item_l')) {
        $('.galery-main_active').toggleClass('galery-main_active');
        $('.galery-wrap .galery-main:first-child').toggleClass('galery-main_active');
        $('.galery-swap__item_active').toggleClass('galery-swap__item_active');
        $(this).toggleClass('galery-swap__item_active');
        $('.galery-wrap .galery-main:not(.galery-main_active)').css('display', 'none');
      }
      if($(this).hasClass('galery-swap__item_r')) {
        $('.galery-main_active').toggleClass('galery-main_active');
        $('.galery-wrap .galery-main:last-child').toggleClass('galery-main_active');
        $('.galery-swap__item_active').toggleClass('galery-swap__item_active');
        $(this).toggleClass('galery-swap__item_active');
        $('.galery-wrap .galery-main:not(.galery-main_active)').css('display', 'none');
      }
    }
  });

  /*отключаем поиск на странице каталога*/
  $('.catalog').parent().parent().parent().find('.header-wrap-info-search').hide();


  /*************** yandex map **************/
  if($("div").is("#map-objects")){
    ymaps.ready(init);    
    function init(){ 
        var myMap = new ymaps.Map("map-objects", {
            center: [55.76, 37.64],
            zoom: 7
        }); 
      myMap.behaviors.disable('scrollZoom');
    }
  } 

});