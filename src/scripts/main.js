$(document).ready(function(){
  /*баннер сайз*/
  var k1 = (751 / 1440);
  $('.first-sec').height($('.first-sec').width() * k1);

  $(window).resize(function(){
    /*баннер сайз*/
    $('.first-sec').height($('.first-sec').width() * k1);
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
    if(!$(this).parent().hasClass('cli-more-item_active')){
      $('.cli-more-item_active').removeClass('cli-more-item_active');
      $(this).parent().addClass('cli-more-item_active');
    }

  });
})

