$(document).ready(function(){
  /*баннер сайз*/
  var k1 = (751 / 1440);
  $('.first-sec').height($('.first-sec').width() * k1);

  if(($(window).width() < 1024) && ($(window).width() >= 768)){
    var client = $('.cli-more-item_active').attr('data-client');
    client = +client + 1;
    $('.cli-more-item[data-client="' + client + '"]').addClass('cli-more-item_next');
  }  

  $('.cli-more__next').click(function(){
    var first = $('.cli-more-item_active').attr('data-client');
    var second = $('.cli-more-item_next').attr('data-client');

    $('.cli-more-item_active').removeClass('cli-more-item_active');
    $('.cli-more-item_next').removeClass('cli-more-item_next');

    first = +first + 1;
    second = +second + 1;
    if (first == 4){
      first = 1;
    }
    if (second == 4){
      second = 1;
    }

    $('.cli-more-item[data-client="' + first + '"]').addClass('cli-more-item_active');
    $('.cli-more-item[data-client="' + second + '"]').addClass('cli-more-item_next');

  });

  $(window).resize(function(){
    /*баннер сайз*/
    $('.first-sec').height($('.first-sec').width() * k1);
    if(($(window).width() < 1024) && ($(window).width() >= 768)){
      var client1 = $('.cli-more-item_active').attr('data-client');
      client1 = +client1 + 1;
      if(client1 == 4){
        client1 = 1;
      }
      $('.cli-more-item[data-client="' + client1 + '"]').addClass('cli-more-item_next');
    } else {
      if($('.cli-more-item_next').length){
        $('.cli-more-item_next').removeClass('cli-more-item_next');
      }
    }

        $('.header-wrap_open').removeClass('header-wrap_open');
        $('.hum-active').removeClass('hum-active');
        $('.header-links_active').removeClass('header-links_active');
    
  });

  var $mission = $('.mission-wrap').masonry({
    itemSelector: '.mission-item'
  });
  
  $mission.on( 'click', '.mission-item', function() {
    $(this).find('.mission-item-invisible').css('height', '0px');
    $(this).toggleClass('mission-item_active');
    $(this).find('.mission-item-invisible').css('height', 'auto');
    $mission.masonry('layout');
  });

  $('.amen-links-item').click(function(){
    if(!$(this).hasClass('amen-links-item_active')){
      var number = $(this).attr('data-num');
      $('.amen-links-item_active').removeClass('amen-links-item_active');
      $('.amen-slide_active').removeClass('amen-slide_active');
      $('.amen-slide[data-slide-number="' + number + '"]').addClass('amen-slide_active');
      $('.amen-links-item[data-num="' + number + '"]').addClass('amen-links-item_active');
    }
  });

  $('.cli-more-item__img').click(function(){
    if($(window).width() >= 1024){
      if(!$(this).parent().hasClass('cli-more-item_active')){
        $('.cli-more-item_active').removeClass('cli-more-item_active');
        $(this).parent().addClass('cli-more-item_active');
      }
    } else if (($(window).width() < 1024) && ($(window).width() >= 768)){
      if($(this).parent().hasClass('cli-more-item_next')){

      }
    }

  });


  $('.cli-next').click(function(){
    var f1 = $('.cli-more-item_active').attr('data-client');
    f1 = +f1 + 1;
    if(f1 == 4){
      f1 = 1;
    }
    $('.cli-more-item_active').removeClass('cli-more-item_active');
    $('.cli-more-item[data-client="' + f1 + '"]').addClass('cli-more-item_active');
  });
  $('.cli-prev').click(function(){
    var f1 = $('.cli-more-item_active').attr('data-client');
    f1 = +f1 - 1;
    if(f1 == 0){
      f1 = 3;
    }
    $('.cli-more-item_active').removeClass('cli-more-item_active');
    $('.cli-more-item[data-client="' + f1 + '"]').addClass('cli-more-item_active');
  });

  $('.humburger').click(function(){
    $('.humburger').toggleClass('hum-active');
    if($(window).width() > 768){
      $('.header-links').toggleClass('header-links_active');
    } else {
      $('.header-wrap').toggleClass('header-wrap_open'); 
    }
  });
})

