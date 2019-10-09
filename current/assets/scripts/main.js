$(document).ready(function(){
  $('.smile-faq-item-top').click(function(){
    if(!$(this).closest('.smile-faq-item').hasClass('smile-faq-item_active')){
      $(this).closest('.smile-faq-item').find('.smile-faq-item-bot').slideDown('fast');
      $(this).closest('.smile-faq-item').toggleClass('smile-faq-item_active');
    } else {
      $(this).closest('.smile-faq-item').find('.smile-faq-item-bot').slideUp('fast');
      $(this).closest('.smile-faq-item').toggleClass('smile-faq-item_active');
    }
  })
});