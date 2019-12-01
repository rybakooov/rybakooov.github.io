$(document).ready(function(){
  


  function resizer() {
    //$('.tours-wrap-item').height($('.tours-wrap-item').width());
  }
  resizer();


  $(window).resize(function(){
    resizer();
  })
});