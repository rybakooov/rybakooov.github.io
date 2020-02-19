$(document).ready(function(){

  /* бургер моб меню */
  $(document).on('click', '.header__burger', function(){
    $('.header-nav-wrap').slideDown();
    $('body').addClass('body-overflow');
  })

  
  $(document).on('click', '.header-nav-close__btn', function(){
    $('.header-nav-wrap').slideUp();
    $('body').removeClass('body-overflow');
  })


  $(window).on('resize', function(){
    if(document.documentElement.clientWidth < 1024 && $('body').hasClass('body-overflow')){
      $('.header-nav-sublist').removeClass('active');
      $('.header-nav-wrap').slideUp(400, function() {
        $('.header-nav-wrap').attr('style', '');
      });
      $('body').removeClass('body-overflow');
    }
    if(document.documentElement.clientWidth > 1023){
      $('.header-nav-wrap').attr('style', '');
    }
    $('.header-logo').addClass('active');
  })

  $(document).on('click', '.header-nav-sublist__back', function(){
    $(this).closest('.header-nav-sublist').removeClass('active');
  })

  $(document).on('click', '.header-nav-sublist__close', function(){
    $(this).closest('.header-nav-sublist').removeClass('active');
    $('.header-nav-wrap').slideUp(400, function() {
      $('.header-nav-wrap').attr('style', '');
    });
    $('body').removeClass('body-overflow');
  })

  /* бургер моб меню end */


  /* Открытие второго уровня меню */

  $(document).on('click', '.header-nav__link', function(e){
    if($(this).next('.header-nav-sublist').length == 1){
      e.preventDefault();
      $(this).next('.header-nav-sublist').addClass('active');
    }
  })

  /* Открытие второго уровня меню end */


  /* анимация лого в хедере */
  window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100){
      document.querySelector('.header-logo').classList.add('active');
    }
  })
  /* анимация лого в хедере End */

  /*открытие поиска в хедере */ 
  $(document).on('click', '.header-search:not(.header-search.active) > .header-icon', function(){
    // $('.header-nav').fadeOut('fast');
    // $('.header-phone').fadeOut('fast');
    $('.header-icon').addClass('header-icon_opacity-0');
    setTimeout(function(){
      $('.header-search').addClass('active');
    }, 200);
  })

  $(document).on('click touchend', function (e){
    var div = $('.header-search'); 
    if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('active')) {
      $('.header-search').removeClass('active');
      setTimeout(function(){
        // $('.header-nav').fadeIn('fast');
        // $('.header-phone').fadeIn('fast');
        $('.header-icon').removeClass('header-icon_opacity-0');
      }, 200);
    }
  })
  /*открытие поиска в хедере  end*/ 



  /* banner on main */

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinity: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  })
  /* banner on main end */

  /* partners-slider on main */

  $('.partners-wrap').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    infinity: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  })

  $('.patents__item:not(.slick-cloned)').fancybox({});
  /* partners-slider on main end */


  /* footer lists */

  $(document).on('click', '.footer-linklist__header', function(){

    if($(this).next('.footer-linklist').hasClass('opened')){
      $(this).next('.footer-linklist').slideUp();
      $(this).next('.footer-linklist').removeClass('opened');
    } else {
      if($('.footer-linklist.opened').length){
        $('.footer-linklist.opened').slideUp();
        $('.footer-linklist.opened').removeClass('opened');

        
        $(this).next('.footer-linklist').slideDown();
        $(this).next('.footer-linklist').addClass('opened');
      } else {
        $(this).next('.footer-linklist').slideDown();
        $(this).next('.footer-linklist').addClass('opened');
      }
    }
    
  })

  /* footer lists end*/

  var smaller = false;
  /* catalog mobile */
  function tableGrid() {
    if($('.catalog-block-table:not(.catalog-block-table_more)').length){
      if(document.documentElement.clientWidth < 768 && smaller == false){
        smaller = true;
        $('.catalog-block-table:not(.catalog-block-table_more)').addClass('catalog-block-table_grid');
      } else if(document.documentElement.clientWidth >= 768 && smaller == true) {
        smaller = false;
        $('.catalog-block-table:not(.catalog-block-table_more)').removeClass('catalog-block-table_grid');
        if($('.catalog-block-top-switch-view__grid.active').length){
          $('.catalog-block-top-switch-view__grid.active').removeClass('active');
          $('.catalog-block-top-switch-view__table').addClass('active');
        }
      }
    }
  };
  tableGrid();

  $(window).resize(function(){
    tableGrid();
  })
  /* catalog mobile end */

  /* patent-slider on about */

  $('.patents-wrap').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    infinity: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  })
  /* patent-slider on about end */

  /* how we work animation */
  

  $(window).on('scroll', function(){
    if(document.documentElement.clientWidth < 768){
      $('.how-we-work-item').each(function(e){
        var c = this.getBoundingClientRect()
        if(c.top < 400 && c.top > 300){
          $(this).addClass('animation-circle-how');
        }
      })
    } else {
      if($('.how-we-work-wrap').length){

        var c = document.querySelector('.how-we-work-wrap').getBoundingClientRect()
        if(c.top < 700){
          $('.how-we-work-item').each(function(i){
            let element = $(this);
            setTimeout(function(){
              element.addClass('animation-circle-how');
            }, i * 350)
          })
        }
      }
    }
  })

  /* how we work animation end*/

  



  /* переключение вида продуктов в каталоге */

  $(document).on('click', '.catalog-block-top-switch-view__grid:not(.active)', function(){
    $('.catalog-block-top-switch-view__table.active').removeClass('active');
    $(this).addClass('active');
    $('.catalog-block-table').addClass('catalog-block-table_grid');
  })

  $(document).on('click', '.catalog-block-top-switch-view__table:not(.active)', function(){
    $('.catalog-block-top-switch-view__grid.active').removeClass('active');
    $(this).addClass('active');
    $('.catalog-block-table').removeClass('catalog-block-table_grid');
  })
  /* переключение вида продуктов в каталоге end*/


  /* фильтры и сортировка в каталоге */

  $(document).on('click', '.catalog-active-filter-item-view__current > span', function(){
    $(this).closest('.catalog-active-filter-item-view__current').find('.catalog-active-filter-item-list').fadeIn('fast');
    $(this).closest('.catalog-active-filter-item-view__current').find('.catalog-active-filter-item-list').addClass('active');
  })

  $('.catalog-active-filter-item').each(function(){
    $(this).find('.catalog-active-filter-item-view__current > span').html(
      $(this).find('input:checked').prev('span').html()
    )
  })

  $(document).mouseup(function (e){ 
		var div = $(".catalog-active-filter-item-list.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.fadeOut('fast');
		}
	});


  $(document).on('click', '.catalog-active-filter-item-list__item', function(){
    $(this).closest('.catalog-active-filter-item-view__current').children('span').html($(this).find('span').html())
    $(this).closest('.catalog-active-filter-item-list.active').fadeOut('fast');
  })

  /* sort close */

  $(document).on('click', '.catalog-active-filter__icon', function(){
    $(this).next().slideDown().css('display', 'flex');
    $('body').addClass('body-overflow');
  })
  
  $(document).on('click', '.catalog-active-filter-wrap__close', function(){
    $(this).closest('.catalog-active-filter-wrap').slideUp('fast');
    $('body').removeClass('body-overflow');
  })
  /* sort close end */

  /* фильтры и сортировка в каталоге end*/

 /* акккордеоны в карточке товара */
  $(document).on('click', '.item-main-col_desc-full__open.item-main-col_desc-full__open_opened', function(){
    $(this).removeClass('item-main-col_desc-full__open_opened');
    $(this).siblings('.item-main-col_desc-full__akkord').slideUp()
  })


  $(document).on('click', '.item-main-col_desc-full__open:not(.item-main-col_desc-full__open_opened)', function(){
    if($('.item-main-col_desc-full__open_opened').length){
      $('.item-main-col_desc-full__open_opened').siblings('.item-main-col_desc-full__akkord').slideUp();
      $('.item-main-col_desc-full__open_opened').removeClass('item-main-col_desc-full__open_opened');
    }
    $(this).addClass('item-main-col_desc-full__open_opened');
    $(this).siblings('.item-main-col_desc-full__akkord').slideDown();
  
  })

  
