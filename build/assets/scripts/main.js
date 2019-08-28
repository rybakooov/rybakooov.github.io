$(document).ready(function(){
  $('#header-search').hide();
  $('.header-wrap-linklist__link_more').children('a').append('<svg class="more-arrow" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L3 3L5 1" stroke="black" stroke-opacity="0.75" stroke-linecap="round"/></svg>');
  $('.header-wrap-info-search label').click(function(){
    console.log('hui');
    $('#header-search').toggle('slow');
    $('.header-wrap-linklist').toggle('slow');
    $('.header-wrap-info').toggleClass('header-wrap-info_active-search');
  });
});