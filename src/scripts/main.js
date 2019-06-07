$(document).ready(function(){
  /*input mask*/
  $(document).find('[type="tel"]').inputmask({
    mask: "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: true
  });
  $(document).find('[name="e-mail"]').inputmask({ 
      alias: "email",
      showMaskOnHover: false,
      showMaskOnFocus: true
  });

  $('.fav-star').html('<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.26414L12.2446 6.47629L12.362 6.74897L12.6576 6.77639L18.3083 7.30047L14.0449 11.0458L13.8218 11.2418L13.8871 11.5314L15.1348 17.0675L10.2553 14.1701L10 14.0185L9.74472 14.1701L4.86519 17.0675L6.11291 11.5314L6.17818 11.2418L5.95513 11.0458L1.6917 7.30047L7.34236 6.77639L7.63799 6.74897L7.75541 6.47629L10 1.26414Z" stroke="#C69A60"/></svg>');
  
  if (document.getElementById("track-scroll")){
		document.getElementById("track-scroll").addEventListener('wheel', function(event) {
			horizontalScroll(this, event);
		});
	}
  /*функция для горизонтального скролла*/
  function horizontalScroll(elem, event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(elem).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = elem.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      var elemOldScrollLeft = elem.scrollLeft;
      elem.scrollLeft += modifier * event.deltaY;
      if((elem.id != 'header-search-main') && elemOldScrollLeft == elem.scrollLeft){
        return true;
      }
      event.preventDefault();
    }
  }

  /* для пропорциональных блоков*/
  var koef = 1440/635;
  $('.main-search-block').height($('.main-search-block').width() / koef);
  var koef1 = 680/357;
  $('.main-news-item_b .main-news-item-img').height($('.main-news-item_b .main-news-item-img').width() / koef1);
  var koef2 = 335/218;
  $('.main-news-item_s .main-news-item-img').height($('.main-news-item_s .main-news-item-img').width() / koef2);
  var koef3 = 440/256;
  $('.head .gen-title').css('left', ($('.head').width() / 2) - ($('.head .gen-title').width() / 2) );
  var koef4 = 453/200;
  $('.lots-item__img').height($('.lots-item__img').width() / koef4);
  var koef5 = 335/200;
  $('.catalog-main-item__img').height($('.catalog-main-item__img').width() / koef5);
  var koef6 = 550/1164;
  $('.article__video').css('height', $('.article__video').width() * koef6);
  /* для центрирования заголовка */ 
  $('.articles-item-img').height($('.articles-item-img').width() / koef3);
  $('.head .gen-title').css('left', ($('.head').width() / 2) - ($('.head .gen-title').width() / 2) + 20);
  
  /*ширина трэка для избранного*/
  if(screen.width >= 1024){
    var widthTrackFavourites =  0;
    $('.goods-item').each(function(i,elem){
      widthTrackFavourites += ($(elem).width() + 20);
    });
    //widthTrackFavourites -= 20;
    $('.goods-track').css('width', widthTrackFavourites);
    $('.goods-track').css('display', 'flex');
  } else {
    $('.goods-track').css('width', 'auto');
    $('.goods-track').css('display', 'block');
  }
  var masonryOptions = {
    columnWidth: '.goods-item',
    itemSelector: '.goods-item',
    gutter: 20,
    transitionDuration: '0.2s'
  }
  
  var $container = $('.goods-track');
  var isActive;
  if(screen.width < 1024 && screen.width >=768){
    // Инициализация
    $container.masonry(masonryOptions);
    isActive = true;
  } else {
    isActive = false;
  }
  /* кнопка в ЛК*/
  if(screen.width < 768){
    $('.data-user').find('button').html('<svg width="19" height="15" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L7.5 12L18.5 1" stroke="#C69A60" stroke-linecap="round"/></svg>');
    $('.data-user').find('button').css('padding-top', '5px');
  } 
  
  /* для определения аукционных item*/
  function tags (){
    $('.lots-item').each(function(i, el){
      if($(el).attr('data-lider') == 1){
        $(el).find('.lots-item__lider').show();
      }
      if($(el).attr('data-favourites') == 1){
        $(el).find('svg path').css('fill', 'rgba(198,154,96, 1)');
        $(el).css('border', '1px solid #C69A60');
        $(el).css('box-shadow', '0px 0px 10px rgba(198, 154, 96, 0.25)');
      } else {
        $(el).find('svg path').css('fill', '#fff');
        $(el).css('border', '1px solid rgba(0,0,0,0.2)');
        $(el).css('box-shadow', '0');
      }
      if($(el).attr('data-finish') == 1){
        $(el).find('.lots-item-prew__finish-time').html('Аукцион завершен');
        $(el).find('.lots-item-prew__finish').hide();
        $(el).find('.lots-item-prew__btn').css('color', 'rgba(0, 0, 0, 0.5)');
        $(el).find('.lots-item-prew__btn').css('border', '1px solid rgba(0, 0, 0, 0.5)');
        $(el).find('.lots-item-prew__finish-time').css('margin-top', '34px');
      }
    })
    $('.catalog-main-item').each(function(i, el){
      if($(el).attr('data-favourites') == 1){
        $(el).find('svg path').css('fill', 'rgba(198,154,96, 1)');
        $(el).css('border', '1px solid #C69A60');
        $(el).css('box-shadow', '0px 0px 10px rgba(198, 154, 96, 0.25)');
      } else {
        $(el).find('svg path').css('fill', '#fff');
        $(el).css('border', '1px solid rgba(0,0,0,0.2)');
        $(el).css('box-shadow', '0');
      }
      if($(el).attr('data-new') == 1){
        $(el).find('.catalog-main-item__new').show();
      }
      if($(el).attr('data-ex') == 1){
        $(el).find('.catalog-main-item__ex').show();
      }
    });
  }
  tags();
  /* Избранное клик */
  $('.fav-star').click(function(){
    if($(this).parent().attr('data-favourites') == '0'){
      $(this).parent().attr('data-favourites', '1');
    } else{
      $(this).parent().attr('data-favourites', '0');
    }
    tags();
  });
  

  /*видео с ютуба*/
  $('.thumb').click(function(){
    this.nextElementSibling.style.display='block'; 
    this.style.display='none'
    var srcVideo = $('.article__video iframe').attr('src');
    $('.article__video iframe').attr('src', srcVideo + '&autoplay=1');
  });
  
  /*404*/
  $('.notFound').parent().parent().find('.footer').css('margin-top', '0');
  $('.notFound').parent().parent().css('justify-content', 'space-between');

  /*resize*/
  $(window).resize(function(){
    var isActive1 = isActive;
    /* для пропорциональных блоков*/
    $('.main-search-block').height($('.main-search-block').width() / koef);
    $('.main-news-item_b .main-news-item-img').height($('.main-news-item_b .main-news-item-img').width() / koef1);
    $('.main-news-item_s .main-news-item-img').height($('.main-news-item_s .main-news-item-img').width() / koef2);
    $('.articles-item-img').height($('.articles-item-img').width() / koef3);
    $('.lots-item__img').height($('.lots-item__img').width() / koef4);
    $('.catalog-main-item__img').height($('.catalog-main-item__img').width() / koef5);
    $('.article__video').css('height', $('.article__video').width() * koef6);

    /*swap category*/
    if(screen.width < 768){
      swapCategory();
    } else {
      $('.era').show();
      $('.material').show();
    }
    /* кнопка в ЛК*/
    if(screen.width < 768){
      $('.data-user').find('button').html('<svg width="19" height="15" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L7.5 12L18.5 1" stroke="#C69A60" stroke-linecap="round"/></svg>');
      $('.data-user').find('button').css('padding-top', '5px');
    } else {
      $('.data-user').find('button').html('Сохранить')
      $('.data-user').find('button').css('padding-top', '0')
    }


    /*избранное */
    if(screen.width >= 1024){
      var widthTrackFavourites =  0;
      $('.goods-item').each(function(i,elem){
        widthTrackFavourites += ($(elem).width() + 20);
      });
      //widthTrackFavourites += 20;
      $('.goods-track').css('width', widthTrackFavourites);
      $('.goods-track').css('display', 'flex');
    } else if(screen.width >= 768 && screen.width < 1024) {
      $('.goods-track').css('width', 'auto');
      $('.goods-track').css('display', 'block');
    } else {
      $('.goods-track').css('width', 'auto');
      $('.goods-track').css('display', 'block');
    }
    /*re-initialize or destroy masonry*/
    if((screen.width < 768 && isActive1 == true) || (screen.width >= 1024 && isActive1 == true)){
      $container.masonry('destroy');
      isActive1 = !isActive1;
    } else if((screen.width >= 768 && screen.width < 1024) && isActive1 == false){
      $container.masonry(masonryOptions);
      isActive1 = !isActive1;
    }
    
    /* для центрирования заголовка */ 
    $('.head .gen-title').css('left', ($('.head').width() / 2) - ($('.head .gen-title').width() / 2) + 20);
    isActive = isActive1;
  });

  /*меняю стили для хедера на главной*/
  $('.main-search-block').parent().parent().find('.main-header').addClass('main-header_white');

  /*скрипты для избранного*/
  if($('div').is("#track-scroll")){
    if(screen.width >= 1024){
      document.getElementById("track-scroll").addEventListener('wheel', horizScroll);
    }
    $(window).resize(function(){
      if(screen.width >= 1024){
        document.getElementById("track-scroll").addEventListener('wheel', horizScroll);
      } else {
        document.getElementById("track-scroll").removeEventListener('wheel', horizScroll);
      }
    })
  }

  /*селектор в шапке*/
  $('.sort-select-display span').html($('.sort-select-options .sort-opt[data-selected="selected"]').html());
  $('.sort-select-display').click(function(){
    $('.sort-select-options').toggleClass('open');
  });
  $('.sort-opt').click(function(){
    $('.sort-select-options .sort-opt[data-selected="selected"]').attr('data-selected', '');
    $(this).attr('data-selected', 'selected');
    $('.sort-select-options').toggleClass('open');
    $('.sort-select-display span').html($('.sort-select-options .sort-opt[data-selected="selected"]').html());
  });
  $('.item-card-main-block-slider').slick({            
    infinite: true,
    dots: true,
    arrows: false,    
    speed: 500,    
    slidesToShow: 1,
    slidesToScroll: 1   
  });
  /*переключение в index catalog*/
  function swapCategory() {
    $('.material').hide();
    $('.era').hide();
    if($('.swap-category').attr('data-category') == '0'){
      $('.material').show();
    } else {
      $('.era').show();
    }
  }
  if(screen.width < 768){
    swapCategory();
  }
  $('.swap-category__link').click(function(){
    if($(this).hasClass('category__link_a') == false){
      $('.swap-category__link_a').removeClass('swap-category__link_a');
      $(this).addClass('swap-category__link_a');
      if($('.swap-category').attr('data-category') == '0'){
        $('.swap-category').attr('data-category', '1');
        setTimeout(swapCategory, 200);
      } else{
        $('.swap-category').attr('data-category', '0');
        setTimeout(swapCategory, 200);
      }
    }
  });
  /*переключение в логине*/ 
  function swapLogin(){
    $('.log_in').hide();
    $('.registration').hide();
    if($('.login').attr('data-login') == '0'){
      $('.log_in').show();
    } else {
      $('.registration').show();
    }
  }
  swapLogin();
  $('.makeAccount').click(function(){
    if($('.login').attr('data-login') == '0'){
      $('.login').attr('data-login', '1');
      swapLogin();
    } else {
      $('.login').attr('data-login', '0');
      swapLogin();
    }
  });

  /*переключение в ЛК*/

  function swapWindow() {
    $('[data-active="1"]').attr('data-active', '0');
    $('.lk-profile').hide();
    $('.lk-lots').hide();
    if($('.lk-aside').attr('data-window') == '0'){
      $('.lk-aside').attr('data-window', '1');
      $('.lk-aside :nth-child(1)').attr('data-active', '1');
      $('.lk-profile').show();
      $('.lk-aside').attr('data-window', '1');
    } else {
      $('.lk-aside').attr('data-window', '1');
      $('.lk-aside :nth-child(2)').attr('data-active', '1');
      $('.lk-lots').show();
      $('.lots-item__img').height($('.lots-item__img').width() / koef4);
      $('.lk-aside').attr('data-window', '0');
    }
  }
  swapWindow();
  $('.lk-aside__link').click(function(){
    if($(this).attr('data-active') == '0'){
      swapWindow();
    }
  });

  /*меню адаптив*/
  $('.humburger').click(function(){
    $('.main-header').toggleClass('main-header_down');
    if($('.main-header').hasClass('main-header_down') == true){
      if(screen.width < 768){
        $('.wrapper').hide();
        $('.footer').hide();
      } else {
        $('body').css('height', '100vh');
        $('body').css('overflow', 'hidden');
        $('.dark-blur').fadeIn();
      }
      if($('.main-header').hasClass('main-header_white') == true) {
        
      } else {
        $('.wrapper').addClass('wrapper_pad');
      }
    } else {
      $('.wrapper').show();
      $('.footer').show();
      $('body').css('height', 'auto');
      $('body').css('overflow', 'visible');
      $('.dark-blur').fadeOut();
      $('.wrapper').removeClass('wrapper_pad');
    }
  })
  $('.dark-blur').click(function(){
    $('body').css('height', 'auto');
    $('body').css('overflow', 'visible');
    $('.dark-blur').fadeOut();
    $('.humburger_o').toggleClass('humburger_o');
    $('.main-header').toggleClass('main-header_down');
    $('.wrapper').removeClass('wrapper_pad');
  })

  /*cookie*/
  $('.cookie__ok').click(function(){
    $('.cookie').fadeOut();
  })


  /* появление кнопки"сохранить" при изменении инпута*/
  var countChange = 0;
  $(document).on('.data-user-input input',function(ev){
    countChange++;
    if(countChange > 0){
      $('.data-user button').show();
    }
  });





  /* Клик вне селектора*/
  $(document).on('touchend mouseup', function (e){ 
		var div = $('.sort-select');
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			$('.sort-select-options').removeClass('open');
		}
	});
});