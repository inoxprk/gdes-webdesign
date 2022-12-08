jQuery(function($){

  //------------------------------------header hamburger menu
  $('.menu-toggle-btn').click(function(){
    $('.gnb').stop().slideToggle('fast');
    $('.shade').toggleClass('show');
    $(this).toggleClass('active');
  });
});