$(document).ready(function(){




  /*открытие поиска в хедере */ 
  $(document).on('click', '.header-search:not(.header-search.active) > .header-icon', function(){
    $('.header-nav').fadeOut('fast');
    $('.header-phone').fadeOut('fast');
    $('.header-icon').addClass('header-icon_opacity-0');
    setTimeout(function(){
      $('.header-search').addClass('active');
    }, 200);
  })
  



  $(document).click(function (e){
    
    var div = $('.header-search'); 
    if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('active')) {
      
      $('.header-search').removeClass('active');
      setTimeout(function(){
        $('.header-nav').fadeIn('fast');
        $('.header-phone').fadeIn('fast');
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

  })
  /* banner on main end */

  /* partners-slider on main */

  $('.partners-wrap').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    infinity: true,
  })
  /* partners-slider on main end */


  /* how we work animation */

  $(document).on('mouseover', '.how-we-work-item', function(){
    $(this).prev('.how-we-work-arr').find('img').addClass('opacity-1');
  })

  $(document).on('mouseout', '.how-we-work-item', function(){
    $(this).prev('.how-we-work-arr').find('img').removeClass('opacity-1');
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

  /* фильтры и сортировка в каталоге end*/



  /* слайдеры на карточке товара */

  $('.item-main-col-preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.item-main-col-slider-wrap',
    arrows: false,
  })

  $('.item-main-col-slider-wrap').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    asNavFor: '.item-main-col-preview',
    vertical: true,
    prevArrow: '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18.75"><g id="Слой_2" data-name="Слой 2"><g id="layout"><path class="cls-1" d="M0,18a.75.75,0,0,1,.22-.53L17.47.22a.75.75,0,0,1,1.06,0L35.78,17.47a.75.75,0,1,1-1.06,1.06L18,1.81,1.28,18.53A.75.75,0,0,1,0,18Z"/><path class="cls-1" d="M14.62,10.51a.75.75,0,0,1,.22-.53l2.63-2.63a.75.75,0,0,1,1.06,0l7.37,7.37a.75.75,0,0,1-1.06,1.06L18,8.94,15.9,11a.75.75,0,0,1-1.28-.53Z"/><path class="cls-1" d="M11,14.12a.75.75,0,0,1,.22-.53l1.6-1.6a.75.75,0,1,1,1.06,1.06l-1.6,1.6A.75.75,0,0,1,11,14.12Z"/></g></g></svg></div>',
    nextArrow: '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 18.75"><g id="Слой_2" data-name="Слой 2"><g id="layout"><path class="cls-1" d="M0,18a.75.75,0,0,1,.22-.53L17.47.22a.75.75,0,0,1,1.06,0L35.78,17.47a.75.75,0,1,1-1.06,1.06L18,1.81,1.28,18.53A.75.75,0,0,1,0,18Z"/><path class="cls-1" d="M14.62,10.51a.75.75,0,0,1,.22-.53l2.63-2.63a.75.75,0,0,1,1.06,0l7.37,7.37a.75.75,0,0,1-1.06,1.06L18,8.94,15.9,11a.75.75,0,0,1-1.28-.53Z"/><path class="cls-1" d="M11,14.12a.75.75,0,0,1,.22-.53l1.6-1.6a.75.75,0,1,1,1.06,1.06l-1.6,1.6A.75.75,0,0,1,11,14.12Z"/></g></g></svg></div>',
  })

  /* слайдеры на карточке товара end */
});