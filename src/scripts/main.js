$(document).ready(function(){
  $('.zachet-program-block-wrap').each(function(){
    $(this).slideUp(0); 
  });
  $(window).resize(function(){
    $('.zachet-program-block-wrap').each(function(){
      $(this).slideUp(200); 
      $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
      $('.zachet-program-block_active').removeClass('zachet-program-block_active');
      $('.zachet-program-imgcont__img:nth-child(1)').addClass('zachet-program-imgcont__img_active');
    });
  })
  $('.zachet-program-block__title').click(function(){
    if($(window).width() < 1024){
      if(!$(this).parent().hasClass('zachet-program-block_active')){
        $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
        $('.zachet-program-block_active').removeClass('zachet-program-block_active');
        $(this).parent().addClass('zachet-program-block_active');
        $('.zachet-program-block_active .zachet-program-block-wrap').slideDown(300);
        if($(this).parent().hasClass('zachet-program-block_1')){
          $('.zachet-program-imgcont__img:nth-child(2)').addClass('zachet-program-imgcont__img_active');
          $('.zachet-program-imgcont__img:nth-child(2)').addClass('zachet-program-imgcont__img_active');
        } else {
          if($(this).parent().hasClass('zachet-program-block_2')){
            $('.zachet-program-imgcont__img:nth-child(3)').addClass('zachet-program-imgcont__img_active');
          } else {
            $('.zachet-program-imgcont__img:nth-child(4)').addClass('zachet-program-imgcont__img_active');
          }
        }
      } else {
        $('.zachet-program-block_active .zachet-program-block-wrap').slideUp(300); 
        $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
        $('.zachet-program-block_active').removeClass('zachet-program-block_active');
        $('.zachet-program-imgcont__img:nth-child(1)').addClass('zachet-program-imgcont__img_active');
      }
    }
    
  });
  $('.zachet-program-block__btndwn').click(function(){
    if(!$(this).parent().hasClass('zachet-program-block_active')){
      $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
      $('.zachet-program-block_active').removeClass('zachet-program-block_active');
      $(this).parent().addClass('zachet-program-block_active');
      $('.zachet-program-block_active .zachet-program-block-wrap').slideDown(300);
      if($(this).parent().hasClass('zachet-program-block_1')){
        $('.zachet-program-imgcont__img:nth-child(2)').addClass('zachet-program-imgcont__img_active');
        $('.zachet-program-imgcont__img:nth-child(2)').addClass('zachet-program-imgcont__img_active');
      } else {
        if($(this).parent().hasClass('zachet-program-block_2')){
          $('.zachet-program-imgcont__img:nth-child(3)').addClass('zachet-program-imgcont__img_active');
        } else {
          $('.zachet-program-imgcont__img:nth-child(4)').addClass('zachet-program-imgcont__img_active');
        }
      }
    } else {
      $('.zachet-program-block_active .zachet-program-block-wrap').slideUp(300); 
      $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
      $('.zachet-program-block_active').removeClass('zachet-program-block_active');
      $('.zachet-program-imgcont__img:nth-child(1)').addClass('zachet-program-imgcont__img_active');
    }
  });
  $('.zachet-program-block-card__clsbtn').click(function(){
    $('.zachet-program-block_active .zachet-program-block-wrap').slideUp(300); 
    $('.zachet-program-imgcont__img_active').removeClass('zachet-program-imgcont__img_active');
      $('.zachet-program-block_active').removeClass('zachet-program-block_active');
      $('.zachet-program-imgcont__img:nth-child(1)').addClass('zachet-program-imgcont__img_active');
  });
});