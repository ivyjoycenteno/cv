$(function () {
  $('#copyright').text(new Date().getFullYear());

  handleClick = (elem, e) => {
    $('.ij-modal').show()
    $('.ij-modal .ij-content').html($(elem).clone())
    e.stopPropagation();
  }

  $('.nav-mobile .trigger i').click(() => {
    $('.mn-mobile-menu').slideToggle()
  })

  $('.mn-mobile-menu ul li').click(() => {
    $('.mn-mobile-menu').slideUp()
  })

  $('.ij-wrap').click((e) => {
    e.stopPropagation()
  })

  $('.mn-wrap .ij-close').click(() => {
    $('.ij-modal').hide()
  })

  $(document).click(() => {
    $(".ij-modal").hide()
  })
});