/* акккордеоны в карточке товара end */


  /* слайдеры на карточке товара */


  $('.item-main-col-preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.item-main-col-slider-wrap',
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true
        }
      }
    ]
  })

  $('.item-main-col-slider-wrap').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    asNavFor: '.item-main-col-preview',
    infinite: false,
    vertical: true,
    prevArrow: '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18.75"><g id="Слой_2" data-name="Слой 2"><g id="layout"><path class="cls-1" d="M0,18a.75.75,0,0,1,.22-.53L17.47.22a.75.75,0,0,1,1.06,0L35.78,17.47a.75.75,0,1,1-1.06,1.06L18,1.81,1.28,18.53A.75.75,0,0,1,0,18Z"/><path class="cls-1" d="M14.62,10.51a.75.75,0,0,1,.22-.53l2.63-2.63a.75.75,0,0,1,1.06,0l7.37,7.37a.75.75,0,0,1-1.06,1.06L18,8.94,15.9,11a.75.75,0,0,1-1.28-.53Z"/><path class="cls-1" d="M11,14.12a.75.75,0,0,1,.22-.53l1.6-1.6a.75.75,0,1,1,1.06,1.06l-1.6,1.6A.75.75,0,0,1,11,14.12Z"/></g></g></svg></div>',
    nextArrow: '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18.75"><g id="Слой_2" data-name="Слой 2"><g id="layout"><path class="cls-1" d="M0,18a.75.75,0,0,1,.22-.53L17.47.22a.75.75,0,0,1,1.06,0L35.78,17.47a.75.75,0,1,1-1.06,1.06L18,1.81,1.28,18.53A.75.75,0,0,1,0,18Z"/><path class="cls-1" d="M14.62,10.51a.75.75,0,0,1,.22-.53l2.63-2.63a.75.75,0,0,1,1.06,0l7.37,7.37a.75.75,0,0,1-1.06,1.06L18,8.94,15.9,11a.75.75,0,0,1-1.28-.53Z"/><path class="cls-1" d="M11,14.12a.75.75,0,0,1,.22-.53l1.6-1.6a.75.75,0,1,1,1.06,1.06l-1.6,1.6A.75.75,0,0,1,11,14.12Z"/></g></g></svg></div>',
  })

  function initArr() {
    var prevArr = $('.item-main-col-slider-wrap').find('.slick-next.slick-arrow');
    var nextArr = $('.item-main-col-slider-wrap').find('.slick-prev.slick-arrow');;
    if($('.item-main-col-slider-wrap').find('.slick-track').find('.item-main-col-slider__item:last-child').hasClass('slick-current')){
      nextArr.addClass('last-arrow');
    } else {
      nextArr.removeClass('last-arrow');
    }
    if($('.item-main-col-slider-wrap').find('.slick-track').find('.item-main-col-slider__item:first-child').hasClass('slick-current')){
      prevArr.addClass('last-arrow');
    } else {
      prevArr.removeClass('last-arrow');
    }
  }

  

  if($('.item-main-col-slider-wrap').length){
    initArr();

  }

  $('.item-main-col-slider-wrap').on('afterChange', function(event, slick, currentSlide, nextSlide){
    initArr();
  });



  /* слайдеры на карточке товара end */



  /* формы */

  
  $('.general-form-block-slide_current').each(function(){
    $(this).fadeIn('fast');
  })

  function getHeight(){
    $('.general-form-block-slide_current').each(function(){
      if($(this).hasClass('general-form-block-slide_first')){
        $(this).closest('.general-form-block').height($(this).outerHeight() + 30);
      } else{
        $(this).closest('.general-form-block').height($(this).outerHeight());
      }
    })
  }

  getHeight();

  $(document).on('click', '.form-slide-btns-item', function(){
    let slideId = $(this).data('slide-id');
    $(this).closest('.general-form-block-slide').removeClass('general-form-block-slide_current');
    $('.general-form-block-slide_second-' + slideId).addClass('general-form-block-slide_current');
    $(this).closest('.general-form-block-slide').fadeOut();
    setTimeout(() => {
      getHeight();
      $('.general-form-block-slide_current').fadeIn('slow');
    }, 400)
  })


  $(document).on('click', '.form-slide__goBack', function(){


    $(this).closest('.general-form-block-slide').find('input, textarea').val('');
    $(this).closest('.general-form-block-slide').find('input[type="checkbox"]').prop('checked', false);
    $(this).closest('.general-form-block-slide').find('input[type="radio"]').prop('checked', false);
    $(this).closest('.general-form-block-slide').find('input, textarea').removeClass('input-border');
    $(this).closest('.general-form-block-slide').find('input, textarea').removeClass('input-err');
    $(this).closest('.general-form-block-slide').find('.general-form-row-2 > .general-form-label__text').hide();


    $(this).closest('.general-form-block-slide').removeClass('general-form-block-slide_current');
    $('.general-form-block-slide_first').addClass('general-form-block-slide_current');
    $(this).closest('.general-form-block-slide').fadeOut();
    setTimeout(() => {
      getHeight();
      $('.general-form-block-slide_current').fadeIn('slow');
    }, 400)
  })
  

  $(document).on('blur', '.general-form input', function(){
    getHeight();
  })

  $(document).on('click', '.general-form button', function(){
    getHeight();
  })

  $(document).on('change', '.general-form-checkblock__input', function(){
    getHeight();
  })


  $(document).on('focus', '[data-postfix]', function(){
    let valueInp = $(this).val();
    if(valueInp != ''){
      valueInp = valueInp.replace(/\s/g, '');
      $(this).val(parseInt(valueInp));
    } else {
      return false;
    }
  })


  function restrictToInteger(){
    this.value = this.value.replace(/[^\d.]/g, '');
  }

  $(document).on('input', 'input[data-int]', restrictToInteger);

  $(document).on('blur', '[data-postfix]', function(){
    let valueInp = $(this).val();
    let inpPostfix = $(this).data('postfix');
    if(valueInp != ''){
      valueInp = valueInp.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
      valueInp = valueInp + ' ' + inpPostfix;
    } else {
      return false;
    }
    $(this).val(valueInp);
  })


  $(document).on('click', '.general-form-selector__view', function(){
    $(this).next('.general-form-selector-list').fadeIn('fast');
    $(this).closest('.general-form-selector').addClass('general-form-selector_open');
  })

  function changeSelector(selector){
    selector.val(selector.next('.general-form-selector-wrap').find('.general-form-selector-list__item_current').html())
    selector.next('.general-form-selector-wrap').find('.general-form-selector__view').html(selector.next('.general-form-selector-wrap').find('.general-form-selector-list__item_current').html());
  }

  $('.general-form-selector input').each(function(){
    changeSelector($(this));
  })


  $(document).on('click', '.general-form-selector-list__item:not(.general-form-selector-list__item_current)', function(){
    $('.general-form-selector-list__item_current').removeClass('general-form-selector-list__item_current');
    $(this).addClass('general-form-selector-list__item_current');
    changeSelector($(this).closest('.general-form-selector').find('input'));
    $(this).closest('.general-form-selector_open').removeClass('general-form-selector_open');
    $(this).closest('.general-form-selector').find('.general-form-selector-list').fadeOut('fast');
  })

  

  $(document).mouseup(function (e){ 
		var div = $(".general-form-selector_open .general-form-selector-wrap");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.find('.general-form-selector-list').fadeOut('fast');
		}
	});

  $(document).on('change', '.general-form-file-label input', function(){
    if(this.files.length){
      $(this).siblings('.general-form-file-label__text').html(this.files[0].name);
      $(this).closest('.general-form-file-label').siblings('.general-form-file__close').fadeIn('fast');
    } 
  })

  $(document).on('click', '.general-form-file__close', function(){
    $(this).siblings('.general-form-file-label').find('input')[0].value = '';
    $(this).fadeOut('fast');
    $(this).siblings('.general-form-file-label').find('.general-form-file-label__text').html('<span class="general-form-file-label__text_blue">Прикрепить</span> файл с <span class="general-form-file-label__text_bold">Техническим заданием</span>');
  })

  /* формы end */




  /* ресайз textarea */

  var startH=0;
  var startY=0;
  var textarea=null;
  var oldMouseMove=null;
  var oldMouseUp=null;

  function textareaResizer(e){
    $('.general-form-block').addClass('general-form-block_noTransition');
    if (e == null) { e = window.event }
    // Предотвращаем выполнение стандартного события
    if (e.preventDefault) {
        e.preventDefault();
    };
    // Определяем DIV, по которому кликнули
    resizer = (e.target != null) ? e.target : e.srcElement;
    // Теперь по id определяем соответствующий textarea,
    textarea = e.target.parentNode.querySelector('.general-form-label__textarea');
    // Запоминаем начальную позицию мыши и высоту поля
    startY=e.clientY;
    startH=textarea.offsetHeight;
    // Запоминаем обработчики мыши
    oldMouseMove=document.onmousemove;
    oldMouseUp=document.onmouseup;
    // Ставим свои
    document.onmousemove=textareaResizer_moveHandler;
    document.onmouseup=textareaResizer_cleanup;
    return false;
  }

  minH=72; // минимальная высота поля

  function textareaResizer_moveHandler(e){
    if (e == null) { e = window.event }
    if (e.button <= 1){
       //Начальная высота +
       //расстояние, пройденное курсором по вертикали
       curH=(startH+(e.clientY-startY));
       if (curH < minH) curH=minH;
       textarea.style.height=curH+'px';
       $(e.target).closest('.general-form-block').height($(e.target).closest('.general-form-block').find('.general-form-block-slide_current').height());
       return false;
    }
  }

  function textareaResizer_cleanup(e) {
    //Восстанавливаем обработчики
    document.onmousemove=oldMouseMove;
    document.onmouseup=oldMouseUp;
    $('.general-form-block').removeClass('general-form-block_noTransition');
  }

  $('.general-form-label__resize').on('mousedown', function(event){
    textareaResizer(event);
  })

  $(document).on('input', '.general-form-label__textarea', function(){
    if($(this).val() !== ''){
      $(this).addClass('general-form-label__textarea_ne');
    } else {
      $(this).removeClass('general-form-label__textarea_ne');
    }
  })

  /* ресайз textarea end */


  /* hover services */

  $(document).on('mouseover', '.services-desc-grid-item__text a', function(){
    $(this).closest('.services-desc-grid-item').find('.services-desc-grid-item__img').addClass('services-desc-grid-item__img_hover');
  })

  $(document).on('mouseout', '.services-desc-grid-item__text a', function(){
    $(this).closest('.services-desc-grid-item').find('.services-desc-grid-item__img').removeClass('services-desc-grid-item__img_hover');
  })

  /* hover services end */
});

