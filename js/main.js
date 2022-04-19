$(function () {
  $('#copyright').text(new Date().getFullYear());
  $('.nav-mobile .trigger i').click(() => {
    $('.mn-mobile-menu').slideToggle();
    // $('ul ul').css('display', 'none');
  });

  $('.mn-mobile-menu ul li').click(() => {
    $('.mn-mobile-menu').slideUp();
    $(this).find('ul').slideToggle();
  });
});