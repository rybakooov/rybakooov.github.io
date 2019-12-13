$(document).ready(function(){
  if($('.banner-on-main').length){
    $('.banner-on-main').slick({
      prevArrow: '<div class="banner-on-main__prev"><svg style="transform-origin: center center; transform: rotate(180deg);" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.326 22.7943L3.67038 23.1568L4.03288 22.8124L14.796 12.5875L15.1776 12.225L14.796 11.8625L4.03288 1.63745L3.67038 1.29308L3.326 1.65558L1.94851 3.10557L1.60413 3.46808L1.96663 3.81245L10.8219 12.225L1.96663 20.6375L1.60413 20.9818L1.9485 21.3443L3.326 22.7943Z" fill="#2B446A" stroke="white"/></svg></div>',
      nextArrow: '<div class="banner-on-main__next"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.326 22.7943L3.67038 23.1568L4.03288 22.8124L14.796 12.5875L15.1776 12.225L14.796 11.8625L4.03288 1.63745L3.67038 1.29308L3.326 1.65558L1.94851 3.10557L1.60413 3.46808L1.96663 3.81245L10.8219 12.225L1.96663 20.6375L1.60413 20.9818L1.9485 21.3443L3.326 22.7943Z" fill="#2B446A" stroke="white"/></svg></div>',
    })
  }


  $('.cams-top__description').html($('.cams-main__vid.active').data('description'));

  $(document).on('click', '.cams-tabs__tab:not(.active)', function(e){
    e.preventDefault();
    $('.cams-tabs__tab.active').removeClass('active');
    $('.cams-main__vid.active').removeClass('active');
    $('.cams-top__description').html($(this.hash).data('description'));
    $(this.hash).addClass('active');
    $(this).addClass('active');
  })
});



