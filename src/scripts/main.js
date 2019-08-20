$(document).ready(function(){
  $('.zachet-program-block__btndwn').click(function(){
    if(!$('.zachet-program-block').hasClass('zachet-program-block_active')){
      $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
      $('.zachet-program-block_active').removeClass('zachet-program-block_active');
      $(this).parent().addClass('zachet-program-block_active');
      if($(this).parent().hasClass('zachet-program-block_1')){
        $('.zachet-program-imgcont__img:nth-child(2)').addClass('zachet-program-imgcont__img_active');
      } else {
        if($(this).parent().hasClass('zachet-program-block_2')){
          $('.zachet-program-imgcont__img:nth-child(3)').addClass('zachet-program-imgcont__img_active');
        } else {
          $('.zachet-program-imgcont__img:nth-child(4)').addClass('zachet-program-imgcont__img_active');
        }
      }
    } else {
      $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
      $('.zachet-program-block_active').removeClass('zachet-program-block_active');
      $('.zachet-program-imgcont__img:nth-child(1)').addClass('zachet-program-imgcont__img_active');
    }
  });
  $('.zachet-program-block-card__clsbtn').click(function(){
    $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
      $('.zachet-program-block_active').removeClass('zachet-program-block_active');
      $('.zachet-program-imgcont__img:nth-child(1)').addClass('zachet-program-imgcont__img_active');
  });
});