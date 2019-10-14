$(document).ready(function(){
  var goodTabContainers = $('.tasks-main');
  $('.tasks-top a').click(function () {
    goodTabContainers.fadeOut('fast');
    setTimeout(() => {
      goodTabContainers.filter(this.hash).fadeIn('fast');
    }, 210)
    $('.tasks-top a').removeClass('selected');
    $(this).addClass('selected');
    return false;
  }).filter(':first').click();
});