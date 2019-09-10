$(document).ready(function(){

  /*header anim*/
  $('.header-wrap-linklist__link_more').children('a').append('<svg class="more-arrow" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L3 3L5 1" stroke="black" stroke-opacity="0.75" stroke-linecap="round"/></svg>');
  $('.header-wrap-info-search').click(function(){
    if($('.search').hasClass('search_active')){
      $('.search').slideUp('fast');
    } else {
      $('.search').slideDown('fast');
    }
    $('.search').toggleClass('search_active');
  });
  $('.search-form-top__close').click(function(){
    $('.search').slideUp('fast');
    $('.search').toggleClass('search_active');
  });

  $('.header-wrap-linklist__link_more').hover(
    function(){
      $(this).children('.header-wrap-linklist-block').slideDown('fast');
    }, 
    function(){
      $(this).children('.header-wrap-linklist-block').slideUp('fast');
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
  });

  
  $(document).mouseup(function (e){ 
		var div = $(".selector_open"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.children('.selector-list').slideUp('fast');
			div.toggleClass('selector_open');
		}
	});

  $(document).mouseup(function (e){ 
		var div = $(".search_active"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.slideUp('fast');
		}
	});

  /* finnkoti swap*/
  

  /*checkbox */ 
  $('.check-item').click(function(){
    if($(this).attr('data-check') == "true"){
      $(this).attr('data-check', 'false');
    } else {
      $(this).attr('data-check', 'true');
    }
  });
  

 
  

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
      console.log('hu');
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

  /*отключаем поиск на странице каталога*/
  $('.catalog').parent().parent().parent().find('.header-wrap-info-search').hide();

});