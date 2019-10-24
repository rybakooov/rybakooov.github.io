$(document).ready(function(){


  /* прокрутка на странице итема*/
  $(document).on('click', '.itemBanner-nextScreen', function () {
    $('html, body').animate({
      scrollTop: $('.itemBanner').height()
    }, 1000);
  })
  /* прокрутка на странице итема end*/

  $(document).on('blur', 'input, textarea', function () {
    if( $(this).val() !== '' ){
      $(this).parent().find('label').addClass('label-up');
    } else {
      $(this).parent().find('label').removeClass('label-up');
    }
  })

  /*функция закрытия меню*/
  function closeMenu(){
    let width = screen.width;
    $('.header-right__burger').removeClass('header-right__burger_open');
    if(width < 1200){
      $('.header-linklist').hide();
    } else {
      $('.header-linklist').show();
    }
  }
  /*функция закрытия меню конец*/
   
  /*функция закрытия продукции*/
  function closeProd(){
    $('.header-productionBlock').fadeOut('fast');
    $('.header-production').removeClass('header-production_open');
  }
  /*функция закрытия продукции конец*/

/*обработчик клика по продукции*/
  $(document).on('click', '.header-production', function(){
    closeMenu();
    $('.header-productionBlock').fadeToggle('fast');
    $('.header-production').toggleClass('header-production_open');

    if(!$(this).hasClass('header-production_open')){
      $('.header').removeClass('header_open');
    } else {
      $('.header').addClass('header_open');
    }
  })
/*обработчик клика по продукции конец*/

  /*ебля в ордере*/

  if($('.order').length){
    $('.order-description-form-block-next').find('input, textarea, button').attr('disabled', 'disabled');
  }


  
  $(document).on('click', '.order-description-form-block_f .order-description-form-block__label', function () {
    $(this).closest('form').find('.order-description-form-block-next').attr('data-disabled', 'false');
    $(this).closest('form').find('input, textarea').removeAttr('disabled');
    $(this).closest('form').find('.order-description-form-block_f label').fadeOut('fast');
    setTimeout (() => {
      $(this).closest('form').find('.order-description-form-block_f .order-description-form-block__change').fadeIn('fast');
      $(this).closest('form').find('.order-description-form-block_f .order-description-form-block__current').html($('.order-description-form-block_f input:checked').attr('data-name-input')).fadeIn('fast');
    }, 200)
  })

  $(document).on('click', '.order-description-form-block__change', function() {
    $(this).fadeOut('fast');
    $(this).closest('form').find('.order-description-form-block_f .order-description-form-block__current').fadeOut('fast')
    setTimeout (() => {
      $(this).closest('form').find('.order-description-form-block_f label').fadeIn('fast');
    }, 200)
  })

  /*ебля в ордере end*/


  /*обработчик клика по бургеру*/
  $(document).on('click', '.header-right__burger', function(){
    closeProd();
    $('.header-linklist').fadeToggle('fast');
    $('.header-right__burger').toggleClass('header-right__burger_open');

    if(!$(this).hasClass('header-right__burger_open')){
      $('.header').removeClass('header_open');
    } else {
      $('.header').addClass('header_open');
    }
  })
  /*обработчик клика по бургеру конец*/
  
  /* функция перстроя сайта при изменения размеров*/
  function buildSite(width){
    if (width < 1200){
      initBurger();
    } else {
      destroyBurger();
    }
    if (width < 768){
      $('.header-right__phone').detach().prependTo('.header-linklist-wrap');
    } else {
      $('.header-right__phone').detach().prependTo('.header-right');
    }
  }
  buildSite(screen.width);
  /* функция перстроя сайта при изменения размеров конец*/


  /* функция показа бургера в хедере*/
  function initBurger(){
    $('.header-right__burger').show();
    $('.header-linklist').addClass('header-linklist_open');
  }
  /* функция показа бургера в хедере конец*/
  
  /* функция дестроя бургера в хедере*/
  function destroyBurger(){
    $('.header-right__burger').hide();
    $('.header-linklist').removeClass('header-linklist_open');
  }
  /* функция дестроя бургера в хедере end*/


  function resizeDocument(wid) {
    if(wid < 768){
      if (!$('.itemBanner-imgbox').parent().hasClass('itemBanner-desc')){
        $('.itemBanner-imgbox').detach().insertAfter('.itemBanner-desc__title')
      }
      $('.itemBanner-imgbox').css('height', $(this).width() - 40  + 'px');

      $('.order-preview').detach().insertAfter('.order-description__title');
    } else {

      $('.order-preview').detach().prependTo('.order');
      if($('.itemBanner-imgbox').parent().hasClass('itemBanner-desc')){
        $('.itemBanner-imgbox').detach().insertAfter('.itemBanner-desc').css('height', 'auto');
      }
    }
  }
  resizeDocument(screen.width);

  /*resize window*/
  $(window).on('resize', function(){
    let ww = screen.width;
    $('.header').removeClass('header_open');
    /*закрываем prod*/
    closeProd();
    closeMenu();
    buildSite(ww);
    $('.modal').fadeOut('fast');
    $('body').css('overflow', 'auto');

    resizeDocument(ww);
  })


  /* YANDEX MAP API*/

  if($('#contacts__map').length){
    ymaps.ready(init);
    function init(){
      // Создание карты.
      var myMap = new ymaps.Map("contacts__map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.76, 37.64],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 7
      });
    } 
  } 
  /* YANDEX MAP API end*/



  /*tabs portfolio*/

  
  $('.portfolio-wrap-tabs__link').click(function () {
    var goodTabContainers = $('.portfolio-switch-item');
    goodTabContainers.fadeOut('fast');
    setTimeout(() => {
      goodTabContainers.filter(this.hash).fadeIn('fast');

      if($(document).find('.portfolio').find('.slick-initialized').length){
        $(document).find('.portfolio-switch-slider.slick-initialized').slick('unslick');
      }
      $(document).find($(this).attr('href')).find('.portfolio-switch-slider').slick({
        infinite: false,
        arrows: true,
        dots: true,
        prevArrow: $(document).find($(this).attr('href')).find('.portfolio-switch-arrows__prev'),
        nextArrow: $(document).find($(this).attr('href')).find('.portfolio-switch-arrows__next'),
        dotsClass: 'portfolio-switch-dots',
        slidesToShow: 1,
        slidesToScroll: 1
      });

    }, 210)
    $('.portfolio-wrap-tabs__link').removeClass('selected');
    $(this).addClass('selected');
    return false;
  }).filter(':first').click();
  /*tabs portfolio end*/

  /*file input generalform*/
  if($('.general__callOrder').length){
    var control = document.getElementById("filesCallOrder1");
    control.addEventListener("change", function(event) {
      // Когда происходит изменение элементов управления, значит появились новые файлы
      var i = 0,
          files = control.files,
          len = files.length; 
      $('.general__callOrder-label label').fadeOut('fast');
      setTimeout (() => {
        for (; i < len; i++) {
          $('.general__callOrder-label-box').append('<p class="general__callOrder-label__files">' + this.files[i].name + '</p>');
        }
        $('.general__callOrder-label-exit').fadeIn('fast');
      }, 200)
  }, false);
  }


  $(document).on('click', '.general__callOrder-label-exit', function(){
    $('.general__callOrder-label label').fadeIn();
    $(this).fadeOut();
    $('.general__callOrder-label-box').find('p').remove();
    files = [];
  })
  /*file input generalform end*/

/*file input qualityform*/

var control1 = document.getElementById("filesCallOrder");
control1.addEventListener("change", function(event) {
  // Когда происходит изменение элементов управления, значит появились новые файлы
  var f = 0,
      files = control1.files,
      len1 = files.length; 
  $('.quality-form-wrap-label label').fadeOut('fast');
  setTimeout (() => {
    for (; f < len1; f++) {
      $('.quality-form-wrap-label-box').append('<p class="quality-form-wrap-label__files">' + this.files[f].name + '</p>');
    }
    $('.quality-form-wrap-label-exit').fadeIn('fast');
  }, 200)
}, false);


$(document).on('click', '.quality-form-wrap-label-exit', function(){
  $('.quality-form-wrap-label label').fadeIn();
  $(this).fadeOut();
  $('.quality-form-wrap-label-box').find('p').remove();
  files1 = [];
})
/*file input qualityform end*/


if($('.ourWorks').length){
  $('.ourWorks-slider').slick({
    infinite: false,
    arrows: true,
    prevArrow: '.ourWorks-wrap-arrows__prev',
    nextArrow: '.ourWorks-wrap-arrows__next',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  })
}

if($('.whywe').length){
  $('.whywe-wrap-slider').slick({
    infinite: false,
    arrows: true,
    prevArrow: '.whywe-wrap-arrows__prev',
    nextArrow: '.whywe-wrap-arrows__next',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  })
}

if($('.press').length){
  $('.press-slider').slick({
    
    arrows: true,
    prevArrow: '.press-wrap-arrows__prev',
    nextArrow: '.press-wrap-arrows__next',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    centerMode: true,
    draggable: false,
    responsive: [{
      breakpoint: 1440, 
      settings: {
        centerMode: false,
        variableWidth: false
      }
    },{
      breakpoint: 768, 
      settings: {
        centerMode: false,
        variableWidth: false,
        fade: true,
        adaptiveHeight: true
      }
    }]
  })
}


/* кнопки в модалке формы */
  $(document).on('click', '.quality-form-wrap-buttons__link', function(){
    $(this).closest('form').find('.quality-form-wrap__textarea').val( $(this).closest('form').find('.quality-form-wrap__textarea').val() + $(this).html() + '; ').addClass('input-border');
    $(this).fadeOut('fast');
    $('.general__input.quality-form-wrap__textarea').parent().find('label').addClass('label-up');
  })

  $(document).on('input', '.quality-form-wrap__textarea', function(){
    if($(this).val() == ''){
      $('.quality-form-wrap-buttons__link').fadeIn('fast');
    }
  })
/* кнопки в модалке формы end */


/*open modal*/

$(document).on('click', 'a[data-modal]', function(){
  $('.' + $(this).attr('data-modal')).fadeIn('fast').css('display', 'flex');
  $('body').css('overflow', 'hidden');
})


$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $('.quality'); // тут указываем класс элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.modal').fadeOut('fast'); // скрываем его
      $('body').css('overflow', 'auto');
  }
});

