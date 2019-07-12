$(document).ready(function(){
  /*баннер сайз*/
  var k1 = (751 / 1440);
  $('.first-sec').height($('.first-sec').width() * k1);

  $(window).resize(function(){
    /*баннер сайз*/
    $('.first-sec').height($('.first-sec').width() * k1);
  });

  var $mission = $('.mission-wrap').masonry({
    // options
    itemSelector: '.mission-item'
  });
  
  $mission.on( 'click', '.mission-item', function() {
      $(this).find('.mission-item-invisible').css('height', '0px');
    
    $(this).toggleClass('mission-item_active');
    
      $(this).find('.mission-item-invisible').css('height', 'auto');
    // trigger layout after item size changes
    $mission.masonry('layout');
  });
})

