$(document).ready(function(){
  var goodTabContainers = $('.tasks-main');
  goodTabContainers.hide().filter(':first').show();
  $('.tasks-top a').click(function () {
    goodTabContainers.hide();
    goodTabContainers.filter(this.hash).show();
    $('.tasks-top a').removeClass('selected');
    $(this).addClass('selected');
    return false;
  }).filter(':first').click();
  
});