$(document).ready(function () {

  $(document).on('click', '.docs-tabs__link', function (e) {
    e.preventDefault();
  });
  $(document).on('click', '.docs-tabs__link:not(.docs-tabs__link_active)' , function (e) {
    e.preventDefault();
    $('.docs-main-block_active').removeClass('docs-main-block_active');
    $('.docs-tabs__link_active').removeClass('docs-tabs__link_active');
    $(this).addClass('docs-tabs__link_active');
    $('[data-docs="' + this.hash + '"]').addClass('docs-main-block_active');
  });

  if($(window).width() < 1024){
    $('.docs-main-block_active').removeClass('docs-main-block_active');
  }

  $(document).on('click', '.docs-main-block__title', function(){
    $(this).parent().toggleClass('docs-main-block_active').find('.docs-main-block-ul').slideToggle();
  });


  $(document).on('click', '.faq-item-top__btn', function(){
    $(this).toggleClass('faq-item-top__btn_active');
    $(this).parent().parent().find('.faq-item-main').slideToggle();
  })


  if($('.prof-events-block-slider-wrap').length){
    $('.prof-events-block-slider-wrap').slick({
      prevArrow: '<div class="prof-events-block-slider__prev" style="transform: rotate(180deg);"><img src="assets/templates/csm/images/arrow_right--lightgray.svg" alt="" /></div>',
      nextArrow: '<div class="prof-events-block-slider__next"><img src="assets/templates/csm/images/arrow_right--lightgray.svg" alt="" /></div>',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }

  if($('.otdel-slider').length){
    $('.otdel-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      //variableHeight: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }


  if($('.otdel-geoslider').length){
    $('.otdel-geoslider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      //variableHeight: true,
      prevArrow: '<div class="otdel-geoslider__prev"><img src="assets/images/arrow_right--lightgray.svg" alt="" /></div>',
      nextArrow: '<div class="otdel-geoslider__next"><img src="assets/images/arrow_right--lightgray.svg" alt="" /></div>',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }
  


  $(document).on('click', '.contacts-list-item-left', function(){
    if($(window).width() < 768){
      $(this).parent().find('.contacts-list-item-right').slideToggle();
    }
  })



  

})