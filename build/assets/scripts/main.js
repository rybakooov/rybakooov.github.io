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
  
  /*ресайз*/
  $(window).resize(function(){
    $('.first').height($('.first').width() * k1);
    $('.second-block-images').height($('.second-block-images').width() * k2);
    $('.third-block-card-imgblock').each(function(){
      $(this).height($(this).width() * k3);
    });
  });

  /*селекторы*/
  $('.selector-view').click(function(){
    if($(this).parent().hasClass('selector_open')){
      $(this).parent().children('.selector-list').slideUp('fast');
    } else {
      $(this).parent().children('.selector-list').slideDown('fast');
    }
    $(this).parent().toggleClass('selector_open');
  });
  $('.selector-list__item').click(function(){
    $(this).parent().find('.selector-list__item_active').toggleClass('selector-list__item_active');
    $(this).addClass('selector-list__item_active');
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
  $('.finnkoti-swap__finn').click(function(){
    if($(this).hasClass('finnkoti-swap__finnfull') && $(this).parent().attr('data-position') == '1'){
      $('.finnkoti-swap').attr('data-position', '0');
    }
    if($(this).hasClass('finnkoti-swap__finnlite') && $(this).parent().attr('data-position') == '0'){
      $('.finnkoti-swap').attr('data-position', '1');
    }
  });

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

  /*stages dots*/


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


  
  $('.stages-slider-dots').children('li').each(function(index){
    let html1 = '0' + $(this).find('button').html();
    $(this).find('button').html(html1);
    $('.stages-slider-item[data-slick-index=' + index + ']').find('.stages-slider-item-desc__num').html(html1);
  });




  /*отключаем поиск на странице каталога*/
  $('.catalog').parent().parent().parent().find('.header-wrap-info-search').hide();

});