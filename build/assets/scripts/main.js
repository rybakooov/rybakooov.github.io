$(document).ready(function(){
  /*баннер сайз*/
  var k1 = (751 / 1440);
  $('.first-sec').height($('.first-sec').width() * k1);

  $(window).resize(function(){
    /*баннер сайз*/
    $('.first-sec').height($('.first-sec').width() * k1);
  });
})