$(document).on('click', '.quality__close', function () {
  $(this).closest('.modal').fadeOut('fast');
  $('body').css('overflow', 'auto');
})
/*open modal end*/


  /*submit*/
  $('button[type="submit"]').click(function(e){
    e.preventDefault();
    if(!raValidation($(this).closest('form'))){   //если не проходит валидация
      ifError($(this).closest('form'));           // функция ifError
    } else {
      ifSuccess($(this).closest('form'));         //функция ifSuccess
      if($(this).hasClass('quality-form-wrap-bottom__submit')){
        $('.quality').fadeOut('fast');
        setTimeout (() => {
          $('.quality-ok').fadeIn('fast');
        }, 200)
      }
    }
  })
  /*submit end*/



  /*запретить перенос строк в текстэреа и инпут на энтер*/
  $('input, textarea').on('keydown', function( e ) {
    if( e.keyCode === 13 ) {
      e.preventDefault();
    }
  });
  /*запретить перенос строк в текстэреа и инпут на энтер end*/

  /* кнопки в ордере формы */
  $(document).on('click', '.order-description-form-block__item__size', function(){
    $(this).closest('form').find('.order-description-form-block__item__inputSize').val( $(this).closest('form').find('.order-description-form-block__item__inputSize').val() + $(this).html() + '; ').addClass('input-border');
    $('.order-description-form-block__item__size').fadeOut('fast');
    $('.order-description-form-block__item__inputSize').parent().find('label').addClass('label-up');
  })

  $(document).on('input', '.order-description-form-block__item__inputSize', function(){
    if($(this).val() == ''){
      $('.order-description-form-block__item__size').fadeIn('fast');
    }
  })
  /* кнопки в ордере формы end */



  



/*file input orderform*/
if($('.order').length){
  var control3 = document.getElementById("filesCallOrder2");
  control3.addEventListener("change", function(event) {
    // Когда происходит изменение элементов управления, значит появились новые файлы
    var z = 0,
        files = control3.files,
        len = files.length; 
    $('.order-description-form-block-label label').fadeOut('fast');
    setTimeout (() => {
      for (; z < len; z++) {
        $('.order-description-form-block-label-box').append('<p class="order-description-form-block-label-box__files">' + this.files[z].name + '</p>');
      }
      $('.order-description-form-block-label-exit').fadeIn('fast');
    }, 200)
}, false);
}


$(document).on('click', '.order-description-form-block-label-exit', function(){
  $('.order-description-form-block-label label').fadeIn();
  $(this).fadeOut();
  $('.order-description-form-block-label-box').find('p').remove();
  files = [];
})
/*file input orderform end*/








});


